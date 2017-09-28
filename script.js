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

(function () {
    var div = document.createElement('div');

    (function () {
        var list = '';

        function roundTree(item) {
                
            for(i in item) {
                if (item[i] instanceof Array) {
                    list += '<ul>';
                    roundTree(item[i]);
                    list += '</ul>';
                    continue;
                }
                else if (item[i] instanceof Object) {
                    list += '<li id = "li">';
                    roundTree(item[i]);
                    list += '</li>';
                    continue;
                }
                list += item[i];
            }
            return list;
        }

        window.printTree = roundTree;
    })();

    div.innerHTML = '<ul>' + '<li id = "li">' + printTree(data) + '</ul>' + '</li>';
    document.body.appendChild(div);

    var li = document.getElementById('li');

    li.addEventListener('click', e => e.target.classList.toggle('close'))
})();