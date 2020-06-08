# Handout OpenUI5

Philipp Rall

---

![UI5 Logo](img/UI5_logo.png)

## What is OpenUI5

- Application framework for cross-platform, responsive and modern business web applications
- Based on JavaScript, JQuery and Less
- Stands for "Open UI Development Toolkit for HTML5"
- Open-Source project maintained by SAP (OpenSource since 2013, proprietary version SAPUI5 with some more controls exists since 2009)

## Features of OpenUI5

### UI-element library

- Over 180 UI controls ranging from basic elements to complex UI patterns, out of the box use is possible
- Following SAP Fiori Design, an innovative design concept for business applications, which enables a clear, simple and consistent UI design across all frontend features

### Model-View-Controller concept

- Views can be in XML, HTML, JSON or JavaScript (XML recommended), naming convention: ```name.view.xml```
- Controllers are implemented in JavaScript, naming convention: ```name.controller.js```
- Each View has one Controller (need to have the same name)

### Data binding

- One-time, one-way or two-way data binding possible
- JSON, OData and XML data models supported

### Internationalization

- All UI texts are outsourced in Resource bundle files
- A separate file can be created for each language, files are part of the application, the browser automatically selects the respective language
- Right-to-left language support

## Advantages of OpenUI5

- **Almost no HTML/CSS code needed**: OpenUI5 is totally JavaScript and XML based, besides the index.html there is no other HTML code as well as no CSS code required
- **Design Consistency**: High recognition value, apps look and feel uniformly through standardized SAP Fiori UX
- **Predefined layouts**: Standardized layouts, floorplans and UI elements for many business use cases
  &rarr; OpenUI5 apps always look like OpenUI5 apps, as they are consistent looking and easy to use enterprise applications
- **Strong internationalization support**
- **Accessibility**: All UI-elements are accessible by default (e.g. Screen Reader Support, Keyboard handling, High-Contrast Black Theme)

## Disadvantages of OpenUI5

- **Performance**: Other frameworks like React or Angular2 have better performance in initial loading and rendering. OpenUI5 code can run only on the client-side
- **Custom controls**: Developing of custom controls which don't follow existing standardized floorplans can be difficult (remember that OpenUI5 apps look always like OpenUI5 apps)
- **Mobile Native Development**: With OpenUI5 it's not possible to build native mobile apps, e.g. React allows native development with React Native

## Basic file structure

This section should provide basic information about the structure of an OpenUI5 app.  Each OpenUI5 app contains a ```controller``` and a  ```view``` folder for all controllers and views. For internationalization exists an ```i18n``` folder, which contains some ```i18n.properties``` files. Besides that, there are different basic files, like  ```index.html```,  ```Component.js```, and ```Manifest.json```. Let's explain each file in a few words:

- **index.html**:
  - The only HTML part of an application
  - Is loaded at the start of the application and determines that ```Component.js``` is loaded next
  - Contains script which loads OpenUI5 libraries and initializes OpenUI5 runtime automatically (bootstrapping)
  - Everything else gets placed into the body of this HTML file
  
- **Component.js**:
  - Component controller, provides runtime metadata and component methods
  - Metadata is usually externally in descriptor ```manifest.json``` defined

- **Manifest.json**:
  - Central, easy-to-access location for storing metadata such as settings, configurations and parameters of an application as well as routing
  - Determines rootView (loaded at the beginning)
  
- **i18n.properties**:
  - Contains key-value pairs of text translations: ```key=Text```
  - Texts can be accessed over a ResourceModel and the key, e.g. in a view "{i18n>title}"

## Helpful links

- [Documentation, API-Reference & Samples](https://openui5.hana.ondemand.com/)
- [Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/)
- [Icon Explorer](https://sapui5.netweaver.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons)
