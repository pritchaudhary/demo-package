var r=function(r){return"number"==typeof r||r&&"."!==r?r.toString():""};exports.amountToThousandSeparator=function(o){return console.log("PRITAM",o),r(o).replace(/\D/g,"").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g,"$1, ")},exports.transformNullToString=r;
//# sourceMappingURL=foo.cjs.map
