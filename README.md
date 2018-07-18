# vue-forminator

[![CircleCI](https://circleci.com/gh/pasierb/vue-forminator/tree/master.svg?style=svg)](https://circleci.com/gh/pasierb/vue-forminator/tree/master)

Forminator is a "no magic", extensible, configurable, schema-based form fields factory.

```javascript
import Vue from 'vue';
import Forminator from 'vue-forminator';

new Vue({
    render(h) {
        return (<form>
            <Forminator schema={schema} model={form} />
        </form>)
    },
    data() {
        return {
            form: {}
        }
    },
    computed: {
        schema => ([
            [
                { name: 'firstName', label: 'First name' },
                { name: 'lastName', label: 'Last name' }
            ],
            { name: 'email', label: 'Email address', as: 'email' },
            { name: 'acceptedTerms', label: 'Accept terms', as: 'boolean' },
        ])
    },
}).$mount('#app')
```

# Why you (may) need it?

- your project involves many forms
- your form markup is complicated
- you are seeing a lot of duplicated code in your form components
- your forms look inconsistent
- maintainance takes to much time

# Integrations

## Bootstrap (v4.1)

```javascript
import Forminator from 'vue-forminator/lib/presets/bootstrap';
```

# Schema definition

## text|number|email
```javascript
{
    as: 'text|number|email',
    name: 'fieldName',
    attrs: {
        // html attributes passed to input element, for example:
        placeholder: 'Field label',
        class: 'customInputClass',
        ...
    }
}
```

## checkbox|boolean
```javascript
{
    as: 'boolean',
    name: 'fieldName',
    attrs: {
        // html attributes passed to input element, for example:
        class: 'customInputClass',
        ...
    }
}
```

## select
```javascript
{
    as: 'select',
    name: 'fieldName',
    attrs: {
        // html attributes passed to input element, for example:
        class: 'customInputClass',
        ...
    },
    options: [
        {
            value: 'optionValue',
            label: 'Option text label',
            attrs: {
                // html attributes passed to option element, for example:
                disabled: 'disabled',
                ...
            }
        },
        ...
    ]
}
```

## radio
```javascript
{
    as: 'radioGroup',
    name: 'fieldName',
    options: [
        {
            value: 'optionValue',
            label: 'Option text label',
            attrs: {
                // html attributes passed to input element, for example:
                disabled: 'disabled',
                ...
            }
        },
        ...
    ]
}
```

## Rows and columns

`row` field type can be used to render fields inline. It generates `div` element with `config.rowClass` css class followed by set of `div`s (columns) with `config.columnClass` css class.

```javascript
// short version, filled with default values
[
    { name: 'firstName', as: 'text' },
    { name: 'email', as: 'email' },
],

// long version for inplace costumization
{
    as: 'row',
    attrs: {
        // html attributes passed to row wrapper element, for example:
        class: 'row space-around',
        ...
    },
    columns: [
        { as: 'text', name: 'address' }, // shorthand for default column definition

        // long version for inplace customization
        {
            as: 'column',
            attrs: {
                // html attributes passed to column wrapper element, for example:
                class: 'col col-sm-4',
                ...
            },
            field: {
                // any field definition, for example:
                name: 'postalCode',
                as: 'text'
            }
        }
    ]
}
```

## Fieldset

```javascript
{
    as: 'fieldset',
    label: '',
    legendAttrs: {
        // html attributes passed to column legend element, for example:
        class: 'some-custom-legend-class'
    },
    fields: [
        // any field definition
        ... 
    ]
}
```

# Customization

```javascript
import { Factory } from 'vue-forminator'
import { LabelWrap, LabelBefore } from 'vue-forminator/lib/helpers'

const Forminator = Factory({
    config: {
        labelClass: 'control-label',
        inputClass: 'form-control',
        textInputClass: 'string or inputClass if not provided'
        numberInputClass: 'string or inputClass if not provided'
        emailInputClass: 'string or inputClass if not provided'
        selectClass: 'select',
        fieldClass: 'form-group',
        rowClass: 'row',
        columnClass: 'col',
        fieldsetClass: 'form-fieldset',
        fieldsetLegendClass: 'form-fieldset',
        requiredLabelClass: 'css to be applied to field which attrs.required is truthy'
    },
    Field, // Field component provider function
    inputs: {
        YourCustomInputComponent,
        // basic input components, i.e.
        Text,
        Checkbox,
    },
    fields: function({ ..inputs }) {
        return {
            'text': LabelBefore(Text),
            'boolean': LabelWrap(Checkbox)
        };
    }
})
```

# Testing

```bash
npm run test
```

# TODO

- [ ] bulma.io config example
- [x] bootstrap config example
- [ ] docs
- [ ] [imaskjs](https://github.com/uNmAnNeR/imaskjs) sample
- [ ] [vuelidate](https://github.com/monterail/vuelidate) sample