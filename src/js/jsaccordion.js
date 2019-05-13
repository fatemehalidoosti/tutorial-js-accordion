function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods
    this.init = function() {

        var ulItem, liItem;
        ulItem= this.targetElement.querySelector("ul");
        liItem=this.targetElement.querySelectorAll("li");

        ulItem.classList.add("jsac-list");
        liItem.forEach(function (element)  {
            if(element.classList.contains("list-item")){
                element.classList.add("jsac-list-item")
            }
            var hdItem= element.querySelector("div.header");
            if (hdItem.classList.contains("header")){
                hdItem.classList.add("jsac-header")
            }
            var bodyItem= element.querySelector("div.body");
            if (bodyItem.classList.contains("body")){
                bodyItem.classList.add("jsac-body")
            }

        })

    };

    //  start construction operations
    //  if parameter is element selector
    if(typeof elementOrSelector == 'string') {
        this.targetElement = document.querySelector(elementOrSelector);
        if(this.targetElement == null) {
            throw ('invalid element selector');
        }
    }
    //  if parameter is element DOM object
    else if(typeof elementOrSelector == 'object')
        this.targetElement = elementOrSelector;
    else
        throw ('Unknown element type');

    //  set autoincrement instance id to object
    this.id = JSAccordion.instances.length;

    JSAccordion.instances.push(this);

    return this;
}

//  define static property to keep all instances
JSAccordion.instances = [];