const PdfPrinter = require("pdfmake");
const fs = require("fs");
const fonts = require("./fonts");
const { solicitante } = require("./pdfContent");

const createFile = (docDefinition, print = false) => {
  if (print) {
    const printer = new PdfPrinter(fonts);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(`./pdfs/${solicitante.nombre}.pdf`));
    pdfDoc.end();
    console.log(`PDF generado correctamente ${solicitante.nombre}.pdf`);
  } else {
    console.log("PDF no generado, no ingreso el yargs del PDF -p o --pdf");
  }
};

module.exports = createFile;
