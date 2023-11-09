import { NextPage } from "next";

import { Button } from "~/core/components/Button";
import { Text } from "~/core/components/Text";

export const HomePage: NextPage = () => {
  return (
    <main>
      <div className="flex flex-1 flex-col h-screen w-screen items-center justify-center space-x-medium gap-medium">
        <div className="space-x-medium">
          <Text size="title">Título 1</Text>
          <Text size="description" className="text-red-primary">
            Descrição 1
          </Text>
          <Text>Default 1</Text>
        </div>

        <div className="space-x-medium">
          <Button>Button Primary</Button>
          <Button variant="ghost">Button Ghost</Button>
        </div>
      </div>
    </main>
  );
};
