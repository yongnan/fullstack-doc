(self.webpackChunklite=self.webpackChunklite||[]).push([[15662],{353:(e,n,i)=>{"use strict";i.d(n,{Z:()=>o});var a=i(67294);function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var d=a.createElement("path",{d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z",fill:"#292929"});const o=function(e){return a.createElement("svg",t({width:25,height:25,viewBox:"0 0 25 25",fill:"none"},e),d)}},15617:(e,n,i)=>{"use strict";i.d(n,{$l:()=>c,Gm:()=>o,_C:()=>r});var a=i(319),t=i.n(a),d=i(8864),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBase_bookEdition"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BookEdition"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"book"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]}}]},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBaseQuery_bookEdition"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BookEdition"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"book"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefined"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"editCatalogItemsMutation_bookEditionViewerEdge"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_bookEditionViewerEdge"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"WithToggleInsideCatalog_bookEdition"}}]}}].concat(t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"editCatalogItemsMutation_bookEditionViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BookEditionViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]),t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_bookEditionViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BookEditionViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]),t()(d.tA.definitions))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBase_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"editCatalogItemsMutation_postViewerEdge"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"WithToggleInsideCatalog_post"}}]}}].concat(t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"editCatalogItemsMutation_postViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]),t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]),t()(d.m7.definitions))},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AddToCatalogBaseQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"bookSlug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isBookKind"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"bookBySlugResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"bookSlug"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"isBookKind"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Book"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"editions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"format"},value:{kind:"EnumValue",value:"EBOOK"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBaseQuery_bookEdition"}}]}}]}}]}}]}}].concat(t()(s.definitions),t()(l.definitions))}},65331:(e,n,i)=>{"use strict";i.d(n,{a:()=>Se});var a=i(67154),t=i.n(a),d=i(6479),o=i.n(d),l=i(63038),r=i.n(l),s=i(46829),c=i(67294),m=i(59713),u=i.n(m),k=i(319),g=i.n(k),v=i(39210),p=i(44977),f=i(77355),S=i(93310),N=i(87691),I=i(14646),C=i(78285),y=i(28655),b=i.n(y),h=i(71439),E=i(60015),T=i(87529),F=i(61609),P=i(97217);function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var O=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.73 3.08A2.21 2.21 0 0 1 5 .94c1.26 0 2.27.97 2.27 2.14v2.44H2.73V3.08zm5.46 2.44V3.08C8.18 1.38 6.74 0 5 0a3.13 3.13 0 0 0-3.18 3.08v2.44c-.49 0-.95.2-1.29.55A1.9 1.9 0 0 0 0 7.39v3.74a1.9 1.9 0 0 0 .53 1.32A1.8 1.8 0 0 0 1.8 13H8.2c.48 0 .94-.2 1.28-.55.34-.35.53-.82.53-1.32V7.4a1.9 1.9 0 0 0-.53-1.32 1.8 1.8 0 0 0-1.28-.55z",fill:"#A8A8A8"});const _=function(e){return c.createElement("svg",w({width:10,height:13,viewBox:"0 0 10 13",fill:"none"},e),O)};var V=i(92305),A=i(54758);function B(){var e=b()(["\n  fragment WithToggleInsideCatalog_post on Post {\n    id\n    viewerEdge {\n      catalogsConnection {\n        catalogsContainingThis(type: LISTS) {\n          catalogId\n        }\n        predefinedContainingThis {\n          predefined\n        }\n      }\n    }\n  }\n"]);return B=function(){return e},e}function j(){var e=b()(["\n  fragment WithToggleInsideCatalog_bookEdition on BookEdition {\n    id\n    book {\n      id\n    }\n    viewerEdge {\n      catalogsConnection {\n        catalogsContainingThis(type: LISTS) {\n          catalogId\n        }\n        predefinedContainingThis {\n          predefined\n        }\n      }\n    }\n  }\n"]);return j=function(){return e},e}function D(){var e=b()(["\n  fragment WithToggleInsideCatalog_catalog on Catalog {\n    id\n    version\n    predefined\n  }\n"]);return D=function(){return e},e}function x(e){var n,i,a=e.children,t=e.target,d=e.kind,o=e.catalog,l=e.viewer,s=c.useMemo((function(){if(o.predefined){var e,n=null===(e=t.viewerEdge.catalogsConnection)||void 0===e?void 0:e.predefinedContainingThis.find((function(e){return e.predefined===o.predefined}));return[!!n,null==n?void 0:n.catalogItemIds]}var i,a=null===(i=t.viewerEdge.catalogsConnection)||void 0===i?void 0:i.catalogsContainingThis.find((function(e){return e.catalogId===o.id}));return[!!a,null==a?void 0:a.catalogItemIds]}),[o.predefined,o.id,t.viewerEdge]),m=r()(s,2),u=m[0],k=m[1],g=(0,A.qY)(l.id,o.id,o.version,t.id,d,d===P.ej.BOOK_EDITION?{bookId:t.book.id}:void 0,null!==(n=o.predefined)&&void 0!==n?n:void 0),v=r()(g,2),p=v[0],f=v[1].loading,S=(0,A.jN)(l.id,o.id,o.version,t.id,d,k||[],d===P.ej.BOOK_EDITION?{bookId:t.book.id}:void 0,null!==(i=o.predefined)&&void 0!==i?i:void 0),N=r()(S,2),I=N[0],C=N[1].loading;return a({toggleInsideCatalog:u?I:p,isInsideCatalog:u,loading:f||C})}var R=(0,h.Ps)(D());function L(){var e=b()(["\n  fragment CatalogAddToListItem_catalog on Catalog {\n    id\n    name\n    visibility\n    predefined\n    version\n    ...WithToggleInsideCatalog_catalog\n  }\n  ","\n"]);return L=function(){return e},e}(0,h.Ps)(j()),(0,h.Ps)(B());var K={display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",paddingRight:"5px"},M=function(e){return{marginBottom:"1px","& path":{fill:e.baseColor.border.normal}}};function H(e){var n=e.catalog,i=e.target,a=e.kind,t=e.viewer,d=(0,I.I)();return c.createElement(x,{viewer:t,target:i,kind:a,catalog:n},(function(e){var i=e.toggleInsideCatalog,a=e.isInsideCatalog,t=e.loading,o=n.predefined?(0,V.S6)(n.predefined):n.name;return c.createElement("div",{className:d(K)},c.createElement(F.X,{key:n.id,checked:a,checkboxStyle:"OBVIOUS",onChange:i,disabled:t||n.visibility===P.n2.LOCKED,textScale:"L",clampText:1},o),n.visibility!==P.n2.PUBLIC&&c.createElement(f.x,{paddingLeft:"8px"},c.createElement(_,{className:d(M)})))}))}var Q=(0,h.Ps)(L(),R);function W(){var e=b()(["\n  fragment CatalogAddToList_catalog on Catalog {\n    ...CatalogAddToListItem_catalog\n  }\n  ","\n"]);return W=function(){return e},e}function z(e){var n=e.target,i=e.kind,a=e.catalogs,t=e.isLoading,d=e.viewer,o=e.fetchMore,l=e.scrollableEl;return t?c.createElement(f.x,{display:"flex",justifyContent:"center",padding:"40px 0"},c.createElement(N.F,{color:"DARKER",scale:"L"},c.createElement(T.T,null))):a?c.createElement(E.P,{fetchMore:o,scrollableEl:l},a.map((function(e){return c.createElement(H,{viewer:d,key:e.id,catalog:e,target:n,kind:i})}))):null}function U(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function $(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?U(Object(i),!0).forEach((function(n){u()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):U(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}(0,h.Ps)(W(),Q);var G={maxHeight:"240px",overflowY:"auto",padding:"24px 20px 16px 24px"};function Y(e){var n,i,a,t=e.target,d=e.kind,o=e.showCreateModal,l=e.hidePanel,r=e.viewer,m=c.useRef(null),u=(0,I.I)(),k=(0,v.Ln)({limit:v.W,userId:r.id}),y=(0,C.w)(),b=(0,s.useQuery)(p.D,{variables:k}),h=b.data,E=b.error,T=b.loading,F=b.fetchMore;c.useEffect((function(){E&&y({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[E]);var P,w=c.useCallback((function(){o(),l()}),[o,l]),O=null==h?void 0:h.catalogsByUser.catalogs;return O&&"Catalog"===(null==h||null===(n=h.readingList)||void 0===n?void 0:n.__typename)&&(O=[h.readingList].concat(g()(O))),null!=h&&null!==(i=h.catalogsByUser)&&void 0!==i&&null!==(a=i.paging)&&void 0!==a&&a.nextPageCursor&&(P=function(){return F({variables:$($({},k),{},{pagingOptions:$($({},k.pagingOptions),{},{cursor:{id:h.catalogsByUser.paging.nextPageCursor.id}})})})}),c.createElement(f.x,{width:"300px"},c.createElement("div",{className:u(G),ref:m},c.createElement(z,{target:t,kind:d,viewer:r,catalogs:O,isLoading:T,fetchMore:P,scrollableEl:m.current})),!T&&c.createElement(f.x,{borderTop:"BASE_LIGHTER",padding:"20px 24px 24px"},c.createElement(N.F,{color:"ACCENT",scale:"L"},c.createElement(S.r,{onClick:w},"Create new list"))))}var q=i(63508),J=i(50361),X=i.n(J),Z=i(12476),ee=i(18627),ne=i(91299),ie=i(11462);function ae(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function te(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?ae(Object(i),!0).forEach((function(n){u()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ae(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function de(){var e=b()(["\n  fragment useAddItemToPredefinedCatalog_postViewerEdge on PostViewerEdge {\n    id\n    catalogsConnection {\n      predefinedContainingThis {\n        catalogId\n        version\n        predefined\n        catalogItemIds\n      }\n    }\n  }\n"]);return de=function(){return e},e}function oe(){var e=b()(["\n  fragment useAddItemToPredefinedCatalog_bookEditionViewerEdge on BookEditionViewerEdge {\n    id\n    catalogsConnection {\n      predefinedContainingThis {\n        catalogId\n        version\n        predefined\n        catalogItemIds\n      }\n    }\n  }\n"]);return oe=function(){return e},e}function le(){var e=b()(["\n  mutation AddToPredefinedCatalog(\n    $type: PredefinedCatalogType!\n    $operation: PredefinedCatalogAddOperationInput!\n  ) {\n    addToPredefinedCatalog(type: $type, operation: $operation) {\n      __typename\n      ... on AddToPredefinedCatalogSucces {\n        version\n        insertedItem {\n          __typename\n          catalogItemId\n          catalogId\n        }\n      }\n    }\n  }\n"]);return le=function(){return e},e}var re="temp-catalog-id",se=(0,h.Ps)(le()),ce=(0,h.Ps)(oe()),me=(0,h.Ps)(de()),ue=i(73917),ke=i(66227),ge=i(68894),ve=i(15617),pe=i(62212);function fe(e){var n=e.children,i=e.isPanelVisible,a=e.hidePanel,t=e.togglePanel,d=e.target,o=e.kind,l=e.viewer,m=e.bookmarkIcon,u=e.isInACatalog,k=e.isInReadingList,g=e.catalogsCount,v=e.popoverDisplay,p=(0,ge.O)(!1),f=r()(p,3),S=f[0],N=f[1],I=f[2],C=function(e,n,i,a){var t=(0,ee.Av)(),d=(0,s.useMutation)(se,{variables:{type:n,operation:{preprend:{type:a,id:i}}},optimisticResponse:{addToPredefinedCatalog:{__typename:"AddToPredefinedCatalogSucces",version:A.xt,insertedItem:{__typename:"CatalogItemV2",catalogId:re,catalogItemId:A.PH}}},onCompleted:function(e){if("AddToPredefinedCatalogSucces"===e.addToPredefinedCatalog.__typename&&a===P.ej.POST){var n=e.addToPredefinedCatalog.insertedItem;t.event("post.addToList",{listId:n.catalogId,postId:n.catalogItemId})}},update:function(t,d){var o,l=null===(o=d.data)||void 0===o?void 0:o.addToPredefinedCatalog;if("AddToPredefinedCatalogSucces"===(null==l?void 0:l.__typename)){var r,s,c=l.insertedItem,m=l.version;if(c.catalogId!==re&&((0,Z.UV)(t,c.catalogId,m),(0,Z.Rx)(t,c.catalogId,[c.catalogItemId],a)),a===P.ej.BOOK_EDITION)r="BookEditionViewerEdge:".concat((0,ne.j)(i,e)),s=ce;else{if(a!==P.ej.POST)return;r="PostViewerEdge:".concat((0,ie.Q)(i,e)),s=me}var u=t.readFragment({id:r,fragment:s});if(null!=u&&u.catalogsConnection){var k=X()(u.catalogsConnection.predefinedContainingThis),g=k.findIndex((function(e){return e.predefined===n}));if(-1!==g)k[g].catalogItemIds.push(c.catalogItemId);else{var v={catalogId:c.catalogId,predefined:n,version:m,catalogItemIds:[c.catalogItemId]};k.push(v)}t.writeFragment({id:r,fragment:s,data:te(te({},u),{},{catalogsConnection:te(te({},u.catalogsConnection),{},{predefinedContainingThis:k})})})}}}});return r()(d,1)[0]}(l.id,P.l8.READING_LIST,d.id,o),y=c.useCallback((function(){t(),k||u||C()}),[t,u,k,C]);return c.createElement(ue.J,{isVisible:i,popoverRenderFn:function(){return c.createElement(Y,{showCreateModal:N,hidePanel:a,target:d,kind:o,viewer:l})},hide:a,targetDistance:15,referenceWidth:"100%",display:v},c.createElement(q.a,{isVisible:S,hide:I,target:d,kind:o,viewer:l}),null==n?void 0:n({onClick:y,bookmarkIcon:m,catalogsCount:g,isPanelVisible:i}))}function Se(e){var n,i,a,d,l=e.viewer,r=o()(e,["viewer"]),m=c.useMemo((function(){return r.kind===P.ej.POST?{postId:r.target.id,bookSlug:"",isPostKind:!0,isBookKind:!1}:r.kind===P.ej.BOOK_EDITION?{postId:"",bookSlug:r.target.book.slug,isPostKind:!1,isBookKind:!0}:{postId:"",bookSlug:"",isPostKind:!1,isBookKind:!1}}),[r.kind,r.target]),u=(0,s.useQuery)(ve.$l,{ssr:!1,variables:m}).data,k=null,g=null;"Post"===(null==u||null===(n=u.postResult)||void 0===n?void 0:n.__typename)?(k=u.postResult.viewerEdge.catalogsConnection,g=u.postResult):"Book"===(null==u||null===(i=u.bookBySlugResult)||void 0===i?void 0:i.__typename)&&u.bookBySlugResult.editions[0]&&(k=u.bookBySlugResult.editions[0].viewerEdge.catalogsConnection,g=u.bookBySlugResult.editions[0]);var v=(null===(a=k)||void 0===a?void 0:a.catalogsContainingThis)&&k.catalogsContainingThis.length>0,p=c.useMemo((function(){var e,n;return!!(null===(e=k)||void 0===e||null===(n=e.predefinedContainingThis)||void 0===n?void 0:n.find((function(e){return e.predefined===P.l8.READING_LIST})))}),[k]),f=c.useMemo((function(){var e;return((null===(e=k)||void 0===e?void 0:e.catalogsContainingThis.length)||0)+(p?1:0)}),[null===(d=k)||void 0===d?void 0:d.catalogsContainingThis.length,p]),S=c.createElement(pe.l,{insideACatalog:!!v||p});return m.isBookKind||m.isPostKind?l&&k&&g?c.createElement(ke.B,null,(function(e){var n=e.isVisible,i=e.toggle,a=e.hide;return c.createElement(fe,t()({},r,{target:g,viewer:l,isPanelVisible:n,togglePanel:i,hidePanel:a,bookmarkIcon:S,isInACatalog:!!v,isInReadingList:p,catalogsCount:f}))})):S:null}},62212:(e,n,i)=>{"use strict";i.d(n,{l:()=>v,K:()=>m});var a=i(67294),t=i(14646);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var o=a.createElement("path",{d:"M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z",fill:"#000"});const l=function(e){return a.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),o)};function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var s=a.createElement("path",{d:"M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z",fill:"#000"});const c=function(e){return a.createElement("svg",r({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),s)};var m=function(e){return{"& path":{fill:e.baseColor.border.darker}}},u=function(e){return{"& path":{fill:e.baseColor.fill.darker}}},k=function(){var e=(0,t.I)();return a.createElement(l,{className:e(m)})},g=function(){var e=(0,t.I)();return a.createElement(c,{className:e(u)})};function v(e){return e.insideACatalog?a.createElement(g,null):a.createElement(k,null)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/15662.842e1340.chunk.js.map