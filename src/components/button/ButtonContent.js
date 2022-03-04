import React from "react";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
const ButtonContent = () => {
  return (
    <>
      <div>
        <ButtonToolbar>
          <Button size="lg">Large</Button>
          <Button size="md">Medium</Button>
          <Button size="sm">Small</Button>
          <Button size="xs">Xsmall</Button>
        </ButtonToolbar>

        {/* <ButtonToolbar>
          <IconButton icon={<StarIcon />} circle size="lg" />
          <IconButton icon={<StarIcon />} circle size="md" />
          <IconButton icon={<StarIcon />} circle size="sm" />
          <IconButton icon={<StarIcon />} circle size="xs" />
        </ButtonToolbar> */}

        <ButtonToolbar>
          <ButtonGroup size="lg">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>

          <ButtonGroup size="md">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>

          <ButtonGroup size="sm">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>

          <ButtonGroup size="xs">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <div>
        <ButtonToolbar>
          <Button color="red" appearance="primary">
            Red
          </Button>
          <Button color="orange" appearance="primary">
            Orange
          </Button>
          <Button color="yellow" appearance="primary">
            Yellow
          </Button>
          <Button color="green" appearance="primary">
            Green
          </Button>
          <Button color="cyan" appearance="primary">
            Cyan
          </Button>
          <Button color="blue" appearance="primary">
            Blue
          </Button>
          <Button color="violet" appearance="primary">
            Violet
          </Button>
        </ButtonToolbar>

        <ButtonToolbar>
          <Button color="red" appearance="subtle">
            Red
          </Button>
          <Button color="orange" appearance="subtle">
            Orange
          </Button>
          <Button color="yellow" appearance="subtle">
            Yellow
          </Button>
          <Button color="green" appearance="subtle">
            Green
          </Button>
          <Button color="cyan" appearance="subtle">
            Cyan
          </Button>
          <Button color="blue" appearance="subtle">
            Blue
          </Button>
          <Button color="violet" appearance="subtle">
            Violet
          </Button>
        </ButtonToolbar>

        <ButtonToolbar style={{ background: "#000", padding: 10 }}>
          <Button color="red" appearance="ghost">
            Red
          </Button>
          <Button color="orange" appearance="ghost">
            Orange
          </Button>
          <Button color="yellow" appearance="ghost">
            Yellow
          </Button>
          <Button color="green" appearance="ghost">
            Green
          </Button>
          <Button color="cyan" appearance="ghost">
            Cyan
          </Button>
          <Button color="blue" appearance="ghost">
            Blue
          </Button>
          <Button color="violet" appearance="ghost">
            Violet
          </Button>
        </ButtonToolbar>
      </div>
    </>
  );
};

export default ButtonContent;
