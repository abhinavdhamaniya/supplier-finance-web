export class InvoiceDto {

    public id: string = "";

    public clientUsername: string = "";

    public supplierCode: string = "";

    public invoiceNumber: string = "";

    public invoiceDate: string = "";

    public invoiceAmount: Number = 0;

    public currency: string = "";

    public status: string = "";

    public invoiceFile: File | null = null;
}