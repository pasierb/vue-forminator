/**
 * Factory returns component that accepts as props:
 *  - model
 *  - field
 */

import { mergeData } from 'vue-functional-data-merge';
import {
    Text,
    Checkbox
} from './components/inputs';
import FieldsRow from './components/FieldsRow';
import Field from './components/Field';

const fields = {
    'text': Text,
    'boolean': Checkbox
}

function factory(h, item, context) {
    const { data, props } = context;
    const { model } = props;

    if (Array.isArray(item)) {
        return h('div', {}, item.map(subItem => factory(h, subItem, context)));
    }

    const Field = fields[item.as || 'text'];

    if (Field) return h(Field, mergeData(data, {
        props: {
            field: item,
            config: {},
            model
        }
    }));
}

export default factory;