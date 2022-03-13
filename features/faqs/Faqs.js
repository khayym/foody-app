import { Accordion, AccordionItem } from '@mantine/core';
import { Wrap, } from './Faqs.styled';
import { Plus } from 'tabler-icons-react';
const Faqs = () => {
    return (
        <>
            <Wrap>
                <Accordion
                    icon={<Plus size={16} />}
                    iconPosition="right"
                    transitionDuration={1000}
                >
                    <AccordionItem label="Customization">
                        Colors, fonts, shadows and many other parts are customizable to fit your design needs
                    </AccordionItem>

                    <AccordionItem label="Flexibility">
                        Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
                    </AccordionItem>

                    <AccordionItem label="No annoying focus ring">
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                    </AccordionItem>
                    <AccordionItem label="No annoying focus ring">
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                    </AccordionItem>
                    <AccordionItem label="No annoying focus ring">
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
                    </AccordionItem>
                </Accordion>
            </Wrap>
        </>
    );
};

export default Faqs;
