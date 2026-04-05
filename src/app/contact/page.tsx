"use client";

import { Flex, Heading, Text, Meta, Avatar } from "@once-ui-system/core";
import { baseURL, contact, person } from "@/resources";

export default function Contact() {
  return (
    <Flex fillWidth maxWidth="m" direction="column" gap="l">
      {/* Title */}
      <Heading as="h1" variant="display-strong-s">{contact.title}</Heading>
      
      {/* Avatar and Bio Row */}
      <Flex gap="32" vertical="center" marginBottom="m" s={{ direction: 'column', alignItems: 'center' }}>
        <Avatar size="xl" src={person.avatar} />
        
        <Text variant="body-default-xl" onBackground="neutral-weak">
          {contact.description}
        </Text>
      </Flex>

      {/* Stacked Social Links */}
      <Flex direction="column" gap="8" fillWidth>
        {contact.links.map((link: any, index: number) => {
          return (
            <a 
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '14px 20px',
                borderRadius: '16px',
                border: '1px solid var(--neutral-alpha-medium)',
                background: 'var(--neutral-alpha-weak)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ 
                display: 'flex', 
                width: '100%', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                {/* Left side: Label */}
                <Text weight="strong" variant="body-default-m" onBackground="neutral-strong">
                  {link.type}
                </Text>

                {/* Right side: Value */}
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {link.value}
                </Text>
              </div>
            </a>
          );
        })}
      </Flex>

      {/* Internal CSS for the hover effect to avoid JS event handler errors */}
      <style jsx>{`
        .contact-button:hover {
          background: var(--neutral-alpha-medium) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </Flex>
  );
}
