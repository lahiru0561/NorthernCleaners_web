(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/slider1.7249bb46.jpg"},21:function(e,a,t){e.exports=t.p+"static/media/slider3.73b3a7a6.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/slider2.89754bf7.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/testimonial3.0c6b5a8e.jpg"},27:function(e,a,t){e.exports=t.p+"static/media/slider5.b4789c8f.jpg"},28:function(e,a,t){e.exports=t.p+"static/media/slider4.1a889e99.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/logonc.b7fc1927.png"},43:function(e,a,t){e.exports=t.p+"static/media/slider6.182ee449.jpg"},46:function(e,a,t){e.exports=t.p+"static/media/testimonial1.ba11672b.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/testimonial2.a81cf9fe.jpg"},51:function(e,a,t){e.exports=t(75)},56:function(e,a,t){},72:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(20),r=t.n(c),s=(t(56),t(7)),i=t(8),m=t(10),o=t(9),d=t(11),h=t(87),u=t(88),E=t(14),f=t(77),v=t(78),g=t(79),p=t(89),N=t(80),b=t(81),w=t(82),y=t(39),x=t.n(y),C=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={isOpen:!1},t.toggle=t.toggle.bind(Object(E.a)(Object(E.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement(f.a,{className:"sticky-top",color:"light",light:!0,expand:"md"},l.a.createElement(v.a,{href:"/",className:"m-2"},l.a.createElement("img",{className:"nav-bar-logo",alt:"northern cleaners logo",src:x.a})),l.a.createElement(g.a,{onClick:this.toggle}),l.a.createElement(p.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(N.a,{className:"ml-auto",navbar:!0},l.a.createElement(b.a,null,l.a.createElement(w.a,{href:"/NorthernCleaners_web/aboutus"}," About Us")),l.a.createElement(b.a,null,l.a.createElement(w.a,{href:"/NorthernCleaners_web/services"}," Services")),l.a.createElement(b.a,null,l.a.createElement(w.a,{href:"/NorthernCleaners_web/testimonials"}," Testimonials")),l.a.createElement(b.a,null,l.a.createElement(w.a,{href:"/NorthernCleaners_web/contact"}," Contact Us")))))}}]),a}(n.Component),O=function(){return l.a.createElement("footer",{className:"bg-dark text-white mt-5 p-4 text-center"},"Copyright \xa9 ",(new Date).getFullYear()," Northen Cleaners Pvt Ltd.")},j=t(41),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={firstName:"",lastName:"",email:"",mobile:"",description:""},t.handleChange=t.handleChange.bind(Object(E.a)(Object(E.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(E.a)(Object(E.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var a='<table class="tg"><tr><th>First Name </th> <th >'+this.state.firstName+"</th></tr><tr><th>Last Name </th> <th >"+this.state.lastName+"</th></tr><tr><th>Email </th> <th >"+this.state.email+"</th></tr><tr><th>Mobile</th> <th >"+this.state.mobile+"</th></tr><tr><th>Description :  </th> <th >"+this.state.description+"</th></tr></table>";this.sendEmail(a),e.preventDefault()}},{key:"sendEmail",value:function(e){console.log(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"row enquire-content"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 enquire-title"},"Enquire Now")),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-xs-6"},l.a.createElement("label",null,l.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstName",value:this.state.firstName,onChange:this.handleChange}))),l.a.createElement("div",{className:"col-md-6 col-xs-6"},l.a.createElement("label",null,l.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastName",value:this.state.lastName,onChange:this.handleChange})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-xs-6"},l.a.createElement("label",null,l.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleChange}))),l.a.createElement("div",{className:"col-md-6 col-xs-6"},l.a.createElement("label",null,l.a.createElement("input",{type:"text",placeholder:"Mobile (optional)",name:"mobile",value:this.state.mobile,onChange:this.handleChange})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 col-xs-12"},l.a.createElement("label",null,l.a.createElement("textarea",{rows:5,type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.handleChange})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-offset-5 col-md-2 "},l.a.createElement("input",{className:"enquire-submit",type:"submit",value:"Submit"}))))))}}]),a}(n.Component),S=t(84),A=t(83),I=t(85),M=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row m-0"},l.a.createElement("div",{className:"col-md-3 col-xs-6 land-desc-box land-desc-box-1"},l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-title"},"OFFICE")),l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-img"},l.a.createElement("i",{class:"fas fa-briefcase"}))),l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-desc"},"Our team will meet with you and get to know the cleaning expectations that needs to be met. We will do a walk through together of the office site to obtain a good understanding of the cleaning aspects."))),l.a.createElement("div",{className:"col-md-3 col-xs-6 land-desc-box land-desc-box-2"},l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-title"},"COMMERCIAL")),l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-img"},l.a.createElement("i",{class:"fas fa-building"}))),l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-desc"},"For over 7 years Northern Cleaners have specialized in providing professional cleaning services for commercial, industrial, office, medical and building construction industries throughout"))),l.a.createElement("div",{className:"col-md-3  col-xs-6 land-desc-box land-desc-box-3"},l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-title"},"BUILDERS")),l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-img"},l.a.createElement("i",{class:"fas fa-gavel"}))),l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-desc"},"For over 7 years Northern Cleaners have specialized in providing professional cleaning services for commercial, industrial, office, medical and building construction industries throughout"))),l.a.createElement("div",{className:"col-md-3  col-xs-6 land-desc-box land-desc-box-4"},l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-title"},"MEDICAL CENTRE")),l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-img"},l.a.createElement("i",{class:"fas fa-user-md"}))),l.a.createElement("div",{classNme:"row"},l.a.createElement("div",{className:"col-md-12 land-desc-desc"},"Northern Cleaners specialise in medical centre cleaning, currently cleaning 15 medical and dental clinics around Melbourne. Our team focus on hygiene, cross contamination and disinfection to create safe environments for all medical staff and patients")))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 item-col"},l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"col-md-12 text-center professional-tag text-theme-color"},"PROFESSIONAL")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center professional-desc text-theme-color"},"CLEANING SERVICES AT AFFORDABLE PRICES")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 item-col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 desc-topic text-theme-color"},"TESTIMONIALS")),l.a.createElement("div",{className:"row well"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 testermo-name"},"Emma Caffin"),l.a.createElement("div",{className:"col-md-2 testermo-quot"},'"')),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 testermo-desc"},"Northen Cleaning group works closely with us to full fill our cleaning requirements. I have no hesitation in recommending them for all your cleaning needs.")),l.a.createElement("div",{className:"row py-2"},l.a.createElement(A.a,null,l.a.createElement(S.a,{to:"/testimonials"},"find out more...")))))),l.a.createElement("div",{className:"col-md-1"}),l.a.createElement("div",{className:"col-md-3 item-col cleaning-services-col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 desc-topic text-theme-color "},"CLEANING SERVICES")),l.a.createElement("div",{className:"row cleaning-service"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 text-center cleaning-service-desc"},"Tailor made cleaning solutions"),l.a.createElement("div",{className:"col-md-2 text-center cleaning-service-desc"})),l.a.createElement("div",{className:"row item-center "},l.a.createElement("div",{className:"col-md-12 text-left cleaning-service-items"},l.a.createElement(I.a,null,l.a.createElement(A.a,{className:"cleaning-service-point-img",md:"1",xs:"1",xm:"1"},l.a.createElement("i",{className:"fas fa-hand-point-right"})),l.a.createElement(A.a,{md:"10",xs:"10",xm:"10"},"General Cleaning")),l.a.createElement(I.a,null,l.a.createElement(A.a,{className:"cleaning-service-point-img",md:"1",xs:"1",xm:"1"},l.a.createElement("i",{className:"fas fa-hand-point-right"})),l.a.createElement(A.a,{md:"10",xs:"10",xm:"10"},"Ground and Garden Maintenance")),l.a.createElement(I.a,null,l.a.createElement(A.a,{className:"cleaning-service-point-img",md:"1",xs:"1",xm:"1"},l.a.createElement("i",{className:"fas fa-hand-point-right"})),l.a.createElement(A.a,{md:"10",xs:"10",xm:"10"},"Title and Grout Cleaning")),l.a.createElement(I.a,null,l.a.createElement(A.a,{className:"cleaning-service-point-img",md:"1",xs:"1",xm:"1"},l.a.createElement("i",{className:"fas fa-hand-point-right"})),l.a.createElement(A.a,{md:"10",xs:"10",xm:"10"},"Carpet and Upholsteroay Steam Cleaning")),l.a.createElement(I.a,null,l.a.createElement(A.a,{className:"cleaning-service-point-img",md:"1",xs:"1",xm:"1"},l.a.createElement("i",{className:"fas fa-hand-point-right"})),l.a.createElement(A.a,{md:"10",xs:"10",xm:"10"},"Window Cleaning"))))))),l.a.createElement("div",{className:"col-md-1"}),l.a.createElement("div",{className:"py-2 col-md-3  item-col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 desc-topic text-theme-color"},"LOCATIONS")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"}," Servicing all areas of Melbourne, Australia")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},"\xa0")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},"Northern Cleaners,")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},"13 Westbourne Dr,")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},"Doreen VIC 3754")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},"\xa0")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"}," ",l.a.createElement("i",{className:"fa fa-mobile"}),"\xa00430 504 025"))))),l.a.createElement("div",{className:"col-md-1"})),l.a.createElement(I.a,{className:"item-center py-5"},l.a.createElement("div",{className:"col-md-6 col-sm-12 nav-call-us "},l.a.createElement("div",{className:"call-us-text  item-center "}," CALL US"),l.a.createElement("div",{className:"call-us-number  item-center "},l.a.createElement("a",{href:"tel:0430504025"}," 0430504025")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},"\xa0")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(k,null)))))}}]),a}(n.Component),L=t(86),T=t(27),W=t.n(T),F=t(28),R=t.n(F),z=t(21),D=t.n(z),q=t(22),_=t.n(q),U=t(18),B=t.n(U),P=t(43),G=t.n(P),$=function(){var e=[{img:"slider1",path:W.a},{img:"slider2",path:R.a},{img:"slider3",path:D.a},{img:"slider4",path:_.a},{img:"slider5",path:B.a}];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mobile-landing-page"},l.a.createElement("img",{style:{width:"100vw",height:"auto"},alt:"mobile-landing",src:G.a})),l.a.createElement(L.a,null,e.map(function(e){return l.a.createElement(L.a.Item,null,l.a.createElement("img",{style:{width:"100vw",height:"auto"},alt:"carousel-nc",src:e.path}),l.a.createElement(L.a.Caption,null))})))},K=[{title:"Office Cleaning",img:D.a,desc:"Our team will meet with you and get to know the cleaning expectations that needs to be met. We will do a walk through together of the office site to obtain a good understanding of the cleaning aspects.",price:"A$28.00",icon:"fa-building"},{title:"Medical Centre Cleaning",img:_.a,desc:"Northern Cleaners specialise in medical centre cleaning, currently cleaning 15 medical and dental clinics around Melbourne. Our team focus on hygiene, cross contamination and disinfection to create safe environments for all medical staff and patients",price:"A$29.00",icon:"fa-user-md"},{title:"Kindergarten & Childcare Cleaning",img:B.a,desc:"A safe and clean environment is expected by every parent when they drop off their children to a centre. Our team will make sure all surfaces, activity rooms, play areas, common areas, toilets are thoroughly cleaned and sanitised. Northern cleaners team will take the burden out of you in keeping the childcare / kindergarten in great health.",price:"A$28.00",icon:"fa-cubes"}],V=[{title:"Carpet Steam Cleaning",img:B.a,desc:"If your carpets needs to be freshened up please get in touch with us. With the use of latest machinery and commercial grade stain remover chemicals no stain is too hard to get rid of.",price:"A$2.75",icon:"fa-broom"},{title:"Upholstery Steam Cleaning",img:B.a,desc:"The stains and dirt on upholstery can be easily removed with our three tier upholstery steam cleaning process. Will sure to give a brand new look",price:"A$7.00",icon:"fa-couch"}],H=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(I.a,{className:"header-color intro-name m-0"},"Our Services"),l.a.createElement(I.a,{className:"p-2 m-0"},l.a.createElement(A.a,{md:"12"},l.a.createElement(I.a,{className:"header-color item-center pb-4",style:{fontSize:"1.5em",marginLeft:"5em",marginRight:"5em",borderBottom:"1px solid #afafaf"}},"Commercial Cleaning"),l.a.createElement(I.a,{className:"service-box"},K.map(function(e){return l.a.createElement(A.a,{md:"6",className:"p-5"},l.a.createElement(I.a,{className:"header-color pt-2 item-center"},l.a.createElement(A.a,{style:{fontSize:"3em"}},l.a.createElement("i",{className:"fas "+e.icon}))),l.a.createElement(I.a,{className:"header-color pb-2 item-center"},l.a.createElement(A.a,null,e.title)),l.a.createElement(I.a,null,l.a.createElement(A.a,null,e.desc)))})))),l.a.createElement(I.a,{className:"p-2 m-0"},l.a.createElement(A.a,{md:"12"},l.a.createElement(I.a,{className:"header-color item-center pb-4 ",style:{fontSize:"1.5em",marginLeft:"5em",marginRight:"5em",borderBottom:"1px solid #aeaeae"}},"Carpet Cleaning"),l.a.createElement(I.a,{className:"service-box pt-5"},V.map(function(e){return l.a.createElement(A.a,{md:"6",className:"p-5"},l.a.createElement(I.a,{className:"header-color pt-2 item-center"},l.a.createElement(A.a,{style:{fontSize:"3em"}},l.a.createElement("i",{className:"fas "+e.icon}))),l.a.createElement(I.a,{className:"header-color pb-2 item-center"},l.a.createElement(A.a,null,e.title)),l.a.createElement(I.a,null,l.a.createElement(A.a,null,e.desc)))})))))}}]),a}(n.Component),J=t(46),Q=t.n(J),Y=t(47),X=t.n(Y),Z=t(23),ee=t.n(Z),ae=[{title:"Kara Duncan",img:Q.a,desc:'"Having used a number of different cleaning services over the last 10 years, I have finally came across a team that delivers all that it has promised. As a large busy Medical center, the daily cleaning is a big duty and day after day every task is completed. Thank you for going above and beyond to ensure the center is cleaned to the highest standard"',position:"Practice Manager",company:"Brunswick Betta Health"},{title:"Kurn Shaw",img:X.a,desc:'"Sandy and the team are efficient, reliable and friendly cleaners and nothing is too much trouble. I would highly recommend them"',position:"Chief Operating Officer",company:"SIA Medical Centres"},{title:"Suchi Sandeep",img:ee.a,desc:"Nothern Cleaners have always provided excellent service, whenever we've has issues it has been promptly addressed. The medical center is cleaned six days a week and thorough, efficient and they clean to high standards. We have found them to be consistent with the cleaning. I would highly recommend Nothern Cleaners to anyone interested in quality cleaning.\"",position:"Practice Manager",company:"Mill Park Family Practice"},{title:"Emma Caffin",img:ee.a,desc:'"Nothern Cleaning group works closely with us to full fill our cleaning requirements, I have no hesitation in recommending them for all your cleaning needs."',position:"Practice Manager",company:"Templestowe District Medical Centre"}],te=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(I.a,{className:"header-color intro-name m-0"},"Testimonials"),l.a.createElement(I.a,{className:"p-2 m-0"},l.a.createElement(A.a,{md:"12"},l.a.createElement(I.a,{className:"service-box "},ae.map(function(e){return l.a.createElement(A.a,{md:"6",className:"p-5"},l.a.createElement(I.a,null,l.a.createElement("div",{style:{height:"3em",width:"3em",borderRadius:"50px",backgroundColor:"#2f87a6",color:"#ffffff"},className:"item-center"},l.a.createElement("i",{class:"fas fa-user"})),l.a.createElement(A.a,{className:"pb-2 px-4 text-left"},l.a.createElement(I.a,{className:"header-color text-left"},e.title),l.a.createElement(I.a,{style:{fontSize:"0.75em"},className:"header-color text-left"},e.position),l.a.createElement(I.a,{style:{fontSize:"0.75em"},className:"header-color text-left"},e.company))),l.a.createElement(I.a,{style:{paddingLeft:"3em"}},l.a.createElement(A.a,null,e.desc)))})))))}}]),a}(n.Component),ne=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(I.a,{className:"header-color intro-name m-0"},"Contact Us"),l.a.createElement(I.a,{className:"p-2 py-4 m-0"},l.a.createElement(A.a,{className:"p-2",md:"6"},l.a.createElement(I.a,{className:"item-center",style:{alignItems:"flex-start",justifyContent:"flex-start"}},l.a.createElement("div",{style:{height:"3em",width:"3em",borderRadius:"50px",backgroundColor:"#2f87a6",color:"#ffffff"},className:"item-center"},l.a.createElement("i",{class:"fas fa-user"})),l.a.createElement("div",{className:"text-left px-2"},l.a.createElement("span",{style:{fontSize:"1.2em"}},"Sandy Auwardt")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"tel:+61430504025"},"0430 504 025")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:sandy@northerncleaners.com.au"},"sandy@northerncleaners.com.au")))),l.a.createElement(A.a,{className:"p-2",md:"6"},l.a.createElement(I.a,{className:"item-center",style:{alignItems:"flex-start",justifyContent:"flex-start"}},l.a.createElement("div",{style:{height:"3em",width:"3em",borderRadius:"50px",backgroundColor:"#2f87a6",color:"#ffffff"},className:"item-center"},l.a.createElement("i",{class:"fas fa-user"})),l.a.createElement("div",{className:"text-left px-2"},l.a.createElement("span",{style:{fontSize:"1.2em"}},"Sanka Auwardt")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"tel:+610433076020"},"0433 076 020")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:sanka@northerncleaners.com.au"},"sanka@northerncleaners.com.au"))))),l.a.createElement(I.a,null,l.a.createElement(A.a,null,l.a.createElement(k,null))))}}]),a}(n.Component),le=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(I.a,{className:"m-0 p-2"},l.a.createElement(A.a,{md:"12"},l.a.createElement(I.a,null,l.a.createElement(A.a,{md:"12"},l.a.createElement("div",{className:"header-color intro-name"},"About Us"))),l.a.createElement(I.a,null,l.a.createElement(A.a,{md:"12"},l.a.createElement("div",{className:"col-md-offset-1 col-md-10 "},l.a.createElement("div",{className:"row remove-margin"},l.a.createElement("div",{style:{padding:"1em 0 1em 0"},className:"col-md-12"},"For over 7 years Northern Cleaners have specialized in providing professional cleaning services for commercial, industrial, office, medical and building construction industries throughout Melbourne. Our head office is located in Northern suburbs as well as many of the key clientele. Northern Cleaners provide genuine & quality cleaning services that strive to meet and exceed your expectations. We offer reasonable pricing and follow all relevant Modern Awards.")),l.a.createElement("div",{className:"row remove-margin"},l.a.createElement("div",{style:{padding:"1em 0 1em 0"},className:"col-md-12"},"Our company has established strong relationships with clients for many years, listening to their individual cleaning requirements to tailor-make a cleaning solution perfectly suited to their specific needs.")),l.a.createElement("div",{className:"row remove-margin"},l.a.createElement("div",{style:{padding:"1em 0 1em 0"},className:"col-md-12"},"Northern Cleaners are renowned for the highly trained staff who are selected and screened through a thorough induction and training process.")),l.a.createElement("div",{className:"row remove-margin pb-5"},l.a.createElement("div",{style:{padding:"1em 0 1em 0"},className:"col-md-12"},"We set high standards of cleaning using the modern equipment and approved chemicals. We specialize in",l.a.createElement("div",{className:"row remove-margin"},l.a.createElement("div",{className:"col-md-offset-1 col-md-11"},"- Disinfection of clinical & non-clinical areas")),l.a.createElement("div",{className:"row remove-margin"},l.a.createElement("div",{className:"col-md-offset-1 col-md-11"},"- Attention to detail on all work spaces")),l.a.createElement("div",{className:"row remove-margin"},l.a.createElement("div",{className:"col-md-offset-1 col-md-11"},"- Maintaining the highest hygiene standards")),"that results in a safer and neater working environment for staff and your valuable clients."))))))))}}]),a}(n.Component),ce=(t(72),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement($,null),l.a.createElement(u.a,{exact:!0,path:"/NorthernCleaners_web/",component:M}),l.a.createElement("div",{className:"container"},l.a.createElement(u.a,{exact:!0,path:"/NorthernCleaners_web/services",component:H}),l.a.createElement(u.a,{exact:!0,path:"/NorthernCleaners_web/testimonials",component:te}),l.a.createElement(u.a,{exact:!0,path:"/NorthernCleaners_web/contact",component:ne}),l.a.createElement(u.a,{exact:!0,path:"/NorthernCleaners_web/aboutus",component:le})),l.a.createElement(O,null)))}}]),a}(n.Component)),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(74);r.a.render(l.a.createElement(ce,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/NorthernCleaners_web",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/NorthernCleaners_web","/service-worker.js");re?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):se(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):se(e)})}}()}},[[51,1,2]]]);
//# sourceMappingURL=main.e177511b.chunk.js.map