import {
    Text,
    Checkbox,
} from '../components';

const fields = {
    boolean: Checkbox,
    text: Text
}

const config = {};

const generator = {
    config,
    createField: (h, ctx, item) => {
        const { props } = ctx;

        return h(fields[item.as || 'text'], {
            props: Object.assign({}, item, props, { config })
        });
    }
};

export default generator;
