/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.dtl.tests.dom.tag"),dojo.require("dojox.dtl.dom"),dojo.require("dojox.dtl.Context"),dojo.require("dojox.dtl.tests.dom.util"),dojo.require("dojo._base.sniff"),doh.register("dojox.dtl.dom.tag",[function(e){var t,i=dojox.dtl,l=!1;try{t=new i.DomTemplate("No div"),i.tests.dom.util.render(t)}catch(t){e.is("Text should not exist outside of the root node in template",t.message),l=!0}e.t(l);var a=new dojox.dtl.Context({test:"Pocket"});l=!1;try{t=new i.DomTemplate("{{ test }}"),i.tests.dom.util.render(t,a)}catch(t){e.is("Text should not exist outside of the root node in template",t.message),l=!0}e.t(l),t=new i.DomTemplate("<div></div>extra content"),l=!1;try{i.tests.dom.util.render(t)}catch(t){e.is("Content should not exist outside of the root node in template",t.message),l=!0}e.t(l),t=new i.DomTemplate("<div></div><div></div>"),l=!1;try{i.tests.dom.util.render(t)}catch(t){e.is("Content should not exist outside of the root node in template",t.message),l=!0}e.t(l),t=new i.DomTemplate("{% if missing %}<div></div>{% endif %}"),l=!1;try{i.tests.dom.util.render(t)}catch(t){e.is("Rendered template does not have a root node",t.message),l=!0}e.t(l)},function(){var e=dojox.dtl,t=new e.DomTemplate('<div>{% for item in items %}<a index="{{forloop.counter0}}" id="id_{{item.param}}">{{item.param}}</a>{% endfor %}</div>'),i=new e.Context({items:[{name:"apple",param:"appleparam"},{name:"banana",param:"bananaparam"},{name:"orange",param:"orangeparam"}]});doh.is('<div><a index="0" id="id_appleparam">appleparam</a><a index="1" id="id_bananaparam">bananaparam</a><a index="2" id="id_orangeparam">orangeparam</a></div>',e.tests.dom.util.render(t,i))},function(e){var t=dojox.dtl,i=new t.Context({base:dojo.moduleUrl("dojox.dtl.tests.templates","base.html")}),l=new t.DomTemplate("{% extends base %}{% block base %}<p>1</p><p>2</p><ul><li>2a</li><li>2b</li><li>2c</li></ul><p>3</p><ul><li>3a</li><li>3b</li><li>3c</li></ul><p>4</p><ul><li>4a</li><li>4b</li><li>4c</li></ul><p>5</p>{% endblock %}");e.is("<div>BaseBefore<p>1</p><p>2</p><ul><li>2a</li><li>2b</li><li>2c</li></ul><p>3</p><ul><li>3a</li><li>3b</li><li>3c</li></ul><p>4</p><ul><li>4a</li><li>4b</li><li>4c</li></ul><p>5</p>BaseAfter</div>",t.tests.dom.util.render(l,i))},function(e){var t=dojox.dtl,i=new t.Context({items:["apple","banana","lemon"]}),l=new t.DomTemplate('<div><ul>{% for item in items %}<li class="{{ item|length }}">{{ item }}</li>{% endfor %}</ul></div>');e.is('<div><ul><li class="5">apple</li><li class="6">banana</li><li class="5">lemon</li></ul></div>',t.tests.dom.util.render(l,i)),l=new t.DomTemplate("<div><select>{% for item in items %}<option>{{ item }}</option>\n{% endfor %}</select></div>"),e.is("<div><select><option>apple</option><option>banana</option><option>lemon</option></select></div>",t.tests.dom.util.render(l,i))},function(e){var t=dojox.dtl,i=new t.Context({key:!0}),l=new t.DomTemplate("{% if key %}<div>has key</div>{% else %}<div>no key</div>{% endif %}");e.is("<div>has key</div>",t.tests.dom.util.render(l,i)),i.key=!1,e.is("<div>no key</div>",t.tests.dom.util.render(l,i))},function(e){var t=dojox.dtl,i=new t.Context({year:2008,days:[new Date(2008,0,12),new Date(2008,0,28),new Date(2008,1,1),new Date(2008,1,1),new Date(2008,1,1)]}),l=new t.DomTemplate("<div><h1>Archive for {{ year }}</h1>{% for date in days %}{% ifchanged %}<h3>Month: </h3><h3>{{ date|date:\"F\" }}</h3>{% endifchanged %}<a href=\"{{ date|date:'M/d'|lower }}/\">{{ date|date:'j' }}</a>{% endfor %}</div>");e.is('<div><h1>Archive for 2008</h1><h3>Month: </h3><h3>January</h3><a href="jan/12/">12</a><a href="jan/28/">28</a><h3>Month: </h3><h3>February</h3><a href="feb/01/">1</a><a href="feb/01/">1</a><a href="feb/01/">1</a></div>',t.tests.dom.util.render(l,i)),l=new t.DomTemplate("<div>{% for date in days %}{% ifchanged date.date %} {{ date.date }} {% endifchanged %}{% ifchanged date.hour date.date %}{{ date.hour }}{% endifchanged %}{% endfor %}</div>"),e.is("<div> 2008-01-12 0 2008-01-28 0 2008-02-01 0</div>",t.tests.dom.util.render(l,i))},function(e){var t=dojox.dtl,i=new t.Context({items:[{name:"apple",color:"red"},{name:"banana",color:"yellow"},{name:"pear",color:"green"},{name:"kiwi",color:"brown"}],edit_item:"banana"}),l=new t.DomTemplate("<div><ul>{% for item in items %}<li>{{ item.name }}</li>{% endfor %}</ul></div>");e.is("<div><ul><li>apple</li><li>banana</li><li>pear</li><li>kiwi</li></ul></div>",t.tests.dom.util.render(l,i)),l=new t.DomTemplate("<div><ul>{% for item in items %}<li><span>{{ item.name }}</span><br/><p>{{ item.color }}</p></li>{% endfor %}</ul></div>"),e.is("<div><ul><li><span>apple</span><br/><p>red</p></li><li><span>banana</span><br/><p>yellow</p></li><li><span>pear</span><br/><p>green</p></li><li><span>kiwi</span><br/><p>brown</p></li></ul></div>",t.tests.dom.util.render(l,i)),l=new t.DomTemplate("<div><ul>{% for item in items %}<li>{% ifequal item.name edit_item %}<label>Name: <input type='text' name='name' value=\"{{ item.name }}\"/></label><br/><label>Color: <textarea name='color'>{{ item.color }}</textarea></label>{% else %}<span>{{ item.name }}</span><br/><p>{{ item.color }}</p>{% endifequal %}</li>{% endfor %}</ul></div>"),e.is('<div><ul><li><span>apple</span><br/><p>red</p></li><li><label>Name: <input name="name" value="banana"/></label><br/><label>Color: <textarea name="color">yellow</textarea></label></li><li><span>pear</span><br/><p>green</p></li><li><span>kiwi</span><br/><p>brown</p></li></ul></div>',t.tests.dom.util.render(l,i)),l=new t.DomTemplate("<div><ul>{% for item in items %}<li>{% ifequal item.name edit_item %}<div><label>Name: <input type='text' name='name' value=\"{{ item.name }}\"/></label><br/><label>Color: <textarea name='color'>{{ item.color }}</textarea></label></div>{% else %}<div><span>{{ item.name }}</span><br/><p>{{ item.color }}</p></div>{% endifequal %}</li>{% endfor %}</ul></div>"),e.is('<div><ul><li><div><span>apple</span><br/><p>red</p></div></li><li><div><label>Name: <input name="name" value="banana"/></label><br/><label>Color: <textarea name="color">yellow</textarea></label></div></li><li><div><span>pear</span><br/><p>green</p></div></li><li><div><span>kiwi</span><br/><p>brown</p></div></li></ul></div>',t.tests.dom.util.render(l,i)),l=new t.DomTemplate("<div><ul>{% for item in items %}{% ifequal item.name edit_item %}<li><label>Name: <input type='text' name='name' value=\"{{ item.name }}\"/></label><br/><label>Color: <textarea name='color'>{{ item.color }}</textarea></label></li>{% else %}<li><span>{{ item.name }}</span><br/><p>{{ item.color }}</p></li>{% endifequal %}{% endfor %}</ul></div>"),e.is('<div><ul><li><span>apple</span><br/><p>red</p></li><li><label>Name: <input name="name" value="banana"/></label><br/><label>Color: <textarea name="color">yellow</textarea></label></li><li><span>pear</span><br/><p>green</p></li><li><span>kiwi</span><br/><p>brown</p></li></ul></div>',t.tests.dom.util.render(l,i))},function(e){var t=dojox.dtl,i=new t.Context({hello:dojo.moduleUrl("dojox.dtl.tests.templates","hello.html"),person:"Bob",people:["Charles","Ralph","Julia"]}),l=new t.DomTemplate("<div>{% include hello %}</div>");e.is("<div>Hello, <span>Bob</span></div>",t.tests.dom.util.render(l,i)),l=new t.DomTemplate('<div>{% include "../../dojox/dtl/tests/templates/hello.html" %}</div>'),e.is("<div>Hello, <span>Bob</span></div>",t.tests.dom.util.render(l,i)),l=new t.DomTemplate('<div>{% for person in people %}<div class="include">{% include hello %} </div>{% endfor %}</div>'),e.is('<div><div class="include">Hello, <span>Charles</span> </div><div class="include">Hello, <span>Ralph</span> </div><div class="include">Hello, <span>Julia</span> </div></div>',t.tests.dom.util.render(l,i))},function(e){var t=dojox.dtl,i=new t.DomTemplate("{% spaceless %}<ul> \n <li>Hot</li> \n\n<li>Pocket </li>\n </ul>{% endspaceless %}");e.is("<ul><li>Hot</li><li>Pocket </li></ul>",t.tests.dom.util.render(i))},function(e){var t=dojox.dtl,i=new t.Context({hello:dojo.moduleUrl("dojox.dtl.tests.templates","hello.html"),person:"Bob",people:["Charles","Ralph","Julia"]}),l=new t.DomTemplate("<div>{% ssi hello parsed %}</div>");e.is("<div>Hello, <span>Bob</span></div>",t.tests.dom.util.render(l,i)),l=new t.DomTemplate("<div>{% ssi hello %}</div>"),e.is("<div>Hello, <span>{{ person }}</span></div>",t.tests.dom.util.render(l,i)),l=new t.DomTemplate('<div>{% ssi "../../dojox/dtl/tests/templates/hello.html" parsed %}</div>'),e.is("<div>Hello, <span>Bob</span></div>",t.tests.dom.util.render(l,i)),l=new t.DomTemplate("<div>{% for person in people %}{% ssi hello parsed %} {% endfor %}</div>"),e.is("<div>Hello, <span>Charles</span> Hello, <span>Ralph</span> Hello, <span>Julia</span> </div>",t.tests.dom.util.render(l,i))},function(e){var t=dojox.dtl,i=new t.Context({}),l=new t.DomTemplate("<div>abc{% comment %}{% endif %}<div>{% ssi hello parsed %}</div>{% for item in items %}{% endcomment %}xyz</div>");e.is("<div>abcxyz</div>",t.tests.dom.util.render(l,i))},function(){var e=dojox.dtl,t=new e.Context({items:["apple","banana","orange"]}),i=new e.DomTemplate("<div><select>{% for item in items %}{% ifequal item 'apple' %}<option>=====</option>{% endifequal %}<option>{{ item }}</option>{% endfor %}</select></div>");doh.is("<div><select><option>=====</option><option>apple</option><option>banana</option><option>orange</option></select></div>",e.tests.dom.util.render(i,t)),i=new e.DomTemplate("<div><table><tr><td>Fruit</td></tr>{% for fruit in items %}<tr><td>{{ fruit }}</td></tr>{% endfor %}</table></div>"),doh.is("<div><table><tbody><tr><td>Fruit</td></tr><tr><td>apple</td></tr><tr><td>banana</td></tr><tr><td>orange</td></tr></tbody></table></div>",e.tests.dom.util.render(i,t)),i=new e.DomTemplate("<div><table><tbody><tr><td>Fruit</td></tr>{% for fruit in items %}<tr><td>{{ fruit }}</td></tr>{% endfor %}</tbody></table></div>"),doh.is("<div><table><tbody><tr><td>Fruit</td></tr><tr><td>apple</td></tr><tr><td>banana</td></tr><tr><td>orange</td></tr></tbody></table></div>",e.tests.dom.util.render(i,t)),i=new e.DomTemplate("<div><table><tr>{% for item in items %}{% ifequal item 'apple' %}<th>=====</th>{% endifequal %}<th>{{ item }}</th>{% endfor %}</tr></table></div>"),doh.is("<div><table><tbody><tr><th>=====</th><th>apple</th><th>banana</th><th>orange</th></tr></tbody></table></div>",e.tests.dom.util.render(i,t)),i=new e.DomTemplate("<div><table><tr>{% for item in items %}{% ifequal item 'apple' %}<td>=====</td>{% endifequal %}<td>{{ item }}</td>{% endfor %}</tr></table></div>"),doh.is("<div><table><tbody><tr><td>=====</td><td>apple</td><td>banana</td><td>orange</td></tr></tbody></table></div>",e.tests.dom.util.render(i,t));var l=dojo.isWebKit;dojo.isWebKit=!0,i=new e.DomTemplate("<div><table>\n<thead><tr><th>Name</th><th>Count</th></tr></thead>\n<tbody>\n{% for fruit in items %}\n<tr><td>{{ fruit }}</td><td>{{ fruit }}</td></tr>\n{% endfor %}\n</tbody></table></div>"),doh.is("<div><table><thead><tr><th>Name</th><th>Count</th></tr></thead><tbody><tr><td>apple</td><td>apple</td></tr><tr><td>banana</td><td>banana</td></tr><tr><td>orange</td><td>orange</td></tr></tbody></table></div>",e.tests.dom.util.render(i,t)),dojo.isWebKit=l},function(){var e=dojox.dtl,t=new e.Context({frag:{start:10,stop:20}}),i=new e.DomTemplate('<div startLine="{{ frag.start }}" stopLine="{{ frag.stop }}">abc</div>');doh.is('<div startline="10" stopline="20">abc</div>',e.tests.dom.util.render(i,t))},function(){var e=dojox.dtl,t=new e.Context({}),i=new e.DomTemplate("<div>{% if data %}{% else %}<p>Please select a file using the left panel.</p>{% endif %}</div>");doh.is("<div><p>Please select a file using the left panel.</p></div>",e.tests.dom.util.render(i,t)),t.data=!0,doh.is("<div/>",e.tests.dom.util.render(i,t))},function(){var e=dojox.dtl,t=new e.Context({checked:!1}),i=new e.DomTemplate('<div><input checked="{{ checked }}"></div>');doh.is('<div><input checked="false"/></div>',e.tests.dom.util.render(i,t))},function(){var e=dojox.dtl,t=new e.Context,i=new e.DomTemplate('<div simplecase="simple" mixedCase="mixed">content</div>');doh.is('<div simplecase="simple" mixedcase="mixed">content</div>',e.tests.dom.util.render(i,t))},function(){var e=dojox.dtl,t=new e.Context,i=new e.DomTemplate('<div tabindex="-1"></div>');e.tests.dom.util.render(i,t)},function(){var e=dojox.dtl,t=new e.Context,i=new e.DomTemplate('<div tabIndex="-1"></div>');e.tests.dom.util.render(i,t)}]);
//# sourceMappingURL=../../../sourcemaps/dtl/tests/dom/tag.js.map