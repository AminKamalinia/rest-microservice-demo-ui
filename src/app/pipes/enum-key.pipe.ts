import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumKey' })
export class EnumKeyPipe implements PipeTransform {
    constructor() {
    }

    transform(value: any): any {
        const keys: any[] = [];
        for (const enumMember in value) {
            if (value.hasOwnProperty(enumMember)) {
                const isValueProperty = parseInt(enumMember, 10) >= 0;
                if (isValueProperty) {
                    keys.push({ key: +enumMember, value: value[enumMember] });
                }
            }
        }
        return keys;
    }
}
