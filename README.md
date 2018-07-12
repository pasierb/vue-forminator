# vue-forminator

__!!!IMPORTANT!!! work in progress: not production ready__

A schema-based form fields generator component for Vue.js.

## Usage

```javascript
import Vue from 'vue';
import Forminator from 'vue-forminator';

new Vue({
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
    render(h) {
        return (<form>
            <Forminator schema={schema} model={form} />
        </form>)
    }
}).$mount('#app')
```
