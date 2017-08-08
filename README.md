# snbutton

A tiny jQuery plugin that could control the button's state

It is a very simple jquery plugin that disables button when some input filed is empty.

## Usage

### Step.1 Download

- Using [bower](http://bower.io/) to install it. `bower install snbutton`

- [Download](https://github.com/jvyyuie/snbutton/archive/master.zip) from github.

### Step.2 Load Script

Load the script file: `snbutton.js` in your application:

```html
<script type="text/javascript" src="bower_components/snbutton/snbutton.js"></script>
```
### Step.3 Code

```html
<input id="input-700" />
<button id="submit-button" data-snnode="input-700">Submit</button>
<script>
	SNButton.init("submit-button");
</script>
```
