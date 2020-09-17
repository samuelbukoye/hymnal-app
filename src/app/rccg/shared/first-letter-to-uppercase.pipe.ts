import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'firstLetterToUppercase'
})

export class FirstLetterToUppercasePipe implements PipeTransform {
    transform(value:string):string{
        return value.replace(value.charAt(0),value.charAt(0).toUpperCase())
    }

}