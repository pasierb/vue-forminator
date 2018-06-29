import { mergeData } from 'vue-functional-data-merge';

const CheckboxGroup = (Checkbox) => ({
    functional: true,
    props: {
        field: { type: Object, required: true }
    },
    render: (h, { props, data }) => {
        const { field } = props;

        return (<div>
            {field.options.map(option => {
                const fieldData = mergeData(data, {
                    props: {
                        field: Object.assign({}, option, { name: field.name })
                    }
                });

                return (<Checkbox {...fieldData} />);
            })}
        </div>);
    }
});

export default CheckboxGroup;
