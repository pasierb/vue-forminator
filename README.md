# vue-forminator

Forminator is a "no magic", extensible, configurable, schema-based form fields factory.

## Usage

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

## Schema definition

```javascript
[
    // generic field definition
    {
        name: 'modelKey',       // required
        as: 'text',             // type of input (default: "text")
        label: 'Label text',    // optional
        attrs: {},              // optional html attributes passed to input tag
    }

    // 'select' field
    {
        as: 'select',
        options: [
            { label: 'Option text', value: 'optionValue', attrs: {} }
        ]
    }

    // renders fields in a row
    [
        { name: 'firstName', label: 'First name' },
        { name: 'lastName', label: 'Last name' },
        ...
    ]
]
```

## Customization

```javascript
import { Factory } from 'vue-forminator'

const Forminator = Factory({
    config: {
        labelClass: 'control-label',
        inputClass: 'form-control',
        selectClass: 'select',
        fieldClass: 'form-group',
        rowClass: 'row',
        columnClass: 'col',
        fieldsetClass: 'form-fieldset',
        fieldsetLegendClass: 'form-fieldset',
    }
})
```

## Testing

```bash
npm run test
```

## TODO

- [ ] bulma.io config example
- [ ] bootstrap config example
- [ ] docs