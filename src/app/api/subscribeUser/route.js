async function getAccessToken() {
  const response = await fetch('https://api.sendpulse.com/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.SENDPULSE_CLIENT_ID,
      client_secret: process.env.SENDPULSE_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch access token: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function getAddressBookId() {
  try {
    const token = await getAccessToken();

    const response = await fetch('https://api.sendpulse.com/addressbooks', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch address books: ${response.statusText}`);
    }

    const addressBooks = await response.json();
    const bookName = 'user'; // Static address book name

    const addressBook = addressBooks.find((book) => book.name.toLowerCase() === bookName.toLowerCase());

    if (addressBook) {
      return addressBook.id; // Return the ID if found
    } else {
      throw new Error(`Address book with name "${bookName}" not found`);
    }
  } catch (error) {
    console.error('Error fetching address book ID:', error.message);
    throw error;
  }
}

async function isEmailSubscribed(email, addressbookId, token) {
  try {
    const response = await fetch(`https://api.sendpulse.com/addressbooks/${addressbookId}/emails`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch subscribed emails: ${response.statusText}`);
    }

    const subscribedEmails = await response.json(); // List of emails in the address book
    return subscribedEmails.some((subscribedEmail) => subscribedEmail.email.toLowerCase() === email.toLowerCase());
  } catch (error) {
    console.error('Error checking if email is subscribed:', error.message);
    throw error;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
      });
    }

    const token = await getAccessToken();
    const addressbookId = await getAddressBookId(); // Use the static name logic here

    // Check if the email is already subscribed
    const alreadySubscribed = await isEmailSubscribed(email, addressbookId, token);

    if (alreadySubscribed) {
      return new Response(JSON.stringify({ error: 'This email is already subscribed.' }), {
        status: 409, // Conflict status
      });
    }

    // Add the email if not already subscribed
    const response = await fetch(`https://api.sendpulse.com/addressbooks/${addressbookId}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        emails: [{ email }],
      }),
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true, message: 'Email added!' }), {
        status: 200,
      });
    }

    return new Response(JSON.stringify({ error: 'Failed to add email to the mailing list' }), {
      status: response.status,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
