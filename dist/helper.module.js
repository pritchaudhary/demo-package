var r=function(r){return"number"==typeof r||r&&"."!==r?r.toString():""},t={transformNullToString:r,amountToThousandSeparator:function(t){return r(t).replace(/\D/g,"").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g,"$1, ")}};export{t as default};
//# sourceMappingURL=helper.module.js.map
