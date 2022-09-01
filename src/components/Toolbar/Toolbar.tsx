import { ActionIcon, Group, Select, Tooltip } from "@mantine/core";
import { Box, Play, ChevronsRight } from "react-feather";

export interface ToolbarProps {
  onCompile: () => Promise<void>;
  onTest: () => Promise<void>;
}

export function Toolbar(props: ToolbarProps) {
  return (
    <div className="toolbar-wrapper">
      <Group sx={{ justifyContent: "space-between", width: "100%" }}>
        <Group sx={(theme) => ({ gap: theme.spacing.xs })}>
          <Tooltip label="Compile">
            <ActionIcon
              onClick={props.onCompile}
              variant="subtle"
              color="grape"
            >
              <Box size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Test">
            <ActionIcon onClick={props.onTest} variant="subtle" color="cyan">
              <Play size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Select
          placeholder="Pick one"
          data={[
            // { value: "react", label: "React" },
            // { value: "ng", label: "Angular" },
            // { value: "svelte", label: "Svelte" },
            // { value: "vue", label: "Vue" },
          ]}
        />
      </Group>
    </div>
  );
}
