function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods
    this.init = function() {

        var ulItem, liItem;
        ulItem = this.targetElement.querySelector("ul");
        liItem =this.targetElement.querySelectorAll("li");

        ulItem.classList.add("jsac-list");
        liItem.forEach(function (element)  {
                element.classList.add("jsac-list-item");

            var hdItem = element.querySelector("div.header");
                hdItem.classList.add("jsac-header");

            var bodyItem = element.querySelector("div.body")
                bodyItem.classList.add("jsac-body");
            hdItem.addEventListener("click",exchange);

            function exchange() {

                if(this.parentNode.classList.contains("expanded")){
                    this.parentNode.classList.replace("expanded","collapsed");
                }else {
                    this.parentNode.classList.replace("collapsed","expanded")
                }




            }

    });
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