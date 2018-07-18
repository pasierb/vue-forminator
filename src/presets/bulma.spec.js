import Forminator from './bulma';
import { mount } from '@vue/test-utils';

describe('bulma', () => {
    it('should render text field', () => {
        const wrapper = mount(Forminator, {
            context: {
                props: {
                    model: {},
                    schema: [
                        {
                            label: 'First name',
                            name: 'firstName'
                        }
                    ]
                }
            }
        });

        expect(wrapper.contains('div.field > label.label')).toBe(true);
        expect(wrapper.contains('div.field > div.control > input[name="firstName"][type="text"].input')).toBe(true);
    });

    it('should render number field', () => {
        const wrapper = mount(Forminator, {
            context: {
                props: {
                    model: {},
                    schema: [
                        {
                            as: 'number',
                            label: 'First name',
                            name: 'firstName'
                        }
                    ]
                }
            }
        });

        expect(wrapper.contains('div.field > label.label')).toBe(true);
        expect(wrapper.contains('div.field > div.control > input[name="firstName"][type="number"].input')).toBe(true);
    });

    it('should render email field', () => {
        const wrapper = mount(Forminator, {
            context: {
                props: {
                    model: {},
                    schema: [
                        {
                            as: 'email',
                            label: 'First name',
                            name: 'firstName'
                        }
                    ]
                }
            }
        });

        expect(wrapper.contains('div.field > label.label')).toBe(true);
        expect(wrapper.contains('div.field > div.control > input[name="firstName"][type="email"].input')).toBe(true);
    });

    it('should render select field', () => {
        const wrapper = mount(Forminator, {
            context: {
                props: {
                    model: {},
                    schema: [
                        {
                            as: 'select',
                            label: 'Subject',
                            name: 'subject',
                            options: []
                        }
                    ]
                }
            }
        });

        expect(wrapper.contains('div.field > label.label')).toBe(true);
        expect(wrapper.contains('div.field > div.control > div.select > select[name="subject"]')).toBe(true);
    });

    it('should render textarea', () => {
        const wrapper = mount(Forminator, {
            context: {
                props: {
                    model: {},
                    schema: [
                        {
                            as: 'textarea',
                            label: 'First name',
                            name: 'firstName'
                        }
                    ]
                }
            }
        });

        expect(wrapper.contains('div.field > label.label')).toBe(true);
        expect(wrapper.contains('div.field > div.control > textarea[name="firstName"].textarea')).toBe(true);
    });

    it('should render checkbox field', () => {
        const wrapper = mount(Forminator, {
            context: {
                props: {
                    model: {},
                    schema: [
                        {
                            as: 'boolean',
                            label: 'First name',
                            name: 'firstName'
                        }
                    ]
                }
            }
        });

        expect(wrapper.contains('div.field > label.checkbox > input[type="checkbox"]')).toBe(true);
    });

    it('should render radio group', () => {
        const wrapper = mount(Forminator, {
            context: {
                props: {
                    model: {},
                    schema: [
                        {
                            as: 'radioGroup',
                            name: 'firstName',
                            options: [
                                { label: 'Yes', value: 1 },
                                { label: 'No', value: 0 }
                            ]
                        }
                    ]
                }
            }
        });

        expect(wrapper.contains('div.field > div.control > label.radio > input[type="radio"][value="1"]')).toBe(true);
        expect(wrapper.contains('div.field > div.control > label.radio > input[type="radio"][value="0"]')).toBe(true);
    });
});
