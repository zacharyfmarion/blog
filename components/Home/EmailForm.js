import * as React from 'react';
import { Flex, Input, Textarea } from 'rebass';
import styled from 'styled-components';

import Section from './Section';
import Button from 'components/Button';
import lightenColor from 'utils/lightenColor';

class EmailForm extends React.Component {
  render() {
    return (
      <Section title="Get in touch" primary>
        <Form
          method="POST"
          action="https://formspree.io/zacharyfmarion@gmail.com"
        >
          <StyledInput
            type="hidden"
            name="_subject"
            value="Contact request from personal website"
          />
          <FormRow>
            <StyledInput
              type="email"
              name="_replyto"
              placeholder="Your email"
              required=""
            />
          </FormRow>
          <FormRow>
            <StyledTextarea
              name="message"
              placeholder="Your message"
              required=""
            />
          </FormRow>
          <FormRow justifyContent="flex-end">
            <SendButton type="submit">Send</SendButton>
          </FormRow>
        </Form>
      </Section>
    );
  }
}

const SendButton = styled(Button)`
  padding: 15px 50px !important;
  font-size: 1em;
  color: #fff;
`;

const StyledInput = styled(Input)`
  padding: 15px;
  color: #fff;
  background-color: ${p => lightenColor(p.theme.colors.primary, -30)};

  &::placeholder {
    color: #fff;
  }
`;

const StyledTextarea = styled(Textarea)`
  padding: 15px;
  color: #fff;
  background-color: ${p => lightenColor(p.theme.colors.primary, -30)};

  &::placeholder {
    color: #fff;
  }
`;

const FormRow = styled(Flex).attrs({ p: 3 })``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default EmailForm;
