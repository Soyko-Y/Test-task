var data = 
{
  name: "Frontend",
  skills: [
    {
      name: "HTML & CSS",
      skills: [
        {
          name: "Understanding block, inline and table models"
        },
        {
          name: "Stylesheets",
          skills: [
            {
              name: "Positioning",
              skills: [
                {
                  name: "static, relative and absolute, fixed, sticky"
                }
              ]
            },
            {
              name: "Understanding of box model"
            },
            {
              name: "Understanding floating"
            }
          ]
        }
      ]
    },
    {
      name: "JavaScript",
      skills: [
        {
          name: "Core",
          skills: [
            {
              name: "DOM"
            },
            {
              name: "Events"
            },
            {
              name: "Data structures",
              skills: [
                {
                  name: "Primitives and limitations"
                },
                {
                  name: "Object"
                }
              ]
            },
          ]
        },
        {
          name: "Approaches",
          skills: [
            {
              name: "OOP",
              skills: [
                {
                  name: "class"
                },
                {
                  name: "Prototypes"
                }
              ]
            },
            {
              name: "Asynchronous programming"
            }
          ]
        },
        {
          name: "Frameworks & libraries",
          skills: [
            {
              name: "React"
            },
            {
              name: "jQuery"
            }
          ]
        }
      ]
    }
  ]
};

var div = document.createElement('div');
var list = '';

function printTree(item) {
        
        for(i in item) {
            if (item[i] instanceof Array) {
                list += '<ul>';
                printTree(item[i]);
                list += '</ul>';
                continue;
            }

            else if (item[i] instanceof Object) {
                list += '<li id = "li">';
                printTree(item[i]);
                list += '</li>';
                continue;
            }
            list += item[i];
        }
}
printTree(data);
div.innerHTML = '<ul>' +  '<li id = "li">' + list + '</ul>' + '</li>';
document.body.appendChild(div); 

var li = document.getElementById('li');

li.addEventListener('click', e => {
  e.target.classList.toggle('close');
})