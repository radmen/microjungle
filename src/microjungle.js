var microjungle = function(template) {
    var d = document;

    // they just doing their job.
    function monkeys(what, who) {
        var l = what.length;

        for (var i = 0; i < l; i++) {
            var j = what[i];

            if (j) {
                if (typeof j == 'string') {
                    //who.appendChild(d.createTextNode(j));
                    who.innerHTML += j;
                } else {
                    if (typeof j[0] == 'string') {
                        var el = d.createElement(j.shift()),
                            attrs = {}.toString.call(j[0]) === '[object Object]' && j.shift(),
                            k;

                        if (attrs) {
                            for(k in attrs) {
                                attrs[k] && el.setAttribute(k, attrs[k]);
                            }
                        }

                        who.appendChild(monkeys(j, el));
                    } else if (j.nodeType === 11) {
                        who.appendChild(j);
                    } else {
                        monkeys(j, who);
                    }
                }
            }
        }

        return who;
    };

    return monkeys(template, d.createDocumentFragment());
};
