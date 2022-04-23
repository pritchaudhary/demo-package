var r=function(r){return"number"==typeof r||r&&"."!==r?r.toString():""};module.exports={transformNullToString:r,amountToThousandSeparator:function(n){return r(n).replace(/\D/g,"").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g,"$1, ")}};
//# sourceMappingURL=helper.cjs.map
