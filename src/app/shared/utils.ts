export class Utils {
    
    static toUpper(palabra: string): string{
        return palabra.toUpperCase();
    }

    static isEmpty(objeto: any): Boolean{
        return (objeto == null || objeto === undefined || objeto == {}) ? true: false;
    }

    static isBlank(strValue: string): Boolean{
        return (strValue == null || strValue == undefined || /^[ ]*$/.test(strValue)) ? true:false;
    }
}
