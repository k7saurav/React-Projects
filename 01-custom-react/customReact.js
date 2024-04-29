// method definition to render the html element into html file:
function customRender(element, container){
   // creating DOM element by reactElement(object).
   const domElement = document.createElement(element.type)

   // inserting element in this container
   domElement.innerHTML = element.children

   // setting attributes in the element. These can be looped:
/*    domElement.setAttribute('href', element.props.href)
   domElement.setAttribute('target', element.props.target) */

   // looping the above code:
   for(const prop in element.props){
      if(prop == 'children') continue;
      domElement.setAttribute(prop, element.props[prop])
   }

   // adding this cotainer into root.
   container.appendChild(domElement)
}

// creating a custom react element.
// behind the scene, a html element is defined as a js object(key-value pair), with a special react defined syntax.
const reactElement = {
   type: 'a',
   props: {
      href: 'https://google.com',
      target: '_blank'
   },
   children: 'Visit Google'
}

const root = document.getElementById('root');

// method call to render the html element in the html file.
customRender(reactElement, root)