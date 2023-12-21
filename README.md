# ComfyShell

ComfyShell is a simple UI wrapper for ComfyUI, inspired by [ComfyBox](https://github.com/space-nuko/ComfyBox).

## Features

## Running ComfyShell

### Requirements

* `git` (or [GitHub Desktop](https://desktop.github.com/))
* `pnpm` (at [here](https://pnpm.io/installation))
* Vanilla version of [ComfyUI](https://github.com/comfyanonymous/ComfyUI).

### Setup

1. Clone this repository. ([How?](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
2. Open a console at the project folder.
   * On Windows, use file explorer to open the project folder, move the cursor to an empty region, then press the right-click mouse button while holding the shift key. Then, choose the "Open command window here" context menu. 
3. Install dependencies by running the following command on the console:

```bash
pnpm i
```

### Running

1. Start ComfyUI via running the following command, at the ComfyUI folder:

```bash
python main.py --enable-cors-header
```

2. Start ComfyShell by running the following command on the console, from :

```bash
pnpm dev
```

3. Open the URL printed on the console. By default it would be http://localhost:5173.

## Creating a UI

Each input control in ComfyShell corresponds to a node in a ComfyUI workflow, identified via their titles.

To expose a parameter to ComfyShell:

1. Add a primitive node: right click &gt; "Add Node" &gt; "utils" &gt; "Primitive"
2. Change its title by right click &gt; "Title"; the title should start with `#` (such as `#modelName`).
3. Right click on the parameter &gt; "Convert ... to input"
4. Connect the newly created input and the primitive node.

Each primitive node should possess different titles.
