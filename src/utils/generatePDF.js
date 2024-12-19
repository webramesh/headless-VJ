import { jsPDF } from 'jspdf';

const addColoredSection = (doc, x, y, width, height, fillColor) => {
  // Background rectangle
  doc.setFillColor(...fillColor);
  doc.setDrawColor(...fillColor);
  doc.roundedRect(x, y, width, height, 3, 3, 'F');

  // Optional border for definition
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(x, y, width, height, 3, 3, 'D');
};

const addSectionWithItems = (doc, x, y, width, title, items, titleFontSize = 14, itemFontSize = 10) => {
  // Title styling
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(titleFontSize);
  doc.setTextColor(255, 255, 255); // White title color

  // Colored section background
  addColoredSection(doc, x, y, width, 15, [220, 38, 37], [255, 255, 255]); // Red background (#DC2625)
  // addColoredSection(doc, x, y, width, 15, [253, 233, 235], [255, 255, 255]); // Light pink background
  doc.text(title, x + 5, y + 10);

  // Items styling
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(itemFontSize);
  // doc.setTextColor(255, 255, 255); // White text for items
  doc.setTextColor(0, 0, 0); // White text for items

  // Render items
  if (items && items.length > 0) {
    items.forEach((item, index) => {
      const itemText = typeof item === 'object' && item.name ? item.name : String(item);
      doc.text('• ' + itemText, x + 5, y + 25 + index * 5);
    });
  } else {
    doc.text('• N/A', x + 5, y + 25);
  }
};

export const generatePdf = (productDetails, product) => {
  const smakar = product?.smakar?.nodes || [];
  const aromer = product?.aromer?.nodes || [];
  const fargers = product?.fargers?.nodes || [];
  const productTitle = product?.title;


  const {
    pice,
    productCode,
    wineSortiment,
    vintage,
    bottlePackageVolume,
    allergener,
    caloriesInAlcPer15cl,
    caloriesInAlcPerContainerVolume,
    totalCaloriesPer15Cl,
    totalCaloriesPerLitter,
    totalCaloriesPerContainerVolume,
    pricePerLitter,
  } = productDetails;

  const getValueOrNA = (value) => (value == null || value === '' ? 'N/A' : value);

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  // const pageHeight = doc.internal.pageSize.getHeight();
  // const detailsWidth = pageWidth * 0.3;

  // Elegant Header
  doc.setFillColor(240, 240, 240); // Light gray background
  doc.rect(0, 0, pageWidth, 25, 'F');

  // Logo
  const logoUrl = '/vinjournalen-logo.png';
  // const logoUrl = '/vinjournalen-logo.svg';
  const logoWidth = 70;

  const logoHeight = 13;
  const logoX = (pageWidth - logoWidth) / 2;
  const logoY = 6;
  doc.addImage(logoUrl, 'PNG', logoX, logoY, logoWidth, logoHeight);

  // Product Details on the Left
  const detailsX = 10;
  const detailsY = 40;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(productTitle, detailsX, detailsY);

  const labels = [
    'Price',
    'Artikel nr',
    'Sortiment',
    'Årgång',
    'Volym',
    'Allergener',
    'Calories in Alcohol per 15cl',
    'Calories in Alcohol per Container Volume',
    'Total Calories per 15cl',
    'Total Calories per Liter',
    'Total Calories per Container Volume',
    'Price per Liter',
  ];

  const values = [
    getValueOrNA(pice),
    getValueOrNA(productCode),
    getValueOrNA(wineSortiment),
    getValueOrNA(vintage),
    getValueOrNA(bottlePackageVolume),
    getValueOrNA(allergener),
    getValueOrNA(caloriesInAlcPer15cl),
    getValueOrNA(caloriesInAlcPerContainerVolume),
    getValueOrNA(totalCaloriesPer15Cl),
    getValueOrNA(totalCaloriesPerLitter),
    getValueOrNA(totalCaloriesPerContainerVolume),
    getValueOrNA(pricePerLitter),
  ];

  // Detailed product details with labels and values side by side
  labels.forEach((label, index) => {
    const ySpacing = 14; // Increased spacing between label groups
    const baseY = detailsY + 10 + index * ySpacing;

    // Label styling
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);

    // Label text
    doc.text(label + ':', detailsX, baseY);

    // Value styling
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    // Value text - positioned below the label
    doc.text(String(values[index]), detailsX, baseY + 4); // 7 points below the label
  });

  // Wine image placement
  const wineImageY = 40;
  const wineImageWidth = 150;
  const wineImageX = pageWidth - 160;

  const wineImageHeight = 150;
  doc.addImage(product?.featuredImage?.node?.sourceUrl, 'JPEG', wineImageX, wineImageY, wineImageWidth, wineImageHeight);
  // doc.addImage('/winevj.png', 'JPEG', wineImageX, wineImageY, wineImageWidth, wineImageHeight);

  // Sections at the bottom (in a row)
  const sectionsY = wineImageY + wineImageHeight + 40;
  const sectionsWidth = pageWidth * 0.28; // Each section takes about 1/3 of the page width

  // Positioning sections side by side
  addSectionWithItems(doc, 10, sectionsY, sectionsWidth, 'Smakar', smakar);
  addSectionWithItems(doc, 10 + sectionsWidth + 10, sectionsY, sectionsWidth, 'Färger', fargers);
  addSectionWithItems(doc, 10 + sectionsWidth * 2 + 20, sectionsY, sectionsWidth, 'Aromer', aromer);

  // Output PDF
  const blob = doc.output('blob');
  const url = URL.createObjectURL(blob);
  window.open(url);
};
