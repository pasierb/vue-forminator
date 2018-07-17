import { mount } from '@vue/test-utils';
import Factory from './Factory';

describe('Factory', () => {
    let Forminator;
    let config;
    let model;

    beforeEach(() => {
        config = {
            rowClass: 'row',
            columnClass: 'col',
            fieldClass: 'field'
        };
        model = {};
        Forminator = Factory({ config });
    });

    it('should render rows and columns from array field', () => {
        const schema = [
            [
                { name: 'foo' },
                { name: 'bar' },
            ]
        ]
        const wrapper = mount(Forminator, {
            context: {
                props:  { model, schema }
            }
        });

        expect(wrapper.contains('div.row > div.col > div.field > input[name="foo"]')).toBe(true);
        expect(wrapper.contains('div.row > div.col > div.field > input[name="bar"]')).toBe(true);
    });

    it('should render rows and columns', () => {
        const schema = [
            {
                as: 'row',
                columns: [
                    {
                        as: 'column',
                        field: { name: 'foo' },
                    }, 
                    {
                        as: 'column',
                        field: { name: 'bar' },
                    }
                ]
            }
        ]
        const wrapper = mount(Forminator, {
            context: {
                props:  { model, schema }
            }
        });

        expect(wrapper.contains('div.row > div.col > div.field > input[name="foo"]')).toBe(true);
        expect(wrapper.contains('div.row > div.col > div.field > input[name="bar"]')).toBe(true);
    });

    it('should append column class from attrs', () => {
        const schema = [
            {
                as: 'row',
                columns: [
                    {
                        attrs: {
                            class: 'sm-12'
                        },
                        field: { name: 'foo' },
                    }, 
                    {
                        attrs: {
                            class: 'sm-6'
                        },
                        field: { name: 'bar' },
                    }
                ]
            }
        ]
        const wrapper = mount(Forminator, {
            context: {
                props:  { model, schema }
            }
        });

        expect(wrapper.contains('div.row > div.sm-12:not(.col) > div.field > input[name="foo"]')).toBe(true);
        expect(wrapper.contains('div.row > div.sm-6:not(.col) > div.field > input[name="bar"]')).toBe(true);
    });

    it('should append row class from attrs', () => {
        const schema = [
            {
                as: 'row',
                attrs: {
                    class: 'flex'
                },
                columns: [
                    {
                        field: { name: 'foo' },
                    }, 
                    {
                        field: { name: 'bar' },
                    }
                ]
            }
        ]
        const wrapper = mount(Forminator, {
            context: {
                props:  { model, schema }
            }
        });

        expect(wrapper.contains('div.flex:not(.row) > div.col > div.field > input[name="foo"]')).toBe(true);
        expect(wrapper.contains('div.flex:not(.row) > div.col > div.field > input[name="bar"]')).toBe(true);
    });

    it('should override default config', () => {
        const schema = [
            [
                { name: 'foo' },
                { name: 'bar' },
            ]
        ];
        const customConfig = {
            rowClass: 'funny-row',
            fieldClass: 'funny-field'
        };
        const wrapper = mount(Forminator, {
            context: {
                props: { model, schema, config: customConfig }
            }
        });

        expect(wrapper.contains('div.funny-row:not(.row) > div.col > div.funny-field:not(.field) > input[name="foo"]')).toBe(true);
    });
});
