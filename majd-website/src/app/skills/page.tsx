import { Flex, Heading, Text, Meta } from "@once-ui-system/core";
import { baseURL, skills } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: skills.title,
    description: skills.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(skills.title)}`,
    path: skills.path,
  });
}

export default function Skills() {
  return (
    <Flex fillWidth maxWidth="m" direction="column" gap="l">
      <Heading as="h1" variant="display-strong-s">{skills.title}</Heading>
      <Text variant="body-default-m" onBackground="neutral-weak">{skills.description}</Text>

      <Flex direction="column" gap="m" marginTop="l">
        {skills.categories.map((category: any, index: number) => (
          <Flex key={index} direction="column" gap="s" marginBottom="m">
            <Heading as="h3" variant="heading-strong-m">{category.title}</Heading>
            <Flex wrap gap="8">
              {category.tools.map((tool: string, i: number) => (
                <Text key={i} variant="body-default-s" onBackground="neutral-strong">
                  • {tool}
                </Text>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
