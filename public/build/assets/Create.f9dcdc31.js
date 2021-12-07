import{u as le,C as ie,g as ue,i as U,k as _,m as p,n as y,b4 as ce,a4 as D,aU as de,O as pe,q as me,r as u,o as E,c as xe,b as r,w as o,t as V,y as e,s as w,z as S,v as $,x as b,A as M,a0 as ge,B as _e,F as ye}from"./vendor.e9042f2c.js";import{k as fe,c as ve,z as Ee,s as $e,l as be,g as he,m as Be}from"./main.c8c9089c.js";import{_ as Ce}from"./CreateCustomFields.5dfed71a.js";import{_ as Ve}from"./CategoryModal.4da8d411.js";import{_ as we}from"./ExchangeRateConverter.b8989537.js";const Se=["onSubmit"],Me={class:"hidden md:block"},Ie={class:"block md:hidden"},Re={setup(qe){const P=fe(),I=ve(),n=Ee(),R=$e(),j=be(),N=he(),g=le(),G=ie(),{t:c}=ue(),q=Be();let m=U(!1),i=U(!1);const k="newExpense",z=_(()=>({currentExpense:{expense_category_id:{required:p.withMessage(c("validation.required"),y)},expense_date:{required:p.withMessage(c("validation.required"),y)},amount:{required:p.withMessage(c("validation.required"),y),minValue:p.withMessage(c("validation.price_minvalue"),ce(.1)),maxLength:p.withMessage(c("validation.price_maxlength"),D(20))},notes:{maxLength:p.withMessage(c("validation.description_maxlength"),D(65e3))},currency_id:{required:p.withMessage(c("validation.required"),y)},exchange_rate:{required:de(function(){return p.withMessage(c("validation.required"),y),n.showExchangeRate}),decimal:p.withMessage(c("validation.valid_exchange_rate"),pe)}}})),l=me(z,n,{$scope:k}),h=_({get:()=>n.currentExpense.amount/100,set:t=>{n.currentExpense.amount=Math.round(t*100)}}),d=_(()=>g.name==="expenses.edit"),F=_(()=>d.value?c("expenses.edit_expense"):c("expenses.new_expense")),T=_(()=>d.value?`/expenses/${g.params.id}/download-receipt`:"");n.resetCurrentExpenseData(),j.resetCustomFields(),Q();function A(t,a){n.currentExpense.attachment_receipt=a}function L(){n.currentExpense.attachment_receipt=null}function H(){N.openModal({title:c("settings.expense_category.add_category"),componentName:"CategoryModal",size:"sm"})}function O(t){n.currentExpense.selectedCurrency=q.currencies.find(a=>a.id===t)}async function J(t){return(await R.fetchCategories({search:t})).data.data}async function K(t){return(await P.fetchCustomers({search:t})).data.data}async function Q(){d.value||(n.currentExpense.currency_id=I.selectedCompanyCurrency.id,n.currentExpense.selectedCurrency=I.selectedCompanyCurrency),i.value=!0,await n.fetchPaymentModes({limit:"all"}),d.value?(await n.fetchExpense(g.params.id),n.currentExpense.currency_id=n.currentExpense.selectedCurrency.id):g.query.customer&&(n.currentExpense.customer_id=g.query.customer),i.value=!1}async function W(){if(l.value.$touch(),l.value.$invalid)return;m.value=!0;let t=n.currentExpense;try{d.value?await n.updateExpense({id:g.params.id,data:t}):await n.addExpense(t),m.value=!1,G.push("/admin/expenses")}catch(a){console.error(a),m.value=!1;return}}return(t,a)=>{const B=u("BaseBreadcrumbItem"),X=u("BaseBreadcrumb"),f=u("BaseIcon"),C=u("BaseButton"),Y=u("BasePageHeader"),Z=u("BaseSelectAction"),v=u("BaseMultiselect"),x=u("BaseInputGroup"),ee=u("BaseDatePicker"),ne=u("BaseMoney"),te=u("BaseTextarea"),ae=u("BaseFileUploader"),re=u("BaseInputGrid"),se=u("BaseCard"),oe=u("BasePage");return E(),xe(ye,null,[r(Ve),r(oe,{class:"relative"},{default:o(()=>[V("form",{action:"",onSubmit:_e(W,["prevent"])},[r(Y,{title:e(F),class:"mb-5"},{actions:o(()=>[e(d)&&e(n).currentExpense.attachment_receipt?(E(),w(C,{key:0,href:e(T),tag:"a",variant:"primary-outline",type:"button",class:"mr-2"},{left:o(s=>[r(f,{name:"DownloadIcon",class:S(s.class)},null,8,["class"])]),default:o(()=>[$(" "+b(t.$t("expenses.download_receipt")),1)]),_:1},8,["href"])):M("",!0),V("div",Me,[r(C,{loading:e(m),"content-loading":e(i),disabled:e(m),variant:"primary",type:"submit"},{left:o(s=>[e(m)?M("",!0):(E(),w(f,{key:0,name:"SaveIcon",class:S(s.class)},null,8,["class"]))]),default:o(()=>[$(" "+b(e(d)?t.$t("expenses.update_expense"):t.$t("expenses.save_expense")),1)]),_:1},8,["loading","content-loading","disabled"])])]),default:o(()=>[r(X,null,{default:o(()=>[r(B,{title:t.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),r(B,{title:t.$tc("expenses.expense",2),to:"/admin/expenses"},null,8,["title"]),r(B,{title:e(F),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),r(se,null,{default:o(()=>[r(re,null,{default:o(()=>[r(x,{label:t.$t("expenses.category"),error:e(l).currentExpense.expense_category_id.$error&&e(l).currentExpense.expense_category_id.$errors[0].$message,"content-loading":e(i),required:""},{default:o(()=>[r(v,{modelValue:e(n).currentExpense.expense_category_id,"onUpdate:modelValue":a[0]||(a[0]=s=>e(n).currentExpense.expense_category_id=s),"content-loading":e(i),"value-prop":"id",label:"name","track-by":"id",options:J,"filter-results":!1,"resolve-on-load":"",delay:500,searchable:"",invalid:e(l).currentExpense.expense_category_id.$error,placeholder:t.$t("expenses.categories.select_a_category"),onInput:a[1]||(a[1]=s=>e(l).currentExpense.expense_category_id.$touch())},{action:o(()=>[r(Z,{onClick:H},{default:o(()=>[r(f,{name:"PlusIcon",class:"h-4 mr-2 -ml-2 text-center text-primary-400"}),$(" "+b(t.$t("settings.expense_category.add_new_category")),1)]),_:1})]),_:1},8,["modelValue","content-loading","invalid","placeholder"])]),_:1},8,["label","error","content-loading"]),r(x,{label:t.$t("expenses.expense_date"),error:e(l).currentExpense.expense_date.$error&&e(l).currentExpense.expense_date.$errors[0].$message,"content-loading":e(i),required:""},{default:o(()=>[r(ee,{modelValue:e(n).currentExpense.expense_date,"onUpdate:modelValue":a[2]||(a[2]=s=>e(n).currentExpense.expense_date=s),"content-loading":e(i),"calendar-button":!0,invalid:e(l).currentExpense.expense_date.$error,onInput:a[3]||(a[3]=s=>e(l).currentExpense.expense_date.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","error","content-loading"]),r(x,{label:t.$t("expenses.amount"),error:e(l).currentExpense.amount.$error&&e(l).currentExpense.amount.$errors[0].$message,"content-loading":e(i),required:""},{default:o(()=>[r(ne,{key:e(n).currentExpense.selectedCurrency,modelValue:e(h),"onUpdate:modelValue":a[4]||(a[4]=s=>ge(h)?h.value=s:null),class:"focus:border focus:border-solid focus:border-primary-500",invalid:e(l).currentExpense.amount.$error,currency:e(n).currentExpense.selectedCurrency,onInput:a[5]||(a[5]=s=>e(l).currentExpense.amount.$touch())},null,8,["modelValue","invalid","currency"])]),_:1},8,["label","error","content-loading"]),r(x,{label:t.$t("expenses.currency"),"content-loading":e(i),error:e(l).currentExpense.currency_id.$error&&e(l).currentExpense.currency_id.$errors[0].$message,required:""},{default:o(()=>[r(v,{modelValue:e(n).currentExpense.currency_id,"onUpdate:modelValue":[a[6]||(a[6]=s=>e(n).currentExpense.currency_id=s),O],"value-prop":"id",label:"name","track-by":"name","content-loading":e(i),options:e(q).currencies,searchable:"","can-deselect":!1,placeholder:t.$t("customers.select_currency"),invalid:e(l).currentExpense.currency_id.$error,class:"w-full"},null,8,["modelValue","content-loading","options","placeholder","invalid"])]),_:1},8,["label","content-loading","error"]),r(we,{store:e(n),"store-prop":"currentExpense",v:e(l).currentExpense,"is-loading":e(i),"is-edit":e(d),"customer-currency":e(n).currentExpense.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"]),r(x,{"content-loading":e(i),label:t.$t("expenses.customer")},{default:o(()=>[r(v,{modelValue:e(n).currentExpense.customer_id,"onUpdate:modelValue":a[7]||(a[7]=s=>e(n).currentExpense.customer_id=s),"content-loading":e(i),"value-prop":"id",label:"name","track-by":"id",options:K,"filter-results":!1,"resolve-on-load":"",delay:500,searchable:"",placeholder:t.$t("customers.select_a_customer")},null,8,["modelValue","content-loading","placeholder"])]),_:1},8,["content-loading","label"]),r(x,{"content-loading":e(i),label:t.$t("payments.payment_mode")},{default:o(()=>[r(v,{modelValue:e(n).currentExpense.payment_method_id,"onUpdate:modelValue":a[8]||(a[8]=s=>e(n).currentExpense.payment_method_id=s),"content-loading":e(i),label:"name","value-prop":"id","track-by":"name",options:e(n).paymentModes,placeholder:t.$t("payments.select_payment_mode"),searchable:""},null,8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["content-loading","label"]),r(x,{"content-loading":e(i),label:t.$t("expenses.note"),error:e(l).currentExpense.notes.$error&&e(l).currentExpense.notes.$errors[0].$message},{default:o(()=>[r(te,{modelValue:e(n).currentExpense.notes,"onUpdate:modelValue":a[9]||(a[9]=s=>e(n).currentExpense.notes=s),"content-loading":e(i),row:4,rows:"4",onInput:a[10]||(a[10]=s=>e(l).currentExpense.notes.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label","error"]),r(x,{label:t.$t("expenses.receipt")},{default:o(()=>[r(ae,{modelValue:e(n).currentExpense.receiptFiles,"onUpdate:modelValue":a[11]||(a[11]=s=>e(n).currentExpense.receiptFiles=s),accept:"image/*,.doc,.docx,.pdf,.csv,.xlsx,.xls",onChange:A,onRemove:L},null,8,["modelValue"])]),_:1},8,["label"]),r(Ce,{"is-edit":e(d),class:"col-span-2","is-loading":e(i),type:"Expense",store:e(n),"store-prop":"currentExpense","custom-field-scope":k},null,8,["is-edit","is-loading","store"]),V("div",Ie,[r(C,{loading:e(m),tabindex:6,variant:"primary",type:"submit",class:"flex justify-center w-full"},{left:o(s=>[e(m)?M("",!0):(E(),w(f,{key:0,name:"SaveIcon",class:S(s.class)},null,8,["class"]))]),default:o(()=>[$(" "+b(e(d)?t.$t("expenses.update_expense"):t.$t("expenses.save_expense")),1)]),_:1},8,["loading"])])]),_:1})]),_:1})],40,Se)]),_:1})],64)}}};export{Re as default};