# vue-forminator

Forminator is a "no magic", extensible, configurable, schema-based form fields factory.

__!!!WIP!!! use at your own risk__

A schema-based form fields generator component for Vue.js.

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

## Field types

- `text`
- `select`
- `number`
- `email`
- `boolean`
- `checkboxGroup`
- `radioGroup`
- `fieldset`
- `textarea`

## Testing

```bash
npm run test
```

## TODO

- [ ] bulma.io config example
- [ ] bootstrap config example
- [ ] docs