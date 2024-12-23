import { jsPDF } from 'jspdf';

export const generatePdf = (productDetails, product) => {
  const productTitle = product?.title;
  const { pice, productCode, wineSortiment, vintage, bottlePackageVolume } = productDetails;
  const getValueOrNA = (value) => (value == null || value === '' ? 'N/A' : value);

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Elegant Header
  doc.setFillColor(240, 240, 240);
  doc.rect(0, 0, pageWidth, 25, 'F');

  // Logo
  const logoUrl = '/vinjournalen-logo.png';
  // const logoUrl = '/logo.png';
  const logoWidth = 70;
  const logoHeight = 16;
  const logoX = (pageWidth - logoWidth) / 2;
  const logoY = 6;
  doc.addImage(logoUrl, 'PNG', logoX, logoY, logoWidth, logoHeight);

  // Product Title
  const detailsX = 15;
  const detailsY = 40;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(productTitle, detailsX, detailsY);

  // Table Configuration
  const labels = ['Pris', 'Artikel nr', 'Sortiment', 'Årgång', 'Volym'];
  const values = [
    getValueOrNA(pice),
    getValueOrNA(productCode),
    getValueOrNA(wineSortiment),
    getValueOrNA(vintage),
    getValueOrNA(bottlePackageVolume),
  ];

  // Table Settings
  const tableStartY = detailsY + 20;
  const tableWidth = pageWidth - 2 * detailsX - 110; // Leave space for image
  const rowHeight = 14;
  const cellPadding = 5;
  const groupHeight = rowHeight * 1.5; // Combined height for label and value

  // Set colors for borders
  const darkGray = [80, 80, 80]; // Dark gray for outer border
  const lightGray = [200, 200, 200]; // Light gray for inner borders

  doc.setFontSize(12);

  // Alternate row colors
  const evenRowColor = [248, 248, 248]; // Light gray
  const oddRowColor = [255, 255, 255]; // White

  // Draw outer border with dark gray color
  doc.setDrawColor(...darkGray);
  doc.setLineWidth(0.5); // Slightly thicker line for outer border
  doc.rect(detailsX, tableStartY, tableWidth, groupHeight * labels.length);

  labels.forEach((label, index) => {
    const isEvenRow = index % 2 === 0;
    const baseY = tableStartY + index * groupHeight;

    // Set background color for the group
    doc.setFillColor(...(isEvenRow ? evenRowColor : oddRowColor));

    // Draw group background
    doc.rect(detailsX, baseY, tableWidth, groupHeight, 'F');

    // Draw horizontal line after each group (except the last one) with light gray
    if (index < labels.length - 1) {
      doc.setDrawColor(...lightGray);
      doc.setLineWidth(0.2); // Thinner line for inner borders
      doc.line(detailsX, baseY + groupHeight, detailsX + tableWidth, baseY + groupHeight);
    }

    // Label
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(50, 50, 50);
    doc.text(label + ':', detailsX + cellPadding, baseY + rowHeight - cellPadding / 1);

    // Value
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(String(values[index]), detailsX + cellPadding, baseY + groupHeight - cellPadding / 1);
  });

  // Wine image
  const wineImageY = 50;
  const wineImageWidth = 100;
  const wineImageHeight = 140;
  const wineImageX = pageWidth - 120;

  doc.addImage(
    product?.featuredImage?.node?.sourceUrl,
    'JPEG',
    wineImageX,
    wineImageY,
    wineImageWidth,
    wineImageHeight
  );

  // Footer
  const footerText = 'PDF från Vinjournalen.se';
  const footerFontSize = 10;
  doc.setFontSize(footerFontSize);
  doc.setFont('helvetica', 'italic');
  const footerTextWidth = doc.getTextWidth(footerText);
  const footerX = (pageWidth - footerTextWidth) / 2; // Center the footer text
  const footerY = pageHeight - 10; // Position above the bottom of the page
  doc.text(footerText, footerX, footerY);

  // Output PDF
  const blob = doc.output('blob');
  const url = URL.createObjectURL(blob);
  window.open(url);
};
