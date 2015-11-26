bix CHANGELOG
=====

####1.2.4
* Add universal setDisabled / setReadonly functions to style any element as disabled / readonly
* remove button-specific disabled / form-specific readonly styles
* Make dropdownContainer inline-block to ensure right alignment works
* Add inline versions of all form elements
* Remove containerFull (default return of container(), not needed)
* Touch up a number of default styles

####1.2.3
* Fix issue with merge not respecting multiple entries with similar keys
* Add disableButton function to automate styling of disabled buttons

####1.2.2
* Fix issue with renderOnResize

####1.2.1
* Remove normalize.css webpack dependency, replace with object

####1.2.0
* Remove .application() in favor of .renderOnResize()
* Fix cleanStyle scope issue in .stylesheet()
* Fix CSS units checker for stylesheet creation

####1.1.5
* Fix stylesheets not prefixing as planned

####1.1.3
* Modify prefixer used to be inline-style-prefixer instead of react-prefixer to align with Radium

####1.1.2
* Bugfixes and optimizations

####1.1.1

* Bump version for README changes and addition of CHANGELOG

####1.1.0

* Fix bug in .radium() function for non-component usage

####Previous versions

* Port codebase over from rism
* Rename library to bix
* Rework dynamic styles to use Radium
* Update dynamic styles decorator to allow passing of ReactElements, strings, or ReactComponents
* Make normalize injection opt-in
* Segregate default styles for opt-in application