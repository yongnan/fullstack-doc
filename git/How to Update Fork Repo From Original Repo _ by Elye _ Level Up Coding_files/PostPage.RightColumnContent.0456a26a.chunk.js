(self.webpackChunklite=self.webpackChunklite||[]).push([[11888,58916],{69100:(e,n,i)=>{var a=i(99489),t=i(57067);function r(n,i,l){return t()?e.exports=r=Reflect.construct:e.exports=r=function(e,n,i){var t=[null];t.push.apply(t,n);var r=new(Function.bind.apply(e,t));return i&&a(r,i.prototype),r},r.apply(null,arguments)}e.exports=r},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,n,i)=>{var a=i(29754),t=i(99489),r=i(70430),l=i(69100);function o(n){var i="function"==typeof Map?new Map:void 0;return e.exports=o=function(e){if(null===e||!r(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(e))return i.get(e);i.set(e,n)}function n(){return l(e,arguments,a(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t(n,e)},o(n)}e.exports=o},76972:(e,n,i)=>{"use strict";i.d(n,{Z:()=>l});var a=i(59910),t=i(13882),r=36e5;function l(e,n){(0,t.Z)(2,arguments);var i=(0,a.Z)(e,n)/r;return i>0?Math.floor(i):Math.ceil(i)}},67762:e=>{e.exports=function(e,n){for(var i,a=-1,t=e.length;++a<t;){var r=n(e[a]);void 0!==r&&(i=void 0===i?r:i+r)}return i}},12297:(e,n,i)=>{var a=i(67762),t=i(6557);e.exports=function(e){return e&&e.length?a(e,t):0}},23450:function(e){e.exports=function(){var e=[],n=[],i={},a={},t={};function r(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function l(e,n){return e===n?n:e===e.toUpperCase()?n.toUpperCase():e[0]===e[0].toUpperCase()?n.charAt(0).toUpperCase()+n.substr(1).toLowerCase():n.toLowerCase()}function o(e,n){return e.replace(/\$(\d{1,2})/g,(function(e,i){return n[i]||""}))}function d(e,n){return e.replace(n[0],(function(i,a){var t=o(n[1],arguments);return l(""===i?e[a-1]:i,t)}))}function s(e,n,a){if(!e.length||i.hasOwnProperty(e))return n;for(var t=a.length;t--;){var r=a[t];if(r[0].test(n))return d(n,r)}return n}function u(e,n,i){return function(a){var t=a.toLowerCase();return n.hasOwnProperty(t)?l(a,t):e.hasOwnProperty(t)?l(a,e[t]):s(t,a,i)}}function m(e,n,i,a){return function(a){var t=a.toLowerCase();return!!n.hasOwnProperty(t)||!e.hasOwnProperty(t)&&s(t,t,i)===t}}function c(e,n,i){return(i?n+" ":"")+(1===n?c.singular(e):c.plural(e))}return c.plural=u(t,a,e),c.isPlural=m(t,a,e),c.singular=u(a,t,n),c.isSingular=m(a,t,n),c.addPluralRule=function(n,i){e.push([r(n),i])},c.addSingularRule=function(e,i){n.push([r(e),i])},c.addUncountableRule=function(e){"string"!=typeof e?(c.addPluralRule(e,"$0"),c.addSingularRule(e,"$0")):i[e.toLowerCase()]=!0},c.addIrregularRule=function(e,n){n=n.toLowerCase(),e=e.toLowerCase(),t[e]=n,a[n]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach((function(e){return c.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return c.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return c.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(c.addUncountableRule),c}()},91575:(e,n,i)=>{"use strict";i.r(n),i.d(n,{RightColumnContent:()=>h,useLoader:()=>f});var a=i(46829),t=i(67294),r=i(36682),l=i(319),o=i.n(l),d=i(9273),s=i(15013),u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RecircSidebarQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"recirc"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"4"}}]}},{kind:"Argument",name:{kind:"Name",value:"postId"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RexRecircItem"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPresentationTracker_post"}}]}},{kind:"Field",name:{kind:"Name",value:"feedId"}}]}}]}}]}}]}}].concat(o()(d.Q.definitions),o()(s.h.definitions))},m=i(94986),c=i(50458),k=i(27628),p=i(10774),v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostPageRightColumnQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostResultError_postResult"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostRightColumn_post"}}]}}]}}]}}].concat(o()(k.i.definitions),o()(p.w.definitions))},f=function(e){var n=(0,t.useMemo)((function(){return(0,c.mrd)({params:e})}),[e.postId]),i=(0,a.useQuery)(v,{variables:{postId:n||""},skip:!n}),r=(0,a.useQuery)(u,{variables:{postId:n}});return(0,t.useMemo)((function(){return{loading:i.loading||r.loading,postRightColumnQueryResult:i,recircSidebarQueryResult:r}}),[i,r])},h=function(e){var n,i=e.postRightColumnQueryResult,a=e.recircSidebarQueryResult,l=null===(n=i.data)||void 0===n?void 0:n.postResult,o=a.data,d=a.refetch;return(0,m.rK)(l)?null:t.createElement(r.J,{post:l,recircData:o,recircRefetch:d})}},66802:(e,n,i)=>{"use strict";i.d(n,{R4:()=>t,Cp:()=>r,o6:()=>l,Ey:()=>o,Ue:()=>d,xG:()=>s,Hp:()=>u});var a=i(93661),t=function(e,n,i){var a,t;return"undefined"!=typeof window&&e&&n&&!!(window.ApplePaySession&&null!==(a=window.ApplePaySession)&&void 0!==a&&a.supportsVersion(i)&&null!==(t=window.ApplePaySession)&&void 0!==t&&t.canMakePayments())},r=function(e){return"US"===e||"CA"===e},l=function(e){return!!e&&(!e.country||r(e.country)&&!e.zipcode)},o=function(e){return"We couldn’t process your payment. Verify that you entered your ".concat("CreditCard"===e?"card ":"","information correctly, or try again with a different payment method.")},d=function(e,n){var i="";switch(n){case"CA":return e===a.FM.Monthly&&(i="monthlyCad"),e===a.FM.Yearly&&(i="yearlyCad"),i;default:return i}};function s(e){var n=e.amount,i=e.currency,a=e.locale,t=e.floatingDigits,r=void 0===t?[2,2]:t,l=e.isLongFormat,o=void 0!==l&&l,d=a||"undefined"!=typeof window&&window.navigator.language||"en-US",s=i||"USD";if(!Intl)return"".concat(n," ").concat(s);try{var u=new Intl.NumberFormat(d,{style:"currency",currency:s,minimumFractionDigits:r[0],maximumFractionDigits:r[1],currencyDisplay:"narrowSymbol"}).format(n);return o?"".concat(u," ").concat(i):u}catch(e){return String(n)}}var u=function(e,n,i){var a=String(e);return i?"".concat(a," ").concat(n):a}},10974:(e,n,i)=>{"use strict";i.d(n,{N:()=>p});var a=i(67294),t=i(25735),r=i(6443),l=i(77355),o=i(47230),d=i(21755),s=i(18627),u=i(66411),m=i(90924),c=i(92661),k=i(17583),p=function(e){var n=e.removeSpacing,i=void 0!==n&&n,p=(0,r.H)(),v=p.value,f=p.loading,h=(0,s.Av)(),S=(0,u.Lk)(),g=function(){h.event("upsell.clicked",{dimension:null==S?void 0:S.dimension,locationId:null==S?void 0:S.dimension})},y=(0,c.qt)("ShowPay",{}),N=(0,t.dd)("enable_top_nav_unlimited_access_cta"),b=N.loading,F=N.value,x=(0,t.dd)("enable_top_nav_unlimited_access_cta_returning_members"),w=x.loading,$=x.value,C=(0,k.s)()!==d.j.xs;return a.useEffect((function(){(i||C)&&h.event("experiment.eligible",{experimentId:null!=v&&v.hasPastMemberships?"1c5f54a74d11":"25e9e62b4cdc"})}),[]),v||f?null!=v&&v.mediumMemberAt||C&&(b||w)?null:a.createElement(l.x,{paddingTop:i?"0px":"40px",textAlign:"center"},a.createElement(u.cW,{extendSource:!0,source:{name:"upgrade_membership",dimension:"nav_full"}},a.createElement(m.M,null,C&&(F||$)?a.createElement(o.z,{href:y,buttonStyle:"BRAND",loading:f,width:"100%",onClick:g},"Get unlimited access"):a.createElement(o.z,{href:y,buttonStyle:"BRAND",loading:f,width:"100%",onClick:g},null!=v&&v.hasPastMemberships?"Resume Membership":"Upgrade")))):null}},14603:(e,n,i)=>{"use strict";i.d(n,{x:()=>u});var a=i(319),t=i.n(a),r=i(61243),l=i(37205),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowersCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowerCount_publisher"}}]}}].concat(t()(l.j.definitions))},d=i(1279),s=i(84492),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AuthorInfo_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherName_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowersCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherDescription_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_user"}}]}}].concat(t()(r.qy.definitions),t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherName_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),t()(o.definitions),t()(d.m.definitions),t()(s.i.definitions),t()(r.FB.definitions))}},10774:(e,n,i)=>{"use strict";i.d(n,{w:()=>l});var a=i(319),t=i.n(a),r=i(14603),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostRightColumn_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"firstPublishedAt"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AuthorInfo_user"}}]}}]}}].concat(t()(r.x.definitions))}},36682:(e,n,i)=>{"use strict";i.d(n,{J:()=>y});var a=i(67294),t=i(40358),r=i(12002),l=i(986),o=i(75374),d=i(77355),s=i(97217),u=i(57189),m=i(25550),c=i(49608),k=i(20113),p=i(66411),v=i(18305),f=i(43487),h=function(e){var n,i=e.postId,t=e.recircData,r=e.recircRefetch,l=(0,m.r)(),o=l.viewerId,s=l.loading,h=(0,f.v9)((function(e){return e.config.productName}));(0,a.useEffect)((function(){!s&&(0,c.Q)(o||"")&&r&&r()}),[s,r]);var S=null==t||null===(n=t.recirc)||void 0===n?void 0:n.items;if(null==S||!S.length||!r)return null;var g=S.slice(0,4);return a.createElement(d.x,null,a.createElement(d.x,{marginTop:"40px",marginBottom:"24px"},a.createElement(k.X6,{scale:"XS"},"More from ",h)),a.createElement(d.x,null,g.map((function(e,n){return null!=e&&e.post?a.createElement(p.cW,{source:{name:"read_next_recirc",index:n,feedId:e.feedId||void 0},key:"post-page-read-next-recirc".concat(i,"-").concat(n)},a.createElement(v.o,{post:e.post,presentationContext:"POST_PREVIEW"},a.createElement(u.N,{post:e.post,withFixedWidth:!1}))):null}))))},S=a.memo(h),g=["post"],y=function(e){var n=e.post,i=e.recircData,u=e.recircRefetch;return a.createElement(l.c,null,a.createElement(d.x,{backgroundColor:"BACKGROUND"},a.createElement(t.E,null),a.createElement(d.x,{padding:"40px 0"},a.createElement(o.f,{algoliaIndexes:g,algoliaQueryContext:"post"}),a.createElement(d.x,{marginTop:"40px"}),n.creator&&a.createElement(r.d,{user:n.creator}),!!n.firstPublishedAt&&n.visibility!==s.Wn.UNLISTED&&a.createElement(d.x,{marginTop:"32px"},a.createElement(S,{postId:n.id,recircData:i,recircRefetch:u})))))}},93661:(e,n,i)=>{"use strict";i.d(n,{FM:()=>r,d5:()=>c,kr:()=>k,OS:()=>p});var a,t,r,l=i(59713),o=i.n(l),d=i(66802),s=i(25735),u=i(91157);!function(e){e.Monthly="monthly",e.Yearly="yearly",e.YearlyStaff="yearlyStaff",e.YearlyPriceSaved="yearlyPriceSaved",e.YearlyStaffPriceSaved="YearlyStaffPriceSaved"}(r||(r={}));var m={CA:{plan:(a={},o()(a,r.Monthly,5),o()(a,r.Yearly,50),o()(a,r.YearlyStaff,1),o()(a,r.YearlyPriceSaved,10),o()(a,r.YearlyStaffPriceSaved,49),a),currency:"CAD"},US:{plan:(t={},o()(t,r.Monthly,5),o()(t,r.Yearly,50),o()(t,r.YearlyStaff,1),o()(t,r.YearlyPriceSaved,10),o()(t,r.YearlyStaffPriceSaved,49),t),currency:"USD"}},c=function(){var e=(0,u.x)(),n=e.loading,i=e.geolocation,a=!!(0,s.VB)({name:"enable_lite_canada_plan",placeholder:!1}),t=!n&&i&&i.country?i.country:"";return a&&"CA"===t?"CA":"US"},k=function(e){var n=e.membershipType,i=e.country,a=m[i],t=a.currency,l=a.plan[n||r.Yearly];if(!l)throw new Error("Unavailable membership price");return{amount:l,currency:t}},p=function(e){var n=e.membershipType,i=e.excludeCurrencySign,a=void 0!==i&&i,t=e.isLongFormat,r=void 0!==t&&t,l=c(),o=k({membershipType:n,country:l}),s=o.amount,u=o.currency;return a?(0,d.Hp)(s,u,r):(0,d.xG)({amount:s,currency:u,floatingDigits:[0,0],isLongFormat:r})}},37205:(e,n,i)=>{"use strict";i.d(n,{j:()=>a});var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowerCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"username"}}]}}]}}]}},61243:(e,n,i)=>{"use strict";i.d(n,{qy:()=>u,FB:()=>m});var a=i(319),t=i.n(a),r=i(89199),l=i(68216),o=i(14337),d=i(54341),s=i(77136),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}}]},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(t()(r.b.definitions),t()(l.$m.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}}].concat(t()(o.v.definitions))};[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PublisherSidebarFollowsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherSidebarFollows_followedEntity"}}]}}]}}]}}].concat(t()(d.O.definitions),t()(c.definitions),t()(s.g.definitions))},9273:(e,n,i)=>{"use strict";i.d(n,{Q:()=>u});var a=i(319),t=i.n(a),r=i(27048),l=i(68216),o=i(54341),d=i(4088),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}}].concat(t()(r.W.definitions),t()(l.$m.definitions),t()(o.O.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ReadNextPostCard_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReadNextPostCard_user"}}]}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"alt"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat(t()(s.definitions),t()(l.nf.definitions),t()(d.u.definitions))}},57189:(e,n,i)=>{"use strict";i.d(n,{N:()=>g});var a=i(67294),t=i(25145),r=i(68427),l=i(84739),o=i(12643),d=i(4381),s=i(17193),u=i(28695),m=i(93310),c=i(27323),k=i(77355),p=i(26244),v=i(87691),f=i(52069),h=i(14646),S=i(46696),g=function(e){var n,i,g,y=e.post,N=e.withFixedWidth,b=void 0===N||N,F=y&&y.previewImage||{},x=F.focusPercentX,w=F.focusPercentY,$=F.id,C=F.alt,E=y.collection,P=y.creator,D=null!==(n=null==y?void 0:y.title)&&void 0!==n?n:"",_=(0,t.L)(y),R=null!==(i=null==E?void 0:E.name)&&void 0!==i?i:null,I=(0,r.B)(),T=(0,l.I)();P&&(g=T(P));var A=$?"170px":"".concat(226,"px"),U=(0,h.I)(),M=(0,a.useCallback)((function(){return P&&a.createElement(u.K,{user:P})}),[P]);return a.createElement(c.P,{href:_},a.createElement(k.x,{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"24px"},a.createElement(k.x,{display:"flex",flexDirection:"row",justifyContent:"space-between"},a.createElement(k.x,{display:"flex",flexDirection:"column",marginRight:"24px",flexGrow:"1",flexBasis:"0%"},P&&a.createElement(k.x,{display:"flex",alignItems:"center",marginBottom:"8px"},a.createElement(k.x,{marginRight:"8px"},a.createElement(m.r,{href:g},a.createElement(s.Yt,{scale:"XXXS",user:P}))),a.createElement(k.x,{paddingRight:"4px"},a.createElement(p.$,{targetDistance:15,mouseLeaveDelay:100,placement:"top",role:"tooltip",popoverRenderFn:M},a.createElement(k.x,{display:"flex"},a.createElement(m.r,{href:g},a.createElement(v.F,{scale:"S",color:"DARKER",clamp:1},P.name))))),E&&E.name&&a.createElement(a.Fragment,null,a.createElement(k.x,{paddingRight:"4px"},a.createElement(v.F,{scale:"S",color:"LIGHTER"},"in")),a.createElement(k.x,null,a.createElement(m.r,{href:I(E)},a.createElement(v.F,{scale:"S",color:"DARKER",clamp:1},R))))),D&&a.createElement(f.Dx,{scale:"XS",clamp:3},a.createElement("div",{className:b?U({width:A}):void 0},D))),a.createElement(k.x,{width:"56px"},$&&a.createElement(o.G,{height:1,width:1},a.createElement(d.UV,{miroId:$,alt:C||"",aspectRatio:d.Pr.Square,strategy:S._S.Crop,width:56,rules:{borderRadius:"2px"},focusPercentX:x||50,focusPercentY:w||50,freezeGifs:!0}))))))}},12643:(e,n,i)=>{"use strict";i.d(n,{G:()=>r});var a=i(67294),t=i(77355),r=a.forwardRef((function(e,n){var i=e.height,r=void 0===i?1:i,l=e.width,o=void 0===l?1:l,d=e.backgroundColor,s=void 0===d?"BASE_NORMAL":d,u=e.children,m=(o=o||1)/(r=r||1);return a.createElement(t.x,{position:"relative",margin:"auto",backgroundColor:s,ref:n},a.createElement(t.x,{paddingBottom:"".concat(100/m,"%"),height:"0"},u))}))},84492:(e,n,i)=>{"use strict";i.d(n,{i:()=>o});var a=i(319),t=i.n(a),r=i(78693),l=i(71069),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FollowAndSubscribeButtons_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserSubscribeButton_user"}}]}}].concat(t()(r.s.definitions),t()(l.w.definitions))}},62685:(e,n,i)=>{"use strict";i.d(n,{$:()=>a,o:()=>F});var a,t=i(67154),r=i.n(t),l=i(63038),o=i.n(l),d=i(6479),s=i.n(d),u=i(46829),m=i(67294),c=i(98863),k=i(6443),p=i(81978),v=i(77355),f=i(93310),h=i(73917),S=i(87691),g=i(29746),y=i(18627),N=i(14646);!function(e){e.CTA="CTA",e.DISMISSED="DISMISSED"}(a||(a={}));var b=function(e){var n=e.children,i=e.flag,t=e.text,l=e.renderFn,d=e.viewer,c=e.padding,k=void 0===c?16:c,b=e.placement,F=e.darkTheme,x=e.dismissText,w=void 0===x?"Got it":x,$=e.onDismiss,C=e.preventParentClick,E=s()(e,["children","flag","text","renderFn","viewer","padding","placement","darkTheme","dismissText","onDismiss","preventParentClick"]),P=(0,y.Av)(),D=m.useState(!1),_=o()(D,2),R=_[0],I=_[1],T=(0,u.useMutation)(p.a,{variables:{userId:d.id,flag:i}}),A=o()(T,1)[0],U=(0,N.I)(),M=m.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.DISMISSED;I(!1),A(),$&&$(),P.event("user.dismissedPopover",{flag:i,action:e})}),[R,$]);m.useEffect((function(){return I(!0)}),[]);var V=m.useCallback((function(){return m.createElement(v.x,{minWidth:"200px",padding:(0,g.a)(k)},m.createElement(S.F,{scale:"S",color:"WHITE"},t),m.createElement(v.x,{marginTop:"8px"},m.createElement(S.F,{scale:"S",color:F?"WHITE":void 0},m.createElement(f.r,{onClick:function(e){C&&e.preventDefault(),M(a.DISMISSED)}},m.createElement("span",{className:U(h.u)},w)))))}),[M,k,t,C]);return m.createElement(h.J,r()({disablePortalOverlay:!0,hide:M,isVisible:R,popoverRenderFn:l?l(M):V,darkTheme:!0,placement:b},E),n)},F=function(e){var n=e.children,i=e.flag,a=e.isVisible,t=void 0===a||a,l=s()(e,["children","flag","isVisible"]),o=(0,c.f)().isWorkingPreview,d=(0,k.H)().value;return o||null!=d&&d.dismissableFlags.includes(i)||!d||!t?n:m.createElement(b,r()({flag:i,viewer:d},l),n)}},15013:(e,n,i)=>{"use strict";i.d(n,{h:()=>a});var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPresentationTracker_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"previewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFullContent"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]}}]}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/PostPage.RightColumnContent.0456a26a.chunk.js.map