/* xlsx.js (C) 2013-2015 SheetJS -- http://sheetjs.com */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.JSZip=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){"use strict";var _keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";exports.encode=function(input,utf8){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=(chr1&3)<<4|chr2>>4;enc3=(chr2&15)<<2|chr3>>6;enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64}else if(isNaN(chr3)){enc4=64}output=output+_keyStr.charAt(enc1)+_keyStr.charAt(enc2)+_keyStr.charAt(enc3)+_keyStr.charAt(enc4)}return output};exports.decode=function(input,utf8){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=_keyStr.indexOf(input.charAt(i++));enc2=_keyStr.indexOf(input.charAt(i++));enc3=_keyStr.indexOf(input.charAt(i++));enc4=_keyStr.indexOf(input.charAt(i++));chr1=enc1<<2|enc2>>4;chr2=(enc2&15)<<4|enc3>>2;chr3=(enc3&3)<<6|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=64){output=output+String.fromCharCode(chr3)}}return output}},{}],2:[function(_dereq_,module,exports){"use strict";function CompressedObject(){this.compressedSize=0;this.uncompressedSize=0;this.crc32=0;this.compressionMethod=null;this.compressedContent=null}CompressedObject.prototype={getContent:function(){return null},getCompressedContent:function(){return null}};module.exports=CompressedObject},{}],3:[function(_dereq_,module,exports){"use strict";exports.STORE={magic:"\x00\x00",compress:function(content){return content},uncompress:function(content){return content},compressInputType:null,uncompressInputType:null};exports.DEFLATE=_dereq_("./flate")},{"./flate":8}],4:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("./utils");var table=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];module.exports=function crc32(input,crc){if(typeof input==="undefined"||!input.length){return 0}var isArray=utils.getTypeOf(input)!=="string";if(typeof crc=="undefined"){crc=0}var x=0;var y=0;var b=0;crc=crc^-1;for(var i=0,iTop=input.length;i<iTop;i++){b=isArray?input[i]:input.charCodeAt(i);y=(crc^b)&255;x=table[y];crc=crc>>>8^x}return crc^-1}},{"./utils":21}],5:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("./utils");function DataReader(data){this.data=null;this.length=0;this.index=0}DataReader.prototype={checkOffset:function(offset){this.checkIndex(this.index+offset)},checkIndex:function(newIndex){if(this.length<newIndex||newIndex<0){throw new Error("End of data reached (data length = "+this.length+", asked index = "+newIndex+"). Corrupted zip ?")}},setIndex:function(newIndex){this.checkIndex(newIndex);this.index=newIndex},skip:function(n){this.setIndex(this.index+n)},byteAt:function(i){},readInt:function(size){var result=0,i;this.checkOffset(size);for(i=this.index+size-1;i>=this.index;i--){result=(result<<8)+this.byteAt(i)}this.index+=size;return result},readString:function(size){return utils.transformTo("string",this.readData(size))},readData:function(size){},lastIndexOfSignature:function(sig){},readDate:function(){var dostime=this.readInt(4);return new Date((dostime>>25&127)+1980,(dostime>>21&15)-1,dostime>>16&31,dostime>>11&31,dostime>>5&63,(dostime&31)<<1)}};module.exports=DataReader},{"./utils":21}],6:[function(_dereq_,module,exports){"use strict";exports.base64=false;exports.binary=false;exports.dir=false;exports.createFolders=false;exports.date=null;exports.compression=null;exports.comment=null},{}],7:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("./utils");exports.string2binary=function(str){return utils.string2binary(str)};exports.string2Uint8Array=function(str){return utils.transformTo("uint8array",str)};exports.uint8Array2String=function(array){return utils.transformTo("string",array)};exports.string2Blob=function(str){var buffer=utils.transformTo("arraybuffer",str);return utils.arrayBuffer2Blob(buffer)};exports.arrayBuffer2Blob=function(buffer){return utils.arrayBuffer2Blob(buffer)};exports.transformTo=function(outputType,input){return utils.transformTo(outputType,input)};exports.getTypeOf=function(input){return utils.getTypeOf(input)};exports.checkSupport=function(type){return utils.checkSupport(type)};exports.MAX_VALUE_16BITS=utils.MAX_VALUE_16BITS;exports.MAX_VALUE_32BITS=utils.MAX_VALUE_32BITS;exports.pretty=function(str){return utils.pretty(str)};exports.findCompression=function(compressionMethod){return utils.findCompression(compressionMethod)};exports.isRegExp=function(object){return utils.isRegExp(object)}},{"./utils":21}],8:[function(_dereq_,module,exports){"use strict";var USE_TYPEDARRAY=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Uint32Array!=="undefined";var pako=_dereq_("pako");exports.uncompressInputType=USE_TYPEDARRAY?"uint8array":"array";exports.compressInputType=USE_TYPEDARRAY?"uint8array":"array";exports.magic="\b\x00";exports.compress=function(input){return pako.deflateRaw(input)};exports.uncompress=function(input){return pako.inflateRaw(input)}},{pako:24}],9:[function(_dereq_,module,exports){"use strict";var base64=_dereq_("./base64");function JSZip(data,options){if(!(this instanceof JSZip))return new JSZip(data,options);this.files={};this.comment=null;this.root="";if(data){this.load(data,options)}this.clone=function(){var newObj=new JSZip;for(var i in this){if(typeof this[i]!=="function"){newObj[i]=this[i]}}return newObj}}JSZip.prototype=_dereq_("./object");JSZip.prototype.load=_dereq_("./load");JSZip.support=_dereq_("./support");JSZip.defaults=_dereq_("./defaults");JSZip.utils=_dereq_("./deprecatedPublicUtils");JSZip.base64={encode:function(input){return base64.encode(input)},decode:function(input){return base64.decode(input)}};JSZip.compressions=_dereq_("./compressions");module.exports=JSZip},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(_dereq_,module,exports){"use strict";var base64=_dereq_("./base64");var ZipEntries=_dereq_("./zipEntries");module.exports=function(data,options){var files,zipEntries,i,input;options=options||{};if(options.base64){data=base64.decode(data)}zipEntries=new ZipEntries(data,options);files=zipEntries.files;for(i=0;i<files.length;i++){input=files[i];this.file(input.fileName,input.decompressed,{binary:true,optimizedBinaryString:true,date:input.date,dir:input.dir,comment:input.fileComment.length?input.fileComment:null,createFolders:options.createFolders})}if(zipEntries.zipComment.length){this.comment=zipEntries.zipComment}return this}},{"./base64":1,"./zipEntries":22}],11:[function(_dereq_,module,exports){(function(Buffer){"use strict";module.exports=function(data,encoding){return new Buffer(data,encoding)};module.exports.test=function(b){return Buffer.isBuffer(b)}}).call(this,typeof Buffer!=="undefined"?Buffer:undefined)},{}],12:[function(_dereq_,module,exports){"use strict";var Uint8ArrayReader=_dereq_("./uint8ArrayReader");function NodeBufferReader(data){this.data=data;this.length=this.data.length;this.index=0}NodeBufferReader.prototype=new Uint8ArrayReader;NodeBufferReader.prototype.readData=function(size){this.checkOffset(size);var result=this.data.slice(this.index,this.index+size);this.index+=size;return result};module.exports=NodeBufferReader},{"./uint8ArrayReader":18}],13:[function(_dereq_,module,exports){"use strict";var support=_dereq_("./support");var utils=_dereq_("./utils");var crc32=_dereq_("./crc32");var signature=_dereq_("./signature");var defaults=_dereq_("./defaults");var base64=_dereq_("./base64");var compressions=_dereq_("./compressions");var CompressedObject=_dereq_("./compressedObject");var nodeBuffer=_dereq_("./nodeBuffer");var utf8=_dereq_("./utf8");var StringWriter=_dereq_("./stringWriter");var Uint8ArrayWriter=_dereq_("./uint8ArrayWriter");var getRawData=function(file){if(file._data instanceof CompressedObject){file._data=file._data.getContent();file.options.binary=true;file.options.base64=false;if(utils.getTypeOf(file._data)==="uint8array"){var copy=file._data;file._data=new Uint8Array(copy.length);if(copy.length!==0){file._data.set(copy,0)}}}return file._data};var getBinaryData=function(file){var result=getRawData(file),type=utils.getTypeOf(result);if(type==="string"){if(!file.options.binary){if(support.nodebuffer){return nodeBuffer(result,"utf-8")}}return file.asBinary()}return result};var dataToString=function(asUTF8){var result=getRawData(this);if(result===null||typeof result==="undefined"){return""}if(this.options.base64){result=base64.decode(result)}if(asUTF8&&this.options.binary){result=out.utf8decode(result)}else{result=utils.transformTo("string",result)}if(!asUTF8&&!this.options.binary){result=utils.transformTo("string",out.utf8encode(result))}return result};var ZipObject=function(name,data,options){this.name=name;this.dir=options.dir;this.date=options.date;this.comment=options.comment;this._data=data;this.options=options;this._initialMetadata={dir:options.dir,date:options.date}};ZipObject.prototype={asText:function(){return dataToString.call(this,true)},asBinary:function(){return dataToString.call(this,false)},asNodeBuffer:function(){var result=getBinaryData(this);return utils.transformTo("nodebuffer",result)},asUint8Array:function(){var result=getBinaryData(this);return utils.transformTo("uint8array",result)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var decToHex=function(dec,bytes){var hex="",i;for(i=0;i<bytes;i++){hex+=String.fromCharCode(dec&255);dec=dec>>>8}return hex};var extend=function(){var result={},i,attr;for(i=0;i<arguments.length;i++){for(attr in arguments[i]){if(arguments[i].hasOwnProperty(attr)&&typeof result[attr]==="undefined"){result[attr]=arguments[i][attr]}}}return result};var prepareFileAttrs=function(o){o=o||{};if(o.base64===true&&(o.binary===null||o.binary===undefined)){o.binary=true}o=extend(o,defaults);o.date=o.date||new Date;if(o.compression!==null)o.compression=o.compression.toUpperCase();return o};var fileAdd=function(name,data,o){var dataType=utils.getTypeOf(data),parent;o=prepareFileAttrs(o);if(o.createFolders&&(parent=parentFolder(name))){folderAdd.call(this,parent,true)}if(o.dir||data===null||typeof data==="undefined"){o.base64=false;o.binary=false;data=null}else if(dataType==="string"){if(o.binary&&!o.base64){if(o.optimizedBinaryString!==true){data=utils.string2binary(data)}}}else{o.base64=false;o.binary=true;if(!dataType&&!(data instanceof CompressedObject)){throw new Error("The data of '"+name+"' is in an unsupported format !")}if(dataType==="arraybuffer"){data=utils.transformTo("uint8array",data)}}var object=new ZipObject(name,data,o);this.files[name]=object;return object};var parentFolder=function(path){if(path.slice(-1)=="/"){path=path.substring(0,path.length-1)}var lastSlash=path.lastIndexOf("/");return lastSlash>0?path.substring(0,lastSlash):""};var folderAdd=function(name,createFolders){if(name.slice(-1)!="/"){name+="/"}createFolders=typeof createFolders!=="undefined"?createFolders:false;if(!this.files[name]){fileAdd.call(this,name,null,{dir:true,createFolders:createFolders})}return this.files[name]};var generateCompressedObjectFrom=function(file,compression){var result=new CompressedObject,content;if(file._data instanceof CompressedObject){result.uncompressedSize=file._data.uncompressedSize;result.crc32=file._data.crc32;if(result.uncompressedSize===0||file.dir){compression=compressions["STORE"];result.compressedContent="";result.crc32=0}else if(file._data.compressionMethod===compression.magic){result.compressedContent=file._data.getCompressedContent()}else{content=file._data.getContent();result.compressedContent=compression.compress(utils.transformTo(compression.compressInputType,content))}}else{content=getBinaryData(file);if(!content||content.length===0||file.dir){compression=compressions["STORE"];content=""}result.uncompressedSize=content.length;result.crc32=crc32(content);result.compressedContent=compression.compress(utils.transformTo(compression.compressInputType,content))}result.compressedSize=result.compressedContent.length;result.compressionMethod=compression.magic;return result};var generateZipParts=function(name,file,compressedObject,offset){var data=compressedObject.compressedContent,utfEncodedFileName=utils.transformTo("string",utf8.utf8encode(file.name)),comment=file.comment||"",utfEncodedComment=utils.transformTo("string",utf8.utf8encode(comment)),useUTF8ForFileName=utfEncodedFileName.length!==file.name.length,useUTF8ForComment=utfEncodedComment.length!==comment.length,o=file.options,dosTime,dosDate,extraFields="",unicodePathExtraField="",unicodeCommentExtraField="",dir,date;if(file._initialMetadata.dir!==file.dir){dir=file.dir}else{dir=o.dir}if(file._initialMetadata.date!==file.date){date=file.date}else{date=o.date}dosTime=date.getHours();dosTime=dosTime<<6;dosTime=dosTime|date.getMinutes();dosTime=dosTime<<5;dosTime=dosTime|date.getSeconds()/2;dosDate=date.getFullYear()-1980;dosDate=dosDate<<4;dosDate=dosDate|date.getMonth()+1;dosDate=dosDate<<5;dosDate=dosDate|date.getDate();if(useUTF8ForFileName){unicodePathExtraField=decToHex(1,1)+decToHex(crc32(utfEncodedFileName),4)+utfEncodedFileName;extraFields+="up"+decToHex(unicodePathExtraField.length,2)+unicodePathExtraField}if(useUTF8ForComment){unicodeCommentExtraField=decToHex(1,1)+decToHex(this.crc32(utfEncodedComment),4)+utfEncodedComment;extraFields+="uc"+decToHex(unicodeCommentExtraField.length,2)+unicodeCommentExtraField}var header="";header+="\n\x00";header+=useUTF8ForFileName||useUTF8ForComment?"\x00\b":"\x00\x00";header+=compressedObject.compressionMethod;header+=decToHex(dosTime,2);header+=decToHex(dosDate,2);header+=decToHex(compressedObject.crc32,4);header+=decToHex(compressedObject.compressedSize,4);header+=decToHex(compressedObject.uncompressedSize,4);header+=decToHex(utfEncodedFileName.length,2);header+=decToHex(extraFields.length,2);var fileRecord=signature.LOCAL_FILE_HEADER+header+utfEncodedFileName+extraFields;var dirRecord=signature.CENTRAL_FILE_HEADER+"\x00"+header+decToHex(utfEncodedComment.length,2)+"\x00\x00"+"\x00\x00"+(dir===true?"\x00\x00\x00":"\x00\x00\x00\x00")+decToHex(offset,4)+utfEncodedFileName+extraFields+utfEncodedComment;return{fileRecord:fileRecord,dirRecord:dirRecord,compressedObject:compressedObject}};var out={load:function(stream,options){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(search){var result=[],filename,relativePath,file,fileClone;for(filename in this.files){if(!this.files.hasOwnProperty(filename)){continue}file=this.files[filename];fileClone=new ZipObject(file.name,file._data,extend(file.options));relativePath=filename.slice(this.root.length,filename.length);if(filename.slice(0,this.root.length)===this.root&&search(relativePath,fileClone)){result.push(fileClone)}}return result},file:function(name,data,o){if(arguments.length===1){if(utils.isRegExp(name)){var regexp=name;return this.filter(function(relativePath,file){return!file.dir&&regexp.test(relativePath)})}else{return this.filter(function(relativePath,file){return!file.dir&&relativePath===name})[0]||null}}else{name=this.root+name;fileAdd.call(this,name,data,o)}return this},folder:function(arg){if(!arg){return this}if(utils.isRegExp(arg)){return this.filter(function(relativePath,file){return file.dir&&arg.test(relativePath)})}var name=this.root+arg;var newFolder=folderAdd.call(this,name);var ret=this.clone();ret.root=newFolder.name;return ret},remove:function(name){name=this.root+name;var file=this.files[name];if(!file){if(name.slice(-1)!="/"){name+="/"}file=this.files[name]}if(file&&!file.dir){delete this.files[name]}else{var kids=this.filter(function(relativePath,file){return file.name.slice(0,name.length)===name});for(var i=0;i<kids.length;i++){delete this.files[kids[i].name]}}return this},generate:function(options){options=extend(options||{},{base64:true,compression:"STORE",type:"base64",comment:null});utils.checkSupport(options.type);var zipData=[],localDirLength=0,centralDirLength=0,writer,i,utfEncodedComment=utils.transformTo("string",this.utf8encode(options.comment||this.comment||""));for(var name in this.files){if(!this.files.hasOwnProperty(name)){continue}var file=this.files[name];var compressionName=file.options.compression||options.compression.toUpperCase();var compression=compressions[compressionName];if(!compression){throw new Error(compressionName+" is not a valid compression method !")}var compressedObject=generateCompressedObjectFrom.call(this,file,compression);var zipPart=generateZipParts.call(this,name,file,compressedObject,localDirLength);localDirLength+=zipPart.fileRecord.length+compressedObject.compressedSize;centralDirLength+=zipPart.dirRecord.length;zipData.push(zipPart)}var dirEnd="";dirEnd=signature.CENTRAL_DIRECTORY_END+"\x00\x00"+"\x00\x00"+decToHex(zipData.length,2)+decToHex(zipData.length,2)+decToHex(centralDirLength,4)+decToHex(localDirLength,4)+decToHex(utfEncodedComment.length,2)+utfEncodedComment;var typeName=options.type.toLowerCase();if(typeName==="uint8array"||typeName==="arraybuffer"||typeName==="blob"||typeName==="nodebuffer"){writer=new Uint8ArrayWriter(localDirLength+centralDirLength+dirEnd.length)}else{writer=new StringWriter(localDirLength+centralDirLength+dirEnd.length)}for(i=0;i<zipData.length;i++){writer.append(zipData[i].fileRecord);writer.append(zipData[i].compressedObject.compressedContent)}for(i=0;i<zipData.length;i++){writer.append(zipData[i].dirRecord)}writer.append(dirEnd);var zip=writer.finalize();switch(options.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return utils.transformTo(options.type.toLowerCase(),zip);case"blob":return utils.arrayBuffer2Blob(utils.transformTo("arraybuffer",zip));case"base64":return options.base64?base64.encode(zip):zip;default:return zip}},crc32:function(input,crc){return crc32(input,crc)},utf8encode:function(string){return utils.transformTo("string",utf8.utf8encode(string))},utf8decode:function(input){return utf8.utf8decode(input)}};module.exports=out},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(_dereq_,module,exports){"use strict";exports.LOCAL_FILE_HEADER="PK";exports.CENTRAL_FILE_HEADER="PK";exports.CENTRAL_DIRECTORY_END="PK";exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK";exports.ZIP64_CENTRAL_DIRECTORY_END="PK";exports.DATA_DESCRIPTOR="PK\b"},{}],15:[function(_dereq_,module,exports){"use strict";var DataReader=_dereq_("./dataReader");var utils=_dereq_("./utils");function StringReader(data,optimizedBinaryString){this.data=data;if(!optimizedBinaryString){this.data=utils.string2binary(this.data)}this.length=this.data.length;this.index=0}StringReader.prototype=new DataReader;StringReader.prototype.byteAt=function(i){return this.data.charCodeAt(i)};StringReader.prototype.lastIndexOfSignature=function(sig){return this.data.lastIndexOf(sig)};StringReader.prototype.readData=function(size){this.checkOffset(size);var result=this.data.slice(this.index,this.index+size);this.index+=size;return result};module.exports=StringReader},{"./dataReader":5,"./utils":21}],16:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("./utils");var StringWriter=function(){this.data=[]};StringWriter.prototype={append:function(input){input=utils.transformTo("string",input);this.data.push(input)},finalize:function(){return this.data.join("")}};module.exports=StringWriter},{"./utils":21}],17:[function(_dereq_,module,exports){(function(Buffer){"use strict";exports.base64=true;exports.array=true;exports.string=true;exports.arraybuffer=typeof ArrayBuffer!=="undefined"&&typeof Uint8Array!=="undefined";exports.nodebuffer=typeof Buffer!=="undefined";exports.uint8array=typeof Uint8Array!=="undefined";if(typeof ArrayBuffer==="undefined"){exports.blob=false}else{var buffer=new ArrayBuffer(0);try{exports.blob=new Blob([buffer],{type:"application/zip"}).size===0}catch(e){try{var Builder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;var builder=new Builder;builder.append(buffer);exports.blob=builder.getBlob("application/zip").size===0}catch(e){exports.blob=false}}}}).call(this,typeof Buffer!=="undefined"?Buffer:undefined)},{}],18:[function(_dereq_,module,exports){"use strict";var DataReader=_dereq_("./dataReader");function Uint8ArrayReader(data){if(data){this.data=data;this.length=this.data.length;this.index=0}}Uint8ArrayReader.prototype=new DataReader;Uint8ArrayReader.prototype.byteAt=function(i){return this.data[i]};Uint8ArrayReader.prototype.lastIndexOfSignature=function(sig){var sig0=sig.charCodeAt(0),sig1=sig.charCodeAt(1),sig2=sig.charCodeAt(2),sig3=sig.charCodeAt(3);for(var i=this.length-4;i>=0;--i){if(this.data[i]===sig0&&this.data[i+1]===sig1&&this.data[i+2]===sig2&&this.data[i+3]===sig3){return i}}return-1};Uint8ArrayReader.prototype.readData=function(size){this.checkOffset(size);if(size===0){return new Uint8Array(0)}var result=this.data.subarray(this.index,this.index+size);this.index+=size;return result};module.exports=Uint8ArrayReader},{"./dataReader":5}],19:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("./utils");var Uint8ArrayWriter=function(length){this.data=new Uint8Array(length);this.index=0};Uint8ArrayWriter.prototype={append:function(input){if(input.length!==0){input=utils.transformTo("uint8array",input);this.data.set(input,this.index);this.index+=input.length}},finalize:function(){return this.data}};module.exports=Uint8ArrayWriter},{"./utils":21}],20:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("./utils");var support=_dereq_("./support");var nodeBuffer=_dereq_("./nodeBuffer");var _utf8len=new Array(256);for(var i=0;i<256;i++){_utf8len[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1}_utf8len[254]=_utf8len[254]=1;var string2buf=function(str){var buf,c,c2,m_pos,i,str_len=str.length,buf_len=0;for(m_pos=0;m_pos<str_len;m_pos++){c=str.charCodeAt(m_pos);if((c&64512)===55296&&m_pos+1<str_len){c2=str.charCodeAt(m_pos+1);if((c2&64512)===56320){c=65536+(c-55296<<10)+(c2-56320);m_pos++}}buf_len+=c<128?1:c<2048?2:c<65536?3:4}if(support.uint8array){buf=new Uint8Array(buf_len)}else{buf=new Array(buf_len)}for(i=0,m_pos=0;i<buf_len;m_pos++){c=str.charCodeAt(m_pos);if((c&64512)===55296&&m_pos+1<str_len){c2=str.charCodeAt(m_pos+1);if((c2&64512)===56320){c=65536+(c-55296<<10)+(c2-56320);m_pos++}}if(c<128){buf[i++]=c}else if(c<2048){buf[i++]=192|c>>>6;buf[i++]=128|c&63}else if(c<65536){buf[i++]=224|c>>>12;buf[i++]=128|c>>>6&63;buf[i++]=128|c&63}else{buf[i++]=240|c>>>18;buf[i++]=128|c>>>12&63;buf[i++]=128|c>>>6&63;buf[i++]=128|c&63}}return buf};var utf8border=function(buf,max){var pos;max=max||buf.length;if(max>buf.length){max=buf.length}pos=max-1;while(pos>=0&&(buf[pos]&192)===128){pos--}if(pos<0){return max}if(pos===0){return max}return pos+_utf8len[buf[pos]]>max?pos:max};var buf2string=function(buf){var str,i,out,c,c_len;var len=buf.length;var utf16buf=new Array(len*2);for(out=0,i=0;i<len;){c=buf[i++];if(c<128){utf16buf[out++]=c;continue}c_len=_utf8len[c];if(c_len>4){utf16buf[out++]=65533;i+=c_len-1;continue}c&=c_len===2?31:c_len===3?15:7;while(c_len>1&&i<len){c=c<<6|buf[i++]&63;c_len--}if(c_len>1){utf16buf[out++]=65533;continue}if(c<65536){utf16buf[out++]=c}else{c-=65536;utf16buf[out++]=55296|c>>10&1023;utf16buf[out++]=56320|c&1023}}if(utf16buf.length!==out){if(utf16buf.subarray){utf16buf=utf16buf.subarray(0,out)}else{utf16buf.length=out}}return utils.applyFromCharCode(utf16buf)};exports.utf8encode=function utf8encode(str){if(support.nodebuffer){return nodeBuffer(str,"utf-8")}return string2buf(str)};exports.utf8decode=function utf8decode(buf){if(support.nodebuffer){return utils.transformTo("nodebuffer",buf).toString("utf-8")}buf=utils.transformTo(support.uint8array?"uint8array":"array",buf);var result=[],k=0,len=buf.length,chunk=65536;while(k<len){var nextBoundary=utf8border(buf,Math.min(k+chunk,len));if(support.uint8array){result.push(buf2string(buf.subarray(k,nextBoundary)))}else{result.push(buf2string(buf.slice(k,nextBoundary)))}k=nextBoundary}return result.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(_dereq_,module,exports){"use strict";var support=_dereq_("./support");var compressions=_dereq_("./compressions");var nodeBuffer=_dereq_("./nodeBuffer");exports.string2binary=function(str){var result="";for(var i=0;i<str.length;i++){result+=String.fromCharCode(str.charCodeAt(i)&255)}return result};exports.arrayBuffer2Blob=function(buffer){exports.checkSupport("blob");try{return new Blob([buffer],{type:"application/zip"})}catch(e){try{var Builder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;var builder=new Builder;builder.append(buffer);return builder.getBlob("application/zip")}catch(e){throw new Error("Bug : can't construct the Blob.")}}};function identity(input){return input}function stringToArrayLike(str,array){for(var i=0;i<str.length;++i){array[i]=str.charCodeAt(i)&255}return array}function arrayLikeToString(array){var chunk=65536;var result=[],len=array.length,type=exports.getTypeOf(array),k=0,canUseApply=true;try{switch(type){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));break;case"nodebuffer":String.fromCharCode.apply(null,nodeBuffer(0));break}}catch(e){canUseApply=false}if(!canUseApply){var resultStr="";for(var i=0;i<array.length;i++){resultStr+=String.fromCharCode(array[i])}return resultStr}while(k<len&&chunk>1){try{if(type==="array"||type==="nodebuffer"){result.push(String.fromCharCode.apply(null,array.slice(k,Math.min(k+chunk,len))))}else{result.push(String.fromCharCode.apply(null,array.subarray(k,Math.min(k+chunk,len))))}k+=chunk}catch(e){chunk=Math.floor(chunk/2)}}return result.join("")}exports.applyFromCharCode=arrayLikeToString;function arrayLikeToArrayLike(arrayFrom,arrayTo){for(var i=0;i<arrayFrom.length;i++){arrayTo[i]=arrayFrom[i]}return arrayTo}var transform={};transform["string"]={string:identity,array:function(input){return stringToArrayLike(input,new Array(input.length))},arraybuffer:function(input){return transform["string"]["uint8array"](input).buffer},uint8array:function(input){return stringToArrayLike(input,new Uint8Array(input.length))},nodebuffer:function(input){return stringToArrayLike(input,nodeBuffer(input.length))}};transform["array"]={string:arrayLikeToString,array:identity,arraybuffer:function(input){return new Uint8Array(input).buffer},uint8array:function(input){return new Uint8Array(input)},nodebuffer:function(input){return nodeBuffer(input)}};transform["arraybuffer"]={string:function(input){return arrayLikeToString(new Uint8Array(input))},array:function(input){return arrayLikeToArrayLike(new Uint8Array(input),new Array(input.byteLength))},arraybuffer:identity,uint8array:function(input){return new Uint8Array(input)},nodebuffer:function(input){return nodeBuffer(new Uint8Array(input))}};transform["uint8array"]={string:arrayLikeToString,array:function(input){return arrayLikeToArrayLike(input,new Array(input.length))},arraybuffer:function(input){return input.buffer},uint8array:identity,nodebuffer:function(input){return nodeBuffer(input)}};transform["nodebuffer"]={string:arrayLikeToString,array:function(input){return arrayLikeToArrayLike(input,new Array(input.length))},arraybuffer:function(input){return transform["nodebuffer"]["uint8array"](input).buffer},uint8array:function(input){return arrayLikeToArrayLike(input,new Uint8Array(input.length))},nodebuffer:identity};exports.transformTo=function(outputType,input){if(!input){input=""}if(!outputType){return input}exports.checkSupport(outputType);var inputType=exports.getTypeOf(input);var result=transform[inputType][outputType](input);return result};exports.getTypeOf=function(input){if(typeof input==="string"){return"string"}if(Object.prototype.toString.call(input)==="[object Array]"){return"array"}if(support.nodebuffer&&nodeBuffer.test(input)){return"nodebuffer"}if(support.uint8array&&input instanceof Uint8Array){return"uint8array"}if(support.arraybuffer&&input instanceof ArrayBuffer){return"arraybuffer"}};exports.checkSupport=function(type){var supported=support[type.toLowerCase()];if(!supported){throw new Error(type+" is not supported by this browser")}};exports.MAX_VALUE_16BITS=65535;exports.MAX_VALUE_32BITS=-1;exports.pretty=function(str){var res="",code,i;for(i=0;i<(str||"").length;i++){code=str.charCodeAt(i);res+="\\x"+(code<16?"0":"")+code.toString(16).toUpperCase()
}return res};exports.findCompression=function(compressionMethod){for(var method in compressions){if(!compressions.hasOwnProperty(method)){continue}if(compressions[method].magic===compressionMethod){return compressions[method]}}return null};exports.isRegExp=function(object){return Object.prototype.toString.call(object)==="[object RegExp]"}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(_dereq_,module,exports){"use strict";var StringReader=_dereq_("./stringReader");var NodeBufferReader=_dereq_("./nodeBufferReader");var Uint8ArrayReader=_dereq_("./uint8ArrayReader");var utils=_dereq_("./utils");var sig=_dereq_("./signature");var ZipEntry=_dereq_("./zipEntry");var support=_dereq_("./support");var jszipProto=_dereq_("./object");function ZipEntries(data,loadOptions){this.files=[];this.loadOptions=loadOptions;if(data){this.load(data)}}ZipEntries.prototype={checkSignature:function(expectedSignature){var signature=this.reader.readString(4);if(signature!==expectedSignature){throw new Error("Corrupted zip or bug : unexpected signature "+"("+utils.pretty(signature)+", expected "+utils.pretty(expectedSignature)+")")}},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2);this.diskWithCentralDirStart=this.reader.readInt(2);this.centralDirRecordsOnThisDisk=this.reader.readInt(2);this.centralDirRecords=this.reader.readInt(2);this.centralDirSize=this.reader.readInt(4);this.centralDirOffset=this.reader.readInt(4);this.zipCommentLength=this.reader.readInt(2);this.zipComment=this.reader.readString(this.zipCommentLength);this.zipComment=jszipProto.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8);this.versionMadeBy=this.reader.readString(2);this.versionNeeded=this.reader.readInt(2);this.diskNumber=this.reader.readInt(4);this.diskWithCentralDirStart=this.reader.readInt(4);this.centralDirRecordsOnThisDisk=this.reader.readInt(8);this.centralDirRecords=this.reader.readInt(8);this.centralDirSize=this.reader.readInt(8);this.centralDirOffset=this.reader.readInt(8);this.zip64ExtensibleData={};var extraDataSize=this.zip64EndOfCentralSize-44,index=0,extraFieldId,extraFieldLength,extraFieldValue;while(index<extraDataSize){extraFieldId=this.reader.readInt(2);extraFieldLength=this.reader.readInt(4);extraFieldValue=this.reader.readString(extraFieldLength);this.zip64ExtensibleData[extraFieldId]={id:extraFieldId,length:extraFieldLength,value:extraFieldValue}}},readBlockZip64EndOfCentralLocator:function(){this.diskWithZip64CentralDirStart=this.reader.readInt(4);this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8);this.disksCount=this.reader.readInt(4);if(this.disksCount>1){throw new Error("Multi-volumes zip are not supported")}},readLocalFiles:function(){var i,file;for(i=0;i<this.files.length;i++){file=this.files[i];this.reader.setIndex(file.localHeaderOffset);this.checkSignature(sig.LOCAL_FILE_HEADER);file.readLocalPart(this.reader);file.handleUTF8()}},readCentralDir:function(){var file;this.reader.setIndex(this.centralDirOffset);while(this.reader.readString(4)===sig.CENTRAL_FILE_HEADER){file=new ZipEntry({zip64:this.zip64},this.loadOptions);file.readCentralPart(this.reader);this.files.push(file)}},readEndOfCentral:function(){var offset=this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);if(offset===-1){throw new Error("Corrupted zip : can't find end of central directory")}this.reader.setIndex(offset);this.checkSignature(sig.CENTRAL_DIRECTORY_END);this.readBlockEndOfCentral();if(this.diskNumber===utils.MAX_VALUE_16BITS||this.diskWithCentralDirStart===utils.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===utils.MAX_VALUE_16BITS||this.centralDirRecords===utils.MAX_VALUE_16BITS||this.centralDirSize===utils.MAX_VALUE_32BITS||this.centralDirOffset===utils.MAX_VALUE_32BITS){this.zip64=true;offset=this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);if(offset===-1){throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator")}this.reader.setIndex(offset);this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);this.readBlockZip64EndOfCentralLocator();this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);this.readBlockZip64EndOfCentral()}},prepareReader:function(data){var type=utils.getTypeOf(data);if(type==="string"&&!support.uint8array){this.reader=new StringReader(data,this.loadOptions.optimizedBinaryString)}else if(type==="nodebuffer"){this.reader=new NodeBufferReader(data)}else{this.reader=new Uint8ArrayReader(utils.transformTo("uint8array",data))}},load:function(data){this.prepareReader(data);this.readEndOfCentral();this.readCentralDir();this.readLocalFiles()}};module.exports=ZipEntries},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(_dereq_,module,exports){"use strict";var StringReader=_dereq_("./stringReader");var utils=_dereq_("./utils");var CompressedObject=_dereq_("./compressedObject");var jszipProto=_dereq_("./object");function ZipEntry(options,loadOptions){this.options=options;this.loadOptions=loadOptions}ZipEntry.prototype={isEncrypted:function(){return(this.bitFlag&1)===1},useUTF8:function(){return(this.bitFlag&2048)===2048},prepareCompressedContent:function(reader,from,length){return function(){var previousIndex=reader.index;reader.setIndex(from);var compressedFileData=reader.readData(length);reader.setIndex(previousIndex);return compressedFileData}},prepareContent:function(reader,from,length,compression,uncompressedSize){return function(){var compressedFileData=utils.transformTo(compression.uncompressInputType,this.getCompressedContent());var uncompressedFileData=compression.uncompress(compressedFileData);if(uncompressedFileData.length!==uncompressedSize){throw new Error("Bug : uncompressed data size mismatch")}return uncompressedFileData}},readLocalPart:function(reader){var compression,localExtraFieldsLength;reader.skip(22);this.fileNameLength=reader.readInt(2);localExtraFieldsLength=reader.readInt(2);this.fileName=reader.readString(this.fileNameLength);reader.skip(localExtraFieldsLength);if(this.compressedSize==-1||this.uncompressedSize==-1){throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory "+"(compressedSize == -1 || uncompressedSize == -1)")}compression=utils.findCompression(this.compressionMethod);if(compression===null){throw new Error("Corrupted zip : compression "+utils.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")")}this.decompressed=new CompressedObject;this.decompressed.compressedSize=this.compressedSize;this.decompressed.uncompressedSize=this.uncompressedSize;this.decompressed.crc32=this.crc32;this.decompressed.compressionMethod=this.compressionMethod;this.decompressed.getCompressedContent=this.prepareCompressedContent(reader,reader.index,this.compressedSize,compression);this.decompressed.getContent=this.prepareContent(reader,reader.index,this.compressedSize,compression,this.uncompressedSize);if(this.loadOptions.checkCRC32){this.decompressed=utils.transformTo("string",this.decompressed.getContent());if(jszipProto.crc32(this.decompressed)!==this.crc32){throw new Error("Corrupted zip : CRC32 mismatch")}}},readCentralPart:function(reader){this.versionMadeBy=reader.readString(2);this.versionNeeded=reader.readInt(2);this.bitFlag=reader.readInt(2);this.compressionMethod=reader.readString(2);this.date=reader.readDate();this.crc32=reader.readInt(4);this.compressedSize=reader.readInt(4);this.uncompressedSize=reader.readInt(4);this.fileNameLength=reader.readInt(2);this.extraFieldsLength=reader.readInt(2);this.fileCommentLength=reader.readInt(2);this.diskNumberStart=reader.readInt(2);this.internalFileAttributes=reader.readInt(2);this.externalFileAttributes=reader.readInt(4);this.localHeaderOffset=reader.readInt(4);if(this.isEncrypted()){throw new Error("Encrypted zip are not supported")}this.fileName=reader.readString(this.fileNameLength);this.readExtraFields(reader);this.parseZIP64ExtraField(reader);this.fileComment=reader.readString(this.fileCommentLength);this.dir=this.externalFileAttributes&16?true:false},parseZIP64ExtraField:function(reader){if(!this.extraFields[1]){return}var extraReader=new StringReader(this.extraFields[1].value);if(this.uncompressedSize===utils.MAX_VALUE_32BITS){this.uncompressedSize=extraReader.readInt(8)}if(this.compressedSize===utils.MAX_VALUE_32BITS){this.compressedSize=extraReader.readInt(8)}if(this.localHeaderOffset===utils.MAX_VALUE_32BITS){this.localHeaderOffset=extraReader.readInt(8)}if(this.diskNumberStart===utils.MAX_VALUE_32BITS){this.diskNumberStart=extraReader.readInt(4)}},readExtraFields:function(reader){var start=reader.index,extraFieldId,extraFieldLength,extraFieldValue;this.extraFields=this.extraFields||{};while(reader.index<start+this.extraFieldsLength){extraFieldId=reader.readInt(2);extraFieldLength=reader.readInt(2);extraFieldValue=reader.readString(extraFieldLength);this.extraFields[extraFieldId]={id:extraFieldId,length:extraFieldLength,value:extraFieldValue}}},handleUTF8:function(){if(this.useUTF8()){this.fileName=jszipProto.utf8decode(this.fileName);this.fileComment=jszipProto.utf8decode(this.fileComment)}else{var upath=this.findExtraFieldUnicodePath();if(upath!==null){this.fileName=upath}var ucomment=this.findExtraFieldUnicodeComment();if(ucomment!==null){this.fileComment=ucomment}}},findExtraFieldUnicodePath:function(){var upathField=this.extraFields[28789];if(upathField){var extraReader=new StringReader(upathField.value);if(extraReader.readInt(1)!==1){return null}if(jszipProto.crc32(this.fileName)!==extraReader.readInt(4)){return null}return jszipProto.utf8decode(extraReader.readString(upathField.length-5))}return null},findExtraFieldUnicodeComment:function(){var ucommentField=this.extraFields[25461];if(ucommentField){var extraReader=new StringReader(ucommentField.value);if(extraReader.readInt(1)!==1){return null}if(jszipProto.crc32(this.fileComment)!==extraReader.readInt(4)){return null}return jszipProto.utf8decode(extraReader.readString(ucommentField.length-5))}return null}};module.exports=ZipEntry},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(_dereq_,module,exports){"use strict";var assign=_dereq_("./lib/utils/common").assign;var deflate=_dereq_("./lib/deflate");var inflate=_dereq_("./lib/inflate");var constants=_dereq_("./lib/zlib/constants");var pako={};assign(pako,deflate,inflate,constants);module.exports=pako},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(_dereq_,module,exports){"use strict";var zlib_deflate=_dereq_("./zlib/deflate.js");var utils=_dereq_("./utils/common");var strings=_dereq_("./utils/strings");var msg=_dereq_("./zlib/messages");var zstream=_dereq_("./zlib/zstream");var Z_NO_FLUSH=0;var Z_FINISH=4;var Z_OK=0;var Z_STREAM_END=1;var Z_DEFAULT_COMPRESSION=-1;var Z_DEFAULT_STRATEGY=0;var Z_DEFLATED=8;var Deflate=function(options){this.options=utils.assign({level:Z_DEFAULT_COMPRESSION,method:Z_DEFLATED,chunkSize:16384,windowBits:15,memLevel:8,strategy:Z_DEFAULT_STRATEGY,to:""},options||{});var opt=this.options;if(opt.raw&&opt.windowBits>0){opt.windowBits=-opt.windowBits}else if(opt.gzip&&opt.windowBits>0&&opt.windowBits<16){opt.windowBits+=16}this.err=0;this.msg="";this.ended=false;this.chunks=[];this.strm=new zstream;this.strm.avail_out=0;var status=zlib_deflate.deflateInit2(this.strm,opt.level,opt.method,opt.windowBits,opt.memLevel,opt.strategy);if(status!==Z_OK){throw new Error(msg[status])}if(opt.header){zlib_deflate.deflateSetHeader(this.strm,opt.header)}};Deflate.prototype.push=function(data,mode){var strm=this.strm;var chunkSize=this.options.chunkSize;var status,_mode;if(this.ended){return false}_mode=mode===~~mode?mode:mode===true?Z_FINISH:Z_NO_FLUSH;if(typeof data==="string"){strm.input=strings.string2buf(data)}else{strm.input=data}strm.next_in=0;strm.avail_in=strm.input.length;do{if(strm.avail_out===0){strm.output=new utils.Buf8(chunkSize);strm.next_out=0;strm.avail_out=chunkSize}status=zlib_deflate.deflate(strm,_mode);if(status!==Z_STREAM_END&&status!==Z_OK){this.onEnd(status);this.ended=true;return false}if(strm.avail_out===0||strm.avail_in===0&&_mode===Z_FINISH){if(this.options.to==="string"){this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output,strm.next_out)))}else{this.onData(utils.shrinkBuf(strm.output,strm.next_out))}}}while((strm.avail_in>0||strm.avail_out===0)&&status!==Z_STREAM_END);if(_mode===Z_FINISH){status=zlib_deflate.deflateEnd(this.strm);this.onEnd(status);this.ended=true;return status===Z_OK}return true};Deflate.prototype.onData=function(chunk){this.chunks.push(chunk)};Deflate.prototype.onEnd=function(status){if(status===Z_OK){if(this.options.to==="string"){this.result=this.chunks.join("")}else{this.result=utils.flattenChunks(this.chunks)}}this.chunks=[];this.err=status;this.msg=this.strm.msg};function deflate(input,options){var deflator=new Deflate(options);deflator.push(input,true);if(deflator.err){throw deflator.msg}return deflator.result}function deflateRaw(input,options){options=options||{};options.raw=true;return deflate(input,options)}function gzip(input,options){options=options||{};options.gzip=true;return deflate(input,options)}exports.Deflate=Deflate;exports.deflate=deflate;exports.deflateRaw=deflateRaw;exports.gzip=gzip},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(_dereq_,module,exports){"use strict";var zlib_inflate=_dereq_("./zlib/inflate.js");var utils=_dereq_("./utils/common");var strings=_dereq_("./utils/strings");var c=_dereq_("./zlib/constants");var msg=_dereq_("./zlib/messages");var zstream=_dereq_("./zlib/zstream");var gzheader=_dereq_("./zlib/gzheader");var Inflate=function(options){this.options=utils.assign({chunkSize:16384,windowBits:0,to:""},options||{});var opt=this.options;if(opt.raw&&opt.windowBits>=0&&opt.windowBits<16){opt.windowBits=-opt.windowBits;if(opt.windowBits===0){opt.windowBits=-15}}if(opt.windowBits>=0&&opt.windowBits<16&&!(options&&options.windowBits)){opt.windowBits+=32}if(opt.windowBits>15&&opt.windowBits<48){if((opt.windowBits&15)===0){opt.windowBits|=15}}this.err=0;this.msg="";this.ended=false;this.chunks=[];this.strm=new zstream;this.strm.avail_out=0;var status=zlib_inflate.inflateInit2(this.strm,opt.windowBits);if(status!==c.Z_OK){throw new Error(msg[status])}this.header=new gzheader;zlib_inflate.inflateGetHeader(this.strm,this.header)};Inflate.prototype.push=function(data,mode){var strm=this.strm;var chunkSize=this.options.chunkSize;var status,_mode;var next_out_utf8,tail,utf8str;if(this.ended){return false}_mode=mode===~~mode?mode:mode===true?c.Z_FINISH:c.Z_NO_FLUSH;if(typeof data==="string"){strm.input=strings.binstring2buf(data)}else{strm.input=data}strm.next_in=0;strm.avail_in=strm.input.length;do{if(strm.avail_out===0){strm.output=new utils.Buf8(chunkSize);strm.next_out=0;strm.avail_out=chunkSize}status=zlib_inflate.inflate(strm,c.Z_NO_FLUSH);if(status!==c.Z_STREAM_END&&status!==c.Z_OK){this.onEnd(status);this.ended=true;return false}if(strm.next_out){if(strm.avail_out===0||status===c.Z_STREAM_END||strm.avail_in===0&&_mode===c.Z_FINISH){if(this.options.to==="string"){next_out_utf8=strings.utf8border(strm.output,strm.next_out);tail=strm.next_out-next_out_utf8;utf8str=strings.buf2string(strm.output,next_out_utf8);strm.next_out=tail;strm.avail_out=chunkSize-tail;if(tail){utils.arraySet(strm.output,strm.output,next_out_utf8,tail,0)}this.onData(utf8str)}else{this.onData(utils.shrinkBuf(strm.output,strm.next_out))}}}}while(strm.avail_in>0&&status!==c.Z_STREAM_END);if(status===c.Z_STREAM_END){_mode=c.Z_FINISH}if(_mode===c.Z_FINISH){status=zlib_inflate.inflateEnd(this.strm);this.onEnd(status);this.ended=true;return status===c.Z_OK}return true};Inflate.prototype.onData=function(chunk){this.chunks.push(chunk)};Inflate.prototype.onEnd=function(status){if(status===c.Z_OK){if(this.options.to==="string"){this.result=this.chunks.join("")}else{this.result=utils.flattenChunks(this.chunks)}}this.chunks=[];this.err=status;this.msg=this.strm.msg};function inflate(input,options){var inflator=new Inflate(options);inflator.push(input,true);if(inflator.err){throw inflator.msg}return inflator.result}function inflateRaw(input,options){options=options||{};options.raw=true;return inflate(input,options)}exports.Inflate=Inflate;exports.inflate=inflate;exports.inflateRaw=inflateRaw;exports.ungzip=inflate},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(_dereq_,module,exports){"use strict";var TYPED_OK=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";exports.assign=function(obj){var sources=Array.prototype.slice.call(arguments,1);while(sources.length){var source=sources.shift();if(!source){continue}if(typeof source!=="object"){throw new TypeError(source+"must be non-object")}for(var p in source){if(source.hasOwnProperty(p)){obj[p]=source[p]}}}return obj};exports.shrinkBuf=function(buf,size){if(buf.length===size){return buf}if(buf.subarray){return buf.subarray(0,size)}buf.length=size;return buf};var fnTyped={arraySet:function(dest,src,src_offs,len,dest_offs){if(src.subarray&&dest.subarray){dest.set(src.subarray(src_offs,src_offs+len),dest_offs);return}for(var i=0;i<len;i++){dest[dest_offs+i]=src[src_offs+i]}},flattenChunks:function(chunks){var i,l,len,pos,chunk,result;len=0;for(i=0,l=chunks.length;i<l;i++){len+=chunks[i].length}result=new Uint8Array(len);pos=0;for(i=0,l=chunks.length;i<l;i++){chunk=chunks[i];result.set(chunk,pos);pos+=chunk.length}return result}};var fnUntyped={arraySet:function(dest,src,src_offs,len,dest_offs){for(var i=0;i<len;i++){dest[dest_offs+i]=src[src_offs+i]}},flattenChunks:function(chunks){return[].concat.apply([],chunks)}};exports.setTyped=function(on){if(on){exports.Buf8=Uint8Array;exports.Buf16=Uint16Array;exports.Buf32=Int32Array;exports.assign(exports,fnTyped)}else{exports.Buf8=Array;exports.Buf16=Array;exports.Buf32=Array;exports.assign(exports,fnUntyped)}};exports.setTyped(TYPED_OK)},{}],28:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("./common");var STR_APPLY_OK=true;var STR_APPLY_UIA_OK=true;try{String.fromCharCode.apply(null,[0])}catch(__){STR_APPLY_OK=false}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(__){STR_APPLY_UIA_OK=false}var _utf8len=new utils.Buf8(256);for(var i=0;i<256;i++){_utf8len[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1}_utf8len[254]=_utf8len[254]=1;exports.string2buf=function(str){var buf,c,c2,m_pos,i,str_len=str.length,buf_len=0;for(m_pos=0;m_pos<str_len;m_pos++){c=str.charCodeAt(m_pos);if((c&64512)===55296&&m_pos+1<str_len){c2=str.charCodeAt(m_pos+1);if((c2&64512)===56320){c=65536+(c-55296<<10)+(c2-56320);m_pos++}}buf_len+=c<128?1:c<2048?2:c<65536?3:4}buf=new utils.Buf8(buf_len);for(i=0,m_pos=0;i<buf_len;m_pos++){c=str.charCodeAt(m_pos);if((c&64512)===55296&&m_pos+1<str_len){c2=str.charCodeAt(m_pos+1);if((c2&64512)===56320){c=65536+(c-55296<<10)+(c2-56320);m_pos++}}if(c<128){buf[i++]=c}else if(c<2048){buf[i++]=192|c>>>6;buf[i++]=128|c&63}else if(c<65536){buf[i++]=224|c>>>12;buf[i++]=128|c>>>6&63;buf[i++]=128|c&63}else{buf[i++]=240|c>>>18;buf[i++]=128|c>>>12&63;buf[i++]=128|c>>>6&63;buf[i++]=128|c&63}}return buf};function buf2binstring(buf,len){if(len<65537){if(buf.subarray&&STR_APPLY_UIA_OK||!buf.subarray&&STR_APPLY_OK){return String.fromCharCode.apply(null,utils.shrinkBuf(buf,len))}}var result="";for(var i=0;i<len;i++){result+=String.fromCharCode(buf[i])}return result}exports.buf2binstring=function(buf){return buf2binstring(buf,buf.length)};exports.binstring2buf=function(str){var buf=new utils.Buf8(str.length);for(var i=0,len=buf.length;i<len;i++){buf[i]=str.charCodeAt(i)}return buf};exports.buf2string=function(buf,max){var i,out,c,c_len;var len=max||buf.length;var utf16buf=new Array(len*2);for(out=0,i=0;i<len;){c=buf[i++];if(c<128){utf16buf[out++]=c;continue}c_len=_utf8len[c];if(c_len>4){utf16buf[out++]=65533;i+=c_len-1;continue}c&=c_len===2?31:c_len===3?15:7;while(c_len>1&&i<len){c=c<<6|buf[i++]&63;c_len--}if(c_len>1){utf16buf[out++]=65533;continue}if(c<65536){utf16buf[out++]=c}else{c-=65536;utf16buf[out++]=55296|c>>10&1023;utf16buf[out++]=56320|c&1023}}return buf2binstring(utf16buf,out)};exports.utf8border=function(buf,max){var pos;max=max||buf.length;if(max>buf.length){max=buf.length}pos=max-1;while(pos>=0&&(buf[pos]&192)===128){pos--}if(pos<0){return max}if(pos===0){return max}return pos+_utf8len[buf[pos]]>max?pos:max}},{"./common":27}],29:[function(_dereq_,module,exports){"use strict";function adler32(adler,buf,len,pos){var s1=adler&65535|0,s2=adler>>>16&65535|0,n=0;while(len!==0){n=len>2e3?2e3:len;len-=n;do{s1=s1+buf[pos++]|0;s2=s2+s1|0}while(--n);s1%=65521;s2%=65521}return s1|s2<<16|0}module.exports=adler32},{}],30:[function(_dereq_,module,exports){module.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(_dereq_,module,exports){"use strict";function makeTable(){var c,table=[];for(var n=0;n<256;n++){c=n;for(var k=0;k<8;k++){c=c&1?3988292384^c>>>1:c>>>1}table[n]=c}return table}var crcTable=makeTable();function crc32(crc,buf,len,pos){var t=crcTable,end=pos+len;crc=crc^-1;for(var i=pos;i<end;i++){crc=crc>>>8^t[(crc^buf[i])&255]}return crc^-1}module.exports=crc32},{}],32:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("../utils/common");var trees=_dereq_("./trees");var adler32=_dereq_("./adler32");var crc32=_dereq_("./crc32");var msg=_dereq_("./messages");var Z_NO_FLUSH=0;var Z_PARTIAL_FLUSH=1;var Z_FULL_FLUSH=3;var Z_FINISH=4;var Z_BLOCK=5;var Z_OK=0;var Z_STREAM_END=1;var Z_STREAM_ERROR=-2;var Z_DATA_ERROR=-3;var Z_BUF_ERROR=-5;var Z_DEFAULT_COMPRESSION=-1;var Z_FILTERED=1;var Z_HUFFMAN_ONLY=2;var Z_RLE=3;var Z_FIXED=4;var Z_DEFAULT_STRATEGY=0;var Z_UNKNOWN=2;var Z_DEFLATED=8;var MAX_MEM_LEVEL=9;var MAX_WBITS=15;var DEF_MEM_LEVEL=8;var LENGTH_CODES=29;var LITERALS=256;var L_CODES=LITERALS+1+LENGTH_CODES;var D_CODES=30;var BL_CODES=19;var HEAP_SIZE=2*L_CODES+1;var MAX_BITS=15;var MIN_MATCH=3;var MAX_MATCH=258;var MIN_LOOKAHEAD=MAX_MATCH+MIN_MATCH+1;var PRESET_DICT=32;var INIT_STATE=42;var EXTRA_STATE=69;var NAME_STATE=73;var COMMENT_STATE=91;var HCRC_STATE=103;var BUSY_STATE=113;var FINISH_STATE=666;var BS_NEED_MORE=1;var BS_BLOCK_DONE=2;var BS_FINISH_STARTED=3;var BS_FINISH_DONE=4;var OS_CODE=3;function err(strm,errorCode){strm.msg=msg[errorCode];return errorCode}function rank(f){return(f<<1)-(f>4?9:0)}function zero(buf){var len=buf.length;while(--len>=0){buf[len]=0}}function flush_pending(strm){var s=strm.state;var len=s.pending;if(len>strm.avail_out){len=strm.avail_out}if(len===0){return}utils.arraySet(strm.output,s.pending_buf,s.pending_out,len,strm.next_out);strm.next_out+=len;s.pending_out+=len;strm.total_out+=len;strm.avail_out-=len;s.pending-=len;if(s.pending===0){s.pending_out=0}}function flush_block_only(s,last){trees._tr_flush_block(s,s.block_start>=0?s.block_start:-1,s.strstart-s.block_start,last);s.block_start=s.strstart;flush_pending(s.strm)}function put_byte(s,b){s.pending_buf[s.pending++]=b}function putShortMSB(s,b){s.pending_buf[s.pending++]=b>>>8&255;s.pending_buf[s.pending++]=b&255}function read_buf(strm,buf,start,size){var len=strm.avail_in;if(len>size){len=size}if(len===0){return 0}strm.avail_in-=len;utils.arraySet(buf,strm.input,strm.next_in,len,start);if(strm.state.wrap===1){strm.adler=adler32(strm.adler,buf,len,start)}else if(strm.state.wrap===2){strm.adler=crc32(strm.adler,buf,len,start)}strm.next_in+=len;strm.total_in+=len;return len}function longest_match(s,cur_match){var chain_length=s.max_chain_length;var scan=s.strstart;var match;var len;var best_len=s.prev_length;var nice_match=s.nice_match;var limit=s.strstart>s.w_size-MIN_LOOKAHEAD?s.strstart-(s.w_size-MIN_LOOKAHEAD):0;var _win=s.window;var wmask=s.w_mask;var prev=s.prev;var strend=s.strstart+MAX_MATCH;var scan_end1=_win[scan+best_len-1];var scan_end=_win[scan+best_len];if(s.prev_length>=s.good_match){chain_length>>=2}if(nice_match>s.lookahead){nice_match=s.lookahead}do{match=cur_match;if(_win[match+best_len]!==scan_end||_win[match+best_len-1]!==scan_end1||_win[match]!==_win[scan]||_win[++match]!==_win[scan+1]){continue}scan+=2;match++;do{}while(_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&_win[++scan]===_win[++match]&&scan<strend);len=MAX_MATCH-(strend-scan);scan=strend-MAX_MATCH;if(len>best_len){s.match_start=cur_match;best_len=len;if(len>=nice_match){break}scan_end1=_win[scan+best_len-1];scan_end=_win[scan+best_len]}}while((cur_match=prev[cur_match&wmask])>limit&&--chain_length!==0);if(best_len<=s.lookahead){return best_len}return s.lookahead}function fill_window(s){var _w_size=s.w_size;var p,n,m,more,str;do{more=s.window_size-s.lookahead-s.strstart;if(s.strstart>=_w_size+(_w_size-MIN_LOOKAHEAD)){utils.arraySet(s.window,s.window,_w_size,_w_size,0);s.match_start-=_w_size;s.strstart-=_w_size;s.block_start-=_w_size;n=s.hash_size;p=n;do{m=s.head[--p];s.head[p]=m>=_w_size?m-_w_size:0}while(--n);n=_w_size;p=n;do{m=s.prev[--p];s.prev[p]=m>=_w_size?m-_w_size:0}while(--n);more+=_w_size}if(s.strm.avail_in===0){break}n=read_buf(s.strm,s.window,s.strstart+s.lookahead,more);s.lookahead+=n;if(s.lookahead+s.insert>=MIN_MATCH){str=s.strstart-s.insert;s.ins_h=s.window[str];s.ins_h=(s.ins_h<<s.hash_shift^s.window[str+1])&s.hash_mask;while(s.insert){s.ins_h=(s.ins_h<<s.hash_shift^s.window[str+MIN_MATCH-1])&s.hash_mask;s.prev[str&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=str;str++;s.insert--;if(s.lookahead+s.insert<MIN_MATCH){break}}}}while(s.lookahead<MIN_LOOKAHEAD&&s.strm.avail_in!==0)}function deflate_stored(s,flush){var max_block_size=65535;if(max_block_size>s.pending_buf_size-5){max_block_size=s.pending_buf_size-5}for(;;){if(s.lookahead<=1){fill_window(s);if(s.lookahead===0&&flush===Z_NO_FLUSH){return BS_NEED_MORE}if(s.lookahead===0){break}}s.strstart+=s.lookahead;s.lookahead=0;var max_start=s.block_start+max_block_size;if(s.strstart===0||s.strstart>=max_start){s.lookahead=s.strstart-max_start;s.strstart=max_start;flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}if(s.strstart-s.block_start>=s.w_size-MIN_LOOKAHEAD){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}}s.insert=0;if(flush===Z_FINISH){flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED}return BS_FINISH_DONE}if(s.strstart>s.block_start){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}return BS_NEED_MORE}function deflate_fast(s,flush){var hash_head;var bflush;for(;;){if(s.lookahead<MIN_LOOKAHEAD){fill_window(s);if(s.lookahead<MIN_LOOKAHEAD&&flush===Z_NO_FLUSH){return BS_NEED_MORE}if(s.lookahead===0){break}}hash_head=0;if(s.lookahead>=MIN_MATCH){s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+MIN_MATCH-1])&s.hash_mask;hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart}if(hash_head!==0&&s.strstart-hash_head<=s.w_size-MIN_LOOKAHEAD){s.match_length=longest_match(s,hash_head)}if(s.match_length>=MIN_MATCH){bflush=trees._tr_tally(s,s.strstart-s.match_start,s.match_length-MIN_MATCH);s.lookahead-=s.match_length;if(s.match_length<=s.max_lazy_match&&s.lookahead>=MIN_MATCH){s.match_length--;do{s.strstart++;s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+MIN_MATCH-1])&s.hash_mask;hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart}while(--s.match_length!==0);s.strstart++}else{s.strstart+=s.match_length;s.match_length=0;s.ins_h=s.window[s.strstart];s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+1])&s.hash_mask}}else{bflush=trees._tr_tally(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++}if(bflush){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}}s.insert=s.strstart<MIN_MATCH-1?s.strstart:MIN_MATCH-1;if(flush===Z_FINISH){flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED}return BS_FINISH_DONE}if(s.last_lit){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}return BS_BLOCK_DONE}function deflate_slow(s,flush){var hash_head;var bflush;var max_insert;for(;;){if(s.lookahead<MIN_LOOKAHEAD){fill_window(s);if(s.lookahead<MIN_LOOKAHEAD&&flush===Z_NO_FLUSH){return BS_NEED_MORE}if(s.lookahead===0){break}}hash_head=0;if(s.lookahead>=MIN_MATCH){s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+MIN_MATCH-1])&s.hash_mask;hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart}s.prev_length=s.match_length;s.prev_match=s.match_start;s.match_length=MIN_MATCH-1;if(hash_head!==0&&s.prev_length<s.max_lazy_match&&s.strstart-hash_head<=s.w_size-MIN_LOOKAHEAD){s.match_length=longest_match(s,hash_head);if(s.match_length<=5&&(s.strategy===Z_FILTERED||s.match_length===MIN_MATCH&&s.strstart-s.match_start>4096)){s.match_length=MIN_MATCH-1}}if(s.prev_length>=MIN_MATCH&&s.match_length<=s.prev_length){max_insert=s.strstart+s.lookahead-MIN_MATCH;bflush=trees._tr_tally(s,s.strstart-1-s.prev_match,s.prev_length-MIN_MATCH);s.lookahead-=s.prev_length-1;s.prev_length-=2;do{if(++s.strstart<=max_insert){s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+MIN_MATCH-1])&s.hash_mask;hash_head=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h];s.head[s.ins_h]=s.strstart}}while(--s.prev_length!==0);s.match_available=0;s.match_length=MIN_MATCH-1;s.strstart++;if(bflush){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}}else if(s.match_available){bflush=trees._tr_tally(s,0,s.window[s.strstart-1]);if(bflush){flush_block_only(s,false)}s.strstart++;s.lookahead--;if(s.strm.avail_out===0){return BS_NEED_MORE}}else{s.match_available=1;s.strstart++;s.lookahead--}}if(s.match_available){bflush=trees._tr_tally(s,0,s.window[s.strstart-1]);s.match_available=0}s.insert=s.strstart<MIN_MATCH-1?s.strstart:MIN_MATCH-1;if(flush===Z_FINISH){flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED}return BS_FINISH_DONE}if(s.last_lit){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}return BS_BLOCK_DONE}function deflate_rle(s,flush){var bflush;var prev;var scan,strend;var _win=s.window;for(;;){if(s.lookahead<=MAX_MATCH){fill_window(s);if(s.lookahead<=MAX_MATCH&&flush===Z_NO_FLUSH){return BS_NEED_MORE}if(s.lookahead===0){break}}s.match_length=0;if(s.lookahead>=MIN_MATCH&&s.strstart>0){scan=s.strstart-1;prev=_win[scan];if(prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]){strend=s.strstart+MAX_MATCH;do{}while(prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&prev===_win[++scan]&&scan<strend);s.match_length=MAX_MATCH-(strend-scan);if(s.match_length>s.lookahead){s.match_length=s.lookahead}}}if(s.match_length>=MIN_MATCH){bflush=trees._tr_tally(s,1,s.match_length-MIN_MATCH);s.lookahead-=s.match_length;s.strstart+=s.match_length;s.match_length=0}else{bflush=trees._tr_tally(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++}if(bflush){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}}s.insert=0;if(flush===Z_FINISH){flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED}return BS_FINISH_DONE}if(s.last_lit){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}return BS_BLOCK_DONE}function deflate_huff(s,flush){var bflush;
for(;;){if(s.lookahead===0){fill_window(s);if(s.lookahead===0){if(flush===Z_NO_FLUSH){return BS_NEED_MORE}break}}s.match_length=0;bflush=trees._tr_tally(s,0,s.window[s.strstart]);s.lookahead--;s.strstart++;if(bflush){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}}s.insert=0;if(flush===Z_FINISH){flush_block_only(s,true);if(s.strm.avail_out===0){return BS_FINISH_STARTED}return BS_FINISH_DONE}if(s.last_lit){flush_block_only(s,false);if(s.strm.avail_out===0){return BS_NEED_MORE}}return BS_BLOCK_DONE}var Config=function(good_length,max_lazy,nice_length,max_chain,func){this.good_length=good_length;this.max_lazy=max_lazy;this.nice_length=nice_length;this.max_chain=max_chain;this.func=func};var configuration_table;configuration_table=[new Config(0,0,0,0,deflate_stored),new Config(4,4,8,4,deflate_fast),new Config(4,5,16,8,deflate_fast),new Config(4,6,32,32,deflate_fast),new Config(4,4,16,16,deflate_slow),new Config(8,16,32,32,deflate_slow),new Config(8,16,128,128,deflate_slow),new Config(8,32,128,256,deflate_slow),new Config(32,128,258,1024,deflate_slow),new Config(32,258,258,4096,deflate_slow)];function lm_init(s){s.window_size=2*s.w_size;zero(s.head);s.max_lazy_match=configuration_table[s.level].max_lazy;s.good_match=configuration_table[s.level].good_length;s.nice_match=configuration_table[s.level].nice_length;s.max_chain_length=configuration_table[s.level].max_chain;s.strstart=0;s.block_start=0;s.lookahead=0;s.insert=0;s.match_length=s.prev_length=MIN_MATCH-1;s.match_available=0;s.ins_h=0}function DeflateState(){this.strm=null;this.status=0;this.pending_buf=null;this.pending_buf_size=0;this.pending_out=0;this.pending=0;this.wrap=0;this.gzhead=null;this.gzindex=0;this.method=Z_DEFLATED;this.last_flush=-1;this.w_size=0;this.w_bits=0;this.w_mask=0;this.window=null;this.window_size=0;this.prev=null;this.head=null;this.ins_h=0;this.hash_size=0;this.hash_bits=0;this.hash_mask=0;this.hash_shift=0;this.block_start=0;this.match_length=0;this.prev_match=0;this.match_available=0;this.strstart=0;this.match_start=0;this.lookahead=0;this.prev_length=0;this.max_chain_length=0;this.max_lazy_match=0;this.level=0;this.strategy=0;this.good_match=0;this.nice_match=0;this.dyn_ltree=new utils.Buf16(HEAP_SIZE*2);this.dyn_dtree=new utils.Buf16((2*D_CODES+1)*2);this.bl_tree=new utils.Buf16((2*BL_CODES+1)*2);zero(this.dyn_ltree);zero(this.dyn_dtree);zero(this.bl_tree);this.l_desc=null;this.d_desc=null;this.bl_desc=null;this.bl_count=new utils.Buf16(MAX_BITS+1);this.heap=new utils.Buf16(2*L_CODES+1);zero(this.heap);this.heap_len=0;this.heap_max=0;this.depth=new utils.Buf16(2*L_CODES+1);zero(this.depth);this.l_buf=0;this.lit_bufsize=0;this.last_lit=0;this.d_buf=0;this.opt_len=0;this.static_len=0;this.matches=0;this.insert=0;this.bi_buf=0;this.bi_valid=0}function deflateResetKeep(strm){var s;if(!strm||!strm.state){return err(strm,Z_STREAM_ERROR)}strm.total_in=strm.total_out=0;strm.data_type=Z_UNKNOWN;s=strm.state;s.pending=0;s.pending_out=0;if(s.wrap<0){s.wrap=-s.wrap}s.status=s.wrap?INIT_STATE:BUSY_STATE;strm.adler=s.wrap===2?0:1;s.last_flush=Z_NO_FLUSH;trees._tr_init(s);return Z_OK}function deflateReset(strm){var ret=deflateResetKeep(strm);if(ret===Z_OK){lm_init(strm.state)}return ret}function deflateSetHeader(strm,head){if(!strm||!strm.state){return Z_STREAM_ERROR}if(strm.state.wrap!==2){return Z_STREAM_ERROR}strm.state.gzhead=head;return Z_OK}function deflateInit2(strm,level,method,windowBits,memLevel,strategy){if(!strm){return Z_STREAM_ERROR}var wrap=1;if(level===Z_DEFAULT_COMPRESSION){level=6}if(windowBits<0){wrap=0;windowBits=-windowBits}else if(windowBits>15){wrap=2;windowBits-=16}if(memLevel<1||memLevel>MAX_MEM_LEVEL||method!==Z_DEFLATED||windowBits<8||windowBits>15||level<0||level>9||strategy<0||strategy>Z_FIXED){return err(strm,Z_STREAM_ERROR)}if(windowBits===8){windowBits=9}var s=new DeflateState;strm.state=s;s.strm=strm;s.wrap=wrap;s.gzhead=null;s.w_bits=windowBits;s.w_size=1<<s.w_bits;s.w_mask=s.w_size-1;s.hash_bits=memLevel+7;s.hash_size=1<<s.hash_bits;s.hash_mask=s.hash_size-1;s.hash_shift=~~((s.hash_bits+MIN_MATCH-1)/MIN_MATCH);s.window=new utils.Buf8(s.w_size*2);s.head=new utils.Buf16(s.hash_size);s.prev=new utils.Buf16(s.w_size);s.lit_bufsize=1<<memLevel+6;s.pending_buf_size=s.lit_bufsize*4;s.pending_buf=new utils.Buf8(s.pending_buf_size);s.d_buf=s.lit_bufsize>>1;s.l_buf=(1+2)*s.lit_bufsize;s.level=level;s.strategy=strategy;s.method=method;return deflateReset(strm)}function deflateInit(strm,level){return deflateInit2(strm,level,Z_DEFLATED,MAX_WBITS,DEF_MEM_LEVEL,Z_DEFAULT_STRATEGY)}function deflate(strm,flush){var old_flush,s;var beg,val;if(!strm||!strm.state||flush>Z_BLOCK||flush<0){return strm?err(strm,Z_STREAM_ERROR):Z_STREAM_ERROR}s=strm.state;if(!strm.output||!strm.input&&strm.avail_in!==0||s.status===FINISH_STATE&&flush!==Z_FINISH){return err(strm,strm.avail_out===0?Z_BUF_ERROR:Z_STREAM_ERROR)}s.strm=strm;old_flush=s.last_flush;s.last_flush=flush;if(s.status===INIT_STATE){if(s.wrap===2){strm.adler=0;put_byte(s,31);put_byte(s,139);put_byte(s,8);if(!s.gzhead){put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,0);put_byte(s,s.level===9?2:s.strategy>=Z_HUFFMAN_ONLY||s.level<2?4:0);put_byte(s,OS_CODE);s.status=BUSY_STATE}else{put_byte(s,(s.gzhead.text?1:0)+(s.gzhead.hcrc?2:0)+(!s.gzhead.extra?0:4)+(!s.gzhead.name?0:8)+(!s.gzhead.comment?0:16));put_byte(s,s.gzhead.time&255);put_byte(s,s.gzhead.time>>8&255);put_byte(s,s.gzhead.time>>16&255);put_byte(s,s.gzhead.time>>24&255);put_byte(s,s.level===9?2:s.strategy>=Z_HUFFMAN_ONLY||s.level<2?4:0);put_byte(s,s.gzhead.os&255);if(s.gzhead.extra&&s.gzhead.extra.length){put_byte(s,s.gzhead.extra.length&255);put_byte(s,s.gzhead.extra.length>>8&255)}if(s.gzhead.hcrc){strm.adler=crc32(strm.adler,s.pending_buf,s.pending,0)}s.gzindex=0;s.status=EXTRA_STATE}}else{var header=Z_DEFLATED+(s.w_bits-8<<4)<<8;var level_flags=-1;if(s.strategy>=Z_HUFFMAN_ONLY||s.level<2){level_flags=0}else if(s.level<6){level_flags=1}else if(s.level===6){level_flags=2}else{level_flags=3}header|=level_flags<<6;if(s.strstart!==0){header|=PRESET_DICT}header+=31-header%31;s.status=BUSY_STATE;putShortMSB(s,header);if(s.strstart!==0){putShortMSB(s,strm.adler>>>16);putShortMSB(s,strm.adler&65535)}strm.adler=1}}if(s.status===EXTRA_STATE){if(s.gzhead.extra){beg=s.pending;while(s.gzindex<(s.gzhead.extra.length&65535)){if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg)}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){break}}put_byte(s,s.gzhead.extra[s.gzindex]&255);s.gzindex++}if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg)}if(s.gzindex===s.gzhead.extra.length){s.gzindex=0;s.status=NAME_STATE}}else{s.status=NAME_STATE}}if(s.status===NAME_STATE){if(s.gzhead.name){beg=s.pending;do{if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg)}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){val=1;break}}if(s.gzindex<s.gzhead.name.length){val=s.gzhead.name.charCodeAt(s.gzindex++)&255}else{val=0}put_byte(s,val)}while(val!==0);if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg)}if(val===0){s.gzindex=0;s.status=COMMENT_STATE}}else{s.status=COMMENT_STATE}}if(s.status===COMMENT_STATE){if(s.gzhead.comment){beg=s.pending;do{if(s.pending===s.pending_buf_size){if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg)}flush_pending(strm);beg=s.pending;if(s.pending===s.pending_buf_size){val=1;break}}if(s.gzindex<s.gzhead.comment.length){val=s.gzhead.comment.charCodeAt(s.gzindex++)&255}else{val=0}put_byte(s,val)}while(val!==0);if(s.gzhead.hcrc&&s.pending>beg){strm.adler=crc32(strm.adler,s.pending_buf,s.pending-beg,beg)}if(val===0){s.status=HCRC_STATE}}else{s.status=HCRC_STATE}}if(s.status===HCRC_STATE){if(s.gzhead.hcrc){if(s.pending+2>s.pending_buf_size){flush_pending(strm)}if(s.pending+2<=s.pending_buf_size){put_byte(s,strm.adler&255);put_byte(s,strm.adler>>8&255);strm.adler=0;s.status=BUSY_STATE}}else{s.status=BUSY_STATE}}if(s.pending!==0){flush_pending(strm);if(strm.avail_out===0){s.last_flush=-1;return Z_OK}}else if(strm.avail_in===0&&rank(flush)<=rank(old_flush)&&flush!==Z_FINISH){return err(strm,Z_BUF_ERROR)}if(s.status===FINISH_STATE&&strm.avail_in!==0){return err(strm,Z_BUF_ERROR)}if(strm.avail_in!==0||s.lookahead!==0||flush!==Z_NO_FLUSH&&s.status!==FINISH_STATE){var bstate=s.strategy===Z_HUFFMAN_ONLY?deflate_huff(s,flush):s.strategy===Z_RLE?deflate_rle(s,flush):configuration_table[s.level].func(s,flush);if(bstate===BS_FINISH_STARTED||bstate===BS_FINISH_DONE){s.status=FINISH_STATE}if(bstate===BS_NEED_MORE||bstate===BS_FINISH_STARTED){if(strm.avail_out===0){s.last_flush=-1}return Z_OK}if(bstate===BS_BLOCK_DONE){if(flush===Z_PARTIAL_FLUSH){trees._tr_align(s)}else if(flush!==Z_BLOCK){trees._tr_stored_block(s,0,0,false);if(flush===Z_FULL_FLUSH){zero(s.head);if(s.lookahead===0){s.strstart=0;s.block_start=0;s.insert=0}}}flush_pending(strm);if(strm.avail_out===0){s.last_flush=-1;return Z_OK}}}if(flush!==Z_FINISH){return Z_OK}if(s.wrap<=0){return Z_STREAM_END}if(s.wrap===2){put_byte(s,strm.adler&255);put_byte(s,strm.adler>>8&255);put_byte(s,strm.adler>>16&255);put_byte(s,strm.adler>>24&255);put_byte(s,strm.total_in&255);put_byte(s,strm.total_in>>8&255);put_byte(s,strm.total_in>>16&255);put_byte(s,strm.total_in>>24&255)}else{putShortMSB(s,strm.adler>>>16);putShortMSB(s,strm.adler&65535)}flush_pending(strm);if(s.wrap>0){s.wrap=-s.wrap}return s.pending!==0?Z_OK:Z_STREAM_END}function deflateEnd(strm){var status;if(!strm||!strm.state){return Z_STREAM_ERROR}status=strm.state.status;if(status!==INIT_STATE&&status!==EXTRA_STATE&&status!==NAME_STATE&&status!==COMMENT_STATE&&status!==HCRC_STATE&&status!==BUSY_STATE&&status!==FINISH_STATE){return err(strm,Z_STREAM_ERROR)}strm.state=null;return status===BUSY_STATE?err(strm,Z_DATA_ERROR):Z_OK}exports.deflateInit=deflateInit;exports.deflateInit2=deflateInit2;exports.deflateReset=deflateReset;exports.deflateResetKeep=deflateResetKeep;exports.deflateSetHeader=deflateSetHeader;exports.deflate=deflate;exports.deflateEnd=deflateEnd;exports.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(_dereq_,module,exports){"use strict";function GZheader(){this.text=0;this.time=0;this.xflags=0;this.os=0;this.extra=null;this.extra_len=0;this.name="";this.comment="";this.hcrc=0;this.done=false}module.exports=GZheader},{}],34:[function(_dereq_,module,exports){"use strict";var BAD=30;var TYPE=12;module.exports=function inflate_fast(strm,start){var state;var _in;var last;var _out;var beg;var end;var dmax;var wsize;var whave;var wnext;var window;var hold;var bits;var lcode;var dcode;var lmask;var dmask;var here;var op;var len;var dist;var from;var from_source;var input,output;state=strm.state;_in=strm.next_in;input=strm.input;last=_in+(strm.avail_in-5);_out=strm.next_out;output=strm.output;beg=_out-(start-strm.avail_out);end=_out+(strm.avail_out-257);dmax=state.dmax;wsize=state.wsize;whave=state.whave;wnext=state.wnext;window=state.window;hold=state.hold;bits=state.bits;lcode=state.lencode;dcode=state.distcode;lmask=(1<<state.lenbits)-1;dmask=(1<<state.distbits)-1;top:do{if(bits<15){hold+=input[_in++]<<bits;bits+=8;hold+=input[_in++]<<bits;bits+=8}here=lcode[hold&lmask];dolen:for(;;){op=here>>>24;hold>>>=op;bits-=op;op=here>>>16&255;if(op===0){output[_out++]=here&65535}else if(op&16){len=here&65535;op&=15;if(op){if(bits<op){hold+=input[_in++]<<bits;bits+=8}len+=hold&(1<<op)-1;hold>>>=op;bits-=op}if(bits<15){hold+=input[_in++]<<bits;bits+=8;hold+=input[_in++]<<bits;bits+=8}here=dcode[hold&dmask];dodist:for(;;){op=here>>>24;hold>>>=op;bits-=op;op=here>>>16&255;if(op&16){dist=here&65535;op&=15;if(bits<op){hold+=input[_in++]<<bits;bits+=8;if(bits<op){hold+=input[_in++]<<bits;bits+=8}}dist+=hold&(1<<op)-1;if(dist>dmax){strm.msg="invalid distance too far back";state.mode=BAD;break top}hold>>>=op;bits-=op;op=_out-beg;if(dist>op){op=dist-op;if(op>whave){if(state.sane){strm.msg="invalid distance too far back";state.mode=BAD;break top}}from=0;from_source=window;if(wnext===0){from+=wsize-op;if(op<len){len-=op;do{output[_out++]=window[from++]}while(--op);from=_out-dist;from_source=output}}else if(wnext<op){from+=wsize+wnext-op;op-=wnext;if(op<len){len-=op;do{output[_out++]=window[from++]}while(--op);from=0;if(wnext<len){op=wnext;len-=op;do{output[_out++]=window[from++]}while(--op);from=_out-dist;from_source=output}}}else{from+=wnext-op;if(op<len){len-=op;do{output[_out++]=window[from++]}while(--op);from=_out-dist;from_source=output}}while(len>2){output[_out++]=from_source[from++];output[_out++]=from_source[from++];output[_out++]=from_source[from++];len-=3}if(len){output[_out++]=from_source[from++];if(len>1){output[_out++]=from_source[from++]}}}else{from=_out-dist;do{output[_out++]=output[from++];output[_out++]=output[from++];output[_out++]=output[from++];len-=3}while(len>2);if(len){output[_out++]=output[from++];if(len>1){output[_out++]=output[from++]}}}}else if((op&64)===0){here=dcode[(here&65535)+(hold&(1<<op)-1)];continue dodist}else{strm.msg="invalid distance code";state.mode=BAD;break top}break}}else if((op&64)===0){here=lcode[(here&65535)+(hold&(1<<op)-1)];continue dolen}else if(op&32){state.mode=TYPE;break top}else{strm.msg="invalid literal/length code";state.mode=BAD;break top}break}}while(_in<last&&_out<end);len=bits>>3;_in-=len;bits-=len<<3;hold&=(1<<bits)-1;strm.next_in=_in;strm.next_out=_out;strm.avail_in=_in<last?5+(last-_in):5-(_in-last);strm.avail_out=_out<end?257+(end-_out):257-(_out-end);state.hold=hold;state.bits=bits;return}},{}],35:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("../utils/common");var adler32=_dereq_("./adler32");var crc32=_dereq_("./crc32");var inflate_fast=_dereq_("./inffast");var inflate_table=_dereq_("./inftrees");var CODES=0;var LENS=1;var DISTS=2;var Z_FINISH=4;var Z_BLOCK=5;var Z_TREES=6;var Z_OK=0;var Z_STREAM_END=1;var Z_NEED_DICT=2;var Z_STREAM_ERROR=-2;var Z_DATA_ERROR=-3;var Z_MEM_ERROR=-4;var Z_BUF_ERROR=-5;var Z_DEFLATED=8;var HEAD=1;var FLAGS=2;var TIME=3;var OS=4;var EXLEN=5;var EXTRA=6;var NAME=7;var COMMENT=8;var HCRC=9;var DICTID=10;var DICT=11;var TYPE=12;var TYPEDO=13;var STORED=14;var COPY_=15;var COPY=16;var TABLE=17;var LENLENS=18;var CODELENS=19;var LEN_=20;var LEN=21;var LENEXT=22;var DIST=23;var DISTEXT=24;var MATCH=25;var LIT=26;var CHECK=27;var LENGTH=28;var DONE=29;var BAD=30;var MEM=31;var SYNC=32;var ENOUGH_LENS=852;var ENOUGH_DISTS=592;var MAX_WBITS=15;var DEF_WBITS=MAX_WBITS;function ZSWAP32(q){return(q>>>24&255)+(q>>>8&65280)+((q&65280)<<8)+((q&255)<<24)}function InflateState(){this.mode=0;this.last=false;this.wrap=0;this.havedict=false;this.flags=0;this.dmax=0;this.check=0;this.total=0;this.head=null;this.wbits=0;this.wsize=0;this.whave=0;this.wnext=0;this.window=null;this.hold=0;this.bits=0;this.length=0;this.offset=0;this.extra=0;this.lencode=null;this.distcode=null;this.lenbits=0;this.distbits=0;this.ncode=0;this.nlen=0;this.ndist=0;this.have=0;this.next=null;this.lens=new utils.Buf16(320);this.work=new utils.Buf16(288);this.lendyn=null;this.distdyn=null;this.sane=0;this.back=0;this.was=0}function inflateResetKeep(strm){var state;if(!strm||!strm.state){return Z_STREAM_ERROR}state=strm.state;strm.total_in=strm.total_out=state.total=0;strm.msg="";if(state.wrap){strm.adler=state.wrap&1}state.mode=HEAD;state.last=0;state.havedict=0;state.dmax=32768;state.head=null;state.hold=0;state.bits=0;state.lencode=state.lendyn=new utils.Buf32(ENOUGH_LENS);state.distcode=state.distdyn=new utils.Buf32(ENOUGH_DISTS);state.sane=1;state.back=-1;return Z_OK}function inflateReset(strm){var state;if(!strm||!strm.state){return Z_STREAM_ERROR}state=strm.state;state.wsize=0;state.whave=0;state.wnext=0;return inflateResetKeep(strm)}function inflateReset2(strm,windowBits){var wrap;var state;if(!strm||!strm.state){return Z_STREAM_ERROR}state=strm.state;if(windowBits<0){wrap=0;windowBits=-windowBits}else{wrap=(windowBits>>4)+1;if(windowBits<48){windowBits&=15}}if(windowBits&&(windowBits<8||windowBits>15)){return Z_STREAM_ERROR}if(state.window!==null&&state.wbits!==windowBits){state.window=null}state.wrap=wrap;state.wbits=windowBits;return inflateReset(strm)}function inflateInit2(strm,windowBits){var ret;var state;if(!strm){return Z_STREAM_ERROR}state=new InflateState;strm.state=state;state.window=null;ret=inflateReset2(strm,windowBits);if(ret!==Z_OK){strm.state=null}return ret}function inflateInit(strm){return inflateInit2(strm,DEF_WBITS)}var virgin=true;var lenfix,distfix;function fixedtables(state){if(virgin){var sym;lenfix=new utils.Buf32(512);distfix=new utils.Buf32(32);sym=0;while(sym<144){state.lens[sym++]=8}while(sym<256){state.lens[sym++]=9}while(sym<280){state.lens[sym++]=7}while(sym<288){state.lens[sym++]=8}inflate_table(LENS,state.lens,0,288,lenfix,0,state.work,{bits:9});sym=0;while(sym<32){state.lens[sym++]=5}inflate_table(DISTS,state.lens,0,32,distfix,0,state.work,{bits:5});virgin=false}state.lencode=lenfix;state.lenbits=9;state.distcode=distfix;state.distbits=5}function updatewindow(strm,src,end,copy){var dist;var state=strm.state;if(state.window===null){state.wsize=1<<state.wbits;state.wnext=0;state.whave=0;state.window=new utils.Buf8(state.wsize)}if(copy>=state.wsize){utils.arraySet(state.window,src,end-state.wsize,state.wsize,0);state.wnext=0;state.whave=state.wsize}else{dist=state.wsize-state.wnext;if(dist>copy){dist=copy}utils.arraySet(state.window,src,end-copy,dist,state.wnext);copy-=dist;if(copy){utils.arraySet(state.window,src,end-copy,copy,0);state.wnext=copy;state.whave=state.wsize}else{state.wnext+=dist;if(state.wnext===state.wsize){state.wnext=0}if(state.whave<state.wsize){state.whave+=dist}}}return 0}function inflate(strm,flush){var state;var input,output;var next;var put;var have,left;var hold;var bits;var _in,_out;var copy;var from;var from_source;var here=0;var here_bits,here_op,here_val;var last_bits,last_op,last_val;var len;var ret;var hbuf=new utils.Buf8(4);var opts;var n;var order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!strm||!strm.state||!strm.output||!strm.input&&strm.avail_in!==0){return Z_STREAM_ERROR}state=strm.state;if(state.mode===TYPE){state.mode=TYPEDO}put=strm.next_out;output=strm.output;left=strm.avail_out;next=strm.next_in;input=strm.input;have=strm.avail_in;hold=state.hold;bits=state.bits;_in=have;_out=left;ret=Z_OK;inf_leave:for(;;){switch(state.mode){case HEAD:if(state.wrap===0){state.mode=TYPEDO;break}while(bits<16){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if(state.wrap&2&&hold===35615){state.check=0;hbuf[0]=hold&255;hbuf[1]=hold>>>8&255;state.check=crc32(state.check,hbuf,2,0);hold=0;bits=0;state.mode=FLAGS;break}state.flags=0;if(state.head){state.head.done=false}if(!(state.wrap&1)||(((hold&255)<<8)+(hold>>8))%31){strm.msg="incorrect header check";state.mode=BAD;break}if((hold&15)!==Z_DEFLATED){strm.msg="unknown compression method";state.mode=BAD;break}hold>>>=4;bits-=4;len=(hold&15)+8;if(state.wbits===0){state.wbits=len}else if(len>state.wbits){strm.msg="invalid window size";state.mode=BAD;break}state.dmax=1<<len;strm.adler=state.check=1;state.mode=hold&512?DICTID:TYPE;hold=0;bits=0;break;case FLAGS:while(bits<16){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}state.flags=hold;if((state.flags&255)!==Z_DEFLATED){strm.msg="unknown compression method";state.mode=BAD;break}if(state.flags&57344){strm.msg="unknown header flags set";state.mode=BAD;break}if(state.head){state.head.text=hold>>8&1}if(state.flags&512){hbuf[0]=hold&255;hbuf[1]=hold>>>8&255;state.check=crc32(state.check,hbuf,2,0)}hold=0;bits=0;state.mode=TIME;case TIME:while(bits<32){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if(state.head){state.head.time=hold}if(state.flags&512){hbuf[0]=hold&255;hbuf[1]=hold>>>8&255;hbuf[2]=hold>>>16&255;hbuf[3]=hold>>>24&255;state.check=crc32(state.check,hbuf,4,0)}hold=0;bits=0;state.mode=OS;case OS:while(bits<16){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if(state.head){state.head.xflags=hold&255;state.head.os=hold>>8}if(state.flags&512){hbuf[0]=hold&255;hbuf[1]=hold>>>8&255;state.check=crc32(state.check,hbuf,2,0)}hold=0;bits=0;state.mode=EXLEN;case EXLEN:if(state.flags&1024){while(bits<16){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}state.length=hold;if(state.head){state.head.extra_len=hold}if(state.flags&512){hbuf[0]=hold&255;hbuf[1]=hold>>>8&255;state.check=crc32(state.check,hbuf,2,0)}hold=0;bits=0}else if(state.head){state.head.extra=null}state.mode=EXTRA;case EXTRA:if(state.flags&1024){copy=state.length;if(copy>have){copy=have}if(copy){if(state.head){len=state.head.extra_len-state.length;if(!state.head.extra){state.head.extra=new Array(state.head.extra_len)}utils.arraySet(state.head.extra,input,next,copy,len)}if(state.flags&512){state.check=crc32(state.check,input,copy,next)}have-=copy;next+=copy;state.length-=copy}if(state.length){break inf_leave}}state.length=0;state.mode=NAME;case NAME:if(state.flags&2048){if(have===0){break inf_leave}copy=0;do{len=input[next+copy++];if(state.head&&len&&state.length<65536){state.head.name+=String.fromCharCode(len)}}while(len&&copy<have);if(state.flags&512){state.check=crc32(state.check,input,copy,next)}have-=copy;next+=copy;if(len){break inf_leave}}else if(state.head){state.head.name=null}state.length=0;state.mode=COMMENT;case COMMENT:if(state.flags&4096){if(have===0){break inf_leave}copy=0;do{len=input[next+copy++];if(state.head&&len&&state.length<65536){state.head.comment+=String.fromCharCode(len)}}while(len&&copy<have);if(state.flags&512){state.check=crc32(state.check,input,copy,next)}have-=copy;next+=copy;if(len){break inf_leave}}else if(state.head){state.head.comment=null}state.mode=HCRC;case HCRC:if(state.flags&512){while(bits<16){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if(hold!==(state.check&65535)){strm.msg="header crc mismatch";state.mode=BAD;break}hold=0;bits=0}if(state.head){state.head.hcrc=state.flags>>9&1;state.head.done=true}strm.adler=state.check=0;state.mode=TYPE;break;case DICTID:while(bits<32){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}strm.adler=state.check=ZSWAP32(hold);hold=0;bits=0;state.mode=DICT;case DICT:if(state.havedict===0){strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;return Z_NEED_DICT}strm.adler=state.check=1;state.mode=TYPE;case TYPE:if(flush===Z_BLOCK||flush===Z_TREES){break inf_leave}case TYPEDO:if(state.last){hold>>>=bits&7;bits-=bits&7;state.mode=CHECK;break}while(bits<3){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}state.last=hold&1;hold>>>=1;bits-=1;switch(hold&3){case 0:state.mode=STORED;break;case 1:fixedtables(state);state.mode=LEN_;if(flush===Z_TREES){hold>>>=2;bits-=2;break inf_leave}break;case 2:state.mode=TABLE;break;case 3:strm.msg="invalid block type";state.mode=BAD}hold>>>=2;bits-=2;break;case STORED:hold>>>=bits&7;bits-=bits&7;while(bits<32){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if((hold&65535)!==(hold>>>16^65535)){strm.msg="invalid stored block lengths";state.mode=BAD;break}state.length=hold&65535;hold=0;bits=0;state.mode=COPY_;if(flush===Z_TREES){break inf_leave}case COPY_:state.mode=COPY;case COPY:copy=state.length;if(copy){if(copy>have){copy=have}if(copy>left){copy=left}if(copy===0){break inf_leave}utils.arraySet(output,input,next,copy,put);have-=copy;next+=copy;left-=copy;put+=copy;state.length-=copy;break}state.mode=TYPE;break;case TABLE:while(bits<14){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}state.nlen=(hold&31)+257;hold>>>=5;bits-=5;state.ndist=(hold&31)+1;hold>>>=5;bits-=5;state.ncode=(hold&15)+4;hold>>>=4;bits-=4;if(state.nlen>286||state.ndist>30){strm.msg="too many length or distance symbols";state.mode=BAD;break}state.have=0;state.mode=LENLENS;case LENLENS:while(state.have<state.ncode){while(bits<3){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}state.lens[order[state.have++]]=hold&7;hold>>>=3;bits-=3}while(state.have<19){state.lens[order[state.have++]]=0}state.lencode=state.lendyn;state.lenbits=7;opts={bits:state.lenbits};ret=inflate_table(CODES,state.lens,0,19,state.lencode,0,state.work,opts);state.lenbits=opts.bits;if(ret){strm.msg="invalid code lengths set";state.mode=BAD;break}state.have=0;state.mode=CODELENS;case CODELENS:while(state.have<state.nlen+state.ndist){for(;;){here=state.lencode[hold&(1<<state.lenbits)-1];here_bits=here>>>24;here_op=here>>>16&255;here_val=here&65535;if(here_bits<=bits){break}if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if(here_val<16){hold>>>=here_bits;bits-=here_bits;state.lens[state.have++]=here_val}else{if(here_val===16){n=here_bits+2;while(bits<n){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}hold>>>=here_bits;bits-=here_bits;if(state.have===0){strm.msg="invalid bit length repeat";state.mode=BAD;break}len=state.lens[state.have-1];copy=3+(hold&3);hold>>>=2;bits-=2}else if(here_val===17){n=here_bits+3;while(bits<n){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}hold>>>=here_bits;bits-=here_bits;len=0;copy=3+(hold&7);hold>>>=3;bits-=3}else{n=here_bits+7;while(bits<n){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}hold>>>=here_bits;bits-=here_bits;len=0;copy=11+(hold&127);hold>>>=7;bits-=7}if(state.have+copy>state.nlen+state.ndist){strm.msg="invalid bit length repeat";state.mode=BAD;break}while(copy--){state.lens[state.have++]=len}}}if(state.mode===BAD){break}if(state.lens[256]===0){strm.msg="invalid code -- missing end-of-block";state.mode=BAD;break}state.lenbits=9;opts={bits:state.lenbits};ret=inflate_table(LENS,state.lens,0,state.nlen,state.lencode,0,state.work,opts);state.lenbits=opts.bits;if(ret){strm.msg="invalid literal/lengths set";state.mode=BAD;break}state.distbits=6;state.distcode=state.distdyn;opts={bits:state.distbits};ret=inflate_table(DISTS,state.lens,state.nlen,state.ndist,state.distcode,0,state.work,opts);state.distbits=opts.bits;if(ret){strm.msg="invalid distances set";state.mode=BAD;break}state.mode=LEN_;if(flush===Z_TREES){break inf_leave}case LEN_:state.mode=LEN;case LEN:if(have>=6&&left>=258){strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;inflate_fast(strm,_out);put=strm.next_out;output=strm.output;left=strm.avail_out;next=strm.next_in;input=strm.input;have=strm.avail_in;hold=state.hold;bits=state.bits;if(state.mode===TYPE){state.back=-1}break}state.back=0;for(;;){here=state.lencode[hold&(1<<state.lenbits)-1];here_bits=here>>>24;here_op=here>>>16&255;here_val=here&65535;if(here_bits<=bits){break}if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if(here_op&&(here_op&240)===0){last_bits=here_bits;last_op=here_op;last_val=here_val;for(;;){here=state.lencode[last_val+((hold&(1<<last_bits+last_op)-1)>>last_bits)];here_bits=here>>>24;here_op=here>>>16&255;here_val=here&65535;if(last_bits+here_bits<=bits){break}if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}hold>>>=last_bits;bits-=last_bits;state.back+=last_bits}hold>>>=here_bits;bits-=here_bits;state.back+=here_bits;state.length=here_val;if(here_op===0){state.mode=LIT;break}if(here_op&32){state.back=-1;state.mode=TYPE;break}if(here_op&64){strm.msg="invalid literal/length code";state.mode=BAD;break}state.extra=here_op&15;state.mode=LENEXT;case LENEXT:if(state.extra){n=state.extra;while(bits<n){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}state.length+=hold&(1<<state.extra)-1;hold>>>=state.extra;bits-=state.extra;state.back+=state.extra}state.was=state.length;state.mode=DIST;case DIST:for(;;){here=state.distcode[hold&(1<<state.distbits)-1];here_bits=here>>>24;here_op=here>>>16&255;here_val=here&65535;if(here_bits<=bits){break}if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if((here_op&240)===0){last_bits=here_bits;last_op=here_op;last_val=here_val;for(;;){here=state.distcode[last_val+((hold&(1<<last_bits+last_op)-1)>>last_bits)];here_bits=here>>>24;here_op=here>>>16&255;here_val=here&65535;if(last_bits+here_bits<=bits){break}if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}hold>>>=last_bits;bits-=last_bits;state.back+=last_bits}hold>>>=here_bits;bits-=here_bits;state.back+=here_bits;if(here_op&64){strm.msg="invalid distance code";state.mode=BAD;break}state.offset=here_val;state.extra=here_op&15;state.mode=DISTEXT;case DISTEXT:if(state.extra){n=state.extra;while(bits<n){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}state.offset+=hold&(1<<state.extra)-1;hold>>>=state.extra;bits-=state.extra;state.back+=state.extra}if(state.offset>state.dmax){strm.msg="invalid distance too far back";state.mode=BAD;break}state.mode=MATCH;case MATCH:if(left===0){break inf_leave}copy=_out-left;if(state.offset>copy){copy=state.offset-copy;if(copy>state.whave){if(state.sane){strm.msg="invalid distance too far back";state.mode=BAD;break}}if(copy>state.wnext){copy-=state.wnext;from=state.wsize-copy}else{from=state.wnext-copy}if(copy>state.length){copy=state.length}from_source=state.window}else{from_source=output;from=put-state.offset;copy=state.length}if(copy>left){copy=left}left-=copy;state.length-=copy;do{output[put++]=from_source[from++]}while(--copy);if(state.length===0){state.mode=LEN}break;case LIT:if(left===0){break inf_leave}output[put++]=state.length;left--;state.mode=LEN;break;case CHECK:if(state.wrap){while(bits<32){if(have===0){break inf_leave}have--;hold|=input[next++]<<bits;bits+=8}_out-=left;strm.total_out+=_out;state.total+=_out;if(_out){strm.adler=state.check=state.flags?crc32(state.check,output,_out,put-_out):adler32(state.check,output,_out,put-_out)}_out=left;if((state.flags?hold:ZSWAP32(hold))!==state.check){strm.msg="incorrect data check";state.mode=BAD;break}hold=0;bits=0}state.mode=LENGTH;case LENGTH:if(state.wrap&&state.flags){while(bits<32){if(have===0){break inf_leave}have--;hold+=input[next++]<<bits;bits+=8}if(hold!==(state.total&4294967295)){strm.msg="incorrect length check";state.mode=BAD;break}hold=0;bits=0}state.mode=DONE;case DONE:ret=Z_STREAM_END;break inf_leave;case BAD:ret=Z_DATA_ERROR;break inf_leave;case MEM:return Z_MEM_ERROR;case SYNC:default:return Z_STREAM_ERROR}}strm.next_out=put;strm.avail_out=left;strm.next_in=next;strm.avail_in=have;state.hold=hold;state.bits=bits;if(state.wsize||_out!==strm.avail_out&&state.mode<BAD&&(state.mode<CHECK||flush!==Z_FINISH)){if(updatewindow(strm,strm.output,strm.next_out,_out-strm.avail_out)){state.mode=MEM;return Z_MEM_ERROR}}_in-=strm.avail_in;_out-=strm.avail_out;strm.total_in+=_in;strm.total_out+=_out;state.total+=_out;if(state.wrap&&_out){strm.adler=state.check=state.flags?crc32(state.check,output,_out,strm.next_out-_out):adler32(state.check,output,_out,strm.next_out-_out)}strm.data_type=state.bits+(state.last?64:0)+(state.mode===TYPE?128:0)+(state.mode===LEN_||state.mode===COPY_?256:0);if((_in===0&&_out===0||flush===Z_FINISH)&&ret===Z_OK){ret=Z_BUF_ERROR}return ret}function inflateEnd(strm){if(!strm||!strm.state){return Z_STREAM_ERROR}var state=strm.state;if(state.window){state.window=null}strm.state=null;return Z_OK}function inflateGetHeader(strm,head){var state;if(!strm||!strm.state){return Z_STREAM_ERROR}state=strm.state;if((state.wrap&2)===0){return Z_STREAM_ERROR}state.head=head;head.done=false;return Z_OK}exports.inflateReset=inflateReset;exports.inflateReset2=inflateReset2;exports.inflateResetKeep=inflateResetKeep;exports.inflateInit=inflateInit;exports.inflateInit2=inflateInit2;exports.inflate=inflate;exports.inflateEnd=inflateEnd;exports.inflateGetHeader=inflateGetHeader;
exports.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("../utils/common");var MAXBITS=15;var ENOUGH_LENS=852;var ENOUGH_DISTS=592;var CODES=0;var LENS=1;var DISTS=2;var lbase=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0];var lext=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78];var dbase=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0];var dext=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];module.exports=function inflate_table(type,lens,lens_index,codes,table,table_index,work,opts){var bits=opts.bits;var len=0;var sym=0;var min=0,max=0;var root=0;var curr=0;var drop=0;var left=0;var used=0;var huff=0;var incr;var fill;var low;var mask;var next;var base=null;var base_index=0;var end;var count=new utils.Buf16(MAXBITS+1);var offs=new utils.Buf16(MAXBITS+1);var extra=null;var extra_index=0;var here_bits,here_op,here_val;for(len=0;len<=MAXBITS;len++){count[len]=0}for(sym=0;sym<codes;sym++){count[lens[lens_index+sym]]++}root=bits;for(max=MAXBITS;max>=1;max--){if(count[max]!==0){break}}if(root>max){root=max}if(max===0){table[table_index++]=1<<24|64<<16|0;table[table_index++]=1<<24|64<<16|0;opts.bits=1;return 0}for(min=1;min<max;min++){if(count[min]!==0){break}}if(root<min){root=min}left=1;for(len=1;len<=MAXBITS;len++){left<<=1;left-=count[len];if(left<0){return-1}}if(left>0&&(type===CODES||max!==1)){return-1}offs[1]=0;for(len=1;len<MAXBITS;len++){offs[len+1]=offs[len]+count[len]}for(sym=0;sym<codes;sym++){if(lens[lens_index+sym]!==0){work[offs[lens[lens_index+sym]]++]=sym}}if(type===CODES){base=extra=work;end=19}else if(type===LENS){base=lbase;base_index-=257;extra=lext;extra_index-=257;end=256}else{base=dbase;extra=dext;end=-1}huff=0;sym=0;len=min;next=table_index;curr=root;drop=0;low=-1;used=1<<root;mask=used-1;if(type===LENS&&used>ENOUGH_LENS||type===DISTS&&used>ENOUGH_DISTS){return 1}var i=0;for(;;){i++;here_bits=len-drop;if(work[sym]<end){here_op=0;here_val=work[sym]}else if(work[sym]>end){here_op=extra[extra_index+work[sym]];here_val=base[base_index+work[sym]]}else{here_op=32+64;here_val=0}incr=1<<len-drop;fill=1<<curr;min=fill;do{fill-=incr;table[next+(huff>>drop)+fill]=here_bits<<24|here_op<<16|here_val|0}while(fill!==0);incr=1<<len-1;while(huff&incr){incr>>=1}if(incr!==0){huff&=incr-1;huff+=incr}else{huff=0}sym++;if(--count[len]===0){if(len===max){break}len=lens[lens_index+work[sym]]}if(len>root&&(huff&mask)!==low){if(drop===0){drop=root}next+=min;curr=len-drop;left=1<<curr;while(curr+drop<max){left-=count[curr+drop];if(left<=0){break}curr++;left<<=1}used+=1<<curr;if(type===LENS&&used>ENOUGH_LENS||type===DISTS&&used>ENOUGH_DISTS){return 1}low=huff&mask;table[low]=root<<24|curr<<16|next-table_index|0}}if(huff!==0){table[next+huff]=len-drop<<24|64<<16|0}opts.bits=root;return 0}},{"../utils/common":27}],37:[function(_dereq_,module,exports){"use strict";module.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(_dereq_,module,exports){"use strict";var utils=_dereq_("../utils/common");var Z_FIXED=4;var Z_BINARY=0;var Z_TEXT=1;var Z_UNKNOWN=2;function zero(buf){var len=buf.length;while(--len>=0){buf[len]=0}}var STORED_BLOCK=0;var STATIC_TREES=1;var DYN_TREES=2;var MIN_MATCH=3;var MAX_MATCH=258;var LENGTH_CODES=29;var LITERALS=256;var L_CODES=LITERALS+1+LENGTH_CODES;var D_CODES=30;var BL_CODES=19;var HEAP_SIZE=2*L_CODES+1;var MAX_BITS=15;var Buf_size=16;var MAX_BL_BITS=7;var END_BLOCK=256;var REP_3_6=16;var REPZ_3_10=17;var REPZ_11_138=18;var extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];var extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];var extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];var bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];var DIST_CODE_LEN=512;var static_ltree=new Array((L_CODES+2)*2);zero(static_ltree);var static_dtree=new Array(D_CODES*2);zero(static_dtree);var _dist_code=new Array(DIST_CODE_LEN);zero(_dist_code);var _length_code=new Array(MAX_MATCH-MIN_MATCH+1);zero(_length_code);var base_length=new Array(LENGTH_CODES);zero(base_length);var base_dist=new Array(D_CODES);zero(base_dist);var StaticTreeDesc=function(static_tree,extra_bits,extra_base,elems,max_length){this.static_tree=static_tree;this.extra_bits=extra_bits;this.extra_base=extra_base;this.elems=elems;this.max_length=max_length;this.has_stree=static_tree&&static_tree.length};var static_l_desc;var static_d_desc;var static_bl_desc;var TreeDesc=function(dyn_tree,stat_desc){this.dyn_tree=dyn_tree;this.max_code=0;this.stat_desc=stat_desc};function d_code(dist){return dist<256?_dist_code[dist]:_dist_code[256+(dist>>>7)]}function put_short(s,w){s.pending_buf[s.pending++]=w&255;s.pending_buf[s.pending++]=w>>>8&255}function send_bits(s,value,length){if(s.bi_valid>Buf_size-length){s.bi_buf|=value<<s.bi_valid&65535;put_short(s,s.bi_buf);s.bi_buf=value>>Buf_size-s.bi_valid;s.bi_valid+=length-Buf_size}else{s.bi_buf|=value<<s.bi_valid&65535;s.bi_valid+=length}}function send_code(s,c,tree){send_bits(s,tree[c*2],tree[c*2+1])}function bi_reverse(code,len){var res=0;do{res|=code&1;code>>>=1;res<<=1}while(--len>0);return res>>>1}function bi_flush(s){if(s.bi_valid===16){put_short(s,s.bi_buf);s.bi_buf=0;s.bi_valid=0}else if(s.bi_valid>=8){s.pending_buf[s.pending++]=s.bi_buf&255;s.bi_buf>>=8;s.bi_valid-=8}}function gen_bitlen(s,desc){var tree=desc.dyn_tree;var max_code=desc.max_code;var stree=desc.stat_desc.static_tree;var has_stree=desc.stat_desc.has_stree;var extra=desc.stat_desc.extra_bits;var base=desc.stat_desc.extra_base;var max_length=desc.stat_desc.max_length;var h;var n,m;var bits;var xbits;var f;var overflow=0;for(bits=0;bits<=MAX_BITS;bits++){s.bl_count[bits]=0}tree[s.heap[s.heap_max]*2+1]=0;for(h=s.heap_max+1;h<HEAP_SIZE;h++){n=s.heap[h];bits=tree[tree[n*2+1]*2+1]+1;if(bits>max_length){bits=max_length;overflow++}tree[n*2+1]=bits;if(n>max_code){continue}s.bl_count[bits]++;xbits=0;if(n>=base){xbits=extra[n-base]}f=tree[n*2];s.opt_len+=f*(bits+xbits);if(has_stree){s.static_len+=f*(stree[n*2+1]+xbits)}}if(overflow===0){return}do{bits=max_length-1;while(s.bl_count[bits]===0){bits--}s.bl_count[bits]--;s.bl_count[bits+1]+=2;s.bl_count[max_length]--;overflow-=2}while(overflow>0);for(bits=max_length;bits!==0;bits--){n=s.bl_count[bits];while(n!==0){m=s.heap[--h];if(m>max_code){continue}if(tree[m*2+1]!==bits){s.opt_len+=(bits-tree[m*2+1])*tree[m*2];tree[m*2+1]=bits}n--}}}function gen_codes(tree,max_code,bl_count){var next_code=new Array(MAX_BITS+1);var code=0;var bits;var n;for(bits=1;bits<=MAX_BITS;bits++){next_code[bits]=code=code+bl_count[bits-1]<<1}for(n=0;n<=max_code;n++){var len=tree[n*2+1];if(len===0){continue}tree[n*2]=bi_reverse(next_code[len]++,len)}}function tr_static_init(){var n;var bits;var length;var code;var dist;var bl_count=new Array(MAX_BITS+1);length=0;for(code=0;code<LENGTH_CODES-1;code++){base_length[code]=length;for(n=0;n<1<<extra_lbits[code];n++){_length_code[length++]=code}}_length_code[length-1]=code;dist=0;for(code=0;code<16;code++){base_dist[code]=dist;for(n=0;n<1<<extra_dbits[code];n++){_dist_code[dist++]=code}}dist>>=7;for(;code<D_CODES;code++){base_dist[code]=dist<<7;for(n=0;n<1<<extra_dbits[code]-7;n++){_dist_code[256+dist++]=code}}for(bits=0;bits<=MAX_BITS;bits++){bl_count[bits]=0}n=0;while(n<=143){static_ltree[n*2+1]=8;n++;bl_count[8]++}while(n<=255){static_ltree[n*2+1]=9;n++;bl_count[9]++}while(n<=279){static_ltree[n*2+1]=7;n++;bl_count[7]++}while(n<=287){static_ltree[n*2+1]=8;n++;bl_count[8]++}gen_codes(static_ltree,L_CODES+1,bl_count);for(n=0;n<D_CODES;n++){static_dtree[n*2+1]=5;static_dtree[n*2]=bi_reverse(n,5)}static_l_desc=new StaticTreeDesc(static_ltree,extra_lbits,LITERALS+1,L_CODES,MAX_BITS);static_d_desc=new StaticTreeDesc(static_dtree,extra_dbits,0,D_CODES,MAX_BITS);static_bl_desc=new StaticTreeDesc(new Array(0),extra_blbits,0,BL_CODES,MAX_BL_BITS)}function init_block(s){var n;for(n=0;n<L_CODES;n++){s.dyn_ltree[n*2]=0}for(n=0;n<D_CODES;n++){s.dyn_dtree[n*2]=0}for(n=0;n<BL_CODES;n++){s.bl_tree[n*2]=0}s.dyn_ltree[END_BLOCK*2]=1;s.opt_len=s.static_len=0;s.last_lit=s.matches=0}function bi_windup(s){if(s.bi_valid>8){put_short(s,s.bi_buf)}else if(s.bi_valid>0){s.pending_buf[s.pending++]=s.bi_buf}s.bi_buf=0;s.bi_valid=0}function copy_block(s,buf,len,header){bi_windup(s);if(header){put_short(s,len);put_short(s,~len)}utils.arraySet(s.pending_buf,s.window,buf,len,s.pending);s.pending+=len}function smaller(tree,n,m,depth){var _n2=n*2;var _m2=m*2;return tree[_n2]<tree[_m2]||tree[_n2]===tree[_m2]&&depth[n]<=depth[m]}function pqdownheap(s,tree,k){var v=s.heap[k];var j=k<<1;while(j<=s.heap_len){if(j<s.heap_len&&smaller(tree,s.heap[j+1],s.heap[j],s.depth)){j++}if(smaller(tree,v,s.heap[j],s.depth)){break}s.heap[k]=s.heap[j];k=j;j<<=1}s.heap[k]=v}function compress_block(s,ltree,dtree){var dist;var lc;var lx=0;var code;var extra;if(s.last_lit!==0){do{dist=s.pending_buf[s.d_buf+lx*2]<<8|s.pending_buf[s.d_buf+lx*2+1];lc=s.pending_buf[s.l_buf+lx];lx++;if(dist===0){send_code(s,lc,ltree)}else{code=_length_code[lc];send_code(s,code+LITERALS+1,ltree);extra=extra_lbits[code];if(extra!==0){lc-=base_length[code];send_bits(s,lc,extra)}dist--;code=d_code(dist);send_code(s,code,dtree);extra=extra_dbits[code];if(extra!==0){dist-=base_dist[code];send_bits(s,dist,extra)}}}while(lx<s.last_lit)}send_code(s,END_BLOCK,ltree)}function build_tree(s,desc){var tree=desc.dyn_tree;var stree=desc.stat_desc.static_tree;var has_stree=desc.stat_desc.has_stree;var elems=desc.stat_desc.elems;var n,m;var max_code=-1;var node;s.heap_len=0;s.heap_max=HEAP_SIZE;for(n=0;n<elems;n++){if(tree[n*2]!==0){s.heap[++s.heap_len]=max_code=n;s.depth[n]=0}else{tree[n*2+1]=0}}while(s.heap_len<2){node=s.heap[++s.heap_len]=max_code<2?++max_code:0;tree[node*2]=1;s.depth[node]=0;s.opt_len--;if(has_stree){s.static_len-=stree[node*2+1]}}desc.max_code=max_code;for(n=s.heap_len>>1;n>=1;n--){pqdownheap(s,tree,n)}node=elems;do{n=s.heap[1];s.heap[1]=s.heap[s.heap_len--];pqdownheap(s,tree,1);m=s.heap[1];s.heap[--s.heap_max]=n;s.heap[--s.heap_max]=m;tree[node*2]=tree[n*2]+tree[m*2];s.depth[node]=(s.depth[n]>=s.depth[m]?s.depth[n]:s.depth[m])+1;tree[n*2+1]=tree[m*2+1]=node;s.heap[1]=node++;pqdownheap(s,tree,1)}while(s.heap_len>=2);s.heap[--s.heap_max]=s.heap[1];gen_bitlen(s,desc);gen_codes(tree,max_code,s.bl_count)}function scan_tree(s,tree,max_code){var n;var prevlen=-1;var curlen;var nextlen=tree[0*2+1];var count=0;var max_count=7;var min_count=4;if(nextlen===0){max_count=138;min_count=3}tree[(max_code+1)*2+1]=65535;for(n=0;n<=max_code;n++){curlen=nextlen;nextlen=tree[(n+1)*2+1];if(++count<max_count&&curlen===nextlen){continue}else if(count<min_count){s.bl_tree[curlen*2]+=count}else if(curlen!==0){if(curlen!==prevlen){s.bl_tree[curlen*2]++}s.bl_tree[REP_3_6*2]++}else if(count<=10){s.bl_tree[REPZ_3_10*2]++}else{s.bl_tree[REPZ_11_138*2]++}count=0;prevlen=curlen;if(nextlen===0){max_count=138;min_count=3}else if(curlen===nextlen){max_count=6;min_count=3}else{max_count=7;min_count=4}}}function send_tree(s,tree,max_code){var n;var prevlen=-1;var curlen;var nextlen=tree[0*2+1];var count=0;var max_count=7;var min_count=4;if(nextlen===0){max_count=138;min_count=3}for(n=0;n<=max_code;n++){curlen=nextlen;nextlen=tree[(n+1)*2+1];if(++count<max_count&&curlen===nextlen){continue}else if(count<min_count){do{send_code(s,curlen,s.bl_tree)}while(--count!==0)}else if(curlen!==0){if(curlen!==prevlen){send_code(s,curlen,s.bl_tree);count--}send_code(s,REP_3_6,s.bl_tree);send_bits(s,count-3,2)}else if(count<=10){send_code(s,REPZ_3_10,s.bl_tree);send_bits(s,count-3,3)}else{send_code(s,REPZ_11_138,s.bl_tree);send_bits(s,count-11,7)}count=0;prevlen=curlen;if(nextlen===0){max_count=138;min_count=3}else if(curlen===nextlen){max_count=6;min_count=3}else{max_count=7;min_count=4}}}function build_bl_tree(s){var max_blindex;scan_tree(s,s.dyn_ltree,s.l_desc.max_code);scan_tree(s,s.dyn_dtree,s.d_desc.max_code);build_tree(s,s.bl_desc);for(max_blindex=BL_CODES-1;max_blindex>=3;max_blindex--){if(s.bl_tree[bl_order[max_blindex]*2+1]!==0){break}}s.opt_len+=3*(max_blindex+1)+5+5+4;return max_blindex}function send_all_trees(s,lcodes,dcodes,blcodes){var rank;send_bits(s,lcodes-257,5);send_bits(s,dcodes-1,5);send_bits(s,blcodes-4,4);for(rank=0;rank<blcodes;rank++){send_bits(s,s.bl_tree[bl_order[rank]*2+1],3)}send_tree(s,s.dyn_ltree,lcodes-1);send_tree(s,s.dyn_dtree,dcodes-1)}function detect_data_type(s){var black_mask=4093624447;var n;for(n=0;n<=31;n++,black_mask>>>=1){if(black_mask&1&&s.dyn_ltree[n*2]!==0){return Z_BINARY}}if(s.dyn_ltree[9*2]!==0||s.dyn_ltree[10*2]!==0||s.dyn_ltree[13*2]!==0){return Z_TEXT}for(n=32;n<LITERALS;n++){if(s.dyn_ltree[n*2]!==0){return Z_TEXT}}return Z_BINARY}var static_init_done=false;function _tr_init(s){if(!static_init_done){tr_static_init();static_init_done=true}s.l_desc=new TreeDesc(s.dyn_ltree,static_l_desc);s.d_desc=new TreeDesc(s.dyn_dtree,static_d_desc);s.bl_desc=new TreeDesc(s.bl_tree,static_bl_desc);s.bi_buf=0;s.bi_valid=0;init_block(s)}function _tr_stored_block(s,buf,stored_len,last){send_bits(s,(STORED_BLOCK<<1)+(last?1:0),3);copy_block(s,buf,stored_len,true)}function _tr_align(s){send_bits(s,STATIC_TREES<<1,3);send_code(s,END_BLOCK,static_ltree);bi_flush(s)}function _tr_flush_block(s,buf,stored_len,last){var opt_lenb,static_lenb;var max_blindex=0;if(s.level>0){if(s.strm.data_type===Z_UNKNOWN){s.strm.data_type=detect_data_type(s)}build_tree(s,s.l_desc);build_tree(s,s.d_desc);max_blindex=build_bl_tree(s);opt_lenb=s.opt_len+3+7>>>3;static_lenb=s.static_len+3+7>>>3;if(static_lenb<=opt_lenb){opt_lenb=static_lenb}}else{opt_lenb=static_lenb=stored_len+5}if(stored_len+4<=opt_lenb&&buf!==-1){_tr_stored_block(s,buf,stored_len,last)}else if(s.strategy===Z_FIXED||static_lenb===opt_lenb){send_bits(s,(STATIC_TREES<<1)+(last?1:0),3);compress_block(s,static_ltree,static_dtree)}else{send_bits(s,(DYN_TREES<<1)+(last?1:0),3);send_all_trees(s,s.l_desc.max_code+1,s.d_desc.max_code+1,max_blindex+1);compress_block(s,s.dyn_ltree,s.dyn_dtree)}init_block(s);if(last){bi_windup(s)}}function _tr_tally(s,dist,lc){s.pending_buf[s.d_buf+s.last_lit*2]=dist>>>8&255;s.pending_buf[s.d_buf+s.last_lit*2+1]=dist&255;s.pending_buf[s.l_buf+s.last_lit]=lc&255;s.last_lit++;if(dist===0){s.dyn_ltree[lc*2]++}else{s.matches++;dist--;s.dyn_ltree[(_length_code[lc]+LITERALS+1)*2]++;s.dyn_dtree[d_code(dist)*2]++}return s.last_lit===s.lit_bufsize-1}exports._tr_init=_tr_init;exports._tr_stored_block=_tr_stored_block;exports._tr_flush_block=_tr_flush_block;exports._tr_tally=_tr_tally;exports._tr_align=_tr_align},{"../utils/common":27}],39:[function(_dereq_,module,exports){"use strict";function ZStream(){this.input=null;this.next_in=0;this.avail_in=0;this.total_in=0;this.output=null;this.next_out=0;this.avail_out=0;this.total_out=0;this.msg="";this.state=null;this.data_type=2;this.adler=0}module.exports=ZStream},{}]},{},[9])(9)});var XLSX={};(function make_xlsx(XLSX){XLSX.version="0.8.0";var current_codepage=1200,current_cptable;if(typeof module!=="undefined"&&typeof require!=="undefined"){if(typeof cptable==="undefined")cptable=require("./dist/cpexcel");current_cptable=cptable[current_codepage]}function reset_cp(){set_cp(1200)}var set_cp=function(cp){current_codepage=cp};function char_codes(data){var o=[];for(var i=0,len=data.length;i<len;++i)o[i]=data.charCodeAt(i);return o}var debom_xml=function(data){return data};var _getchar=function _gc1(x){return String.fromCharCode(x)};if(typeof cptable!=="undefined"){set_cp=function(cp){current_codepage=cp;current_cptable=cptable[cp]};debom_xml=function(data){if(data.charCodeAt(0)===255&&data.charCodeAt(1)===254){return cptable.utils.decode(1200,char_codes(data.substr(2)))}return data};_getchar=function _gc2(x){if(current_codepage===1200)return String.fromCharCode(x);return cptable.utils.decode(current_codepage,[x&255,x>>8])[0]}}var Base64=function make_b64(){var map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:function(input,utf8){var o="";var c1,c2,c3,e1,e2,e3,e4;for(var i=0;i<input.length;){c1=input.charCodeAt(i++);c2=input.charCodeAt(i++);c3=input.charCodeAt(i++);e1=c1>>2;e2=(c1&3)<<4|c2>>4;e3=(c2&15)<<2|c3>>6;e4=c3&63;if(isNaN(c2)){e3=e4=64}else if(isNaN(c3)){e4=64}o+=map.charAt(e1)+map.charAt(e2)+map.charAt(e3)+map.charAt(e4)}return o},decode:function b64_decode(input,utf8){var o="";var c1,c2,c3;var e1,e2,e3,e4;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var i=0;i<input.length;){e1=map.indexOf(input.charAt(i++));e2=map.indexOf(input.charAt(i++));e3=map.indexOf(input.charAt(i++));e4=map.indexOf(input.charAt(i++));c1=e1<<2|e2>>4;c2=(e2&15)<<4|e3>>2;c3=(e3&3)<<6|e4;o+=String.fromCharCode(c1);if(e3!=64){o+=String.fromCharCode(c2)}if(e4!=64){o+=String.fromCharCode(c3)}}return o}}}();var has_buf=typeof Buffer!=="undefined";function new_raw_buf(len){return new(has_buf?Buffer:Array)(len)}function s2a(s){if(has_buf)return new Buffer(s,"binary");return s.split("").map(function(x){return x.charCodeAt(0)&255})}var bconcat=function(bufs){return[].concat.apply([],bufs)};var chr0=/\u0000/g,chr1=/[\u0001-\u0006]/;var SSF={};var make_ssf=function make_ssf(SSF){SSF.version="0.8.1";function _strrev(x){var o="",i=x.length-1;while(i>=0)o+=x.charAt(i--);return o}function fill(c,l){var o="";while(o.length<l)o+=c;return o}function pad0(v,d){var t=""+v;return t.length>=d?t:fill("0",d-t.length)+t}function pad_(v,d){var t=""+v;return t.length>=d?t:fill(" ",d-t.length)+t}function rpad_(v,d){var t=""+v;return t.length>=d?t:t+fill(" ",d-t.length)}function pad0r1(v,d){var t=""+Math.round(v);return t.length>=d?t:fill("0",d-t.length)+t}function pad0r2(v,d){var t=""+v;return t.length>=d?t:fill("0",d-t.length)+t}var p2_32=Math.pow(2,32);function pad0r(v,d){if(v>p2_32||v<-p2_32)return pad0r1(v,d);var i=Math.round(v);return pad0r2(i,d)}function isgeneral(s,i){return s.length>=7+i&&(s.charCodeAt(i)|32)===103&&(s.charCodeAt(i+1)|32)===101&&(s.charCodeAt(i+2)|32)===110&&(s.charCodeAt(i+3)|32)===101&&(s.charCodeAt(i+4)|32)===114&&(s.charCodeAt(i+5)|32)===97&&(s.charCodeAt(i+6)|32)===108}var opts_fmt=[["date1904",0],["output",""],["WTF",false]];function fixopts(o){for(var y=0;y!=opts_fmt.length;++y)if(o[opts_fmt[y][0]]===undefined)o[opts_fmt[y][0]]=opts_fmt[y][1]}SSF.opts=opts_fmt;var table_fmt={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "',65535:"General"};var days=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]];var months=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function frac(x,D,mixed){var sgn=x<0?-1:1;var B=x*sgn;var P_2=0,P_1=1,P=0;var Q_2=1,Q_1=0,Q=0;var A=Math.floor(B);while(Q_1<D){A=Math.floor(B);P=A*P_1+P_2;Q=A*Q_1+Q_2;if(B-A<5e-10)break;B=1/(B-A);P_2=P_1;P_1=P;Q_2=Q_1;Q_1=Q}if(Q>D){Q=Q_1;P=P_1}if(Q>D){Q=Q_2;P=P_2}if(!mixed)return[0,sgn*P,Q];if(Q===0)throw"Unexpected state: "+P+" "+P_1+" "+P_2+" "+Q+" "+Q_1+" "+Q_2;var q=Math.floor(sgn*P/Q);return[q,sgn*P-q*Q,Q]}function general_fmt_int(v,opts){return""+v}SSF._general_int=general_fmt_int;var general_fmt_num=function make_general_fmt_num(){var gnr1=/\.(\d*[1-9])0+$/,gnr2=/\.0*$/,gnr4=/\.(\d*[1-9])0+/,gnr5=/\.0*[Ee]/,gnr6=/(E[+-])(\d)$/;function gfn2(v){var w=v<0?12:11;var o=gfn5(v.toFixed(12));if(o.length<=w)return o;o=v.toPrecision(10);if(o.length<=w)return o;return v.toExponential(5)}function gfn3(v){var o=v.toFixed(11).replace(gnr1,".$1");if(o.length>(v<0?12:11))o=v.toPrecision(6);return o}function gfn4(o){for(var i=0;i!=o.length;++i)if((o.charCodeAt(i)|32)===101)return o.replace(gnr4,".$1").replace(gnr5,"E").replace("e","E").replace(gnr6,"$10$2");return o}function gfn5(o){return o.indexOf(".")>-1?o.replace(gnr2,"").replace(gnr1,".$1"):o}return function general_fmt_num(v,opts){var V=Math.floor(Math.log(Math.abs(v))*Math.LOG10E),o;if(V>=-4&&V<=-1)o=v.toPrecision(10+V);else if(Math.abs(V)<=9)o=gfn2(v);else if(V===10)o=v.toFixed(10).substr(0,12);else o=gfn3(v);return gfn5(gfn4(o))}}();SSF._general_num=general_fmt_num;function general_fmt(v,opts){switch(typeof v){case"string":return v;case"boolean":return v?"TRUE":"FALSE";case"number":return(v|0)===v?general_fmt_int(v,opts):general_fmt_num(v,opts)}throw new Error("unsupported value in General format: "+v)}SSF._general=general_fmt;function fix_hijri(date,o){return 0}function parse_date_code(v,opts,b2){if(v>2958465||v<0)return null;var date=v|0,time=Math.floor(86400*(v-date)),dow=0;var dout=[];var out={D:date,T:time,u:86400*(v-date)-time,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(out.u)<1e-6)out.u=0;fixopts(opts!=null?opts:opts=[]);if(opts.date1904)date+=1462;if(out.u>.999){out.u=0;if(++time==86400){time=0;++date}}if(date===60){dout=b2?[1317,10,29]:[1900,2,29];dow=3}else if(date===0){dout=b2?[1317,8,29]:[1900,1,0];dow=6}else{if(date>60)--date;var d=new Date(1900,0,1);d.setDate(d.getDate()+date-1);dout=[d.getFullYear(),d.getMonth()+1,d.getDate()];dow=d.getDay();if(date<60)dow=(dow+6)%7;if(b2)dow=fix_hijri(d,dout)}out.y=dout[0];out.m=dout[1];out.d=dout[2];out.S=time%60;time=Math.floor(time/60);out.M=time%60;time=Math.floor(time/60);out.H=time;out.q=dow;return out}SSF.parse_date_code=parse_date_code;function write_date(type,fmt,val,ss0){var o="",ss=0,tt=0,y=val.y,out,outl=0;switch(type){case 98:y=val.y+543;case 121:switch(fmt.length){case 1:case 2:out=y%100;outl=2;break;default:out=y%1e4;outl=4;break}break;case 109:switch(fmt.length){case 1:case 2:out=val.m;outl=fmt.length;break;case 3:return months[val.m-1][1];case 5:return months[val.m-1][0];default:return months[val.m-1][2]}break;case 100:switch(fmt.length){case 1:case 2:out=val.d;outl=fmt.length;break;case 3:return days[val.q][0];default:return days[val.q][1]}break;case 104:switch(fmt.length){case 1:case 2:out=1+(val.H+11)%12;outl=fmt.length;break;default:throw"bad hour format: "+fmt}break;case 72:switch(fmt.length){case 1:case 2:out=val.H;outl=fmt.length;break;default:throw"bad hour format: "+fmt}break;case 77:switch(fmt.length){case 1:case 2:out=val.M;outl=fmt.length;break;default:throw"bad minute format: "+fmt}break;case 115:if(val.u===0)switch(fmt){case"s":case"ss":return pad0(val.S,fmt.length);case".0":case".00":case".000":}switch(fmt){case"s":case"ss":case".0":case".00":case".000":if(ss0>=2)tt=ss0===3?1e3:100;else tt=ss0===1?10:1;ss=Math.round(tt*(val.S+val.u));if(ss>=60*tt)ss=0;if(fmt==="s")return ss===0?"0":""+ss/tt;o=pad0(ss,2+ss0);if(fmt==="ss")return o.substr(0,2);return"."+o.substr(2,fmt.length-1);default:throw"bad second format: "+fmt}case 90:switch(fmt){case"[h]":case"[hh]":out=val.D*24+val.H;break;case"[m]":case"[mm]":out=(val.D*24+val.H)*60+val.M;break;case"[s]":case"[ss]":out=((val.D*24+val.H)*60+val.M)*60+Math.round(val.S+val.u);break;default:throw"bad abstime format: "+fmt}outl=fmt.length===3?1:2;break;case 101:out=y;outl=1}if(outl>0)return pad0(out,outl);else return""}function commaify(s){if(s.length<=3)return s;var j=s.length%3,o=s.substr(0,j);for(;j!=s.length;j+=3)o+=(o.length>0?",":"")+s.substr(j,3);return o}var write_num=function make_write_num(){var pct1=/%/g;function write_num_pct(type,fmt,val){var sfmt=fmt.replace(pct1,""),mul=fmt.length-sfmt.length;return write_num(type,sfmt,val*Math.pow(10,2*mul))+fill("%",mul)}function write_num_cm(type,fmt,val){var idx=fmt.length-1;while(fmt.charCodeAt(idx-1)===44)--idx;return write_num(type,fmt.substr(0,idx),val/Math.pow(10,3*(fmt.length-idx)))}function write_num_exp(fmt,val){var o;var idx=fmt.indexOf("E")-fmt.indexOf(".")-1;if(fmt.match(/^#+0.0E\+0$/)){var period=fmt.indexOf(".");if(period===-1)period=fmt.indexOf("E");var ee=Math.floor(Math.log(Math.abs(val))*Math.LOG10E)%period;if(ee<0)ee+=period;o=(val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);if(o.indexOf("e")===-1){var fakee=Math.floor(Math.log(Math.abs(val))*Math.LOG10E);if(o.indexOf(".")===-1)o=o[0]+"."+o.substr(1)+"E+"+(fakee-o.length+ee);else o+="E+"+(fakee-ee);while(o.substr(0,2)==="0."){o=o[0]+o.substr(2,period)+"."+o.substr(2+period);o=o.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.")}o=o.replace(/\+-/,"-")}o=o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3){return $1+$2+$3.substr(0,(period+ee)%period)+"."+$3.substr(ee)+"E"})}else o=val.toExponential(idx);if(fmt.match(/E\+00$/)&&o.match(/e[+-]\d$/))o=o.substr(0,o.length-1)+"0"+o[o.length-1];if(fmt.match(/E\-/)&&o.match(/e\+/))o=o.replace(/e\+/,"e");return o.replace("e","E")}var frac1=/# (\?+)( ?)\/( ?)(\d+)/;function write_num_f1(r,aval,sign){var den=parseInt(r[4]),rr=Math.round(aval*den),base=Math.floor(rr/den);var myn=rr-base*den,myd=den;return sign+(base===0?"":""+base)+" "+(myn===0?fill(" ",r[1].length+1+r[4].length):pad_(myn,r[1].length)+r[2]+"/"+r[3]+pad0(myd,r[4].length))}function write_num_f2(r,aval,sign){return sign+(aval===0?"":""+aval)+fill(" ",r[1].length+2+r[4].length)}var dec1=/^#*0*\.(0+)/;var closeparen=/\).*[0#]/;var phone=/\(###\) ###\\?-####/;function hashq(str){var o="",cc;for(var i=0;i!=str.length;++i)switch(cc=str.charCodeAt(i)){case 35:break;case 63:o+=" ";break;case 48:o+="0";break;default:o+=String.fromCharCode(cc)}return o}function rnd(val,d){var dd=Math.pow(10,d);return""+Math.round(val*dd)/dd}function dec(val,d){return Math.round((val-Math.floor(val))*Math.pow(10,d))}function flr(val){if(val<2147483647&&val>-2147483648)return""+(val>=0?val|0:val-1|0);return""+Math.floor(val)}function write_num_flt(type,fmt,val){if(type.charCodeAt(0)===40&&!fmt.match(closeparen)){var ffmt=fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(val>=0)return write_num_flt("n",ffmt,val);return"("+write_num_flt("n",ffmt,-val)+")"}if(fmt.charCodeAt(fmt.length-1)===44)return write_num_cm(type,fmt,val);if(fmt.indexOf("%")!==-1)return write_num_pct(type,fmt,val);if(fmt.indexOf("E")!==-1)return write_num_exp(fmt,val);if(fmt.charCodeAt(0)===36)return"$"+write_num_flt(type,fmt.substr(fmt[1]==" "?2:1),val);var o,oo;var r,ri,ff,aval=Math.abs(val),sign=val<0?"-":"";if(fmt.match(/^00+$/))return sign+pad0r(aval,fmt.length);if(fmt.match(/^[#?]+$/)){o=pad0r(val,0);if(o==="0")o="";return o.length>fmt.length?o:hashq(fmt.substr(0,fmt.length-o.length))+o}if((r=fmt.match(frac1))!==null)return write_num_f1(r,aval,sign);if(fmt.match(/^#+0+$/)!==null)return sign+pad0r(aval,fmt.length-fmt.indexOf("0"));if((r=fmt.match(dec1))!==null){o=rnd(val,r[1].length).replace(/^([^\.]+)$/,"$1."+r[1]).replace(/\.$/,"."+r[1]).replace(/\.(\d*)$/,function($$,$1){return"."+$1+fill("0",r[1].length-$1.length)});return fmt.indexOf("0.")!==-1?o:o.replace(/^0\./,".")}fmt=fmt.replace(/^#+([0.])/,"$1");if((r=fmt.match(/^(0*)\.(#*)$/))!==null){return sign+rnd(aval,r[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".")}if((r=fmt.match(/^#,##0(\.?)$/))!==null)return sign+commaify(pad0r(aval,0));if((r=fmt.match(/^#,##0\.([#0]*0)$/))!==null){return val<0?"-"+write_num_flt(type,fmt,-val):commaify(""+Math.floor(val))+"."+pad0(dec(val,r[1].length),r[1].length)}if((r=fmt.match(/^#,#*,#0/))!==null)return write_num_flt(type,fmt.replace(/^#,#*,/,""),val);if((r=fmt.match(/^([0#]+)(\\?-([0#]+))+$/))!==null){o=_strrev(write_num_flt(type,fmt.replace(/[\\-]/g,""),val));ri=0;return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o[ri++]:x==="0"?"0":""}))}if(fmt.match(phone)!==null){o=write_num_flt(type,"##########",val);return"("+o.substr(0,3)+") "+o.substr(3,3)+"-"+o.substr(6)}var oa="";if((r=fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){ri=Math.min(r[4].length,7);ff=frac(aval,Math.pow(10,ri)-1,false);o=""+sign;oa=write_num("n",r[1],ff[1]);if(oa[oa.length-1]==" ")oa=oa.substr(0,oa.length-1)+"0";o+=oa+r[2]+"/"+r[3];oa=rpad_(ff[2],ri);if(oa.length<r[4].length)oa=hashq(r[4].substr(r[4].length-oa.length))+oa;o+=oa;return o}if((r=fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){ri=Math.min(Math.max(r[1].length,r[4].length),7);ff=frac(aval,Math.pow(10,ri)-1,true);return sign+(ff[0]||(ff[1]?"":"0"))+" "+(ff[1]?pad_(ff[1],ri)+r[2]+"/"+r[3]+rpad_(ff[2],ri):fill(" ",2*ri+1+r[2].length+r[3].length))}if((r=fmt.match(/^[#0?]+$/))!==null){o=pad0r(val,0);if(fmt.length<=o.length)return o;return hashq(fmt.substr(0,fmt.length-o.length))+o}if((r=fmt.match(/^([#0?]+)\.([#0]+)$/))!==null){o=""+val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");ri=o.indexOf(".");var lres=fmt.indexOf(".")-ri,rres=fmt.length-o.length-lres;return hashq(fmt.substr(0,lres)+o+fmt.substr(fmt.length-rres))}if((r=fmt.match(/^00,000\.([#0]*0)$/))!==null){ri=dec(val,r[1].length);return val<0?"-"+write_num_flt(type,fmt,-val):commaify(flr(val)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$){return"00,"+($$.length<3?pad0(0,3-$$.length):"")+$$})+"."+pad0(ri,r[1].length)}switch(fmt){case"#,###":var x=commaify(pad0r(aval,0));return x!=="0"?sign+x:"";default:}throw new Error("unsupported format |"+fmt+"|")}function write_num_cm2(type,fmt,val){var idx=fmt.length-1;while(fmt.charCodeAt(idx-1)===44)--idx;return write_num(type,fmt.substr(0,idx),val/Math.pow(10,3*(fmt.length-idx)))}function write_num_pct2(type,fmt,val){var sfmt=fmt.replace(pct1,""),mul=fmt.length-sfmt.length;return write_num(type,sfmt,val*Math.pow(10,2*mul))+fill("%",mul)}function write_num_exp2(fmt,val){var o;var idx=fmt.indexOf("E")-fmt.indexOf(".")-1;if(fmt.match(/^#+0.0E\+0$/)){var period=fmt.indexOf(".");if(period===-1)period=fmt.indexOf("E");var ee=Math.floor(Math.log(Math.abs(val))*Math.LOG10E)%period;if(ee<0)ee+=period;o=(val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);if(!o.match(/[Ee]/)){var fakee=Math.floor(Math.log(Math.abs(val))*Math.LOG10E);if(o.indexOf(".")===-1)o=o[0]+"."+o.substr(1)+"E+"+(fakee-o.length+ee);else o+="E+"+(fakee-ee);o=o.replace(/\+-/,"-")}o=o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3){return $1+$2+$3.substr(0,(period+ee)%period)+"."+$3.substr(ee)+"E"})}else o=val.toExponential(idx);if(fmt.match(/E\+00$/)&&o.match(/e[+-]\d$/))o=o.substr(0,o.length-1)+"0"+o[o.length-1];if(fmt.match(/E\-/)&&o.match(/e\+/))o=o.replace(/e\+/,"e");return o.replace("e","E")}function write_num_int(type,fmt,val){if(type.charCodeAt(0)===40&&!fmt.match(closeparen)){var ffmt=fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(val>=0)return write_num_int("n",ffmt,val);return"("+write_num_int("n",ffmt,-val)+")"}if(fmt.charCodeAt(fmt.length-1)===44)return write_num_cm2(type,fmt,val);if(fmt.indexOf("%")!==-1)return write_num_pct2(type,fmt,val);if(fmt.indexOf("E")!==-1)return write_num_exp2(fmt,val);if(fmt.charCodeAt(0)===36)return"$"+write_num_int(type,fmt.substr(fmt[1]==" "?2:1),val);var o;var r,ri,ff,aval=Math.abs(val),sign=val<0?"-":"";if(fmt.match(/^00+$/))return sign+pad0(aval,fmt.length);if(fmt.match(/^[#?]+$/)){o=""+val;if(val===0)o="";return o.length>fmt.length?o:hashq(fmt.substr(0,fmt.length-o.length))+o}if((r=fmt.match(frac1))!==null)return write_num_f2(r,aval,sign);if(fmt.match(/^#+0+$/)!==null)return sign+pad0(aval,fmt.length-fmt.indexOf("0"));if((r=fmt.match(dec1))!==null){o=(""+val).replace(/^([^\.]+)$/,"$1."+r[1]).replace(/\.$/,"."+r[1]).replace(/\.(\d*)$/,function($$,$1){return"."+$1+fill("0",r[1].length-$1.length)});return fmt.indexOf("0.")!==-1?o:o.replace(/^0\./,".")
}fmt=fmt.replace(/^#+([0.])/,"$1");if((r=fmt.match(/^(0*)\.(#*)$/))!==null){return sign+(""+aval).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".")}if((r=fmt.match(/^#,##0(\.?)$/))!==null)return sign+commaify(""+aval);if((r=fmt.match(/^#,##0\.([#0]*0)$/))!==null){return val<0?"-"+write_num_int(type,fmt,-val):commaify(""+val)+"."+fill("0",r[1].length)}if((r=fmt.match(/^#,#*,#0/))!==null)return write_num_int(type,fmt.replace(/^#,#*,/,""),val);if((r=fmt.match(/^([0#]+)(\\?-([0#]+))+$/))!==null){o=_strrev(write_num_int(type,fmt.replace(/[\\-]/g,""),val));ri=0;return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o[ri++]:x==="0"?"0":""}))}if(fmt.match(phone)!==null){o=write_num_int(type,"##########",val);return"("+o.substr(0,3)+") "+o.substr(3,3)+"-"+o.substr(6)}var oa="";if((r=fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){ri=Math.min(r[4].length,7);ff=frac(aval,Math.pow(10,ri)-1,false);o=""+sign;oa=write_num("n",r[1],ff[1]);if(oa[oa.length-1]==" ")oa=oa.substr(0,oa.length-1)+"0";o+=oa+r[2]+"/"+r[3];oa=rpad_(ff[2],ri);if(oa.length<r[4].length)oa=hashq(r[4].substr(r[4].length-oa.length))+oa;o+=oa;return o}if((r=fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){ri=Math.min(Math.max(r[1].length,r[4].length),7);ff=frac(aval,Math.pow(10,ri)-1,true);return sign+(ff[0]||(ff[1]?"":"0"))+" "+(ff[1]?pad_(ff[1],ri)+r[2]+"/"+r[3]+rpad_(ff[2],ri):fill(" ",2*ri+1+r[2].length+r[3].length))}if((r=fmt.match(/^[#0?]+$/))!==null){o=""+val;if(fmt.length<=o.length)return o;return hashq(fmt.substr(0,fmt.length-o.length))+o}if((r=fmt.match(/^([#0]+)\.([#0]+)$/))!==null){o=""+val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");ri=o.indexOf(".");var lres=fmt.indexOf(".")-ri,rres=fmt.length-o.length-lres;return hashq(fmt.substr(0,lres)+o+fmt.substr(fmt.length-rres))}if((r=fmt.match(/^00,000\.([#0]*0)$/))!==null){return val<0?"-"+write_num_int(type,fmt,-val):commaify(""+val).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$){return"00,"+($$.length<3?pad0(0,3-$$.length):"")+$$})+"."+pad0(0,r[1].length)}switch(fmt){case"#,###":var x=commaify(""+aval);return x!=="0"?sign+x:"";default:}throw new Error("unsupported format |"+fmt+"|")}return function write_num(type,fmt,val){return(val|0)===val?write_num_int(type,fmt,val):write_num_flt(type,fmt,val)}}();function split_fmt(fmt){var out=[];var in_str=false,cc;for(var i=0,j=0;i<fmt.length;++i)switch(cc=fmt.charCodeAt(i)){case 34:in_str=!in_str;break;case 95:case 42:case 92:++i;break;case 59:out[out.length]=fmt.substr(j,i-j);j=i+1}out[out.length]=fmt.substr(j);if(in_str===true)throw new Error("Format |"+fmt+"| unterminated string ");return out}SSF._split=split_fmt;var abstime=/\[[HhMmSs]*\]/;function eval_fmt(fmt,v,opts,flen){var out=[],o="",i=0,c="",lst="t",q,dt,j,cc;var hr="H";while(i<fmt.length){switch(c=fmt[i]){case"G":if(!isgeneral(fmt,i))throw new Error("unrecognized character "+c+" in "+fmt);out[out.length]={t:"G",v:"General"};i+=7;break;case'"':for(o="";(cc=fmt.charCodeAt(++i))!==34&&i<fmt.length;)o+=String.fromCharCode(cc);out[out.length]={t:"t",v:o};++i;break;case"\\":var w=fmt[++i],t=w==="("||w===")"?w:"t";out[out.length]={t:t,v:w};++i;break;case"_":out[out.length]={t:"t",v:" "};i+=2;break;case"@":out[out.length]={t:"T",v:v};++i;break;case"B":case"b":if(fmt[i+1]==="1"||fmt[i+1]==="2"){if(dt==null){dt=parse_date_code(v,opts,fmt[i+1]==="2");if(dt==null)return""}out[out.length]={t:"X",v:fmt.substr(i,2)};lst=c;i+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":c=c.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(v<0)return"";if(dt==null){dt=parse_date_code(v,opts);if(dt==null)return""}o=c;while(++i<fmt.length&&fmt[i].toLowerCase()===c)o+=c;if(c==="m"&&lst.toLowerCase()==="h")c="M";if(c==="h")c=hr;out[out.length]={t:c,v:o};lst=c;break;case"A":q={t:c,v:"A"};if(dt==null)dt=parse_date_code(v,opts);if(fmt.substr(i,3)==="A/P"){if(dt!=null)q.v=dt.H>=12?"P":"A";q.t="T";hr="h";i+=3}else if(fmt.substr(i,5)==="AM/PM"){if(dt!=null)q.v=dt.H>=12?"PM":"AM";q.t="T";i+=5;hr="h"}else{q.t="t";++i}if(dt==null&&q.t==="T")return"";out[out.length]=q;lst=c;break;case"[":o=c;while(fmt[i++]!=="]"&&i<fmt.length)o+=fmt[i];if(o.substr(-1)!=="]")throw'unterminated "[" block: |'+o+"|";if(o.match(abstime)){if(dt==null){dt=parse_date_code(v,opts);if(dt==null)return""}out[out.length]={t:"Z",v:o.toLowerCase()}}else{o=""}break;case".":if(dt!=null){o=c;while((c=fmt[++i])==="0")o+=c;out[out.length]={t:"s",v:o};break}case"0":case"#":o=c;while("0#?.,E+-%".indexOf(c=fmt[++i])>-1||c=="\\"&&fmt[i+1]=="-"&&"0#".indexOf(fmt[i+2])>-1)o+=c;out[out.length]={t:"n",v:o};break;case"?":o=c;while(fmt[++i]===c)o+=c;q={t:c,v:o};out[out.length]=q;lst=c;break;case"*":++i;if(fmt[i]==" "||fmt[i]=="*")++i;break;case"(":case")":out[out.length]={t:flen===1?"t":c,v:c};++i;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":o=c;while("0123456789".indexOf(fmt[++i])>-1)o+=fmt[i];out[out.length]={t:"D",v:o};break;case" ":out[out.length]={t:c,v:c};++i;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxz".indexOf(c)===-1)throw new Error("unrecognized character "+c+" in "+fmt);out[out.length]={t:"t",v:c};++i;break}}var bt=0,ss0=0,ssm;for(i=out.length-1,lst="t";i>=0;--i){switch(out[i].t){case"h":case"H":out[i].t=hr;lst="h";if(bt<1)bt=1;break;case"s":if(ssm=out[i].v.match(/\.0+$/))ss0=Math.max(ss0,ssm[0].length-1);if(bt<3)bt=3;case"d":case"y":case"M":case"e":lst=out[i].t;break;case"m":if(lst==="s"){out[i].t="M";if(bt<2)bt=2}break;case"X":if(out[i].v==="B2");break;case"Z":if(bt<1&&out[i].v.match(/[Hh]/))bt=1;if(bt<2&&out[i].v.match(/[Mm]/))bt=2;if(bt<3&&out[i].v.match(/[Ss]/))bt=3}}switch(bt){case 0:break;case 1:if(dt.u>=.5){dt.u=0;++dt.S}if(dt.S>=60){dt.S=0;++dt.M}if(dt.M>=60){dt.M=0;++dt.H}break;case 2:if(dt.u>=.5){dt.u=0;++dt.S}if(dt.S>=60){dt.S=0;++dt.M}break}var nstr="",jj;for(i=0;i<out.length;++i){switch(out[i].t){case"t":case"T":case" ":case"D":break;case"X":out[i]=undefined;break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":out[i].v=write_date(out[i].t.charCodeAt(0),out[i].v,dt,ss0);out[i].t="t";break;case"n":case"(":case"?":jj=i+1;while(out[jj]!=null&&((c=out[jj].t)==="?"||c==="D"||(c===" "||c==="t")&&out[jj+1]!=null&&(out[jj+1].t==="?"||out[jj+1].t==="t"&&out[jj+1].v==="/")||out[i].t==="("&&(c===" "||c==="n"||c===")")||c==="t"&&(out[jj].v==="/"||"$€".indexOf(out[jj].v)>-1||out[jj].v===" "&&out[jj+1]!=null&&out[jj+1].t=="?"))){out[i].v+=out[jj].v;out[jj]=undefined;++jj}nstr+=out[i].v;i=jj-1;break;case"G":out[i].t="t";out[i].v=general_fmt(v,opts);break}}var vv="",myv,ostr;if(nstr.length>0){myv=v<0&&nstr.charCodeAt(0)===45?-v:v;ostr=write_num(nstr.charCodeAt(0)===40?"(":"n",nstr,myv);jj=ostr.length-1;var decpt=out.length;for(i=0;i<out.length;++i)if(out[i]!=null&&out[i].v.indexOf(".")>-1){decpt=i;break}var lasti=out.length;if(decpt===out.length&&ostr.indexOf("E")===-1){for(i=out.length-1;i>=0;--i){if(out[i]==null||"n?(".indexOf(out[i].t)===-1)continue;if(jj>=out[i].v.length-1){jj-=out[i].v.length;out[i].v=ostr.substr(jj+1,out[i].v.length)}else if(jj<0)out[i].v="";else{out[i].v=ostr.substr(0,jj+1);jj=-1}out[i].t="t";lasti=i}if(jj>=0&&lasti<out.length)out[lasti].v=ostr.substr(0,jj+1)+out[lasti].v}else if(decpt!==out.length&&ostr.indexOf("E")===-1){jj=ostr.indexOf(".")-1;for(i=decpt;i>=0;--i){if(out[i]==null||"n?(".indexOf(out[i].t)===-1)continue;j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")-1:out[i].v.length-1;vv=out[i].v.substr(j+1);for(;j>=0;--j){if(jj>=0&&(out[i].v[j]==="0"||out[i].v[j]==="#"))vv=ostr[jj--]+vv}out[i].v=vv;out[i].t="t";lasti=i}if(jj>=0&&lasti<out.length)out[lasti].v=ostr.substr(0,jj+1)+out[lasti].v;jj=ostr.indexOf(".")+1;for(i=decpt;i<out.length;++i){if(out[i]==null||"n?(".indexOf(out[i].t)===-1&&i!==decpt)continue;j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")+1:0;vv=out[i].v.substr(0,j);for(;j<out[i].v.length;++j){if(jj<ostr.length)vv+=ostr[jj++]}out[i].v=vv;out[i].t="t";lasti=i}}}for(i=0;i<out.length;++i)if(out[i]!=null&&"n(?".indexOf(out[i].t)>-1){myv=flen>1&&v<0&&i>0&&out[i-1].v==="-"?-v:v;out[i].v=write_num(out[i].t,out[i].v,myv);out[i].t="t"}var retval="";for(i=0;i!==out.length;++i)if(out[i]!=null)retval+=out[i].v;return retval}SSF._eval=eval_fmt;var cfregex=/\[[=<>]/;var cfregex2=/\[([=<>]*)(-?\d+\.?\d*)\]/;function chkcond(v,rr){if(rr==null)return false;var thresh=parseFloat(rr[2]);switch(rr[1]){case"=":if(v==thresh)return true;break;case">":if(v>thresh)return true;break;case"<":if(v<thresh)return true;break;case"<>":if(v!=thresh)return true;break;case">=":if(v>=thresh)return true;break;case"<=":if(v<=thresh)return true;break}return false}function choose_fmt(f,v){var fmt=split_fmt(f);var l=fmt.length,lat=fmt[l-1].indexOf("@");if(l<4&&lat>-1)--l;if(fmt.length>4)throw"cannot find right format for |"+fmt+"|";if(typeof v!=="number")return[4,fmt.length===4||lat>-1?fmt[fmt.length-1]:"@"];switch(fmt.length){case 1:fmt=lat>-1?["General","General","General",fmt[0]]:[fmt[0],fmt[0],fmt[0],"@"];break;case 2:fmt=lat>-1?[fmt[0],fmt[0],fmt[0],fmt[1]]:[fmt[0],fmt[1],fmt[0],"@"];break;case 3:fmt=lat>-1?[fmt[0],fmt[1],fmt[0],fmt[2]]:[fmt[0],fmt[1],fmt[2],"@"];break;case 4:break}var ff=v>0?fmt[0]:v<0?fmt[1]:fmt[2];if(fmt[0].indexOf("[")===-1&&fmt[1].indexOf("[")===-1)return[l,ff];if(fmt[0].match(cfregex)!=null||fmt[1].match(cfregex)!=null){var m1=fmt[0].match(cfregex2);var m2=fmt[1].match(cfregex2);return chkcond(v,m1)?[l,fmt[0]]:chkcond(v,m2)?[l,fmt[1]]:[l,fmt[m1!=null&&m2!=null?2:1]]}return[l,ff]}function format(fmt,v,o){fixopts(o!=null?o:o=[]);var sfmt="";switch(typeof fmt){case"string":sfmt=fmt;break;case"number":sfmt=(o.table!=null?o.table:table_fmt)[fmt];break}if(isgeneral(sfmt,0))return general_fmt(v,o);var f=choose_fmt(sfmt,v);if(isgeneral(f[1]))return general_fmt(v,o);if(v===true)v="TRUE";else if(v===false)v="FALSE";else if(v===""||v==null)return"";return eval_fmt(f[1],v,o,f[0])}SSF._table=table_fmt;SSF.load=function load_entry(fmt,idx){table_fmt[idx]=fmt};SSF.format=format;SSF.get_table=function get_table(){return table_fmt};SSF.load_table=function load_table(tbl){for(var i=0;i!=392;++i)if(tbl[i]!==undefined)SSF.load(tbl[i],i)}};make_ssf(SSF);var XLMLFormatMap={"General Number":"General","General Date":SSF._table[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":SSF._table[15],"Short Date":SSF._table[14],"Long Time":SSF._table[19],"Medium Time":SSF._table[18],"Short Time":SSF._table[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:SSF._table[2],Standard:SSF._table[4],Percent:SSF._table[10],Scientific:SSF._table[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'};var DO_NOT_EXPORT_CFB=true;var CFB=function _CFB(){var exports={};exports.version="0.10.2";function parse(file){var mver=3;var ssz=512;var nmfs=0;var ndfs=0;var dir_start=0;var minifat_start=0;var difat_start=0;var fat_addrs=[];var blob=file.slice(0,512);prep_blob(blob,0);var mv=check_get_mver(blob);mver=mv[0];switch(mver){case 3:ssz=512;break;case 4:ssz=4096;break;default:throw"Major Version: Expected 3 or 4 saw "+mver}if(ssz!==512){blob=file.slice(0,ssz);prep_blob(blob,28)}var header=file.slice(0,ssz);check_shifts(blob,mver);var nds=blob.read_shift(4,"i");if(mver===3&&nds!==0)throw"# Directory Sectors: Expected 0 saw "+nds;blob.l+=4;dir_start=blob.read_shift(4,"i");blob.l+=4;blob.chk("00100000","Mini Stream Cutoff Size: ");minifat_start=blob.read_shift(4,"i");nmfs=blob.read_shift(4,"i");difat_start=blob.read_shift(4,"i");ndfs=blob.read_shift(4,"i");for(var q,j=0;j<109;++j){q=blob.read_shift(4,"i");if(q<0)break;fat_addrs[j]=q}var sectors=sectorify(file,ssz);sleuth_fat(difat_start,ndfs,sectors,ssz,fat_addrs);var sector_list=make_sector_list(sectors,dir_start,fat_addrs,ssz);sector_list[dir_start].name="!Directory";if(nmfs>0&&minifat_start!==ENDOFCHAIN)sector_list[minifat_start].name="!MiniFAT";sector_list[fat_addrs[0]].name="!FAT";sector_list.fat_addrs=fat_addrs;sector_list.ssz=ssz;var files={},Paths=[],FileIndex=[],FullPaths=[],FullPathDir={};read_directory(dir_start,sector_list,sectors,Paths,nmfs,files,FileIndex);build_full_paths(FileIndex,FullPathDir,FullPaths,Paths);var root_name=Paths.shift();Paths.root=root_name;var find_path=make_find_path(FullPaths,Paths,FileIndex,files,root_name);return{raw:{header:header,sectors:sectors},FileIndex:FileIndex,FullPaths:FullPaths,FullPathDir:FullPathDir,find:find_path}}function check_get_mver(blob){blob.chk(HEADER_SIGNATURE,"Header Signature: ");blob.chk(HEADER_CLSID,"CLSID: ");var mver=blob.read_shift(2,"u");return[blob.read_shift(2,"u"),mver]}function check_shifts(blob,mver){var shift=9;blob.chk("feff","Byte Order: ");switch(shift=blob.read_shift(2)){case 9:if(mver!==3)throw"MajorVersion/SectorShift Mismatch";break;case 12:if(mver!==4)throw"MajorVersion/SectorShift Mismatch";break;default:throw"Sector Shift: Expected 9 or 12 saw "+shift}blob.chk("0600","Mini Sector Shift: ");blob.chk("000000000000","Reserved: ")}function sectorify(file,ssz){var nsectors=Math.ceil(file.length/ssz)-1;var sectors=new Array(nsectors);for(var i=1;i<nsectors;++i)sectors[i-1]=file.slice(i*ssz,(i+1)*ssz);sectors[nsectors-1]=file.slice(nsectors*ssz);return sectors}function build_full_paths(FI,FPD,FP,Paths){var i=0,L=0,R=0,C=0,j=0,pl=Paths.length;var dad=new Array(pl),q=new Array(pl);for(;i<pl;++i){dad[i]=q[i]=i;FP[i]=Paths[i]}for(;j<q.length;++j){i=q[j];L=FI[i].L;R=FI[i].R;C=FI[i].C;if(dad[i]===i){if(L!==-1&&dad[L]!==L)dad[i]=dad[L];if(R!==-1&&dad[R]!==R)dad[i]=dad[R]}if(C!==-1)dad[C]=i;if(L!==-1){dad[L]=dad[i];q.push(L)}if(R!==-1){dad[R]=dad[i];q.push(R)}}for(i=1;i!==pl;++i)if(dad[i]===i){if(R!==-1&&dad[R]!==R)dad[i]=dad[R];else if(L!==-1&&dad[L]!==L)dad[i]=dad[L]}for(i=1;i<pl;++i){if(FI[i].type===0)continue;j=dad[i];if(j===0)FP[i]=FP[0]+"/"+FP[i];else while(j!==0){FP[i]=FP[j]+"/"+FP[i];j=dad[j]}dad[i]=0}FP[0]+="/";for(i=1;i<pl;++i){if(FI[i].type!==2)FP[i]+="/";FPD[FP[i]]=FI[i]}}function make_find_path(FullPaths,Paths,FileIndex,files,root_name){var UCFullPaths=new Array(FullPaths.length);var UCPaths=new Array(Paths.length),i;for(i=0;i<FullPaths.length;++i)UCFullPaths[i]=FullPaths[i].toUpperCase().replace(chr0,"").replace(chr1,"!");for(i=0;i<Paths.length;++i)UCPaths[i]=Paths[i].toUpperCase().replace(chr0,"").replace(chr1,"!");return function find_path(path){var k;if(path.charCodeAt(0)===47){k=true;path=root_name+path}else k=path.indexOf("/")!==-1;var UCPath=path.toUpperCase().replace(chr0,"").replace(chr1,"!");var w=k===true?UCFullPaths.indexOf(UCPath):UCPaths.indexOf(UCPath);if(w===-1)return null;return k===true?FileIndex[w]:files[Paths[w]]}}function sleuth_fat(idx,cnt,sectors,ssz,fat_addrs){var q;if(idx===ENDOFCHAIN){if(cnt!==0)throw"DIFAT chain shorter than expected"}else if(idx!==-1){var sector=sectors[idx],m=(ssz>>>2)-1;for(var i=0;i<m;++i){if((q=__readInt32LE(sector,i*4))===ENDOFCHAIN)break;fat_addrs.push(q)}sleuth_fat(__readInt32LE(sector,ssz-4),cnt-1,sectors,ssz,fat_addrs)}}function get_sector_list(sectors,start,fat_addrs,ssz,chkd){var sl=sectors.length;var buf,buf_chain;if(!chkd)chkd=new Array(sl);var modulus=ssz-1,j,jj;buf=[];buf_chain=[];for(j=start;j>=0;){chkd[j]=true;buf[buf.length]=j;buf_chain.push(sectors[j]);var addr=fat_addrs[Math.floor(j*4/ssz)];jj=j*4&modulus;if(ssz<4+jj)throw"FAT boundary crossed: "+j+" 4 "+ssz;j=__readInt32LE(sectors[addr],jj)}return{nodes:buf,data:__toBuffer([buf_chain])}}function make_sector_list(sectors,dir_start,fat_addrs,ssz){var sl=sectors.length,sector_list=new Array(sl);var chkd=new Array(sl),buf,buf_chain;var modulus=ssz-1,i,j,k,jj;for(i=0;i<sl;++i){buf=[];k=i+dir_start;if(k>=sl)k-=sl;if(chkd[k]===true)continue;buf_chain=[];for(j=k;j>=0;){chkd[j]=true;buf[buf.length]=j;buf_chain.push(sectors[j]);var addr=fat_addrs[Math.floor(j*4/ssz)];jj=j*4&modulus;if(ssz<4+jj)throw"FAT boundary crossed: "+j+" 4 "+ssz;j=__readInt32LE(sectors[addr],jj)}sector_list[k]={nodes:buf,data:__toBuffer([buf_chain])}}return sector_list}function read_directory(dir_start,sector_list,sectors,Paths,nmfs,files,FileIndex){var blob;var minifat_store=0,pl=Paths.length?2:0;var sector=sector_list[dir_start].data;var i=0,namelen=0,name,o,ctime,mtime;for(;i<sector.length;i+=128){blob=sector.slice(i,i+128);prep_blob(blob,64);namelen=blob.read_shift(2);if(namelen===0)continue;name=__utf16le(blob,0,namelen-pl);Paths.push(name);o={name:name,type:blob.read_shift(1),color:blob.read_shift(1),L:blob.read_shift(4,"i"),R:blob.read_shift(4,"i"),C:blob.read_shift(4,"i"),clsid:blob.read_shift(16),state:blob.read_shift(4,"i")};ctime=blob.read_shift(2)+blob.read_shift(2)+blob.read_shift(2)+blob.read_shift(2);if(ctime!==0){o.ctime=ctime;o.ct=read_date(blob,blob.l-8)}mtime=blob.read_shift(2)+blob.read_shift(2)+blob.read_shift(2)+blob.read_shift(2);if(mtime!==0){o.mtime=mtime;o.mt=read_date(blob,blob.l-8)}o.start=blob.read_shift(4,"i");o.size=blob.read_shift(4,"i");if(o.type===5){minifat_store=o.start;if(nmfs>0&&minifat_store!==ENDOFCHAIN)sector_list[minifat_store].name="!StreamData"}else if(o.size>=4096){o.storage="fat";if(sector_list[o.start]===undefined)sector_list[o.start]=get_sector_list(sectors,o.start,sector_list.fat_addrs,sector_list.ssz);sector_list[o.start].name=o.name;o.content=sector_list[o.start].data.slice(0,o.size);prep_blob(o.content,0)}else{o.storage="minifat";if(minifat_store!==ENDOFCHAIN&&o.start!==ENDOFCHAIN){o.content=sector_list[minifat_store].data.slice(o.start*MSSZ,o.start*MSSZ+o.size);prep_blob(o.content,0)}}files[name]=o;FileIndex.push(o)}}function read_date(blob,offset){return new Date((__readUInt32LE(blob,offset+4)/1e7*Math.pow(2,32)+__readUInt32LE(blob,offset)/1e7-11644473600)*1e3)}var fs;function readFileSync(filename,options){if(fs===undefined)fs=require("fs");return parse(fs.readFileSync(filename),options)}function readSync(blob,options){switch(options!==undefined&&options.type!==undefined?options.type:"base64"){case"file":return readFileSync(blob,options);case"base64":return parse(s2a(Base64.decode(blob)),options);case"binary":return parse(s2a(blob),options)}return parse(blob)}var MSSZ=64;var ENDOFCHAIN=-2;var HEADER_SIGNATURE="d0cf11e0a1b11ae1";var HEADER_CLSID="00000000000000000000000000000000";var consts={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:ENDOFCHAIN,FREESECT:-1,HEADER_SIGNATURE:HEADER_SIGNATURE,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:HEADER_CLSID,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};exports.read=readSync;exports.parse=parse;exports.utils={ReadShift:ReadShift,CheckField:CheckField,prep_blob:prep_blob,bconcat:bconcat,consts:consts};return exports}();if(typeof require!=="undefined"&&typeof module!=="undefined"&&typeof DO_NOT_EXPORT_CFB==="undefined"){module.exports=CFB}function isval(x){return x!==undefined&&x!==null}function keys(o){return Object.keys(o)}function evert_key(obj,key){var o=[],K=keys(obj);for(var i=0;i!==K.length;++i)o[obj[K[i]][key]]=K[i];return o}function evert(obj){var o=[],K=keys(obj);for(var i=0;i!==K.length;++i)o[obj[K[i]]]=K[i];return o}function evert_num(obj){var o=[],K=keys(obj);for(var i=0;i!==K.length;++i)o[obj[K[i]]]=parseInt(K[i],10);return o}function evert_arr(obj){var o=[],K=keys(obj);for(var i=0;i!==K.length;++i){if(o[obj[K[i]]]==null)o[obj[K[i]]]=[];o[obj[K[i]]].push(K[i])}return o}function datenum(v,date1904){if(date1904)v+=1462;var epoch=Date.parse(v);return(epoch+22091616e5)/(24*60*60*1e3)}function cc2str(arr){var o="";for(var i=0;i!=arr.length;++i)o+=String.fromCharCode(arr[i]);return o}function getdata(data){if(!data)return null;if(data.name.substr(-4)===".bin"){if(data.data)return char_codes(data.data);if(data.asNodeBuffer&&has_buf)return data.asNodeBuffer();if(data._data&&data._data.getContent)return Array.prototype.slice.call(data._data.getContent())}else{if(data.data)return data.name.substr(-4)!==".bin"?debom_xml(data.data):char_codes(data.data);if(data.asNodeBuffer&&has_buf)return debom_xml(data.asNodeBuffer().toString("binary"));if(data.asBinary)return debom_xml(data.asBinary());if(data._data&&data._data.getContent)return debom_xml(cc2str(Array.prototype.slice.call(data._data.getContent(),0)))}return null}function safegetzipfile(zip,file){var f=file;if(zip.files[f])return zip.files[f];f=file.toLowerCase();if(zip.files[f])return zip.files[f];f=f.replace(/\//g,"\\");if(zip.files[f])return zip.files[f];return null}function getzipfile(zip,file){var o=safegetzipfile(zip,file);if(o==null)throw new Error("Cannot find file "+file+" in zip");return o}function getzipdata(zip,file,safe){if(!safe)return getdata(getzipfile(zip,file));if(!file)return null;try{return getzipdata(zip,file)}catch(e){return null}}var _fs,jszip;if(typeof JSZip!=="undefined")jszip=JSZip;if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){if(has_buf&&typeof jszip==="undefined")jszip=require("js"+"zip");if(typeof jszip==="undefined")jszip=require("./js"+"zip").JSZip;_fs=require("f"+"s")}}var attregexg=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;var tagregex=/<[^>]*>/g;var nsregex=/<\w*:/,nsregex2=/<(\/?)\w+:/;function parsexmltag(tag,skip_root){var z=[];var eq=0,c=0;for(;eq!==tag.length;++eq)if((c=tag.charCodeAt(eq))===32||c===10||c===13)break;if(!skip_root)z[0]=tag.substr(0,eq);if(eq===tag.length)return z;var m=tag.match(attregexg),j=0,w="",v="",i=0,q="",cc="";if(m)for(i=0;i!=m.length;++i){cc=m[i];for(c=0;c!=cc.length;++c)if(cc.charCodeAt(c)===61)break;q=cc.substr(0,c);v=cc.substring(c+2,cc.length-1);for(j=0;j!=q.length;++j)if(q.charCodeAt(j)===58)break;if(j===q.length)z[q]=v;else z[(j===5&&q.substr(0,5)==="xmlns"?"xmlns":"")+q.substr(j+1)]=v}return z}function strip_ns(x){return x.replace(nsregex2,"<$1")}var encodings={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"};var rencoding=evert(encodings);var rencstr="&<>'\"".split("");var unescapexml=function(){var encregex=/&[a-z]*;/g,coderegex=/_x([\da-fA-F]+)_/g;return function unescapexml(text){var s=text+"";return s.replace(encregex,function($$){return encodings[$$]}).replace(coderegex,function(m,c){return String.fromCharCode(parseInt(c,16))})}}();var decregex=/[&<>'"]/g,charegex=/[\u0000-\u0008\u000b-\u001f]/g;function escapexml(text){var s=text+"";return s.replace(decregex,function(y){return rencoding[y]}).replace(charegex,function(s){return"_x"+("000"+s.charCodeAt(0).toString(16)).substr(-4)+"_"})}var xlml_fixstr=function(){var entregex=/&#(\d+);/g;function entrepl($$,$1){return String.fromCharCode(parseInt($1,10))}return function xlml_fixstr(str){return str.replace(entregex,entrepl)}}();function parsexmlbool(value,tag){switch(value){case"1":case"true":case"TRUE":return true;default:return false}}var utf8read=function utf8reada(orig){var out="",i=0,c=0,d=0,e=0,f=0,w=0;while(i<orig.length){c=orig.charCodeAt(i++);if(c<128){out+=String.fromCharCode(c);continue}d=orig.charCodeAt(i++);if(c>191&&c<224){out+=String.fromCharCode((c&31)<<6|d&63);continue}e=orig.charCodeAt(i++);if(c<240){out+=String.fromCharCode((c&15)<<12|(d&63)<<6|e&63);continue}f=orig.charCodeAt(i++);w=((c&7)<<18|(d&63)<<12|(e&63)<<6|f&63)-65536;out+=String.fromCharCode(55296+(w>>>10&1023));out+=String.fromCharCode(56320+(w&1023))}return out};if(has_buf){var utf8readb=function utf8readb(data){var out=new Buffer(2*data.length),w,i,j=1,k=0,ww=0,c;for(i=0;i<data.length;i+=j){j=1;if((c=data.charCodeAt(i))<128)w=c;else if(c<224){w=(c&31)*64+(data.charCodeAt(i+1)&63);j=2}else if(c<240){w=(c&15)*4096+(data.charCodeAt(i+1)&63)*64+(data.charCodeAt(i+2)&63);j=3}else{j=4;w=(c&7)*262144+(data.charCodeAt(i+1)&63)*4096+(data.charCodeAt(i+2)&63)*64+(data.charCodeAt(i+3)&63);w-=65536;ww=55296+(w>>>10&1023);w=56320+(w&1023)}if(ww!==0){out[k++]=ww&255;out[k++]=ww>>>8;ww=0}out[k++]=w%256;out[k++]=w>>>8}out.length=k;return out.toString("ucs2")};var corpus="foo bar bazâð£";if(utf8read(corpus)==utf8readb(corpus))utf8read=utf8readb;var utf8readc=function utf8readc(data){return Buffer(data,"binary").toString("utf8")};if(utf8read(corpus)==utf8readc(corpus))utf8read=utf8readc}var matchtag=function(){var mtcache={};return function matchtag(f,g){var t=f+"|"+g;if(mtcache[t]!==undefined)return mtcache[t];return mtcache[t]=new RegExp("<(?:\\w+:)?"+f+'(?: xml:space="preserve")?(?:[^>]*)>([^☃]*)</(?:\\w+:)?'+f+">",g||"")}}();var vtregex=function(){var vt_cache={};return function vt_regex(bt){if(vt_cache[bt]!==undefined)return vt_cache[bt];return vt_cache[bt]=new RegExp("<vt:"+bt+">(.*?)</vt:"+bt+">","g")}}();var vtvregex=/<\/?vt:variant>/g,vtmregex=/<vt:([^>]*)>(.*)</;function parseVector(data){var h=parsexmltag(data);var matches=data.match(vtregex(h.baseType))||[];if(matches.length!=h.size)throw"unexpected vector length "+matches.length+" != "+h.size;var res=[];matches.forEach(function(x){var v=x.replace(vtvregex,"").match(vtmregex);res.push({v:v[2],t:v[1]})});return res}var wtregex=/(^\s|\s$|\n)/;function writetag(f,g){return"<"+f+(g.match(wtregex)?' xml:space="preserve"':"")+">"+g+"</"+f+">"}function wxt_helper(h){return keys(h).map(function(k){return" "+k+'="'+h[k]+'"'}).join("")}function writextag(f,g,h){return"<"+f+(isval(h)?wxt_helper(h):"")+(isval(g)?(g.match(wtregex)?' xml:space="preserve"':"")+">"+g+"</"+f:"/")+">"}function write_w3cdtf(d,t){try{return d.toISOString().replace(/\.\d*/,"")}catch(e){if(t)throw e}}function write_vt(s){switch(typeof s){case"string":return writextag("vt:lpwstr",s);case"number":return writextag((s|0)==s?"vt:i4":"vt:r8",String(s));case"boolean":return writextag("vt:bool",s?"true":"false")}if(s instanceof Date)return writextag("vt:filetime",write_w3cdtf(s));throw new Error("Unable to serialize "+s)}var XML_HEADER='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';var XMLNS={dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",mx:"http://schemas.microsoft.com/office/mac/excel/2008/main",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",sjs:"http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema"};XMLNS.main=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"];function readIEEE754(buf,idx,isLE,nl,ml){if(isLE===undefined)isLE=true;if(!nl)nl=8;if(!ml&&nl===8)ml=52;var e,m,el=nl*8-ml-1,eMax=(1<<el)-1,eBias=eMax>>1;var bits=-7,d=isLE?-1:1,i=isLE?nl-1:0,s=buf[idx+i];i+=d;e=s&(1<<-bits)-1;s>>>=-bits;bits+=el;for(;bits>0;e=e*256+buf[idx+i],i+=d,bits-=8);m=e&(1<<-bits)-1;e>>>=-bits;bits+=ml;for(;bits>0;m=m*256+buf[idx+i],i+=d,bits-=8);if(e===eMax)return m?NaN:(s?-1:1)*Infinity;else if(e===0)e=1-eBias;else{m=m+Math.pow(2,ml);e=e-eBias}return(s?-1:1)*m*Math.pow(2,e-ml)}var __toBuffer,___toBuffer;__toBuffer=___toBuffer=function toBuffer_(bufs){var x=[];for(var i=0;i<bufs[0].length;++i){x.push.apply(x,bufs[0][i])}return x};var __utf16le,___utf16le;__utf16le=___utf16le=function utf16le_(b,s,e){var ss=[];for(var i=s;i<e;i+=2)ss.push(String.fromCharCode(__readUInt16LE(b,i)));return ss.join("")};var __hexlify,___hexlify;__hexlify=___hexlify=function hexlify_(b,s,l){return b.slice(s,s+l).map(function(x){return(x<16?"0":"")+x.toString(16)}).join("")};var __utf8,___utf8;__utf8=___utf8=function(b,s,e){var ss=[];for(var i=s;i<e;i++)ss.push(String.fromCharCode(__readUInt8(b,i)));return ss.join("")};var __lpstr,___lpstr;__lpstr=___lpstr=function lpstr_(b,i){var len=__readUInt32LE(b,i);return len>0?__utf8(b,i+4,i+4+len-1):""};var __lpwstr,___lpwstr;__lpwstr=___lpwstr=function lpwstr_(b,i){var len=2*__readUInt32LE(b,i);return len>0?__utf8(b,i+4,i+4+len-1):""};var __double,___double;__double=___double=function(b,idx){return readIEEE754(b,idx)};var is_buf=function is_buf_a(a){return Array.isArray(a)};if(has_buf){__utf16le=function utf16le_b(b,s,e){if(!Buffer.isBuffer(b))return ___utf16le(b,s,e);return b.toString("utf16le",s,e)};__hexlify=function(b,s,l){return Buffer.isBuffer(b)?b.toString("hex",s,s+l):___hexlify(b,s,l)};__lpstr=function lpstr_b(b,i){if(!Buffer.isBuffer(b))return ___lpstr(b,i);var len=b.readUInt32LE(i);return len>0?b.toString("utf8",i+4,i+4+len-1):""};__lpwstr=function lpwstr_b(b,i){if(!Buffer.isBuffer(b))return ___lpwstr(b,i);var len=2*b.readUInt32LE(i);return b.toString("utf16le",i+4,i+4+len-1)};__utf8=function utf8_b(s,e){return this.toString("utf8",s,e)};__toBuffer=function(bufs){return bufs[0].length>0&&Buffer.isBuffer(bufs[0][0])?Buffer.concat(bufs[0]):___toBuffer(bufs)};bconcat=function(bufs){return Buffer.isBuffer(bufs[0])?Buffer.concat(bufs):[].concat.apply([],bufs)};__double=function double_(b,i){if(Buffer.isBuffer(b))return b.readDoubleLE(i);return ___double(b,i)};is_buf=function is_buf_b(a){return Buffer.isBuffer(a)||Array.isArray(a)}}if(typeof cptable!=="undefined"){__utf16le=function(b,s,e){return cptable.utils.decode(1200,b.slice(s,e))};__utf8=function(b,s,e){return cptable.utils.decode(65001,b.slice(s,e))};__lpstr=function(b,i){var len=__readUInt32LE(b,i);return len>0?cptable.utils.decode(current_codepage,b.slice(i+4,i+4+len-1)):""};__lpwstr=function(b,i){var len=2*__readUInt32LE(b,i);return len>0?cptable.utils.decode(1200,b.slice(i+4,i+4+len-1)):""}}var __readUInt8=function(b,idx){return b[idx]};var __readUInt16LE=function(b,idx){return b[idx+1]*(1<<8)+b[idx]};var __readInt16LE=function(b,idx){var u=b[idx+1]*(1<<8)+b[idx];return u<32768?u:(65535-u+1)*-1};var __readUInt32LE=function(b,idx){return b[idx+3]*(1<<24)+(b[idx+2]<<16)+(b[idx+1]<<8)+b[idx]};var __readInt32LE=function(b,idx){return b[idx+3]<<24|b[idx+2]<<16|b[idx+1]<<8|b[idx]};var ___unhexlify=function(s){return s.match(/../g).map(function(x){return parseInt(x,16)})};var __unhexlify=typeof Buffer!=="undefined"?function(s){return Buffer.isBuffer(s)?new Buffer(s,"hex"):___unhexlify(s)}:___unhexlify;function ReadShift(size,t){var o="",oI,oR,oo=[],w,vv,i,loc;switch(t){case"dbcs":loc=this.l;if(has_buf&&Buffer.isBuffer(this))o=this.slice(this.l,this.l+2*size).toString("utf16le");else for(i=0;i!=size;++i){o+=String.fromCharCode(__readUInt16LE(this,loc));loc+=2}size*=2;break;case"utf8":o=__utf8(this,this.l,this.l+size);break;case"utf16le":size*=2;o=__utf16le(this,this.l,this.l+size);break;case"lpstr":o=__lpstr(this,this.l);size=5+o.length;break;case"lpwstr":o=__lpwstr(this,this.l);size=5+o.length;if(o[o.length-1]=="\x00")size+=2;break;case"cstr":size=0;o="";while((w=__readUInt8(this,this.l+size++))!==0)oo.push(_getchar(w));o=oo.join("");break;case"wstr":size=0;o="";while((w=__readUInt16LE(this,this.l+size))!==0){oo.push(_getchar(w));size+=2}size+=2;o=oo.join("");break;case"dbcs-cont":o="";loc=this.l;for(i=0;i!=size;++i){if(this.lens&&this.lens.indexOf(loc)!==-1){w=__readUInt8(this,loc);this.l=loc+1;vv=ReadShift.call(this,size-i,w?"dbcs-cont":"sbcs-cont");return oo.join("")+vv}oo.push(_getchar(__readUInt16LE(this,loc)));loc+=2}o=oo.join("");size*=2;break;case"sbcs-cont":o="";loc=this.l;for(i=0;i!=size;++i){if(this.lens&&this.lens.indexOf(loc)!==-1){w=__readUInt8(this,loc);this.l=loc+1;vv=ReadShift.call(this,size-i,w?"dbcs-cont":"sbcs-cont");return oo.join("")+vv}oo.push(_getchar(__readUInt8(this,loc)));loc+=1}o=oo.join("");break;default:switch(size){case 1:oI=__readUInt8(this,this.l);this.l++;return oI;case 2:oI=(t==="i"?__readInt16LE:__readUInt16LE)(this,this.l);this.l+=2;return oI;case 4:if(t==="i"||(this[this.l+3]&128)===0){oI=__readInt32LE(this,this.l);this.l+=4;return oI}else{oR=__readUInt32LE(this,this.l);this.l+=4;return oR}break;case 8:if(t==="f"){oR=__double(this,this.l);this.l+=8;return oR}case 16:o=__hexlify(this,this.l,size);break}}this.l+=size;return o}function WriteShift(t,val,f){var size,i;if(f==="dbcs"){for(i=0;i!=val.length;++i)this.writeUInt16LE(val.charCodeAt(i),this.l+2*i);size=2*val.length}else switch(t){case 1:size=1;this[this.l]=val&255;break;case 3:size=3;this[this.l+2]=val&255;val>>>=8;
this[this.l+1]=val&255;val>>>=8;this[this.l]=val&255;break;case 4:size=4;this.writeUInt32LE(val,this.l);break;case 8:size=8;if(f==="f"){this.writeDoubleLE(val,this.l);break}case 16:break;case-4:size=4;this.writeInt32LE(val,this.l);break}this.l+=size;return this}function CheckField(hexstr,fld){var m=__hexlify(this,this.l,hexstr.length>>1);if(m!==hexstr)throw fld+"Expected "+hexstr+" saw "+m;this.l+=hexstr.length>>1}function prep_blob(blob,pos){blob.l=pos;blob.read_shift=ReadShift;blob.chk=CheckField;blob.write_shift=WriteShift}function parsenoop(blob,length){blob.l+=length}function writenoop(blob,length){blob.l+=length}function new_buf(sz){var o=new_raw_buf(sz);prep_blob(o,0);return o}function recordhopper(data,cb,opts){var tmpbyte,cntbyte,length;prep_blob(data,data.l||0);while(data.l<data.length){var RT=data.read_shift(1);if(RT&128)RT=(RT&127)+((data.read_shift(1)&127)<<7);var R=XLSBRecordEnum[RT]||XLSBRecordEnum[65535];tmpbyte=data.read_shift(1);length=tmpbyte&127;for(cntbyte=1;cntbyte<4&&tmpbyte&128;++cntbyte)length+=((tmpbyte=data.read_shift(1))&127)<<7*cntbyte;var d=R.f(data,length,opts);if(cb(d,R,RT))return}}function buf_array(){var bufs=[],blksz=2048;var newblk=function ba_newblk(sz){var o=new_buf(sz);prep_blob(o,0);return o};var curbuf=newblk(blksz);var endbuf=function ba_endbuf(){curbuf.length=curbuf.l;if(curbuf.length>0)bufs.push(curbuf);curbuf=null};var next=function ba_next(sz){if(sz<curbuf.length-curbuf.l)return curbuf;endbuf();return curbuf=newblk(Math.max(sz+1,blksz))};var end=function ba_end(){endbuf();return __toBuffer([bufs])};var push=function ba_push(buf){endbuf();curbuf=buf;next(blksz)};return{next:next,push:push,end:end,_bufs:bufs}}function write_record(ba,type,payload,length){var t=evert_RE[type],l;if(!length)length=XLSBRecordEnum[t].p||(payload||[]).length||0;l=1+(t>=128?1:0)+1+length;if(length>=128)++l;if(length>=16384)++l;if(length>=2097152)++l;var o=ba.next(l);if(t<=127)o.write_shift(1,t);else{o.write_shift(1,(t&127)+128);o.write_shift(1,t>>7)}for(var i=0;i!=4;++i){if(length>=128){o.write_shift(1,(length&127)+128);length>>=7}else{o.write_shift(1,length);break}}if(length>0&&is_buf(payload))ba.push(payload)}function shift_cell_xls(cell,tgt){if(tgt.s){if(cell.cRel)cell.c+=tgt.s.c;if(cell.rRel)cell.r+=tgt.s.r}else{cell.c+=tgt.c;cell.r+=tgt.r}cell.cRel=cell.rRel=0;while(cell.c>=256)cell.c-=256;while(cell.r>=65536)cell.r-=65536;return cell}function shift_range_xls(cell,range){cell.s=shift_cell_xls(cell.s,range.s);cell.e=shift_cell_xls(cell.e,range.s);return cell}var OFFCRYPTO={};var make_offcrypto=function(O,_crypto){var crypto;if(typeof _crypto!=="undefined")crypto=_crypto;else if(typeof require!=="undefined"){try{crypto=require("cry"+"pto")}catch(e){crypto=null}}O.rc4=function(key,data){var S=new Array(256);var c=0,i=0,j=0,t=0;for(i=0;i!=256;++i)S[i]=i;for(i=0;i!=256;++i){j=j+S[i]+key[i%key.length].charCodeAt(0)&255;t=S[i];S[i]=S[j];S[j]=t}i=j=0;out=Buffer(data.length);for(c=0;c!=data.length;++c){i=i+1&255;j=(j+S[i])%256;t=S[i];S[i]=S[j];S[j]=t;out[c]=data[c]^S[S[i]+S[j]&255]}return out};if(crypto){O.md5=function(hex){return crypto.createHash("md5").update(hex).digest("hex")}}else{O.md5=function(hex){throw"unimplemented"}}};make_offcrypto(OFFCRYPTO,typeof crypto!=="undefined"?crypto:undefined);function parse_StrRun(data,length){return{ich:data.read_shift(2),ifnt:data.read_shift(2)}}function parse_RichStr(data,length){var start=data.l;var flags=data.read_shift(1);var str=parse_XLWideString(data);var rgsStrRun=[];var z={t:str,h:str};if((flags&1)!==0){var dwSizeStrRun=data.read_shift(4);for(var i=0;i!=dwSizeStrRun;++i)rgsStrRun.push(parse_StrRun(data));z.r=rgsStrRun}else z.r="<t>"+escapexml(str)+"</t>";if((flags&2)!==0){}data.l=start+length;return z}function write_RichStr(str,o){if(o==null)o=new_buf(5+2*str.t.length);o.write_shift(1,0);write_XLWideString(str.t,o);return o}function parse_XLSBCell(data){var col=data.read_shift(4);var iStyleRef=data.read_shift(2);iStyleRef+=data.read_shift(1)<<16;var fPhShow=data.read_shift(1);return{c:col,iStyleRef:iStyleRef}}function write_XLSBCell(cell,o){if(o==null)o=new_buf(8);o.write_shift(-4,cell.c);o.write_shift(3,cell.iStyleRef===undefined?cell.iStyleRef:cell.s);o.write_shift(1,0);return o}function parse_XLSBCodeName(data,length){return parse_XLWideString(data,length)}function parse_XLNullableWideString(data){var cchCharacters=data.read_shift(4);return cchCharacters===0||cchCharacters===4294967295?"":data.read_shift(cchCharacters,"dbcs")}function write_XLNullableWideString(data,o){if(!o)o=new_buf(127);o.write_shift(4,data.length>0?data.length:4294967295);if(data.length>0)o.write_shift(0,data,"dbcs");return o}function parse_XLWideString(data){var cchCharacters=data.read_shift(4);return cchCharacters===0?"":data.read_shift(cchCharacters,"dbcs")}function write_XLWideString(data,o){if(o==null)o=new_buf(4+2*data.length);o.write_shift(4,data.length);if(data.length>0)o.write_shift(0,data,"dbcs");return o}var parse_RelID=parse_XLNullableWideString;var write_RelID=write_XLNullableWideString;function parse_RkNumber(data){var b=data.slice(data.l,data.l+4);var fX100=b[0]&1,fInt=b[0]&2;data.l+=4;b[0]&=252;var RK=fInt===0?__double([0,0,0,0,b[0],b[1],b[2],b[3]],0):__readInt32LE(b,0)>>2;return fX100?RK/100:RK}function parse_UncheckedRfX(data){var cell={s:{},e:{}};cell.s.r=data.read_shift(4);cell.e.r=data.read_shift(4);cell.s.c=data.read_shift(4);cell.e.c=data.read_shift(4);return cell}function write_UncheckedRfX(r,o){if(!o)o=new_buf(16);o.write_shift(4,r.s.r);o.write_shift(4,r.e.r);o.write_shift(4,r.s.c);o.write_shift(4,r.e.c);return o}function parse_Xnum(data,length){return data.read_shift(8,"f")}function write_Xnum(data,o){return(o||new_buf(8)).write_shift(8,"f",data)}var BErr={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"};var RBErr=evert_num(BErr);function parse_BrtColor(data,length){var out={};var d=data.read_shift(1);out.fValidRGB=d&1;out.xColorType=d>>>1;out.index=data.read_shift(1);out.nTintAndShade=data.read_shift(2,"i");out.bRed=data.read_shift(1);out.bGreen=data.read_shift(1);out.bBlue=data.read_shift(1);out.bAlpha=data.read_shift(1)}function parse_FontFlags(data,length){var d=data.read_shift(1);data.l++;var out={fItalic:d&2,fStrikeout:d&8,fOutline:d&16,fShadow:d&32,fCondense:d&64,fExtend:d&128};return out}{var VT_EMPTY=0;var VT_NULL=1;var VT_I2=2;var VT_I4=3;var VT_R4=4;var VT_R8=5;var VT_CY=6;var VT_DATE=7;var VT_BSTR=8;var VT_ERROR=10;var VT_BOOL=11;var VT_VARIANT=12;var VT_DECIMAL=14;var VT_I1=16;var VT_UI1=17;var VT_UI2=18;var VT_UI4=19;var VT_I8=20;var VT_UI8=21;var VT_INT=22;var VT_UINT=23;var VT_LPSTR=30;var VT_LPWSTR=31;var VT_FILETIME=64;var VT_BLOB=65;var VT_STREAM=66;var VT_STORAGE=67;var VT_STREAMED_Object=68;var VT_STORED_Object=69;var VT_BLOB_Object=70;var VT_CF=71;var VT_CLSID=72;var VT_VERSIONED_STREAM=73;var VT_VECTOR=4096;var VT_ARRAY=8192;var VT_STRING=80;var VT_USTR=81;var VT_CUSTOM=[VT_STRING,VT_USTR]}var DocSummaryPIDDSI={1:{n:"CodePage",t:VT_I2},2:{n:"Category",t:VT_STRING},3:{n:"PresentationFormat",t:VT_STRING},4:{n:"ByteCount",t:VT_I4},5:{n:"LineCount",t:VT_I4},6:{n:"ParagraphCount",t:VT_I4},7:{n:"SlideCount",t:VT_I4},8:{n:"NoteCount",t:VT_I4},9:{n:"HiddenCount",t:VT_I4},10:{n:"MultimediaClipCount",t:VT_I4},11:{n:"Scale",t:VT_BOOL},12:{n:"HeadingPair",t:VT_VECTOR|VT_VARIANT},13:{n:"DocParts",t:VT_VECTOR|VT_LPSTR},14:{n:"Manager",t:VT_STRING},15:{n:"Company",t:VT_STRING},16:{n:"LinksDirty",t:VT_BOOL},17:{n:"CharacterCount",t:VT_I4},19:{n:"SharedDoc",t:VT_BOOL},22:{n:"HLinksChanged",t:VT_BOOL},23:{n:"AppVersion",t:VT_I4,p:"version"},26:{n:"ContentType",t:VT_STRING},27:{n:"ContentStatus",t:VT_STRING},28:{n:"Language",t:VT_STRING},29:{n:"Version",t:VT_STRING},255:{}};var SummaryPIDSI={1:{n:"CodePage",t:VT_I2},2:{n:"Title",t:VT_STRING},3:{n:"Subject",t:VT_STRING},4:{n:"Author",t:VT_STRING},5:{n:"Keywords",t:VT_STRING},6:{n:"Comments",t:VT_STRING},7:{n:"Template",t:VT_STRING},8:{n:"LastAuthor",t:VT_STRING},9:{n:"RevNumber",t:VT_STRING},10:{n:"EditTime",t:VT_FILETIME},11:{n:"LastPrinted",t:VT_FILETIME},12:{n:"CreatedDate",t:VT_FILETIME},13:{n:"ModifiedDate",t:VT_FILETIME},14:{n:"PageCount",t:VT_I4},15:{n:"WordCount",t:VT_I4},16:{n:"CharCount",t:VT_I4},17:{n:"Thumbnail",t:VT_CF},18:{n:"ApplicationName",t:VT_LPSTR},19:{n:"DocumentSecurity",t:VT_I4},255:{}};var SpecialProperties={2147483648:{n:"Locale",t:VT_UI4},2147483651:{n:"Behavior",t:VT_UI4},1919054434:{}};(function(){for(var y in SpecialProperties)if(SpecialProperties.hasOwnProperty(y))DocSummaryPIDDSI[y]=SummaryPIDSI[y]=SpecialProperties[y]})();var CountryEnum={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"};var XLSFillPattern=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"];function rgbify(arr){return arr.map(function(x){return[x>>16&255,x>>8&255,x&255]})}var XLSIcv=rgbify([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0]);var ct2type={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.ms-excel.chartsheet":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"TODO","application/vnd.ms-excel.dialogsheet":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"TODO","application/vnd.ms-excel.macrosheet":"TODO","application/vnd.ms-excel.macrosheet+xml":"TODO","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.ms-excel.comments":"comments","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"TODO","application/vnd.ms-excel.sheetMetadata":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"TODO","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"vba","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO",sheet:"js"};var CT_LIST=function(){var o={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}};keys(o).forEach(function(k){if(!o[k].xlsm)o[k].xlsm=o[k].xlsx});keys(o).forEach(function(k){keys(o[k]).forEach(function(v){ct2type[o[k][v]]=k})});return o}();var type2ct=evert_arr(ct2type);XMLNS.CT="http://schemas.openxmlformats.org/package/2006/content-types";function parse_ct(data,opts){var ctext={};if(!data||!data.match)return data;var ct={workbooks:[],sheets:[],calcchains:[],themes:[],styles:[],coreprops:[],extprops:[],custprops:[],strs:[],comments:[],vba:[],TODO:[],rels:[],xmlns:""};(data.match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);switch(y[0].replace(nsregex,"<")){case"<?xml":break;case"<Types":ct.xmlns=y["xmlns"+(y[0].match(/<(\w+):/)||["",""])[1]];break;case"<Default":ctext[y.Extension]=y.ContentType;break;case"<Override":if(ct[ct2type[y.ContentType]]!==undefined)ct[ct2type[y.ContentType]].push(y.PartName);else if(opts.WTF)console.error(y);break}});if(ct.xmlns!==XMLNS.CT)throw new Error("Unknown Namespace: "+ct.xmlns);ct.calcchain=ct.calcchains.length>0?ct.calcchains[0]:"";ct.sst=ct.strs.length>0?ct.strs[0]:"";ct.style=ct.styles.length>0?ct.styles[0]:"";ct.defaults=ctext;delete ct.calcchains;return ct}var CTYPE_XML_ROOT=writextag("Types",null,{xmlns:XMLNS.CT,"xmlns:xsd":XMLNS.xsd,"xmlns:xsi":XMLNS.xsi});var CTYPE_DEFAULTS=[["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["rels",type2ct.rels[0]]].map(function(x){return writextag("Default",null,{Extension:x[0],ContentType:x[1]})});function write_ct(ct,opts){var o=[],v;o[o.length]=XML_HEADER;o[o.length]=CTYPE_XML_ROOT;o=o.concat(CTYPE_DEFAULTS);var f1=function(w){if(ct[w]&&ct[w].length>0){v=ct[w][0];o[o.length]=writextag("Override",null,{PartName:(v[0]=="/"?"":"/")+v,ContentType:CT_LIST[w][opts.bookType||"xlsx"]})}};var f2=function(w){ct[w].forEach(function(v){o[o.length]=writextag("Override",null,{PartName:(v[0]=="/"?"":"/")+v,ContentType:CT_LIST[w][opts.bookType||"xlsx"]})})};var f3=function(t){(ct[t]||[]).forEach(function(v){o[o.length]=writextag("Override",null,{PartName:(v[0]=="/"?"":"/")+v,ContentType:type2ct[t][0]})})};f1("workbooks");f2("sheets");f3("themes");["strs","styles"].forEach(f1);["coreprops","extprops","custprops"].forEach(f3);if(o.length>2){o[o.length]="</Types>";o[1]=o[1].replace("/>",">")}return o.join("")}var RELS={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument"};function parse_rels(data,currentFilePath){if(!data)return data;if(currentFilePath.charAt(0)!=="/"){currentFilePath="/"+currentFilePath}var rels={};var hash={};var resolveRelativePathIntoAbsolute=function(to){var toksFrom=currentFilePath.split("/");toksFrom.pop();var toksTo=to.split("/");var reversed=[];while(toksTo.length!==0){var tokTo=toksTo.shift();if(tokTo===".."){toksFrom.pop()}else if(tokTo!=="."){toksFrom.push(tokTo)}}return toksFrom.join("/")};data.match(tagregex).forEach(function(x){var y=parsexmltag(x);if(y[0]==="<Relationship"){var rel={};rel.Type=y.Type;rel.Target=y.Target;rel.Id=y.Id;rel.TargetMode=y.TargetMode;var canonictarget=y.TargetMode==="External"?y.Target:resolveRelativePathIntoAbsolute(y.Target);rels[canonictarget]=rel;hash[y.Id]=rel}});rels["!id"]=hash;return rels}XMLNS.RELS="http://schemas.openxmlformats.org/package/2006/relationships";var RELS_ROOT=writextag("Relationships",null,{xmlns:XMLNS.RELS});function write_rels(rels){var o=[];o[o.length]=XML_HEADER;o[o.length]=RELS_ROOT;keys(rels["!id"]).forEach(function(rid){var rel=rels["!id"][rid];o[o.length]=writextag("Relationship",null,rel)});if(o.length>2){o[o.length]="</Relationships>";o[1]=o[1].replace("/>",">")}return o.join("")}var CORE_PROPS=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]];XMLNS.CORE_PROPS="http://schemas.openxmlformats.org/package/2006/metadata/core-properties";RELS.CORE_PROPS="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";var CORE_PROPS_REGEX=function(){var r=new Array(CORE_PROPS.length);for(var i=0;i<CORE_PROPS.length;++i){var f=CORE_PROPS[i];var g="(?:"+f[0].substr(0,f[0].indexOf(":"))+":)"+f[0].substr(f[0].indexOf(":")+1);r[i]=new RegExp("<"+g+"[^>]*>(.*)</"+g+">")}return r}();function parse_core_props(data){var p={};for(var i=0;i<CORE_PROPS.length;++i){var f=CORE_PROPS[i],cur=data.match(CORE_PROPS_REGEX[i]);if(cur!=null&&cur.length>0)p[f[1]]=cur[1];if(f[2]==="date"&&p[f[1]])p[f[1]]=new Date(p[f[1]])}return p}var CORE_PROPS_XML_ROOT=writextag("cp:coreProperties",null,{"xmlns:cp":XMLNS.CORE_PROPS,"xmlns:dc":XMLNS.dc,"xmlns:dcterms":XMLNS.dcterms,"xmlns:dcmitype":XMLNS.dcmitype,"xmlns:xsi":XMLNS.xsi});function cp_doit(f,g,h,o,p){if(p[f]!=null||g==null||g==="")return;p[f]=g;o[o.length]=h?writextag(f,g,h):writetag(f,g)}function write_core_props(cp,opts){var o=[XML_HEADER,CORE_PROPS_XML_ROOT],p={};if(!cp)return o.join("");if(cp.CreatedDate!=null)cp_doit("dcterms:created",typeof cp.CreatedDate==="string"?cp.CreatedDate:write_w3cdtf(cp.CreatedDate,opts.WTF),{"xsi:type":"dcterms:W3CDTF"},o,p);if(cp.ModifiedDate!=null)cp_doit("dcterms:modified",typeof cp.ModifiedDate==="string"?cp.ModifiedDate:write_w3cdtf(cp.ModifiedDate,opts.WTF),{"xsi:type":"dcterms:W3CDTF"},o,p);for(var i=0;i!=CORE_PROPS.length;++i){var f=CORE_PROPS[i];cp_doit(f[0],cp[f[1]],null,o,p)}if(o.length>2){o[o.length]="</cp:coreProperties>";o[1]=o[1].replace("/>",">")}return o.join("")}var EXT_PROPS=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];XMLNS.EXT_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";RELS.EXT_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";function parse_ext_props(data,p){var q={};if(!p)p={};EXT_PROPS.forEach(function(f){switch(f[2]){case"string":p[f[1]]=(data.match(matchtag(f[0]))||[])[1];break;case"bool":p[f[1]]=(data.match(matchtag(f[0]))||[])[1]==="true";break;case"raw":var cur=data.match(new RegExp("<"+f[0]+"[^>]*>(.*)</"+f[0]+">"));if(cur&&cur.length>0)q[f[1]]=cur[1];break}});if(q.HeadingPairs&&q.TitlesOfParts){var v=parseVector(q.HeadingPairs);var j=0,widx=0;for(var i=0;i!==v.length;++i){switch(v[i].v){case"Worksheets":widx=j;p.Worksheets=+v[++i].v;break;case"Named Ranges":++i;break}}var parts=parseVector(q.TitlesOfParts).map(function(x){return utf8read(x.v)});p.SheetNames=parts.slice(widx,widx+p.Worksheets)}return p}var EXT_PROPS_XML_ROOT=writextag("Properties",null,{xmlns:XMLNS.EXT_PROPS,"xmlns:vt":XMLNS.vt});function write_ext_props(cp,opts){var o=[],p={},W=writextag;if(!cp)cp={};cp.Application="SheetJS";o[o.length]=XML_HEADER;o[o.length]=EXT_PROPS_XML_ROOT;EXT_PROPS.forEach(function(f){if(cp[f[1]]===undefined)return;var v;switch(f[2]){case"string":v=cp[f[1]];break;case"bool":v=cp[f[1]]?"true":"false";break}if(v!==undefined)o[o.length]=W(f[0],v)});o[o.length]=W("HeadingPairs",W("vt:vector",W("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+W("vt:variant",W("vt:i4",String(cp.Worksheets))),{size:2,baseType:"variant"}));o[o.length]=W("TitlesOfParts",W("vt:vector",cp.SheetNames.map(function(s){return"<vt:lpstr>"+s+"</vt:lpstr>"}).join(""),{size:cp.Worksheets,baseType:"lpstr"}));if(o.length>2){o[o.length]="</Properties>";o[1]=o[1].replace("/>",">")}return o.join("")}XMLNS.CUST_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";RELS.CUST_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";var custregex=/<[^>]+>[^<]*/g;function parse_cust_props(data,opts){var p={},name;var m=data.match(custregex);if(m)for(var i=0;i!=m.length;++i){var x=m[i],y=parsexmltag(x);switch(y[0]){case"<?xml":break;case"<Properties":if(y.xmlns!==XMLNS.CUST_PROPS)throw"unrecognized xmlns "+y.xmlns;if(y.xmlnsvt&&y.xmlnsvt!==XMLNS.vt)throw"unrecognized vt "+y.xmlnsvt;break;case"<property":name=y.name;break;case"</property>":name=null;break;default:if(x.indexOf("<vt:")===0){var toks=x.split(">");var type=toks[0].substring(4),text=toks[1];switch(type){case"lpstr":case"lpwstr":case"bstr":case"lpwstr":p[name]=unescapexml(text);break;case"bool":p[name]=parsexmlbool(text,"<vt:bool>");break;case"i1":case"i2":case"i4":case"i8":case"int":case"uint":p[name]=parseInt(text,10);break;case"r4":case"r8":case"decimal":p[name]=parseFloat(text);break;case"filetime":case"date":p[name]=new Date(text);break;case"cy":case"error":p[name]=unescapexml(text);break;default:if(typeof console!=="undefined")console.warn("Unexpected",x,type,toks)}}else if(x.substr(0,2)==="</"){}else if(opts.WTF)throw new Error(x)}}return p}var CUST_PROPS_XML_ROOT=writextag("Properties",null,{xmlns:XMLNS.CUST_PROPS,"xmlns:vt":XMLNS.vt});function write_cust_props(cp,opts){var o=[XML_HEADER,CUST_PROPS_XML_ROOT];if(!cp)return o.join("");var pid=1;keys(cp).forEach(function custprop(k){++pid;o[o.length]=writextag("property",write_vt(cp[k]),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:pid,name:k})});if(o.length>2){o[o.length]="</Properties>";o[1]=o[1].replace("/>",">")}return o.join("")}function xlml_set_prop(Props,tag,val){switch(tag){case"Description":tag="Comments";break}Props[tag]=val}function parse_FILETIME(blob){var dwLowDateTime=blob.read_shift(4),dwHighDateTime=blob.read_shift(4);return new Date((dwHighDateTime/1e7*Math.pow(2,32)+dwLowDateTime/1e7-11644473600)*1e3).toISOString().replace(/\.000/,"")}function parse_lpstr(blob,type,pad){var str=blob.read_shift(0,"lpstr");if(pad)blob.l+=4-(str.length+1&3)&3;return str}function parse_lpwstr(blob,type,pad){var str=blob.read_shift(0,"lpwstr");if(pad)blob.l+=4-(str.length+1&3)&3;return str}function parse_VtStringBase(blob,stringType,pad){if(stringType===31)return parse_lpwstr(blob);return parse_lpstr(blob,stringType,pad)}function parse_VtString(blob,t,pad){return parse_VtStringBase(blob,t,pad===false?0:4)}function parse_VtUnalignedString(blob,t){if(!t)throw new Error("dafuq?");return parse_VtStringBase(blob,t,0)}function parse_VtVecUnalignedLpstrValue(blob){var length=blob.read_shift(4);var ret=[];for(var i=0;i!=length;++i)ret[i]=blob.read_shift(0,"lpstr");return ret}function parse_VtVecUnalignedLpstr(blob){return parse_VtVecUnalignedLpstrValue(blob)}function parse_VtHeadingPair(blob){var headingString=parse_TypedPropertyValue(blob,VT_USTR);var headerParts=parse_TypedPropertyValue(blob,VT_I4);return[headingString,headerParts]}function parse_VtVecHeadingPairValue(blob){var cElements=blob.read_shift(4);var out=[];for(var i=0;i!=cElements/2;++i)out.push(parse_VtHeadingPair(blob));return out}function parse_VtVecHeadingPair(blob){return parse_VtVecHeadingPairValue(blob)}function parse_dictionary(blob,CodePage){var cnt=blob.read_shift(4);var dict={};for(var j=0;j!=cnt;++j){var pid=blob.read_shift(4);var len=blob.read_shift(4);dict[pid]=blob.read_shift(len,CodePage===1200?"utf16le":"utf8").replace(chr0,"").replace(chr1,"!")}if(blob.l&3)blob.l=blob.l>>2+1<<2;return dict}function parse_BLOB(blob){var size=blob.read_shift(4);var bytes=blob.slice(blob.l,blob.l+size);if(size&3>0)blob.l+=4-(size&3)&3;return bytes}function parse_ClipboardData(blob){var o={};o.Size=blob.read_shift(4);blob.l+=o.Size;return o}function parse_VtVector(blob,cb){}function parse_TypedPropertyValue(blob,type,_opts){var t=blob.read_shift(2),ret,opts=_opts||{};blob.l+=2;if(type!==VT_VARIANT)if(t!==type&&VT_CUSTOM.indexOf(type)===-1)throw new Error("Expected type "+type+" saw "+t);switch(type===VT_VARIANT?t:type){case 2:ret=blob.read_shift(2,"i");if(!opts.raw)blob.l+=2;return ret;case 3:ret=blob.read_shift(4,"i");return ret;case 11:return blob.read_shift(4)!==0;case 19:ret=blob.read_shift(4);return ret;case 30:return parse_lpstr(blob,t,4).replace(chr0,"");case 31:return parse_lpwstr(blob);case 64:return parse_FILETIME(blob);case 65:return parse_BLOB(blob);case 71:return parse_ClipboardData(blob);case 80:return parse_VtString(blob,t,!opts.raw&&4).replace(chr0,"");case 81:return parse_VtUnalignedString(blob,t,4).replace(chr0,"");case 4108:return parse_VtVecHeadingPair(blob);case 4126:return parse_VtVecUnalignedLpstr(blob);default:throw new Error("TypedPropertyValue unrecognized type "+type+" "+t)}}function parse_PropertySet(blob,PIDSI){var start_addr=blob.l;var size=blob.read_shift(4);var NumProps=blob.read_shift(4);var Props=[],i=0;var CodePage=0;var Dictionary=-1,DictObj;for(i=0;i!=NumProps;++i){var PropID=blob.read_shift(4);var Offset=blob.read_shift(4);Props[i]=[PropID,Offset+start_addr]}var PropH={};for(i=0;i!=NumProps;++i){if(blob.l!==Props[i][1]){var fail=true;if(i>0&&PIDSI)switch(PIDSI[Props[i-1][0]].t){case 2:if(blob.l+2===Props[i][1]){blob.l+=2;fail=false}break;case 80:if(blob.l<=Props[i][1]){blob.l=Props[i][1];fail=false}break;case 4108:if(blob.l<=Props[i][1]){blob.l=Props[i][1];fail=false}break}if(!PIDSI&&blob.l<=Props[i][1]){fail=false;blob.l=Props[i][1]}if(fail)throw new Error("Read Error: Expected address "+Props[i][1]+" at "+blob.l+" :"+i)}if(PIDSI){var piddsi=PIDSI[Props[i][0]];PropH[piddsi.n]=parse_TypedPropertyValue(blob,piddsi.t,{raw:true});if(piddsi.p==="version")PropH[piddsi.n]=String(PropH[piddsi.n]>>16)+"."+String(PropH[piddsi.n]&65535);if(piddsi.n=="CodePage")switch(PropH[piddsi.n]){case 0:PropH[piddsi.n]=1252;case 1e4:case 1252:case 874:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 932:case 936:case 949:case 950:case 1200:case 1201:case 65e3:case-536:case 65001:case-535:set_cp(CodePage=PropH[piddsi.n]);break;default:throw new Error("Unsupported CodePage: "+PropH[piddsi.n])}}else{if(Props[i][0]===1){CodePage=PropH.CodePage=parse_TypedPropertyValue(blob,VT_I2);set_cp(CodePage);if(Dictionary!==-1){var oldpos=blob.l;blob.l=Props[Dictionary][1];DictObj=parse_dictionary(blob,CodePage);blob.l=oldpos}}else if(Props[i][0]===0){if(CodePage===0){Dictionary=i;blob.l=Props[i+1][1];continue}DictObj=parse_dictionary(blob,CodePage)}else{var name=DictObj[Props[i][0]];var val;switch(blob[blob.l]){case 65:blob.l+=4;val=parse_BLOB(blob);break;case 30:blob.l+=4;val=parse_VtString(blob,blob[blob.l-4]);break;case 31:blob.l+=4;val=parse_VtString(blob,blob[blob.l-4]);break;case 3:blob.l+=4;val=blob.read_shift(4,"i");break;case 19:blob.l+=4;val=blob.read_shift(4);break;case 5:blob.l+=4;val=blob.read_shift(8,"f");break;case 11:blob.l+=4;val=parsebool(blob,4);break;case 64:blob.l+=4;val=new Date(parse_FILETIME(blob));break;default:throw new Error("unparsed value: "+blob[blob.l])}PropH[name]=val}}}blob.l=start_addr+size;return PropH}function parse_PropertySetStream(file,PIDSI){var blob=file.content;prep_blob(blob,0);var NumSets,FMTID0,FMTID1,Offset0,Offset1;blob.chk("feff","Byte Order: ");var vers=blob.read_shift(2);var SystemIdentifier=blob.read_shift(4);blob.chk(CFB.utils.consts.HEADER_CLSID,"CLSID: ");NumSets=blob.read_shift(4);if(NumSets!==1&&NumSets!==2)throw"Unrecognized #Sets: "+NumSets;FMTID0=blob.read_shift(16);Offset0=blob.read_shift(4);if(NumSets===1&&Offset0!==blob.l)throw"Length mismatch";else if(NumSets===2){FMTID1=blob.read_shift(16);Offset1=blob.read_shift(4)}var PSet0=parse_PropertySet(blob,PIDSI);var rval={SystemIdentifier:SystemIdentifier};for(var y in PSet0)rval[y]=PSet0[y];rval.FMTID=FMTID0;if(NumSets===1)return rval;if(blob.l!==Offset1)throw"Length mismatch 2: "+blob.l+" !== "+Offset1;var PSet1;try{PSet1=parse_PropertySet(blob,null)}catch(e){}for(y in PSet1)rval[y]=PSet1[y];rval.FMTID=[FMTID0,FMTID1];return rval}function parsenoop2(blob,length){blob.read_shift(length);return null}function parslurp(blob,length,cb){var arr=[],target=blob.l+length;while(blob.l<target)arr.push(cb(blob,target-blob.l));if(target!==blob.l)throw new Error("Slurp error");return arr}function parslurp2(blob,length,cb){var arr=[],target=blob.l+length,len=blob.read_shift(2);while(len--!==0)arr.push(cb(blob,target-blob.l));if(target!==blob.l)throw new Error("Slurp error");return arr}function parsebool(blob,length){return blob.read_shift(length)===1}function parseuint16(blob){return blob.read_shift(2,"u")}function parseuint16a(blob,length){return parslurp(blob,length,parseuint16)}var parse_Boolean=parsebool;function parse_Bes(blob){var v=blob.read_shift(1),t=blob.read_shift(1);return t===1?v:v===1
}function parse_ShortXLUnicodeString(blob,length,opts){var cch=blob.read_shift(1);var width=1,encoding="sbcs-cont";var cp=current_codepage;if(opts&&opts.biff>=8)current_codepage=1200;if(opts===undefined||opts.biff!==5){var fHighByte=blob.read_shift(1);if(fHighByte){width=2;encoding="dbcs-cont"}}var o=cch?blob.read_shift(cch,encoding):"";current_codepage=cp;return o}function parse_XLUnicodeRichExtendedString(blob){var cp=current_codepage;current_codepage=1200;var cch=blob.read_shift(2),flags=blob.read_shift(1);var fHighByte=flags&1,fExtSt=flags&4,fRichSt=flags&8;var width=1+(flags&1);var cRun,cbExtRst;var z={};if(fRichSt)cRun=blob.read_shift(2);if(fExtSt)cbExtRst=blob.read_shift(4);var encoding=flags&1?"dbcs-cont":"sbcs-cont";var msg=cch===0?"":blob.read_shift(cch,encoding);if(fRichSt)blob.l+=4*cRun;if(fExtSt)blob.l+=cbExtRst;z.t=msg;if(!fRichSt){z.raw="<t>"+z.t+"</t>";z.r=z.t}current_codepage=cp;return z}function parse_XLUnicodeStringNoCch(blob,cch,opts){var retval;var fHighByte=blob.read_shift(1);if(fHighByte===0){retval=blob.read_shift(cch,"sbcs-cont")}else{retval=blob.read_shift(cch,"dbcs-cont")}return retval}function parse_XLUnicodeString(blob,length,opts){var cch=blob.read_shift(opts!==undefined&&opts.biff>0&&opts.biff<8?1:2);if(cch===0){blob.l++;return""}return parse_XLUnicodeStringNoCch(blob,cch,opts)}function parse_XLUnicodeString2(blob,length,opts){if(opts.biff!==5&&opts.biff!==2)return parse_XLUnicodeString(blob,length,opts);var cch=blob.read_shift(1);if(cch===0){blob.l++;return""}return blob.read_shift(cch,"sbcs-cont")}var parse_ControlInfo=parsenoop;var parse_URLMoniker=function(blob,length){var len=blob.read_shift(4),start=blob.l;var extra=false;if(len>24){blob.l+=len-24;if(blob.read_shift(16)==="795881f43b1d7f48af2c825dc4852763")extra=true;blob.l=start}var url=blob.read_shift((extra?len-24:len)>>1,"utf16le").replace(chr0,"");if(extra)blob.l+=24;return url};var parse_FileMoniker=function(blob,length){var cAnti=blob.read_shift(2);var ansiLength=blob.read_shift(4);var ansiPath=blob.read_shift(ansiLength,"cstr");var endServer=blob.read_shift(2);var versionNumber=blob.read_shift(2);var cbUnicodePathSize=blob.read_shift(4);if(cbUnicodePathSize===0)return ansiPath.replace(/\\/g,"/");var cbUnicodePathBytes=blob.read_shift(4);var usKeyValue=blob.read_shift(2);var unicodePath=blob.read_shift(cbUnicodePathBytes>>1,"utf16le").replace(chr0,"");return unicodePath};var parse_HyperlinkMoniker=function(blob,length){var clsid=blob.read_shift(16);length-=16;switch(clsid){case"e0c9ea79f9bace118c8200aa004ba90b":return parse_URLMoniker(blob,length);case"0303000000000000c000000000000046":return parse_FileMoniker(blob,length);default:throw"unsupported moniker "+clsid}};var parse_HyperlinkString=function(blob,length){var len=blob.read_shift(4);var o=blob.read_shift(len,"utf16le").replace(chr0,"");return o};var parse_Hyperlink=function(blob,length){var end=blob.l+length;var sVer=blob.read_shift(4);if(sVer!==2)throw new Error("Unrecognized streamVersion: "+sVer);var flags=blob.read_shift(2);blob.l+=2;var displayName,targetFrameName,moniker,oleMoniker,location,guid,fileTime;if(flags&16)displayName=parse_HyperlinkString(blob,end-blob.l);if(flags&128)targetFrameName=parse_HyperlinkString(blob,end-blob.l);if((flags&257)===257)moniker=parse_HyperlinkString(blob,end-blob.l);if((flags&257)===1)oleMoniker=parse_HyperlinkMoniker(blob,end-blob.l);if(flags&8)location=parse_HyperlinkString(blob,end-blob.l);if(flags&32)guid=blob.read_shift(16);if(flags&64)fileTime=parse_FILETIME(blob,8);blob.l=end;var target=targetFrameName||moniker||oleMoniker;if(location)target+="#"+location;return{Target:target}};function parse_LongRGBA(blob,length){var r=blob.read_shift(1),g=blob.read_shift(1),b=blob.read_shift(1),a=blob.read_shift(1);return[r,g,b,a]}function parse_LongRGB(blob,length){var x=parse_LongRGBA(blob,length);x[3]=0;return x}function parse_XLSCell(blob,length){var rw=blob.read_shift(2);var col=blob.read_shift(2);var ixfe=blob.read_shift(2);return{r:rw,c:col,ixfe:ixfe}}function parse_frtHeader(blob){var rt=blob.read_shift(2);var flags=blob.read_shift(2);blob.l+=8;return{type:rt,flags:flags}}function parse_OptXLUnicodeString(blob,length,opts){return length===0?"":parse_XLUnicodeString2(blob,length,opts)}var HIDEOBJENUM=["SHOWALL","SHOWPLACEHOLDER","HIDEALL"];var parse_HideObjEnum=parseuint16;function parse_XTI(blob,length){var iSupBook=blob.read_shift(2),itabFirst=blob.read_shift(2,"i"),itabLast=blob.read_shift(2,"i");return[iSupBook,itabFirst,itabLast]}function parse_RkRec(blob,length){var ixfe=blob.read_shift(2);var RK=parse_RkNumber(blob);return[ixfe,RK]}function parse_AddinUdf(blob,length){blob.l+=4;length-=4;var l=blob.l+length;var udfName=parse_ShortXLUnicodeString(blob,length);var cb=blob.read_shift(2);l-=blob.l;if(cb!==l)throw"Malformed AddinUdf: padding = "+l+" != "+cb;blob.l+=cb;return udfName}function parse_Ref8U(blob,length){var rwFirst=blob.read_shift(2);var rwLast=blob.read_shift(2);var colFirst=blob.read_shift(2);var colLast=blob.read_shift(2);return{s:{c:colFirst,r:rwFirst},e:{c:colLast,r:rwLast}}}function parse_RefU(blob,length){var rwFirst=blob.read_shift(2);var rwLast=blob.read_shift(2);var colFirst=blob.read_shift(1);var colLast=blob.read_shift(1);return{s:{c:colFirst,r:rwFirst},e:{c:colLast,r:rwLast}}}var parse_Ref=parse_RefU;function parse_FtCmo(blob,length){blob.l+=4;var ot=blob.read_shift(2);var id=blob.read_shift(2);var flags=blob.read_shift(2);blob.l+=12;return[id,ot,flags]}function parse_FtNts(blob,length){var out={};blob.l+=4;blob.l+=16;out.fSharedNote=blob.read_shift(2);blob.l+=4;return out}function parse_FtCf(blob,length){var out={};blob.l+=4;blob.cf=blob.read_shift(2);return out}var FtTab={21:parse_FtCmo,19:parsenoop,18:function(blob,length){blob.l+=12},17:function(blob,length){blob.l+=8},16:parsenoop,15:parsenoop,13:parse_FtNts,12:function(blob,length){blob.l+=24},11:function(blob,length){blob.l+=10},10:function(blob,length){blob.l+=16},9:parsenoop,8:function(blob,length){blob.l+=6},7:parse_FtCf,6:function(blob,length){blob.l+=6},4:parsenoop,0:function(blob,length){blob.l+=4}};function parse_FtArray(blob,length,ot){var s=blob.l;var fts=[];while(blob.l<s+length){var ft=blob.read_shift(2);blob.l-=2;try{fts.push(FtTab[ft](blob,s+length-blob.l))}catch(e){blob.l=s+length;return fts}}if(blob.l!=s+length)blob.l=s+length;return fts}var parse_FontIndex=parseuint16;function parse_BOF(blob,length){var o={};o.BIFFVer=blob.read_shift(2);length-=2;switch(o.BIFFVer){case 1536:case 1280:case 2:case 7:break;default:throw"Unexpected BIFF Ver "+o.BIFFVer}blob.read_shift(length);return o}function parse_InterfaceHdr(blob,length){if(length===0)return 1200;var q;if((q=blob.read_shift(2))!==1200)throw"InterfaceHdr codePage "+q;return 1200}function parse_WriteAccess(blob,length,opts){if(opts.enc){blob.l+=length;return""}var l=blob.l;var UserName=parse_XLUnicodeString(blob,0,opts);blob.read_shift(length+l-blob.l);return UserName}function parse_BoundSheet8(blob,length,opts){var pos=blob.read_shift(4);var hidden=blob.read_shift(1)>>6;var dt=blob.read_shift(1);switch(dt){case 0:dt="Worksheet";break;case 1:dt="Macrosheet";break;case 2:dt="Chartsheet";break;case 6:dt="VBAModule";break}var name=parse_ShortXLUnicodeString(blob,0,opts);if(name.length===0)name="Sheet1";return{pos:pos,hs:hidden,dt:dt,name:name}}function parse_SST(blob,length){var cnt=blob.read_shift(4);var ucnt=blob.read_shift(4);var strs=[];for(var i=0;i!=ucnt;++i){strs.push(parse_XLUnicodeRichExtendedString(blob))}strs.Count=cnt;strs.Unique=ucnt;return strs}function parse_ExtSST(blob,length){var extsst={};extsst.dsst=blob.read_shift(2);blob.l+=length-2;return extsst}function parse_Row(blob,length){var rw=blob.read_shift(2),col=blob.read_shift(2),Col=blob.read_shift(2),rht=blob.read_shift(2);blob.read_shift(4);var flags=blob.read_shift(1);blob.read_shift(1);blob.read_shift(2);return{r:rw,c:col,cnt:Col-col}}function parse_ForceFullCalculation(blob,length){var header=parse_frtHeader(blob);if(header.type!=2211)throw"Invalid Future Record "+header.type;var fullcalc=blob.read_shift(4);return fullcalc!==0}var parse_CompressPictures=parsenoop2;function parse_RecalcId(blob,length){blob.read_shift(2);return blob.read_shift(4)}function parse_DefaultRowHeight(blob,length){var f=blob.read_shift(2),miyRw;miyRw=blob.read_shift(2);var fl={Unsynced:f&1,DyZero:(f&2)>>1,ExAsc:(f&4)>>2,ExDsc:(f&8)>>3};return[fl,miyRw]}function parse_Window1(blob,length){var xWn=blob.read_shift(2),yWn=blob.read_shift(2),dxWn=blob.read_shift(2),dyWn=blob.read_shift(2);var flags=blob.read_shift(2),iTabCur=blob.read_shift(2),iTabFirst=blob.read_shift(2);var ctabSel=blob.read_shift(2),wTabRatio=blob.read_shift(2);return{Pos:[xWn,yWn],Dim:[dxWn,dyWn],Flags:flags,CurTab:iTabCur,FirstTab:iTabFirst,Selected:ctabSel,TabRatio:wTabRatio}}function parse_Font(blob,length,opts){blob.l+=14;var name=parse_ShortXLUnicodeString(blob,0,opts);return name}function parse_LabelSst(blob,length){var cell=parse_XLSCell(blob);cell.isst=blob.read_shift(4);return cell}function parse_Label(blob,length,opts){var cell=parse_XLSCell(blob,6);var str=parse_XLUnicodeString(blob,length-6,opts);cell.val=str;return cell}function parse_Format(blob,length,opts){var ifmt=blob.read_shift(2);var fmtstr=parse_XLUnicodeString2(blob,0,opts);return[ifmt,fmtstr]}function parse_Dimensions(blob,length){var w=length===10?2:4;var r=blob.read_shift(w),R=blob.read_shift(w),c=blob.read_shift(2),C=blob.read_shift(2);blob.l+=2;return{s:{r:r,c:c},e:{r:R,c:C}}}function parse_RK(blob,length){var rw=blob.read_shift(2),col=blob.read_shift(2);var rkrec=parse_RkRec(blob);return{r:rw,c:col,ixfe:rkrec[0],rknum:rkrec[1]}}function parse_MulRk(blob,length){var target=blob.l+length-2;var rw=blob.read_shift(2),col=blob.read_shift(2);var rkrecs=[];while(blob.l<target)rkrecs.push(parse_RkRec(blob));if(blob.l!==target)throw"MulRK read error";var lastcol=blob.read_shift(2);if(rkrecs.length!=lastcol-col+1)throw"MulRK length mismatch";return{r:rw,c:col,C:lastcol,rkrec:rkrecs}}function parse_CellStyleXF(blob,length,style){var o={};var a=blob.read_shift(4),b=blob.read_shift(4);var c=blob.read_shift(4),d=blob.read_shift(2);o.patternType=XLSFillPattern[c>>26];o.icvFore=d&127;o.icvBack=d>>7&127;return o}function parse_CellXF(blob,length){return parse_CellStyleXF(blob,length,0)}function parse_StyleXF(blob,length){return parse_CellStyleXF(blob,length,1)}function parse_XF(blob,length){var o={};o.ifnt=blob.read_shift(2);o.ifmt=blob.read_shift(2);o.flags=blob.read_shift(2);o.fStyle=o.flags>>2&1;length-=6;o.data=parse_CellStyleXF(blob,length,o.fStyle);return o}function parse_Guts(blob,length){blob.l+=4;var out=[blob.read_shift(2),blob.read_shift(2)];if(out[0]!==0)out[0]--;if(out[1]!==0)out[1]--;if(out[0]>7||out[1]>7)throw"Bad Gutters: "+out;return out}function parse_BoolErr(blob,length){var cell=parse_XLSCell(blob,6);var val=parse_Bes(blob,2);cell.val=val;cell.t=val===true||val===false?"b":"e";return cell}function parse_Number(blob,length){var cell=parse_XLSCell(blob,6);var xnum=parse_Xnum(blob,8);cell.val=xnum;return cell}var parse_XLHeaderFooter=parse_OptXLUnicodeString;function parse_SupBook(blob,length,opts){var end=blob.l+length;var ctab=blob.read_shift(2);var cch=blob.read_shift(2);var virtPath;if(cch>=1&&cch<=255)virtPath=parse_XLUnicodeStringNoCch(blob,cch);var rgst=blob.read_shift(end-blob.l);opts.sbcch=cch;return[cch,ctab,virtPath,rgst]}function parse_ExternName(blob,length,opts){var flags=blob.read_shift(2);var body;var o={fBuiltIn:flags&1,fWantAdvise:flags>>>1&1,fWantPict:flags>>>2&1,fOle:flags>>>3&1,fOleLink:flags>>>4&1,cf:flags>>>5&1023,fIcon:flags>>>15&1};if(opts.sbcch===14849)body=parse_AddinUdf(blob,length-2);o.body=body||blob.read_shift(length-2);return o}function parse_Lbl(blob,length,opts){if(opts.biff<8)return parse_Label(blob,length,opts);var target=blob.l+length;var flags=blob.read_shift(2);var chKey=blob.read_shift(1);var cch=blob.read_shift(1);var cce=blob.read_shift(2);blob.l+=2;var itab=blob.read_shift(2);blob.l+=4;var name=parse_XLUnicodeStringNoCch(blob,cch,opts);var rgce=parse_NameParsedFormula(blob,target-blob.l,opts,cce);return{chKey:chKey,Name:name,rgce:rgce}}function parse_ExternSheet(blob,length,opts){if(opts.biff<8)return parse_ShortXLUnicodeString(blob,length,opts);var o=parslurp2(blob,length,parse_XTI);var oo=[];if(opts.sbcch===1025){for(var i=0;i!=o.length;++i)oo.push(opts.snames[o[i][1]]);return oo}else return o}function parse_ShrFmla(blob,length,opts){var ref=parse_RefU(blob,6);blob.l++;var cUse=blob.read_shift(1);length-=8;return[parse_SharedParsedFormula(blob,length,opts),cUse]}function parse_Array(blob,length,opts){var ref=parse_Ref(blob,6);blob.l+=6;length-=12;return[ref,parse_ArrayParsedFormula(blob,length,opts,ref)]}function parse_MTRSettings(blob,length){var fMTREnabled=blob.read_shift(4)!==0;var fUserSetThreadCount=blob.read_shift(4)!==0;var cUserThreadCount=blob.read_shift(4);return[fMTREnabled,fUserSetThreadCount,cUserThreadCount]}function parse_NoteSh(blob,length,opts){if(opts.biff<8)return;var row=blob.read_shift(2),col=blob.read_shift(2);var flags=blob.read_shift(2),idObj=blob.read_shift(2);var stAuthor=parse_XLUnicodeString2(blob,0,opts);if(opts.biff<8)blob.read_shift(1);return[{r:row,c:col},stAuthor,idObj,flags]}function parse_Note(blob,length,opts){return parse_NoteSh(blob,length,opts)}function parse_MergeCells(blob,length){var merges=[];var cmcs=blob.read_shift(2);while(cmcs--)merges.push(parse_Ref8U(blob,length));return merges}function parse_Obj(blob,length){var cmo=parse_FtCmo(blob,22);var fts=parse_FtArray(blob,length-22,cmo[1]);return{cmo:cmo,ft:fts}}function parse_TxO(blob,length,opts){var s=blob.l;try{blob.l+=4;var ot=(opts.lastobj||{cmo:[0,0]}).cmo[1];var controlInfo;if([0,5,7,11,12,14].indexOf(ot)==-1)blob.l+=6;else controlInfo=parse_ControlInfo(blob,6,opts);var cchText=blob.read_shift(2);var cbRuns=blob.read_shift(2);var ifntEmpty=parse_FontIndex(blob,2);var len=blob.read_shift(2);blob.l+=len;var texts="";for(var i=1;i<blob.lens.length-1;++i){if(blob.l-s!=blob.lens[i])throw"TxO: bad continue record";var hdr=blob[blob.l];var t=parse_XLUnicodeStringNoCch(blob,blob.lens[i+1]-blob.lens[i]-1);texts+=t;if(texts.length>=(hdr?cchText:2*cchText))break}if(texts.length!==cchText&&texts.length!==cchText*2){throw"cchText: "+cchText+" != "+texts.length}blob.l=s+length;return{t:texts}}catch(e){blob.l=s+length;return{t:texts||""}}}var parse_HLink=function(blob,length){var ref=parse_Ref8U(blob,8);blob.l+=16;var hlink=parse_Hyperlink(blob,length-24);return[ref,hlink]};var parse_HLinkTooltip=function(blob,length){var end=blob.l+length;blob.read_shift(2);var ref=parse_Ref8U(blob,8);var wzTooltip=blob.read_shift((length-10)/2,"dbcs-cont");wzTooltip=wzTooltip.replace(chr0,"");return[ref,wzTooltip]};function parse_Country(blob,length){var o=[],d;d=blob.read_shift(2);o[0]=CountryEnum[d]||d;d=blob.read_shift(2);o[1]=CountryEnum[d]||d;return o}function parse_ClrtClient(blob,length){var ccv=blob.read_shift(2);var o=[];while(ccv-->0)o.push(parse_LongRGB(blob,8));return o}function parse_Palette(blob,length){var ccv=blob.read_shift(2);var o=[];while(ccv-->0)o.push(parse_LongRGB(blob,8));return o}function parse_XFCRC(blob,length){blob.l+=2;var o={cxfs:0,crc:0};o.cxfs=blob.read_shift(2);o.crc=blob.read_shift(4);return o}var parse_Style=parsenoop;var parse_StyleExt=parsenoop;var parse_ColInfo=parsenoop;var parse_Window2=parsenoop;var parse_Backup=parsebool;var parse_Blank=parse_XLSCell;var parse_BottomMargin=parse_Xnum;var parse_BuiltInFnGroupCount=parseuint16;var parse_CalcCount=parseuint16;var parse_CalcDelta=parse_Xnum;var parse_CalcIter=parsebool;var parse_CalcMode=parseuint16;var parse_CalcPrecision=parsebool;var parse_CalcRefMode=parsenoop2;var parse_CalcSaveRecalc=parsebool;var parse_CodePage=parseuint16;var parse_Compat12=parsebool;var parse_Date1904=parsebool;var parse_DefColWidth=parseuint16;var parse_DSF=parsenoop2;var parse_EntExU2=parsenoop2;var parse_EOF=parsenoop2;var parse_Excel9File=parsenoop2;var parse_FeatHdr=parsenoop2;var parse_FontX=parseuint16;var parse_Footer=parse_XLHeaderFooter;var parse_GridSet=parseuint16;var parse_HCenter=parsebool;var parse_Header=parse_XLHeaderFooter;var parse_HideObj=parse_HideObjEnum;var parse_InterfaceEnd=parsenoop2;var parse_LeftMargin=parse_Xnum;var parse_Mms=parsenoop2;var parse_ObjProtect=parsebool;var parse_Password=parseuint16;var parse_PrintGrid=parsebool;var parse_PrintRowCol=parsebool;var parse_PrintSize=parseuint16;var parse_Prot4Rev=parsebool;var parse_Prot4RevPass=parseuint16;var parse_Protect=parsebool;var parse_RefreshAll=parsebool;var parse_RightMargin=parse_Xnum;var parse_RRTabId=parseuint16a;var parse_ScenarioProtect=parsebool;var parse_Scl=parseuint16a;var parse_String=parse_XLUnicodeString;var parse_SxBool=parsebool;var parse_TopMargin=parse_Xnum;var parse_UsesELFs=parsebool;var parse_VCenter=parsebool;var parse_WinProtect=parsebool;var parse_WriteProtect=parsenoop;var parse_VerticalPageBreaks=parsenoop;var parse_HorizontalPageBreaks=parsenoop;var parse_Selection=parsenoop;var parse_Continue=parsenoop;var parse_Pane=parsenoop;var parse_Pls=parsenoop;var parse_DCon=parsenoop;var parse_DConRef=parsenoop;var parse_DConName=parsenoop;var parse_XCT=parsenoop;var parse_CRN=parsenoop;var parse_FileSharing=parsenoop;var parse_Uncalced=parsenoop;var parse_Template=parsenoop;var parse_Intl=parsenoop;var parse_WsBool=parsenoop;var parse_Sort=parsenoop;var parse_Sync=parsenoop;var parse_LPr=parsenoop;var parse_DxGCol=parsenoop;var parse_FnGroupName=parsenoop;var parse_FilterMode=parsenoop;var parse_AutoFilterInfo=parsenoop;var parse_AutoFilter=parsenoop;var parse_Setup=parsenoop;var parse_ScenMan=parsenoop;var parse_SCENARIO=parsenoop;var parse_SxView=parsenoop;var parse_Sxvd=parsenoop;var parse_SXVI=parsenoop;var parse_SxIvd=parsenoop;var parse_SXLI=parsenoop;var parse_SXPI=parsenoop;var parse_DocRoute=parsenoop;var parse_RecipName=parsenoop;var parse_MulBlank=parsenoop;var parse_SXDI=parsenoop;var parse_SXDB=parsenoop;var parse_SXFDB=parsenoop;var parse_SXDBB=parsenoop;var parse_SXNum=parsenoop;var parse_SxErr=parsenoop;var parse_SXInt=parsenoop;var parse_SXString=parsenoop;var parse_SXDtr=parsenoop;var parse_SxNil=parsenoop;var parse_SXTbl=parsenoop;var parse_SXTBRGIITM=parsenoop;var parse_SxTbpg=parsenoop;var parse_ObProj=parsenoop;var parse_SXStreamID=parsenoop;var parse_DBCell=parsenoop;var parse_SXRng=parsenoop;var parse_SxIsxoper=parsenoop;var parse_BookBool=parsenoop;var parse_DbOrParamQry=parsenoop;var parse_OleObjectSize=parsenoop;var parse_SXVS=parsenoop;var parse_BkHim=parsenoop;var parse_MsoDrawingGroup=parsenoop;var parse_MsoDrawing=parsenoop;var parse_MsoDrawingSelection=parsenoop;var parse_PhoneticInfo=parsenoop;var parse_SxRule=parsenoop;var parse_SXEx=parsenoop;var parse_SxFilt=parsenoop;var parse_SxDXF=parsenoop;var parse_SxItm=parsenoop;var parse_SxName=parsenoop;var parse_SxSelect=parsenoop;var parse_SXPair=parsenoop;var parse_SxFmla=parsenoop;var parse_SxFormat=parsenoop;var parse_SXVDEx=parsenoop;var parse_SXFormula=parsenoop;var parse_SXDBEx=parsenoop;var parse_RRDInsDel=parsenoop;var parse_RRDHead=parsenoop;var parse_RRDChgCell=parsenoop;var parse_RRDRenSheet=parsenoop;var parse_RRSort=parsenoop;var parse_RRDMove=parsenoop;var parse_RRFormat=parsenoop;var parse_RRAutoFmt=parsenoop;var parse_RRInsertSh=parsenoop;var parse_RRDMoveBegin=parsenoop;var parse_RRDMoveEnd=parsenoop;var parse_RRDInsDelBegin=parsenoop;var parse_RRDInsDelEnd=parsenoop;var parse_RRDConflict=parsenoop;var parse_RRDDefName=parsenoop;var parse_RRDRstEtxp=parsenoop;var parse_LRng=parsenoop;var parse_CUsr=parsenoop;var parse_CbUsr=parsenoop;var parse_UsrInfo=parsenoop;var parse_UsrExcl=parsenoop;var parse_FileLock=parsenoop;var parse_RRDInfo=parsenoop;var parse_BCUsrs=parsenoop;var parse_UsrChk=parsenoop;var parse_UserBView=parsenoop;var parse_UserSViewBegin=parsenoop;var parse_UserSViewEnd=parsenoop;var parse_RRDUserView=parsenoop;var parse_Qsi=parsenoop;var parse_CondFmt=parsenoop;var parse_CF=parsenoop;var parse_DVal=parsenoop;var parse_DConBin=parsenoop;var parse_Lel=parsenoop;var parse_XLSCodeName=parse_XLUnicodeString;var parse_SXFDBType=parsenoop;var parse_ObNoMacros=parsenoop;var parse_Dv=parsenoop;var parse_Index=parsenoop;var parse_Table=parsenoop;var parse_BigName=parsenoop;var parse_ContinueBigName=parsenoop;var parse_WebPub=parsenoop;var parse_QsiSXTag=parsenoop;var parse_DBQueryExt=parsenoop;var parse_ExtString=parsenoop;var parse_TxtQry=parsenoop;var parse_Qsir=parsenoop;var parse_Qsif=parsenoop;var parse_RRDTQSIF=parsenoop;var parse_OleDbConn=parsenoop;var parse_WOpt=parsenoop;var parse_SXViewEx=parsenoop;var parse_SXTH=parsenoop;var parse_SXPIEx=parsenoop;var parse_SXVDTEx=parsenoop;var parse_SXViewEx9=parsenoop;var parse_ContinueFrt=parsenoop;var parse_RealTimeData=parsenoop;var parse_ChartFrtInfo=parsenoop;var parse_FrtWrapper=parsenoop;var parse_StartBlock=parsenoop;var parse_EndBlock=parsenoop;var parse_StartObject=parsenoop;var parse_EndObject=parsenoop;var parse_CatLab=parsenoop;var parse_YMult=parsenoop;var parse_SXViewLink=parsenoop;var parse_PivotChartBits=parsenoop;var parse_FrtFontList=parsenoop;var parse_SheetExt=parsenoop;var parse_BookExt=parsenoop;var parse_SXAddl=parsenoop;var parse_CrErr=parsenoop;var parse_HFPicture=parsenoop;var parse_Feat=parsenoop;var parse_DataLabExt=parsenoop;var parse_DataLabExtContents=parsenoop;var parse_CellWatch=parsenoop;var parse_FeatHdr11=parsenoop;var parse_Feature11=parsenoop;var parse_DropDownObjIds=parsenoop;var parse_ContinueFrt11=parsenoop;var parse_DConn=parsenoop;var parse_List12=parsenoop;var parse_Feature12=parsenoop;var parse_CondFmt12=parsenoop;var parse_CF12=parsenoop;var parse_CFEx=parsenoop;var parse_AutoFilter12=parsenoop;var parse_ContinueFrt12=parsenoop;var parse_MDTInfo=parsenoop;var parse_MDXStr=parsenoop;var parse_MDXTuple=parsenoop;var parse_MDXSet=parsenoop;var parse_MDXProp=parsenoop;var parse_MDXKPI=parsenoop;var parse_MDB=parsenoop;var parse_PLV=parsenoop;var parse_DXF=parsenoop;var parse_TableStyles=parsenoop;var parse_TableStyle=parsenoop;var parse_TableStyleElement=parsenoop;var parse_NamePublish=parsenoop;var parse_NameCmt=parsenoop;var parse_SortData=parsenoop;var parse_GUIDTypeLib=parsenoop;var parse_FnGrp12=parsenoop;var parse_NameFnGrp12=parsenoop;var parse_HeaderFooter=parsenoop;var parse_CrtLayout12=parsenoop;var parse_CrtMlFrt=parsenoop;var parse_CrtMlFrtContinue=parsenoop;var parse_ShapePropsStream=parsenoop;var parse_TextPropsStream=parsenoop;var parse_RichTextStream=parsenoop;var parse_CrtLayout12A=parsenoop;var parse_Units=parsenoop;var parse_Chart=parsenoop;var parse_Series=parsenoop;var parse_DataFormat=parsenoop;var parse_LineFormat=parsenoop;var parse_MarkerFormat=parsenoop;var parse_AreaFormat=parsenoop;var parse_PieFormat=parsenoop;var parse_AttachedLabel=parsenoop;var parse_SeriesText=parsenoop;var parse_ChartFormat=parsenoop;var parse_Legend=parsenoop;var parse_SeriesList=parsenoop;var parse_Bar=parsenoop;var parse_Line=parsenoop;var parse_Pie=parsenoop;var parse_Area=parsenoop;var parse_Scatter=parsenoop;var parse_CrtLine=parsenoop;var parse_Axis=parsenoop;var parse_Tick=parsenoop;var parse_ValueRange=parsenoop;var parse_CatSerRange=parsenoop;var parse_AxisLine=parsenoop;var parse_CrtLink=parsenoop;var parse_DefaultText=parsenoop;var parse_Text=parsenoop;var parse_ObjectLink=parsenoop;var parse_Frame=parsenoop;var parse_Begin=parsenoop;var parse_End=parsenoop;var parse_PlotArea=parsenoop;var parse_Chart3d=parsenoop;var parse_PicF=parsenoop;var parse_DropBar=parsenoop;var parse_Radar=parsenoop;var parse_Surf=parsenoop;var parse_RadarArea=parsenoop;var parse_AxisParent=parsenoop;var parse_LegendException=parsenoop;var parse_ShtProps=parsenoop;var parse_SerToCrt=parsenoop;var parse_AxesUsed=parsenoop;var parse_SBaseRef=parsenoop;var parse_SerParent=parsenoop;var parse_SerAuxTrend=parsenoop;var parse_IFmtRecord=parsenoop;var parse_Pos=parsenoop;var parse_AlRuns=parsenoop;var parse_BRAI=parsenoop;var parse_SerAuxErrBar=parsenoop;var parse_SerFmt=parsenoop;var parse_Chart3DBarShape=parsenoop;var parse_Fbi=parsenoop;var parse_BopPop=parsenoop;var parse_AxcExt=parsenoop;var parse_Dat=parsenoop;var parse_PlotGrowth=parsenoop;var parse_SIIndex=parsenoop;var parse_GelFrame=parsenoop;var parse_BopPopCustom=parsenoop;var parse_Fbi2=parsenoop;function parse_BIFF5String(blob){var len=blob.read_shift(1);return blob.read_shift(len,"sbcs-cont")}function parse_BIFF2STR(blob,length,opts){var cell=parse_XLSCell(blob,6);++blob.l;var str=parse_XLUnicodeString2(blob,length-7,opts);cell.val=str;return cell}function parse_BIFF2NUM(blob,length,opts){var cell=parse_XLSCell(blob,6);++blob.l;var num=parse_Xnum(blob,8);cell.val=num;return cell}var CS2CP={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969};var parse_rs=function parse_rs_factory(){var tregex=matchtag("t"),rpregex=matchtag("rPr"),rregex=/<r>/g,rend=/<\/r>/,nlregex=/\r\n/g;var parse_rpr=function parse_rpr(rpr,intro,outro){var font={},cp=65001;var m=rpr.match(tagregex),i=0;if(m)for(;i!=m.length;++i){var y=parsexmltag(m[i]);switch(y[0]){case"<condense":break;case"<extend":break;case"<shadow":case"<shadow/>":break;case"<charset":if(y.val=="1")break;cp=CS2CP[parseInt(y.val,10)];break;case"<outline":case"<outline/>":break;case"<rFont":font.name=y.val;break;case"<sz":font.sz=y.val;break;case"<strike":if(!y.val)break;case"<strike/>":font.strike=1;break;case"</strike>":break;case"<u":if(!y.val)break;case"<u/>":font.u=1;break;case"</u>":break;case"<b":if(!y.val)break;case"<b/>":font.b=1;break;case"</b>":break;case"<i":if(!y.val)break;case"<i/>":font.i=1;break;case"</i>":break;case"<color":if(y.rgb)font.color=y.rgb.substr(2,6);break;case"<family":font.family=y.val;break;case"<vertAlign":break;case"<scheme":break;default:if(y[0].charCodeAt(1)!==47)throw"Unrecognized rich format "+y[0]}}var style=[];if(font.b)style.push("font-weight: bold;");if(font.i)style.push("font-style: italic;");intro.push('<span style="'+style.join("")+'">');outro.push("</span>");return cp};function parse_r(r){var terms=[[],"",[]];var t=r.match(tregex),cp=65001;if(!isval(t))return"";terms[1]=t[1];var rpr=r.match(rpregex);if(isval(rpr))cp=parse_rpr(rpr[1],terms[0],terms[2]);return terms[0].join("")+terms[1].replace(nlregex,"<br/>")+terms[2].join("")}return function parse_rs(rs){return rs.replace(rregex,"").split(rend).map(parse_r).join("")}}();var sitregex=/<t[^>]*>([^<]*)<\/t>/g,sirregex=/<r>/;function parse_si(x,opts){var html=opts?opts.cellHTML:true;var z={};if(!x)return null;var y;if(x.charCodeAt(1)===116){z.t=utf8read(unescapexml(x.substr(x.indexOf(">")+1).split(/<\/t>/)[0]));z.r=x;if(html)z.h=z.t}else if(y=x.match(sirregex)){z.r=x;z.t=utf8read(unescapexml(x.match(sitregex).join("").replace(tagregex,"")));if(html)z.h=parse_rs(x)}return z}var sstr0=/<sst([^>]*)>([\s\S]*)<\/sst>/;var sstr1=/<(?:si|sstItem)>/g;var sstr2=/<\/(?:si|sstItem)>/;function parse_sst_xml(data,opts){var s=[],ss;var sst=data.match(sstr0);if(isval(sst)){ss=sst[2].replace(sstr1,"").split(sstr2);for(var i=0;i!=ss.length;++i){var o=parse_si(ss[i],opts);if(o!=null)s[s.length]=o}sst=parsexmltag(sst[1]);s.Count=sst.count;s.Unique=sst.uniqueCount}return s}RELS.SST="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";var straywsregex=/^\s|\s$|[\t\n\r]/;function write_sst_xml(sst,opts){if(!opts.bookSST)return"";var o=[XML_HEADER];o[o.length]=writextag("sst",null,{xmlns:XMLNS.main[0],count:sst.Count,uniqueCount:sst.Unique});for(var i=0;i!=sst.length;++i){if(sst[i]==null)continue;var s=sst[i];var sitag="<si>";if(s.r)sitag+=s.r;else{sitag+="<t";if(s.t.match(straywsregex))sitag+=' xml:space="preserve"';sitag+=">"+escapexml(s.t)+"</t>"}sitag+="</si>";o[o.length]=sitag}if(o.length>2){o[o.length]="</sst>";o[1]=o[1].replace("/>",">")}return o.join("")}function parse_BrtBeginSst(data,length){return[data.read_shift(4),data.read_shift(4)]}function parse_sst_bin(data,opts){var s=[];var pass=false;recordhopper(data,function hopper_sst(val,R,RT){switch(R.n){case"BrtBeginSst":s.Count=val[0];s.Unique=val[1];break;case"BrtSSTItem":s.push(val);break;case"BrtEndSst":return true;case"BrtFRTBegin":pass=true;break;case"BrtFRTEnd":pass=false;break;default:if(!pass||opts.WTF)throw new Error("Unexpected record "+RT+" "+R.n)}});return s}function write_BrtBeginSst(sst,o){if(!o)o=new_buf(8);o.write_shift(4,sst.Count);o.write_shift(4,sst.Unique);return o}var write_BrtSSTItem=write_RichStr;function write_sst_bin(sst,opts){var ba=buf_array();write_record(ba,"BrtBeginSst",write_BrtBeginSst(sst));for(var i=0;i<sst.length;++i)write_record(ba,"BrtSSTItem",write_BrtSSTItem(sst[i]));write_record(ba,"BrtEndSst");return ba.end()}function _JS2ANSI(str){if(typeof cptable!=="undefined")return cptable.utils.encode(1252,str);return str.split("").map(function(x){return x.charCodeAt(0)})}function parse_Version(blob,length){var o={};o.Major=blob.read_shift(2);o.Minor=blob.read_shift(2);return o}function parse_EncryptionHeader(blob,length){var o={};o.Flags=blob.read_shift(4);var tmp=blob.read_shift(4);if(tmp!==0)throw"Unrecognized SizeExtra: "+tmp;o.AlgID=blob.read_shift(4);switch(o.AlgID){case 0:case 26625:case 26126:case 26127:case 26128:break;default:throw"Unrecognized encryption algorithm: "+o.AlgID}parsenoop(blob,length-12);return o}function parse_EncryptionVerifier(blob,length){return parsenoop(blob,length)}function parse_RC4CryptoHeader(blob,length){var o={};var vers=o.EncryptionVersionInfo=parse_Version(blob,4);length-=4;if(vers.Minor!=2)throw"unrecognized minor version code: "+vers.Minor;if(vers.Major>4||vers.Major<2)throw"unrecognized major version code: "+vers.Major;o.Flags=blob.read_shift(4);length-=4;var sz=blob.read_shift(4);length-=4;o.EncryptionHeader=parse_EncryptionHeader(blob,sz);length-=sz;o.EncryptionVerifier=parse_EncryptionVerifier(blob,length);return o}function parse_RC4Header(blob,length){var o={};var vers=o.EncryptionVersionInfo=parse_Version(blob,4);length-=4;if(vers.Major!=1||vers.Minor!=1)throw"unrecognized version code "+vers.Major+" : "+vers.Minor;o.Salt=blob.read_shift(16);o.EncryptedVerifier=blob.read_shift(16);o.EncryptedVerifierHash=blob.read_shift(16);return o}function crypto_CreatePasswordVerifier_Method1(Password){var Verifier=0,PasswordArray;var PasswordDecoded=_JS2ANSI(Password);var len=PasswordDecoded.length+1,i,PasswordByte;var Intermediate1,Intermediate2,Intermediate3;PasswordArray=new_raw_buf(len);PasswordArray[0]=PasswordDecoded.length;for(i=1;i!=len;++i)PasswordArray[i]=PasswordDecoded[i-1];for(i=len-1;i>=0;--i){PasswordByte=PasswordArray[i];Intermediate1=(Verifier&16384)===0?0:1;Intermediate2=Verifier<<1&32767;Intermediate3=Intermediate1|Intermediate2;Verifier=Intermediate3^PasswordByte}return Verifier^52811}var crypto_CreateXorArray_Method1=function(){var PadArray=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0];var InitialCode=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163];var XorMatrix=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628];var Ror=function(Byte){return(Byte/2|Byte*128)&255};var XorRor=function(byte1,byte2){return Ror(byte1^byte2)};var CreateXorKey_Method1=function(Password){var XorKey=InitialCode[Password.length-1];var CurrentElement=104;for(var i=Password.length-1;i>=0;--i){var Char=Password[i];for(var j=0;j!=7;++j){if(Char&64)XorKey^=XorMatrix[CurrentElement];Char*=2;
--CurrentElement}}return XorKey};return function(password){var Password=_JS2ANSI(password);var XorKey=CreateXorKey_Method1(Password);var Index=Password.length;var ObfuscationArray=new_raw_buf(16);for(var i=0;i!=16;++i)ObfuscationArray[i]=0;var Temp,PasswordLastChar,PadIndex;if((Index&1)===1){Temp=XorKey>>8;ObfuscationArray[Index]=XorRor(PadArray[0],Temp);--Index;Temp=XorKey&255;PasswordLastChar=Password[Password.length-1];ObfuscationArray[Index]=XorRor(PasswordLastChar,Temp)}while(Index>0){--Index;Temp=XorKey>>8;ObfuscationArray[Index]=XorRor(Password[Index],Temp);--Index;Temp=XorKey&255;ObfuscationArray[Index]=XorRor(Password[Index],Temp)}Index=15;PadIndex=15-Password.length;while(PadIndex>0){Temp=XorKey>>8;ObfuscationArray[Index]=XorRor(PadArray[PadIndex],Temp);--Index;--PadIndex;Temp=XorKey&255;ObfuscationArray[Index]=XorRor(Password[Index],Temp);--Index;--PadIndex}return ObfuscationArray}}();var crypto_DecryptData_Method1=function(password,Data,XorArrayIndex,XorArray,O){if(!O)O=Data;if(!XorArray)XorArray=crypto_CreateXorArray_Method1(password);var Index,Value;for(Index=0;Index!=Data.length;++Index){Value=Data[Index];Value^=XorArray[XorArrayIndex];Value=(Value>>5|Value<<3)&255;O[Index]=Value;++XorArrayIndex}return[O,XorArrayIndex,XorArray]};var crypto_MakeXorDecryptor=function(password){var XorArrayIndex=0,XorArray=crypto_CreateXorArray_Method1(password);return function(Data){var O=crypto_DecryptData_Method1(null,Data,XorArrayIndex,XorArray);XorArrayIndex=O[1];return O[0]}};function parse_XORObfuscation(blob,length,opts,out){var o={key:parseuint16(blob),verificationBytes:parseuint16(blob)};if(opts.password)o.verifier=crypto_CreatePasswordVerifier_Method1(opts.password);out.valid=o.verificationBytes===o.verifier;if(out.valid)out.insitu_decrypt=crypto_MakeXorDecryptor(opts.password);return o}function parse_FilePassHeader(blob,length,oo){var o=oo||{};o.Info=blob.read_shift(2);blob.l-=2;if(o.Info===1)o.Data=parse_RC4Header(blob,length);else o.Data=parse_RC4CryptoHeader(blob,length);return o}function parse_FilePass(blob,length,opts){var o={Type:blob.read_shift(2)};if(o.Type)parse_FilePassHeader(blob,length-2,o);else parse_XORObfuscation(blob,length-2,opts,o);return o}function hex2RGB(h){var o=h.substr(h[0]==="#"?1:0,6);return[parseInt(o.substr(0,2),16),parseInt(o.substr(0,2),16),parseInt(o.substr(0,2),16)]}function rgb2Hex(rgb){for(var i=0,o=1;i!=3;++i)o=o*256+(rgb[i]>255?255:rgb[i]<0?0:rgb[i]);return o.toString(16).toUpperCase().substr(1)}function rgb2HSL(rgb){var R=rgb[0]/255,G=rgb[1]/255,B=rgb[2]/255;var M=Math.max(R,G,B),m=Math.min(R,G,B),C=M-m;if(C===0)return[0,0,R];var H6=0,S=0,L2=M+m;S=C/(L2>1?2-L2:L2);switch(M){case R:H6=((G-B)/C+6)%6;break;case G:H6=(B-R)/C+2;break;case B:H6=(R-G)/C+4;break}return[H6/6,S,L2/2]}function hsl2RGB(hsl){var H=hsl[0],S=hsl[1],L=hsl[2];var C=S*2*(L<.5?L:1-L),m=L-C/2;var rgb=[m,m,m],h6=6*H;var X;if(S!==0)switch(h6|0){case 0:case 6:X=C*h6;rgb[0]+=C;rgb[1]+=X;break;case 1:X=C*(2-h6);rgb[0]+=X;rgb[1]+=C;break;case 2:X=C*(h6-2);rgb[1]+=C;rgb[2]+=X;break;case 3:X=C*(4-h6);rgb[1]+=X;rgb[2]+=C;break;case 4:X=C*(h6-4);rgb[2]+=C;rgb[0]+=X;break;case 5:X=C*(6-h6);rgb[2]+=X;rgb[0]+=C;break}for(var i=0;i!=3;++i)rgb[i]=Math.round(rgb[i]*255);return rgb}function rgb_tint(hex,tint){if(tint===0)return hex;var hsl=rgb2HSL(hex2RGB(hex));if(tint<0)hsl[2]=hsl[2]*(1+tint);else hsl[2]=1-(1-hsl[2])*(1-tint);return rgb2Hex(hsl2RGB(hsl))}var DEF_MDW=7,MAX_MDW=15,MIN_MDW=1,MDW=DEF_MDW;function width2px(width){return(width+(128/MDW|0)/256)*MDW|0}function px2char(px){return((px-5)/MDW*100+.5|0)/100}function char2width(chr){return((chr*MDW+5)/MDW*256|0)/256}function cycle_width(collw){return char2width(px2char(width2px(collw)))}function find_mdw(collw,coll){if(cycle_width(collw)!=collw){for(MDW=DEF_MDW;MDW>MIN_MDW;--MDW)if(cycle_width(collw)===collw)break;if(MDW===MIN_MDW)for(MDW=DEF_MDW+1;MDW<MAX_MDW;++MDW)if(cycle_width(collw)===collw)break;if(MDW===MAX_MDW)MDW=DEF_MDW}}var XLMLPatternTypeMap={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"};var styles={};var themes={};function parse_fills(t,opts){styles.Fills=[];var fill={};t[0].match(tagregex).forEach(function(x){var y=parsexmltag(x);switch(y[0]){case"<fills":case"<fills>":case"</fills>":break;case"<fill>":break;case"</fill>":styles.Fills.push(fill);fill={};break;case"<patternFill":if(y.patternType)fill.patternType=y.patternType;break;case"<patternFill/>":case"</patternFill>":break;case"<bgColor":if(!fill.bgColor)fill.bgColor={};if(y.indexed)fill.bgColor.indexed=parseInt(y.indexed,10);if(y.theme)fill.bgColor.theme=parseInt(y.theme,10);if(y.tint)fill.bgColor.tint=parseFloat(y.tint);if(y.rgb)fill.bgColor.rgb=y.rgb.substring(y.rgb.length-6);break;case"<bgColor/>":case"</bgColor>":break;case"<fgColor":if(!fill.fgColor)fill.fgColor={};if(y.theme)fill.fgColor.theme=parseInt(y.theme,10);if(y.tint)fill.fgColor.tint=parseFloat(y.tint);if(y.rgb)fill.fgColor.rgb=y.rgb.substring(y.rgb.length-6);break;case"<fgColor/>":case"</fgColor>":break;default:if(opts.WTF)throw"unrecognized "+y[0]+" in fills"}})}function parse_numFmts(t,opts){styles.NumberFmt=[];var k=keys(SSF._table);for(var i=0;i<k.length;++i)styles.NumberFmt[k[i]]=SSF._table[k[i]];var m=t[0].match(tagregex);for(i=0;i<m.length;++i){var y=parsexmltag(m[i]);switch(y[0]){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break;case"<numFmt":{var f=unescapexml(utf8read(y.formatCode)),j=parseInt(y.numFmtId,10);styles.NumberFmt[j]=f;if(j>0)SSF.load(f,j)}break;default:if(opts.WTF)throw"unrecognized "+y[0]+" in numFmts"}}}function write_numFmts(NF,opts){var o=["<numFmts>"];[[5,8],[23,26],[41,44],[63,66],[164,392]].forEach(function(r){for(var i=r[0];i<=r[1];++i)if(NF[i]!==undefined)o[o.length]=writextag("numFmt",null,{numFmtId:i,formatCode:escapexml(NF[i])})});if(o.length===1)return"";o[o.length]="</numFmts>";o[0]=writextag("numFmts",null,{count:o.length-2}).replace("/>",">");return o.join("")}function parse_cellXfs(t,opts){styles.CellXf=[];t[0].match(tagregex).forEach(function(x){var y=parsexmltag(x);switch(y[0]){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break;case"<xf":delete y[0];if(y.numFmtId)y.numFmtId=parseInt(y.numFmtId,10);if(y.fillId)y.fillId=parseInt(y.fillId,10);styles.CellXf.push(y);break;case"</xf>":break;case"<alignment":case"<alignment/>":break;case"<protection":case"</protection>":case"<protection/>":break;case"<extLst":case"</extLst>":break;case"<ext":break;default:if(opts.WTF)throw"unrecognized "+y[0]+" in cellXfs"}})}function write_cellXfs(cellXfs){var o=[];o[o.length]=writextag("cellXfs",null);cellXfs.forEach(function(c){o[o.length]=writextag("xf",null,c)});o[o.length]="</cellXfs>";if(o.length===2)return"";o[0]=writextag("cellXfs",null,{count:o.length-2}).replace("/>",">");return o.join("")}var parse_sty_xml=function make_pstyx(){var numFmtRegex=/<numFmts([^>]*)>.*<\/numFmts>/;var cellXfRegex=/<cellXfs([^>]*)>.*<\/cellXfs>/;var fillsRegex=/<fills([^>]*)>.*<\/fills>/;return function parse_sty_xml(data,opts){var t;if(t=data.match(numFmtRegex))parse_numFmts(t,opts);if(t=data.match(fillsRegex))parse_fills(t,opts);if(t=data.match(cellXfRegex))parse_cellXfs(t,opts);return styles}}();var STYLES_XML_ROOT=writextag("styleSheet",null,{xmlns:XMLNS.main[0],"xmlns:vt":XMLNS.vt});RELS.STY="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";function write_sty_xml(wb,opts){var o=[XML_HEADER,STYLES_XML_ROOT],w;if((w=write_numFmts(wb.SSF))!=null)o[o.length]=w;o[o.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';o[o.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';o[o.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';o[o.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';if(w=write_cellXfs(opts.cellXfs))o[o.length]=w;o[o.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';o[o.length]='<dxfs count="0"/>';o[o.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';if(o.length>2){o[o.length]="</styleSheet>";o[1]=o[1].replace("/>",">")}return o.join("")}function parse_BrtFmt(data,length){var ifmt=data.read_shift(2);var stFmtCode=parse_XLWideString(data,length-2);return[ifmt,stFmtCode]}function parse_BrtFont(data,length){var out={flags:{}};out.dyHeight=data.read_shift(2);out.grbit=parse_FontFlags(data,2);out.bls=data.read_shift(2);out.sss=data.read_shift(2);out.uls=data.read_shift(1);out.bFamily=data.read_shift(1);out.bCharSet=data.read_shift(1);data.l++;out.brtColor=parse_BrtColor(data,8);out.bFontScheme=data.read_shift(1);out.name=parse_XLWideString(data,length-21);out.flags.Bold=out.bls===700;out.flags.Italic=out.grbit.fItalic;out.flags.Strikeout=out.grbit.fStrikeout;out.flags.Outline=out.grbit.fOutline;out.flags.Shadow=out.grbit.fShadow;out.flags.Condense=out.grbit.fCondense;out.flags.Extend=out.grbit.fExtend;out.flags.Sub=out.sss&2;out.flags.Sup=out.sss&1;return out}function parse_BrtXF(data,length){var ixfeParent=data.read_shift(2);var ifmt=data.read_shift(2);parsenoop(data,length-4);return{ixfe:ixfeParent,ifmt:ifmt}}function parse_sty_bin(data,opts){styles.NumberFmt=[];for(var y in SSF._table)styles.NumberFmt[y]=SSF._table[y];styles.CellXf=[];var state="";var pass=false;recordhopper(data,function hopper_sty(val,R,RT){switch(R.n){case"BrtFmt":styles.NumberFmt[val[0]]=val[1];SSF.load(val[1],val[0]);break;case"BrtFont":break;case"BrtKnownFonts":break;case"BrtFill":break;case"BrtBorder":break;case"BrtXF":if(state==="CELLXFS"){styles.CellXf.push(val)}break;case"BrtStyle":break;case"BrtDXF":break;case"BrtMRUColor":break;case"BrtIndexedColor":break;case"BrtBeginStyleSheet":break;case"BrtEndStyleSheet":break;case"BrtBeginTableStyle":break;case"BrtTableStyleElement":break;case"BrtEndTableStyle":break;case"BrtBeginFmts":state="FMTS";break;case"BrtEndFmts":state="";break;case"BrtBeginFonts":state="FONTS";break;case"BrtEndFonts":state="";break;case"BrtACBegin":state="ACFONTS";break;case"BrtACEnd":state="";break;case"BrtBeginFills":state="FILLS";break;case"BrtEndFills":state="";break;case"BrtBeginBorders":state="BORDERS";break;case"BrtEndBorders":state="";break;case"BrtBeginCellStyleXFs":state="CELLSTYLEXFS";break;case"BrtEndCellStyleXFs":state="";break;case"BrtBeginCellXFs":state="CELLXFS";break;case"BrtEndCellXFs":state="";break;case"BrtBeginStyles":state="STYLES";break;case"BrtEndStyles":state="";break;case"BrtBeginDXFs":state="DXFS";break;case"BrtEndDXFs":state="";break;case"BrtBeginTableStyles":state="TABLESTYLES";break;case"BrtEndTableStyles":state="";break;case"BrtBeginColorPalette":state="COLORPALETTE";break;case"BrtEndColorPalette":state="";break;case"BrtBeginIndexedColors":state="INDEXEDCOLORS";break;case"BrtEndIndexedColors":state="";break;case"BrtBeginMRUColors":state="MRUCOLORS";break;case"BrtEndMRUColors":state="";break;case"BrtFRTBegin":pass=true;break;case"BrtFRTEnd":pass=false;break;case"BrtBeginStyleSheetExt14":break;case"BrtBeginSlicerStyles":break;case"BrtEndSlicerStyles":break;case"BrtBeginTimelineStylesheetExt15":break;case"BrtEndTimelineStylesheetExt15":break;case"BrtBeginTimelineStyles":break;case"BrtEndTimelineStyles":break;case"BrtEndStyleSheetExt14":break;default:if(!pass||opts.WTF)throw new Error("Unexpected record "+RT+" "+R.n)}});return styles}function write_sty_bin(data,opts){var ba=buf_array();write_record(ba,"BrtBeginStyleSheet");write_record(ba,"BrtEndStyleSheet");return ba.end()}RELS.THEME="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";function parse_clrScheme(t,opts){themes.themeElements.clrScheme=[];var color={};t[0].match(tagregex).forEach(function(x){var y=parsexmltag(x);switch(y[0]){case"<a:clrScheme":case"</a:clrScheme>":break;case"<a:srgbClr":color.rgb=y.val;break;case"<a:sysClr":color.rgb=y.lastClr;break;case"<a:dk1>":case"</a:dk1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt1>":case"</a:lt1>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":if(y[0][1]==="/"){themes.themeElements.clrScheme.push(color);color={}}else{color.name=y[0].substring(3,y[0].length-1)}break;default:if(opts.WTF)throw"unrecognized "+y[0]+" in clrScheme"}})}function parse_fontScheme(t,opts){}function parse_fmtScheme(t,opts){}var clrsregex=/<a:clrScheme([^>]*)>[^\u2603]*<\/a:clrScheme>/;var fntsregex=/<a:fontScheme([^>]*)>[^\u2603]*<\/a:fontScheme>/;var fmtsregex=/<a:fmtScheme([^>]*)>[^\u2603]*<\/a:fmtScheme>/;function parse_themeElements(data,opts){themes.themeElements={};var t;[["clrScheme",clrsregex,parse_clrScheme],["fontScheme",fntsregex,parse_fontScheme],["fmtScheme",fmtsregex,parse_fmtScheme]].forEach(function(m){if(!(t=data.match(m[1])))throw m[0]+" not found in themeElements";m[2](t,opts)})}var themeltregex=/<a:themeElements([^>]*)>[^\u2603]*<\/a:themeElements>/;function parse_theme_xml(data,opts){if(!data||data.length===0)return themes;var t;if(!(t=data.match(themeltregex)))throw"themeElements not found in theme";parse_themeElements(t[0],opts);return themes}function write_theme(){return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="1F497D"/></a:dk2><a:lt2><a:srgbClr val="EEECE1"/></a:lt2><a:accent1><a:srgbClr val="4F81BD"/></a:accent1><a:accent2><a:srgbClr val="C0504D"/></a:accent2><a:accent3><a:srgbClr val="9BBB59"/></a:accent3><a:accent4><a:srgbClr val="8064A2"/></a:accent4><a:accent5><a:srgbClr val="4BACC6"/></a:accent5><a:accent6><a:srgbClr val="F79646"/></a:accent6><a:hlink><a:srgbClr val="0000FF"/></a:hlink><a:folHlink><a:srgbClr val="800080"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Cambria"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="宋体"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="宋体"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000" scaled="1"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst><a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d><a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults><a:spDef><a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style></a:spDef><a:lnDef><a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style></a:lnDef></a:objectDefaults><a:extraClrSchemeLst/></a:theme>'}function parse_Theme(blob,length){var dwThemeVersion=blob.read_shift(4);if(dwThemeVersion===124226)return;blob.l+=length-4}function parse_ColorTheme(blob,length){return blob.read_shift(4)}function parse_FullColorExt(blob,length){var o={};o.xclrType=blob.read_shift(2);o.nTintShade=blob.read_shift(2);switch(o.xclrType){case 0:blob.l+=4;break;case 1:o.xclrValue=parse_IcvXF(blob,4);break;case 2:o.xclrValue=parse_LongRGBA(blob,4);break;case 3:o.xclrValue=parse_ColorTheme(blob,4);break;case 4:blob.l+=4;break}blob.l+=8;return o}function parse_IcvXF(blob,length){return parsenoop(blob,length)}function parse_XFExtGradient(blob,length){return parsenoop(blob,length)}function parse_ExtProp(blob,length){var extType=blob.read_shift(2);var cb=blob.read_shift(2);var o=[extType];switch(extType){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:o[1]=parse_FullColorExt(blob,cb);break;case 6:o[1]=parse_XFExtGradient(blob,cb);break;case 14:case 15:o[1]=blob.read_shift(cb===5?1:2);break;default:throw new Error("Unrecognized ExtProp type: "+extType+" "+cb)}return o}function parse_XFExt(blob,length){var end=blob.l+length;blob.l+=2;var ixfe=blob.read_shift(2);blob.l+=2;var cexts=blob.read_shift(2);var ext=[];while(cexts-->0)ext.push(parse_ExtProp(blob,end-blob.l));return{ixfe:ixfe,ext:ext}}function update_xfext(xf,xfext){xfext.forEach(function(xfe){switch(xfe[0]){case 4:break;case 5:break;case 7:case 8:case 9:case 10:break;case 13:break;case 14:break;default:throw"bafuq"+xfe[0].toString(16)}})}function parse_cc_xml(data,opts){var d=[];var l=0,i=1;(data.match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);switch(y[0]){case"<?xml":break;case"<calcChain":case"<calcChain>":case"</calcChain>":break;case"<c":delete y[0];if(y.i)i=y.i;else y.i=i;d.push(y);break}});return d}function write_cc_xml(data,opts){}function parse_BrtCalcChainItem$(data,length){var out={};out.i=data.read_shift(4);var cell={};cell.r=data.read_shift(4);cell.c=data.read_shift(4);out.r=encode_cell(cell);var flags=data.read_shift(1);if(flags&2)out.l="1";if(flags&8)out.a="1";return out}function parse_cc_bin(data,opts){var out=[];var pass=false;recordhopper(data,function hopper_cc(val,R,RT){switch(R.n){case"BrtCalcChainItem$":out.push(val);break;case"BrtBeginCalcChain$":break;case"BrtEndCalcChain$":break;default:if(!pass||opts.WTF)throw new Error("Unexpected record "+RT+" "+R.n)}});return out}function write_cc_bin(data,opts){}function parse_comments(zip,dirComments,sheets,sheetRels,opts){for(var i=0;i!=dirComments.length;++i){var canonicalpath=dirComments[i];var comments=parse_cmnt(getzipdata(zip,canonicalpath.replace(/^\//,""),true),canonicalpath,opts);if(!comments||!comments.length)continue;var sheetNames=keys(sheets);for(var j=0;j!=sheetNames.length;++j){var sheetName=sheetNames[j];var rels=sheetRels[sheetName];if(rels){var rel=rels[canonicalpath];if(rel)insertCommentsIntoSheet(sheetName,sheets[sheetName],comments)}}}}function insertCommentsIntoSheet(sheetName,sheet,comments){comments.forEach(function(comment){var cell=sheet[comment.ref];if(!cell){cell={};sheet[comment.ref]=cell;var range=safe_decode_range(sheet["!ref"]||"BDWGO1000001:A1");var thisCell=decode_cell(comment.ref);if(range.s.r>thisCell.r)range.s.r=thisCell.r;if(range.e.r<thisCell.r)range.e.r=thisCell.r;if(range.s.c>thisCell.c)range.s.c=thisCell.c;if(range.e.c<thisCell.c)range.e.c=thisCell.c;var encoded=encode_range(range);if(encoded!==sheet["!ref"])sheet["!ref"]=encoded}if(!cell.c)cell.c=[];var o={a:comment.author,t:comment.t,r:comment.r};if(comment.h)o.h=comment.h;cell.c.push(o)})}function parse_comments_xml(data,opts){if(data.match(/<(?:\w+:)?comments *\/>/))return[];var authors=[];var commentList=[];data.match(/<(?:\w+:)?authors>([^\u2603]*)<\/(?:\w+:)?authors>/)[1].split(/<\/\w*:?author>/).forEach(function(x){if(x===""||x.trim()==="")return;authors.push(x.match(/<(?:\w+:)?author[^>]*>(.*)/)[1])});(data.match(/<(?:\w+:)?commentList>([^\u2603]*)<\/(?:\w+:)?commentList>/)||["",""])[1].split(/<\/\w*:?comment>/).forEach(function(x,index){if(x===""||x.trim()==="")return;var y=parsexmltag(x.match(/<(?:\w+:)?comment[^>]*>/)[0]);var comment={author:y.authorId&&authors[y.authorId]?authors[y.authorId]:undefined,ref:y.ref,guid:y.guid};var cell=decode_cell(y.ref);if(opts.sheetRows&&opts.sheetRows<=cell.r)return;var textMatch=x.match(/<text>([^\u2603]*)<\/text>/);if(!textMatch||!textMatch[1])return;var rt=parse_si(textMatch[1]);comment.r=rt.r;comment.t=rt.t;if(opts.cellHTML)comment.h=rt.h;commentList.push(comment)});return commentList}function write_comments_xml(data,opts){}function parse_BrtBeginComment(data,length){var out={};out.iauthor=data.read_shift(4);var rfx=parse_UncheckedRfX(data,16);out.rfx=rfx.s;out.ref=encode_cell(rfx.s);data.l+=16;return out}var parse_BrtCommentAuthor=parse_XLWideString;var parse_BrtCommentText=parse_RichStr;function parse_comments_bin(data,opts){var out=[];var authors=[];var c={};var pass=false;recordhopper(data,function hopper_cmnt(val,R,RT){switch(R.n){case"BrtCommentAuthor":authors.push(val);break;case"BrtBeginComment":c=val;break;case"BrtCommentText":c.t=val.t;c.h=val.h;c.r=val.r;break;case"BrtEndComment":c.author=authors[c.iauthor];delete c.iauthor;if(opts.sheetRows&&opts.sheetRows<=c.rfx.r)break;delete c.rfx;out.push(c);break;case"BrtBeginComments":break;case"BrtEndComments":break;case"BrtBeginCommentAuthors":break;case"BrtEndCommentAuthors":break;case"BrtBeginCommentList":break;case"BrtEndCommentList":break;default:if(!pass||opts.WTF)throw new Error("Unexpected record "+RT+" "+R.n)}});return out}function write_comments_bin(data,opts){}var rc_to_a1=function(){var rcregex=/(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g;var rcbase;function rcfunc($$,$1,$2,$3,$4,$5){var R=$3.length>0?parseInt($3,10)|0:0,C=$5.length>0?parseInt($5,10)|0:0;if(C<0&&$4.length===0)C=0;if($4.length>0)C+=rcbase.c;if($2.length>0)R+=rcbase.r;return $1+encode_col(C)+encode_row(R)}return function rc_to_a1(fstr,base){rcbase=base;return fstr.replace(rcregex,rcfunc)}}();function parseread(l){return function(blob,length){blob.l+=l;return}}function parseread1(blob,length){blob.l+=1;return}function parse_ColRelU(blob,length){var c=blob.read_shift(2);return[c&16383,c>>14&1,c>>15&1]}function parse_RgceArea(blob,length){var r=blob.read_shift(2),R=blob.read_shift(2);var c=parse_ColRelU(blob,2);var C=parse_ColRelU(blob,2);return{s:{r:r,c:c[0],cRel:c[1],rRel:c[2]},e:{r:R,c:C[0],cRel:C[1],rRel:C[2]}}}function parse_RgceAreaRel(blob,length){var r=blob.read_shift(2),R=blob.read_shift(2);var c=parse_ColRelU(blob,2);var C=parse_ColRelU(blob,2);return{s:{r:r,c:c[0],cRel:c[1],rRel:c[2]},e:{r:R,c:C[0],cRel:C[1],rRel:C[2]}}}function parse_RgceLoc(blob,length){var r=blob.read_shift(2);var c=parse_ColRelU(blob,2);return{r:r,c:c[0],cRel:c[1],rRel:c[2]}}function parse_RgceLocRel(blob,length){var r=blob.read_shift(2);var cl=blob.read_shift(2);var cRel=(cl&32768)>>15,rRel=(cl&16384)>>14;cl&=16383;if(cRel!==0)while(cl>=256)cl-=256;return{r:r,c:cl,cRel:cRel,rRel:rRel}}function parse_PtgArea(blob,length){var type=(blob[blob.l++]&96)>>5;var area=parse_RgceArea(blob,8);return[type,area]}function parse_PtgArea3d(blob,length){var type=(blob[blob.l++]&96)>>5;var ixti=blob.read_shift(2);var area=parse_RgceArea(blob,8);return[type,ixti,area]}function parse_PtgAreaErr(blob,length){var type=(blob[blob.l++]&96)>>5;blob.l+=8;return[type]}function parse_PtgAreaErr3d(blob,length){var type=(blob[blob.l++]&96)>>5;var ixti=blob.read_shift(2);blob.l+=8;return[type,ixti]}function parse_PtgAreaN(blob,length){var type=(blob[blob.l++]&96)>>5;var area=parse_RgceAreaRel(blob,8);return[type,area]}function parse_PtgArray(blob,length){var type=(blob[blob.l++]&96)>>5;blob.l+=7;return[type]}function parse_PtgAttrBaxcel(blob,length){var bitSemi=blob[blob.l+1]&1;var bitBaxcel=1;blob.l+=4;return[bitSemi,bitBaxcel]}function parse_PtgAttrChoose(blob,length){blob.l+=2;var offset=blob.read_shift(2);var o=[];for(var i=0;i<=offset;++i)o.push(blob.read_shift(2));return o}function parse_PtgAttrGoto(blob,length){var bitGoto=blob[blob.l+1]&255?1:0;blob.l+=2;return[bitGoto,blob.read_shift(2)]}function parse_PtgAttrIf(blob,length){var bitIf=blob[blob.l+1]&255?1:0;blob.l+=2;return[bitIf,blob.read_shift(2)]}function parse_PtgAttrSemi(blob,length){var bitSemi=blob[blob.l+1]&255?1:0;blob.l+=4;return[bitSemi]}function parse_PtgAttrSpaceType(blob,length){var type=blob.read_shift(1),cch=blob.read_shift(1);return[type,cch]}function parse_PtgAttrSpace(blob,length){blob.read_shift(2);return parse_PtgAttrSpaceType(blob,2)}function parse_PtgAttrSpaceSemi(blob,length){blob.read_shift(2);return parse_PtgAttrSpaceType(blob,2)}function parse_PtgRef(blob,length){var ptg=blob[blob.l]&31;var type=(blob[blob.l]&96)>>5;blob.l+=1;var loc=parse_RgceLoc(blob,4);return[type,loc]}function parse_PtgRefN(blob,length){var ptg=blob[blob.l]&31;var type=(blob[blob.l]&96)>>5;blob.l+=1;var loc=parse_RgceLocRel(blob,4);return[type,loc]}function parse_PtgRef3d(blob,length){var ptg=blob[blob.l]&31;var type=(blob[blob.l]&96)>>5;blob.l+=1;var ixti=blob.read_shift(2);var loc=parse_RgceLoc(blob,4);return[type,ixti,loc]}function parse_PtgFunc(blob,length){var ptg=blob[blob.l]&31;var type=(blob[blob.l]&96)>>5;blob.l+=1;var iftab=blob.read_shift(2);return[FtabArgc[iftab],Ftab[iftab]]}function parse_PtgFuncVar(blob,length){blob.l++;var cparams=blob.read_shift(1),tab=parsetab(blob);return[cparams,(tab[0]===0?Ftab:Cetab)[tab[1]]]}function parsetab(blob,length){return[blob[blob.l+1]>>7,blob.read_shift(2)&32767]}var parse_PtgAttrSum=parseread(4);var parse_PtgConcat=parseread1;function parse_PtgExp(blob,length){blob.l++;var row=blob.read_shift(2);var col=blob.read_shift(2);return[row,col]}function parse_PtgErr(blob,length){blob.l++;return BErr[blob.read_shift(1)]}function parse_PtgInt(blob,length){blob.l++;return blob.read_shift(2)}function parse_PtgBool(blob,length){blob.l++;return blob.read_shift(1)!==0}function parse_PtgNum(blob,length){blob.l++;return parse_Xnum(blob,8)}function parse_PtgStr(blob,length){blob.l++;return parse_ShortXLUnicodeString(blob)}function parse_SerAr(blob){var val=[];switch(val[0]=blob.read_shift(1)){case 4:val[1]=parsebool(blob,1)?"TRUE":"FALSE";blob.l+=7;break;case 16:val[1]=BErr[blob[blob.l]];blob.l+=8;break;case 0:blob.l+=8;break;case 1:val[1]=parse_Xnum(blob,8);break;case 2:val[1]=parse_XLUnicodeString(blob);break}return val}function parse_PtgExtraMem(blob,cce){var count=blob.read_shift(2);var out=[];for(var i=0;i!=count;++i)out.push(parse_Ref8U(blob,8));return out}function parse_PtgExtraArray(blob){var cols=1+blob.read_shift(1);var rows=1+blob.read_shift(2);for(var i=0,o=[];i!=rows&&(o[i]=[]);++i)for(var j=0;j!=cols;++j)o[i][j]=parse_SerAr(blob);
return o}function parse_PtgName(blob,length){var type=blob.read_shift(1)>>>5&3;var nameindex=blob.read_shift(4);return[type,0,nameindex]}function parse_PtgNameX(blob,length){var type=blob.read_shift(1)>>>5&3;var ixti=blob.read_shift(2);var nameindex=blob.read_shift(4);return[type,ixti,nameindex]}function parse_PtgMemArea(blob,length){var type=blob.read_shift(1)>>>5&3;blob.l+=4;var cce=blob.read_shift(2);return[type,cce]}function parse_PtgMemFunc(blob,length){var type=blob.read_shift(1)>>>5&3;var cce=blob.read_shift(2);return[type,cce]}function parse_PtgRefErr(blob,length){var type=blob.read_shift(1)>>>5&3;blob.l+=4;return[type]}var parse_PtgAdd=parseread1;var parse_PtgDiv=parseread1;var parse_PtgEq=parseread1;var parse_PtgGe=parseread1;var parse_PtgGt=parseread1;var parse_PtgIsect=parseread1;var parse_PtgLe=parseread1;var parse_PtgLt=parseread1;var parse_PtgMissArg=parseread1;var parse_PtgMul=parseread1;var parse_PtgNe=parseread1;var parse_PtgParen=parseread1;var parse_PtgPercent=parseread1;var parse_PtgPower=parseread1;var parse_PtgRange=parseread1;var parse_PtgSub=parseread1;var parse_PtgUminus=parseread1;var parse_PtgUnion=parseread1;var parse_PtgUplus=parseread1;var parse_PtgMemErr=parsenoop;var parse_PtgMemNoMem=parsenoop;var parse_PtgRefErr3d=parsenoop;var parse_PtgTbl=parsenoop;var PtgTypes={1:{n:"PtgExp",f:parse_PtgExp},2:{n:"PtgTbl",f:parse_PtgTbl},3:{n:"PtgAdd",f:parse_PtgAdd},4:{n:"PtgSub",f:parse_PtgSub},5:{n:"PtgMul",f:parse_PtgMul},6:{n:"PtgDiv",f:parse_PtgDiv},7:{n:"PtgPower",f:parse_PtgPower},8:{n:"PtgConcat",f:parse_PtgConcat},9:{n:"PtgLt",f:parse_PtgLt},10:{n:"PtgLe",f:parse_PtgLe},11:{n:"PtgEq",f:parse_PtgEq},12:{n:"PtgGe",f:parse_PtgGe},13:{n:"PtgGt",f:parse_PtgGt},14:{n:"PtgNe",f:parse_PtgNe},15:{n:"PtgIsect",f:parse_PtgIsect},16:{n:"PtgUnion",f:parse_PtgUnion},17:{n:"PtgRange",f:parse_PtgRange},18:{n:"PtgUplus",f:parse_PtgUplus},19:{n:"PtgUminus",f:parse_PtgUminus},20:{n:"PtgPercent",f:parse_PtgPercent},21:{n:"PtgParen",f:parse_PtgParen},22:{n:"PtgMissArg",f:parse_PtgMissArg},23:{n:"PtgStr",f:parse_PtgStr},28:{n:"PtgErr",f:parse_PtgErr},29:{n:"PtgBool",f:parse_PtgBool},30:{n:"PtgInt",f:parse_PtgInt},31:{n:"PtgNum",f:parse_PtgNum},32:{n:"PtgArray",f:parse_PtgArray},33:{n:"PtgFunc",f:parse_PtgFunc},34:{n:"PtgFuncVar",f:parse_PtgFuncVar},35:{n:"PtgName",f:parse_PtgName},36:{n:"PtgRef",f:parse_PtgRef},37:{n:"PtgArea",f:parse_PtgArea},38:{n:"PtgMemArea",f:parse_PtgMemArea},39:{n:"PtgMemErr",f:parse_PtgMemErr},40:{n:"PtgMemNoMem",f:parse_PtgMemNoMem},41:{n:"PtgMemFunc",f:parse_PtgMemFunc},42:{n:"PtgRefErr",f:parse_PtgRefErr},43:{n:"PtgAreaErr",f:parse_PtgAreaErr},44:{n:"PtgRefN",f:parse_PtgRefN},45:{n:"PtgAreaN",f:parse_PtgAreaN},57:{n:"PtgNameX",f:parse_PtgNameX},58:{n:"PtgRef3d",f:parse_PtgRef3d},59:{n:"PtgArea3d",f:parse_PtgArea3d},60:{n:"PtgRefErr3d",f:parse_PtgRefErr3d},61:{n:"PtgAreaErr3d",f:parse_PtgAreaErr3d},255:{}};var PtgDupes={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61};(function(){for(var y in PtgDupes)PtgTypes[y]=PtgTypes[PtgDupes[y]]})();var Ptg18={};var Ptg19={1:{n:"PtgAttrSemi",f:parse_PtgAttrSemi},2:{n:"PtgAttrIf",f:parse_PtgAttrIf},4:{n:"PtgAttrChoose",f:parse_PtgAttrChoose},8:{n:"PtgAttrGoto",f:parse_PtgAttrGoto},16:{n:"PtgAttrSum",f:parse_PtgAttrSum},32:{n:"PtgAttrBaxcel",f:parse_PtgAttrBaxcel},64:{n:"PtgAttrSpace",f:parse_PtgAttrSpace},65:{n:"PtgAttrSpaceSemi",f:parse_PtgAttrSpaceSemi},255:{}};function parse_Formula(blob,length,opts){var cell=parse_XLSCell(blob,6);var val=parse_FormulaValue(blob,8);var flags=blob.read_shift(1);blob.read_shift(1);var chn=blob.read_shift(4);var cbf="";if(opts.biff===5)blob.l+=length-20;else cbf=parse_XLSCellParsedFormula(blob,length-20,opts);return{cell:cell,val:val[0],formula:cbf,shared:flags>>3&1,tt:val[1]}}function parse_FormulaValue(blob){var b;if(__readUInt16LE(blob,blob.l+6)!==65535)return[parse_Xnum(blob),"n"];switch(blob[blob.l]){case 0:blob.l+=8;return["String","s"];case 1:b=blob[blob.l+2]===1;blob.l+=8;return[b,"b"];case 2:b=blob[blob.l+2];blob.l+=8;return[b,"e"];case 3:blob.l+=8;return["","s"]}}function parse_RgbExtra(blob,length,rgce,opts){if(opts.biff<8)return parsenoop(blob,length);var target=blob.l+length;var o=[];for(var i=0;i!==rgce.length;++i){switch(rgce[i][0]){case"PtgArray":rgce[i][1]=parse_PtgExtraArray(blob);o.push(rgce[i][1]);break;case"PtgMemArea":rgce[i][2]=parse_PtgExtraMem(blob,rgce[i][1]);o.push(rgce[i][2]);break;default:break}}length=target-blob.l;if(length!==0)o.push(parsenoop(blob,length));return o}function parse_NameParsedFormula(blob,length,opts,cce){var target=blob.l+length;var rgce=parse_Rgce(blob,cce);var rgcb;if(target!==blob.l)rgcb=parse_RgbExtra(blob,target-blob.l,rgce,opts);return[rgce,rgcb]}function parse_XLSCellParsedFormula(blob,length,opts){var target=blob.l+length;var rgcb,cce=blob.read_shift(2);if(cce==65535)return[[],parsenoop(blob,length-2)];var rgce=parse_Rgce(blob,cce);if(length!==cce+2)rgcb=parse_RgbExtra(blob,length-cce-2,rgce,opts);return[rgce,rgcb]}function parse_SharedParsedFormula(blob,length,opts){var target=blob.l+length;var rgcb,cce=blob.read_shift(2);var rgce=parse_Rgce(blob,cce);if(cce==65535)return[[],parsenoop(blob,length-2)];if(length!==cce+2)rgcb=parse_RgbExtra(blob,target-cce-2,rgce,opts);return[rgce,rgcb]}function parse_ArrayParsedFormula(blob,length,opts,ref){var target=blob.l+length;var rgcb,cce=blob.read_shift(2);if(cce==65535)return[[],parsenoop(blob,length-2)];var rgce=parse_Rgce(blob,cce);if(length!==cce+2)rgcb=parse_RgbExtra(blob,target-cce-2,rgce,opts);return[rgce,rgcb]}function parse_Rgce(blob,length){var target=blob.l+length;var R,id,ptgs=[];while(target!=blob.l){length=target-blob.l;id=blob[blob.l];R=PtgTypes[id];if(id===24||id===25){id=blob[blob.l+1];R=(id===24?Ptg18:Ptg19)[id]}if(!R||!R.f){ptgs.push(parsenoop(blob,length))}else{ptgs.push([R.n,R.f(blob,length)])}}return ptgs}function mapper(x){return x.map(function f2(y){return y[1]}).join(",")}function stringify_formula(formula,range,cell,supbooks,opts){if(opts!==undefined&&opts.biff===5)return"BIFF5??";var _range=range!==undefined?range:{s:{c:0,r:0}};var stack=[],e1,e2,type,c,ixti,nameidx,r;if(!formula[0]||!formula[0][0])return"";for(var ff=0,fflen=formula[0].length;ff<fflen;++ff){var f=formula[0][ff];switch(f[0]){case"PtgUminus":stack.push("-"+stack.pop());break;case"PtgUplus":stack.push("+"+stack.pop());break;case"PtgPercent":stack.push(stack.pop()+"%");break;case"PtgAdd":e1=stack.pop();e2=stack.pop();stack.push(e2+"+"+e1);break;case"PtgSub":e1=stack.pop();e2=stack.pop();stack.push(e2+"-"+e1);break;case"PtgMul":e1=stack.pop();e2=stack.pop();stack.push(e2+"*"+e1);break;case"PtgDiv":e1=stack.pop();e2=stack.pop();stack.push(e2+"/"+e1);break;case"PtgPower":e1=stack.pop();e2=stack.pop();stack.push(e2+"^"+e1);break;case"PtgConcat":e1=stack.pop();e2=stack.pop();stack.push(e2+"&"+e1);break;case"PtgLt":e1=stack.pop();e2=stack.pop();stack.push(e2+"<"+e1);break;case"PtgLe":e1=stack.pop();e2=stack.pop();stack.push(e2+"<="+e1);break;case"PtgEq":e1=stack.pop();e2=stack.pop();stack.push(e2+"="+e1);break;case"PtgGe":e1=stack.pop();e2=stack.pop();stack.push(e2+">="+e1);break;case"PtgGt":e1=stack.pop();e2=stack.pop();stack.push(e2+">"+e1);break;case"PtgNe":e1=stack.pop();e2=stack.pop();stack.push(e2+"<>"+e1);break;case"PtgIsect":e1=stack.pop();e2=stack.pop();stack.push(e2+" "+e1);break;case"PtgUnion":e1=stack.pop();e2=stack.pop();stack.push(e2+","+e1);break;case"PtgRange":break;case"PtgAttrChoose":break;case"PtgAttrGoto":break;case"PtgAttrIf":break;case"PtgRef":type=f[1][0];c=shift_cell_xls(decode_cell(encode_cell(f[1][1])),_range);stack.push(encode_cell(c));break;case"PtgRefN":type=f[1][0];c=shift_cell_xls(decode_cell(encode_cell(f[1][1])),cell);stack.push(encode_cell(c));break;case"PtgRef3d":type=f[1][0];ixti=f[1][1];c=shift_cell_xls(f[1][2],_range);stack.push(supbooks[1][ixti+1]+"!"+encode_cell(c));break;case"PtgFunc":case"PtgFuncVar":var argc=f[1][0],func=f[1][1];if(!argc)argc=0;var args=stack.slice(-argc);stack.length-=argc;if(func==="User")func=args.shift();stack.push(func+"("+args.join(",")+")");break;case"PtgBool":stack.push(f[1]?"TRUE":"FALSE");break;case"PtgInt":stack.push(f[1]);break;case"PtgNum":stack.push(String(f[1]));break;case"PtgStr":stack.push('"'+f[1]+'"');break;case"PtgErr":stack.push(f[1]);break;case"PtgArea":type=f[1][0];r=shift_range_xls(f[1][1],_range);stack.push(encode_range(r));break;case"PtgArea3d":type=f[1][0];ixti=f[1][1];r=f[1][2];stack.push(supbooks[1][ixti+1]+"!"+encode_range(r));break;case"PtgAttrSum":stack.push("SUM("+stack.pop()+")");break;case"PtgAttrSemi":break;case"PtgName":nameidx=f[1][2];var lbl=supbooks[0][nameidx];var name=lbl.Name;if(name in XLSXFutureFunctions)name=XLSXFutureFunctions[name];stack.push(name);break;case"PtgNameX":var bookidx=f[1][1];nameidx=f[1][2];var externbook;if(supbooks[bookidx+1])externbook=supbooks[bookidx+1][nameidx];else if(supbooks[bookidx-1])externbook=supbooks[bookidx-1][nameidx];if(!externbook)externbook={body:"??NAMEX??"};stack.push(externbook.body);break;case"PtgParen":stack.push("("+stack.pop()+")");break;case"PtgRefErr":stack.push("#REF!");break;case"PtgExp":c={c:f[1][1],r:f[1][0]};var q={c:cell.c,r:cell.r};if(supbooks.sharedf[encode_cell(c)]){var parsedf=supbooks.sharedf[encode_cell(c)];stack.push(stringify_formula(parsedf,_range,q,supbooks,opts))}else{var fnd=false;for(e1=0;e1!=supbooks.arrayf.length;++e1){e2=supbooks.arrayf[e1];if(c.c<e2[0].s.c||c.c>e2[0].e.c)continue;if(c.r<e2[0].s.r||c.r>e2[0].e.r)continue;stack.push(stringify_formula(e2[1],_range,q,supbooks,opts))}if(!fnd)stack.push(f[1])}break;case"PtgArray":stack.push("{"+f[1].map(mapper).join(";")+"}");break;case"PtgMemArea":break;case"PtgAttrSpace":break;case"PtgTbl":break;case"PtgMemErr":break;case"PtgMissArg":stack.push("");break;case"PtgAreaErr":break;case"PtgAreaN":stack.push("");break;case"PtgRefErr3d":break;case"PtgMemFunc":break;default:throw"Unrecognized Formula Token: "+f}}return stack[0]}function parse_XLSBCellParsedFormula(data,length){var cce=data.read_shift(4);return parsenoop(data,length-4)}var PtgDataType={1:"REFERENCE",2:"VALUE",3:"ARRAY"};var Cetab={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"};var Ftab={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD"};var FtabArgc={2:1,3:1,15:1,16:1,17:1,18:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,65:3,66:3,67:1,68:1,69:1,71:1,72:1,73:1,75:1,76:1,77:1,79:2,80:2,83:1,86:1,90:1,97:2,98:1,99:1,105:1,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,189:3,190:1,195:3,196:3,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,65535:0};var XLSXFutureFunctions={"_xlfn.ACOT":"ACOT","_xlfn.ACOTH":"ACOTH","_xlfn.AGGREGATE":"AGGREGATE","_xlfn.ARABIC":"ARABIC","_xlfn.AVERAGEIF":"AVERAGEIF","_xlfn.AVERAGEIFS":"AVERAGEIFS","_xlfn.BASE":"BASE","_xlfn.BETA.DIST":"BETA.DIST","_xlfn.BETA.INV":"BETA.INV","_xlfn.BINOM.DIST":"BINOM.DIST","_xlfn.BINOM.DIST.RANGE":"BINOM.DIST.RANGE","_xlfn.BINOM.INV":"BINOM.INV","_xlfn.BITAND":"BITAND","_xlfn.BITLSHIFT":"BITLSHIFT","_xlfn.BITOR":"BITOR","_xlfn.BITRSHIFT":"BITRSHIFT","_xlfn.BITXOR":"BITXOR","_xlfn.CEILING.MATH":"CEILING.MATH","_xlfn.CEILING.PRECISE":"CEILING.PRECISE","_xlfn.CHISQ.DIST":"CHISQ.DIST","_xlfn.CHISQ.DIST.RT":"CHISQ.DIST.RT","_xlfn.CHISQ.INV":"CHISQ.INV","_xlfn.CHISQ.INV.RT":"CHISQ.INV.RT","_xlfn.CHISQ.TEST":"CHISQ.TEST","_xlfn.COMBINA":"COMBINA","_xlfn.CONFIDENCE.NORM":"CONFIDENCE.NORM","_xlfn.CONFIDENCE.T":"CONFIDENCE.T","_xlfn.COT":"COT","_xlfn.COTH":"COTH","_xlfn.COUNTIFS":"COUNTIFS","_xlfn.COVARIANCE.P":"COVARIANCE.P","_xlfn.COVARIANCE.S":"COVARIANCE.S","_xlfn.CSC":"CSC","_xlfn.CSCH":"CSCH","_xlfn.DAYS":"DAYS","_xlfn.DECIMAL":"DECIMAL","_xlfn.ECMA.CEILING":"ECMA.CEILING","_xlfn.ERF.PRECISE":"ERF.PRECISE","_xlfn.ERFC.PRECISE":"ERFC.PRECISE","_xlfn.EXPON.DIST":"EXPON.DIST","_xlfn.F.DIST":"F.DIST","_xlfn.F.DIST.RT":"F.DIST.RT","_xlfn.F.INV":"F.INV","_xlfn.F.INV.RT":"F.INV.RT","_xlfn.F.TEST":"F.TEST","_xlfn.FILTERXML":"FILTERXML","_xlfn.FLOOR.MATH":"FLOOR.MATH","_xlfn.FLOOR.PRECISE":"FLOOR.PRECISE","_xlfn.FORMULATEXT":"FORMULATEXT","_xlfn.GAMMA":"GAMMA","_xlfn.GAMMA.DIST":"GAMMA.DIST","_xlfn.GAMMA.INV":"GAMMA.INV","_xlfn.GAMMALN.PRECISE":"GAMMALN.PRECISE","_xlfn.GAUSS":"GAUSS","_xlfn.HYPGEOM.DIST":"HYPGEOM.DIST","_xlfn.IFNA":"IFNA","_xlfn.IFERROR":"IFERROR","_xlfn.IMCOSH":"IMCOSH","_xlfn.IMCOT":"IMCOT","_xlfn.IMCSC":"IMCSC","_xlfn.IMCSCH":"IMCSCH","_xlfn.IMSEC":"IMSEC","_xlfn.IMSECH":"IMSECH","_xlfn.IMSINH":"IMSINH","_xlfn.IMTAN":"IMTAN","_xlfn.ISFORMULA":"ISFORMULA","_xlfn.ISO.CEILING":"ISO.CEILING","_xlfn.ISOWEEKNUM":"ISOWEEKNUM","_xlfn.LOGNORM.DIST":"LOGNORM.DIST","_xlfn.LOGNORM.INV":"LOGNORM.INV","_xlfn.MODE.MULT":"MODE.MULT","_xlfn.MODE.SNGL":"MODE.SNGL","_xlfn.MUNIT":"MUNIT","_xlfn.NEGBINOM.DIST":"NEGBINOM.DIST","_xlfn.NETWORKDAYS.INTL":"NETWORKDAYS.INTL","_xlfn.NIGBINOM":"NIGBINOM","_xlfn.NORM.DIST":"NORM.DIST","_xlfn.NORM.INV":"NORM.INV","_xlfn.NORM.S.DIST":"NORM.S.DIST","_xlfn.NORM.S.INV":"NORM.S.INV","_xlfn.NUMBERVALUE":"NUMBERVALUE","_xlfn.PDURATION":"PDURATION","_xlfn.PERCENTILE.EXC":"PERCENTILE.EXC","_xlfn.PERCENTILE.INC":"PERCENTILE.INC","_xlfn.PERCENTRANK.EXC":"PERCENTRANK.EXC","_xlfn.PERCENTRANK.INC":"PERCENTRANK.INC","_xlfn.PERMUTATIONA":"PERMUTATIONA","_xlfn.PHI":"PHI","_xlfn.POISSON.DIST":"POISSON.DIST","_xlfn.QUARTILE.EXC":"QUARTILE.EXC","_xlfn.QUARTILE.INC":"QUARTILE.INC","_xlfn.QUERYSTRING":"QUERYSTRING","_xlfn.RANK.AVG":"RANK.AVG","_xlfn.RANK.EQ":"RANK.EQ","_xlfn.RRI":"RRI","_xlfn.SEC":"SEC","_xlfn.SECH":"SECH","_xlfn.SHEET":"SHEET","_xlfn.SHEETS":"SHEETS","_xlfn.SKEW.P":"SKEW.P","_xlfn.STDEV.P":"STDEV.P","_xlfn.STDEV.S":"STDEV.S","_xlfn.SUMIFS":"SUMIFS","_xlfn.T.DIST":"T.DIST","_xlfn.T.DIST.2T":"T.DIST.2T","_xlfn.T.DIST.RT":"T.DIST.RT","_xlfn.T.INV":"T.INV","_xlfn.T.INV.2T":"T.INV.2T","_xlfn.T.TEST":"T.TEST","_xlfn.UNICHAR":"UNICHAR","_xlfn.UNICODE":"UNICODE","_xlfn.VAR.P":"VAR.P","_xlfn.VAR.S":"VAR.S","_xlfn.WEBSERVICE":"WEBSERVICE","_xlfn.WEIBULL.DIST":"WEIBULL.DIST","_xlfn.WORKDAY.INTL":"WORKDAY.INTL","_xlfn.XOR":"XOR","_xlfn.Z.TEST":"Z.TEST"};var strs={};var _ssfopts={};RELS.WS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet";function get_sst_id(sst,str){for(var i=0,len=sst.length;i<len;++i)if(sst[i].t===str){sst.Count++;return i}sst[len]={t:str};sst.Count++;sst.Unique++;return len}function get_cell_style(styles,cell,opts){var z=opts.revssf[cell.z!=null?cell.z:"General"];for(var i=0,len=styles.length;i!=len;++i)if(styles[i].numFmtId===z)return i;styles[len]={numFmtId:z,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1};return len}function safe_format(p,fmtid,fillid,opts){try{if(p.t==="e")p.w=p.w||BErr[p.v];else if(fmtid===0){if(p.t==="n"){if((p.v|0)===p.v)p.w=SSF._general_int(p.v,_ssfopts);else p.w=SSF._general_num(p.v,_ssfopts)}else if(p.t==="d"){var dd=datenum(p.v);if((dd|0)===dd)p.w=SSF._general_int(dd,_ssfopts);else p.w=SSF._general_num(dd,_ssfopts)}else if(p.v===undefined)return"";else p.w=SSF._general(p.v,_ssfopts)}else if(p.t==="d")p.w=SSF.format(fmtid,datenum(p.v),_ssfopts);else p.w=SSF.format(fmtid,p.v,_ssfopts);if(opts.cellNF)p.z=SSF._table[fmtid]}catch(e){if(opts.WTF)throw e}if(fillid)try{p.s=styles.Fills[fillid];if(p.s.fgColor&&p.s.fgColor.theme){p.s.fgColor.rgb=rgb_tint(themes.themeElements.clrScheme[p.s.fgColor.theme].rgb,p.s.fgColor.tint||0);if(opts.WTF)p.s.fgColor.raw_rgb=themes.themeElements.clrScheme[p.s.fgColor.theme].rgb}if(p.s.bgColor&&p.s.bgColor.theme){p.s.bgColor.rgb=rgb_tint(themes.themeElements.clrScheme[p.s.bgColor.theme].rgb,p.s.bgColor.tint||0);if(opts.WTF)p.s.bgColor.raw_rgb=themes.themeElements.clrScheme[p.s.bgColor.theme].rgb}}catch(e){if(opts.WTF)throw e}}function parse_ws_xml_dim(ws,s){var d=safe_decode_range(s);if(d.s.r<=d.e.r&&d.s.c<=d.e.c&&d.s.r>=0&&d.s.c>=0)ws["!ref"]=encode_range(d)}var mergecregex=/<mergeCell ref="[A-Z0-9:]+"\s*\/>/g;var sheetdataregex=/<(?:\w+:)?sheetData>([^\u2603]*)<\/(?:\w+:)?sheetData>/;var hlinkregex=/<hyperlink[^>]*\/>/g;var dimregex=/"(\w*:\w*)"/;var colregex=/<col[^>]*\/>/g;function parse_ws_xml(data,opts,rels){if(!data)return data;var s={};var ridx=data.indexOf("<dimension");if(ridx>0){var ref=data.substr(ridx,50).match(dimregex);if(ref!=null)parse_ws_xml_dim(s,ref[1])}var mergecells=[];if(data.indexOf("</mergeCells>")!==-1){var merges=data.match(mergecregex);for(ridx=0;ridx!=merges.length;++ridx)mergecells[ridx]=safe_decode_range(merges[ridx].substr(merges[ridx].indexOf('"')+1))}var columns=[];if(opts.cellStyles&&data.indexOf("</cols>")!==-1){var cols=data.match(colregex);parse_ws_xml_cols(columns,cols)}var refguess={s:{r:1e6,c:1e6},e:{r:0,c:0}};var mtch=data.match(sheetdataregex);if(mtch)parse_ws_xml_data(mtch[1],s,opts,refguess);if(data.indexOf("</hyperlinks>")!==-1)parse_ws_xml_hlinks(s,data.match(hlinkregex),rels);if(!s["!ref"]&&refguess.e.c>=refguess.s.c&&refguess.e.r>=refguess.s.r)s["!ref"]=encode_range(refguess);if(opts.sheetRows>0&&s["!ref"]){var tmpref=safe_decode_range(s["!ref"]);if(opts.sheetRows<+tmpref.e.r){tmpref.e.r=opts.sheetRows-1;if(tmpref.e.r>refguess.e.r)tmpref.e.r=refguess.e.r;if(tmpref.e.r<tmpref.s.r)tmpref.s.r=tmpref.e.r;if(tmpref.e.c>refguess.e.c)tmpref.e.c=refguess.e.c;if(tmpref.e.c<tmpref.s.c)tmpref.s.c=tmpref.e.c;s["!fullref"]=s["!ref"];s["!ref"]=encode_range(tmpref)}}if(mergecells.length>0)s["!merges"]=mergecells;if(columns.length>0)s["!cols"]=columns;return s}function write_ws_xml_merges(merges){if(merges.length==0)return"";var o='<mergeCells count="'+merges.length+'">';for(var i=0;i!=merges.length;++i)o+='<mergeCell ref="'+encode_range(merges[i])+'"/>';return o+"</mergeCells>"}function parse_ws_xml_hlinks(s,data,rels){for(var i=0;i!=data.length;++i){var val=parsexmltag(data[i],true);if(!val.ref)return;var rel=rels?rels["!id"][val.id]:null;if(rel){val.Target=rel.Target;if(val.location)val.Target+="#"+val.location;val.Rel=rel}else{val.Target=val.location;rel={Target:val.location,TargetMode:"Internal"};val.Rel=rel}var rng=safe_decode_range(val.ref);for(var R=rng.s.r;R<=rng.e.r;++R)for(var C=rng.s.c;C<=rng.e.c;++C){var addr=encode_cell({c:C,r:R});if(!s[addr])s[addr]={t:"stub",v:undefined};s[addr].l=val}}}function parse_ws_xml_cols(columns,cols){var seencol=false;for(var coli=0;coli!=cols.length;++coli){var coll=parsexmltag(cols[coli],true);var colm=parseInt(coll.min,10)-1,colM=parseInt(coll.max,10)-1;delete coll.min;delete coll.max;if(!seencol&&coll.width){seencol=true;find_mdw(+coll.width,coll)}if(coll.width){coll.wpx=width2px(+coll.width);coll.wch=px2char(coll.wpx);coll.MDW=MDW}while(colm<=colM)columns[colm++]=coll}}function write_ws_xml_cols(ws,cols){var o=["<cols>"],col,width;for(var i=0;i!=cols.length;++i){if(!(col=cols[i]))continue;var p={min:i+1,max:i+1};width=-1;if(col.wpx)width=px2char(col.wpx);else if(col.wch)width=col.wch;if(width>-1){p.width=char2width(width);p.customWidth=1}o[o.length]=writextag("col",null,p)}o[o.length]="</cols>";return o.join("")
}function write_ws_xml_cell(cell,ref,ws,opts,idx,wb){if(cell.v===undefined)return"";var vv="";var oldt=cell.t,oldv=cell.v;switch(cell.t){case"b":vv=cell.v?"1":"0";break;case"n":vv=""+cell.v;break;case"e":vv=BErr[cell.v];break;case"d":if(opts.cellDates)vv=new Date(cell.v).toISOString();else{cell.t="n";vv=""+(cell.v=datenum(cell.v));if(typeof cell.z==="undefined")cell.z=SSF._table[14]}break;default:vv=cell.v;break}var v=writetag("v",escapexml(vv)),o={r:ref};var os=get_cell_style(opts.cellXfs,cell,opts);if(os!==0)o.s=os;switch(cell.t){case"n":break;case"d":o.t="d";break;case"b":o.t="b";break;case"e":o.t="e";break;default:if(opts.bookSST){v=writetag("v",""+get_sst_id(opts.Strings,cell.v));o.t="s";break}o.t="str";break}if(cell.t!=oldt){cell.t=oldt;cell.v=oldv}return writextag("c",v,o)}var parse_ws_xml_data=function parse_ws_xml_data_factory(){var cellregex=/<(?:\w+:)?c[ >]/,rowregex=/<\/(?:\w+:)?row>/;var rregex=/r=["']([^"']*)["']/,isregex=/<is>([\S\s]*?)<\/is>/;var match_v=matchtag("v"),match_f=matchtag("f");return function parse_ws_xml_data(sdata,s,opts,guess){var ri=0,x="",cells=[],cref=[],idx=0,i=0,cc=0,d="",p;var tag,tagr=0,tagc=0;var sstr;var fmtid=0,fillid=0,do_format=Array.isArray(styles.CellXf),cf;for(var marr=sdata.split(rowregex),mt=0,marrlen=marr.length;mt!=marrlen;++mt){x=marr[mt].trim();var xlen=x.length;if(xlen===0)continue;for(ri=0;ri<xlen;++ri)if(x.charCodeAt(ri)===62)break;++ri;tag=parsexmltag(x.substr(0,ri),true);tagr=typeof tag.r!=="undefined"?parseInt(tag.r,10):tagr+1;tagc=-1;if(opts.sheetRows&&opts.sheetRows<tagr)continue;if(guess.s.r>tagr-1)guess.s.r=tagr-1;if(guess.e.r<tagr-1)guess.e.r=tagr-1;cells=x.substr(ri).split(cellregex);for(ri=typeof tag.r==="undefined"?0:1;ri!=cells.length;++ri){x=cells[ri].trim();if(x.length===0)continue;cref=x.match(rregex);idx=ri;i=0;cc=0;x="<c "+(x.substr(0,1)=="<"?">":"")+x;if(cref!==null&&cref.length===2){idx=0;d=cref[1];for(i=0;i!=d.length;++i){if((cc=d.charCodeAt(i)-64)<1||cc>26)break;idx=26*idx+cc}--idx;tagc=idx}else++tagc;for(i=0;i!=x.length;++i)if(x.charCodeAt(i)===62)break;++i;tag=parsexmltag(x.substr(0,i),true);if(!tag.r)tag.r=utils.encode_cell({r:tagr-1,c:tagc});d=x.substr(i);p={t:""};if((cref=d.match(match_v))!==null&&cref[1]!=="")p.v=unescapexml(cref[1]);if(opts.cellFormula&&(cref=d.match(match_f))!==null)p.f=unescapexml(cref[1]);if(tag.t===undefined&&p.v===undefined){if(!opts.sheetStubs)continue;p.t="stub"}else p.t=tag.t||"n";if(guess.s.c>idx)guess.s.c=idx;if(guess.e.c<idx)guess.e.c=idx;switch(p.t){case"n":p.v=parseFloat(p.v);break;case"s":sstr=strs[parseInt(p.v,10)];p.v=sstr.t;p.r=sstr.r;if(opts.cellHTML)p.h=sstr.h;break;case"str":p.t="s";p.v=p.v!=null?utf8read(p.v):"";if(opts.cellHTML)p.h=p.v;break;case"inlineStr":cref=d.match(isregex);p.t="s";if(cref!==null){sstr=parse_si(cref[1]);p.v=sstr.t}else p.v="";break;case"b":p.v=parsexmlbool(p.v);break;case"d":if(!opts.cellDates){p.v=datenum(p.v);p.t="n"}break;case"e":p.w=p.v;p.v=RBErr[p.v];break}fmtid=fillid=0;if(do_format&&tag.s!==undefined){cf=styles.CellXf[tag.s];if(cf!=null){if(cf.numFmtId!=null)fmtid=cf.numFmtId;if(opts.cellStyles&&cf.fillId!=null)fillid=cf.fillId}}safe_format(p,fmtid,fillid,opts);s[tag.r]=p}}}}();function write_ws_xml_data(ws,opts,idx,wb){var o=[],r=[],range=safe_decode_range(ws["!ref"]),cell,ref,rr="",cols=[],R,C;for(C=range.s.c;C<=range.e.c;++C)cols[C]=encode_col(C);for(R=range.s.r;R<=range.e.r;++R){r=[];rr=encode_row(R);for(C=range.s.c;C<=range.e.c;++C){ref=cols[C]+rr;if(ws[ref]===undefined)continue;if((cell=write_ws_xml_cell(ws[ref],ref,ws,opts,idx,wb))!=null)r.push(cell)}if(r.length>0)o[o.length]=writextag("row",r.join(""),{r:rr})}return o.join("")}var WS_XML_ROOT=writextag("worksheet",null,{xmlns:XMLNS.main[0],"xmlns:r":XMLNS.r});function write_ws_xml(idx,opts,wb){var o=[XML_HEADER,WS_XML_ROOT];var s=wb.SheetNames[idx],sidx=0,rdata="";var ws=wb.Sheets[s];if(ws===undefined)ws={};var ref=ws["!ref"];if(ref===undefined)ref="A1";o[o.length]=writextag("dimension",null,{ref:ref});if(ws["!cols"]!==undefined&&ws["!cols"].length>0)o[o.length]=write_ws_xml_cols(ws,ws["!cols"]);o[sidx=o.length]="<sheetData/>";if(ws["!ref"]!==undefined){rdata=write_ws_xml_data(ws,opts,idx,wb);if(rdata.length>0)o[o.length]=rdata}if(o.length>sidx+1){o[o.length]="</sheetData>";o[sidx]=o[sidx].replace("/>",">")}if(ws["!merges"]!==undefined&&ws["!merges"].length>0)o[o.length]=write_ws_xml_merges(ws["!merges"]);if(o.length>2){o[o.length]="</worksheet>";o[1]=o[1].replace("/>",">")}return o.join("")}function parse_BrtRowHdr(data,length){var z=[];z.r=data.read_shift(4);data.l+=length-4;return z}var parse_BrtWsDim=parse_UncheckedRfX;var write_BrtWsDim=write_UncheckedRfX;function parse_BrtWsProp(data,length){var z={};data.l+=19;z.name=parse_XLSBCodeName(data,length-19);return z}function parse_BrtCellBlank(data,length){var cell=parse_XLSBCell(data);return[cell]}function write_BrtCellBlank(cell,val,o){if(o==null)o=new_buf(8);return write_XLSBCell(val,o)}function parse_BrtCellBool(data,length){var cell=parse_XLSBCell(data);var fBool=data.read_shift(1);return[cell,fBool,"b"]}function parse_BrtCellError(data,length){var cell=parse_XLSBCell(data);var fBool=data.read_shift(1);return[cell,fBool,"e"]}function parse_BrtCellIsst(data,length){var cell=parse_XLSBCell(data);var isst=data.read_shift(4);return[cell,isst,"s"]}function parse_BrtCellReal(data,length){var cell=parse_XLSBCell(data);var value=parse_Xnum(data);return[cell,value,"n"]}function parse_BrtCellRk(data,length){var cell=parse_XLSBCell(data);var value=parse_RkNumber(data);return[cell,value,"n"]}function parse_BrtCellSt(data,length){var cell=parse_XLSBCell(data);var value=parse_XLWideString(data);return[cell,value,"str"]}function parse_BrtFmlaBool(data,length,opts){var cell=parse_XLSBCell(data);var value=data.read_shift(1);var o=[cell,value,"b"];if(opts.cellFormula){var formula=parse_XLSBCellParsedFormula(data,length-9);o[3]=""}else data.l+=length-9;return o}function parse_BrtFmlaError(data,length,opts){var cell=parse_XLSBCell(data);var value=data.read_shift(1);var o=[cell,value,"e"];if(opts.cellFormula){var formula=parse_XLSBCellParsedFormula(data,length-9);o[3]=""}else data.l+=length-9;return o}function parse_BrtFmlaNum(data,length,opts){var cell=parse_XLSBCell(data);var value=parse_Xnum(data);var o=[cell,value,"n"];if(opts.cellFormula){var formula=parse_XLSBCellParsedFormula(data,length-16);o[3]=""}else data.l+=length-16;return o}function parse_BrtFmlaString(data,length,opts){var start=data.l;var cell=parse_XLSBCell(data);var value=parse_XLWideString(data);var o=[cell,value,"str"];if(opts.cellFormula){var formula=parse_XLSBCellParsedFormula(data,start+length-data.l)}else data.l=start+length;return o}var parse_BrtMergeCell=parse_UncheckedRfX;function parse_BrtHLink(data,length,opts){var end=data.l+length;var rfx=parse_UncheckedRfX(data,16);var relId=parse_XLNullableWideString(data);var loc=parse_XLWideString(data);var tooltip=parse_XLWideString(data);var display=parse_XLWideString(data);data.l=end;return{rfx:rfx,relId:relId,loc:loc,tooltip:tooltip,display:display}}function parse_ws_bin(data,opts,rels){if(!data)return data;if(!rels)rels={"!id":{}};var s={};var ref;var refguess={s:{r:1e6,c:1e6},e:{r:0,c:0}};var pass=false,end=false;var row,p,cf,R,C,addr,sstr,rr;var mergecells=[];recordhopper(data,function ws_parse(val,R){if(end)return;switch(R.n){case"BrtWsDim":ref=val;break;case"BrtRowHdr":row=val;if(opts.sheetRows&&opts.sheetRows<=row.r)end=true;rr=encode_row(row.r);break;case"BrtFmlaBool":case"BrtFmlaError":case"BrtFmlaNum":case"BrtFmlaString":case"BrtCellBool":case"BrtCellError":case"BrtCellIsst":case"BrtCellReal":case"BrtCellRk":case"BrtCellSt":p={t:val[2]};switch(val[2]){case"n":p.v=val[1];break;case"s":sstr=strs[val[1]];p.v=sstr.t;p.r=sstr.r;break;case"b":p.v=val[1]?true:false;break;case"e":p.v=val[1];p.w=BErr[p.v];break;case"str":p.t="s";p.v=utf8read(val[1]);break}if(opts.cellFormula&&val.length>3)p.f=val[3];if(cf=styles.CellXf[val[0].iStyleRef])safe_format(p,cf.ifmt,null,opts);s[encode_col(C=val[0].c)+rr]=p;if(refguess.s.r>row.r)refguess.s.r=row.r;if(refguess.s.c>C)refguess.s.c=C;if(refguess.e.r<row.r)refguess.e.r=row.r;if(refguess.e.c<C)refguess.e.c=C;break;case"BrtCellBlank":if(!opts.sheetStubs)break;p={t:"s",v:undefined};s[encode_col(C=val[0].c)+rr]=p;if(refguess.s.r>row.r)refguess.s.r=row.r;if(refguess.s.c>C)refguess.s.c=C;if(refguess.e.r<row.r)refguess.e.r=row.r;if(refguess.e.c<C)refguess.e.c=C;break;case"BrtBeginMergeCells":break;case"BrtEndMergeCells":break;case"BrtMergeCell":mergecells.push(val);break;case"BrtHLink":var rel=rels["!id"][val.relId];if(rel){val.Target=rel.Target;if(val.loc)val.Target+="#"+val.loc;val.Rel=rel}for(R=val.rfx.s.r;R<=val.rfx.e.r;++R)for(C=val.rfx.s.c;C<=val.rfx.e.c;++C){addr=encode_cell({c:C,r:R});if(!s[addr])s[addr]={t:"s",v:undefined};s[addr].l=val}break;case"BrtArrFmla":break;case"BrtShrFmla":break;case"BrtBeginSheet":break;case"BrtWsProp":break;case"BrtSheetCalcProp":break;case"BrtBeginWsViews":break;case"BrtBeginWsView":break;case"BrtPane":break;case"BrtSel":break;case"BrtEndWsView":break;case"BrtEndWsViews":break;case"BrtACBegin":break;case"BrtRwDescent":break;case"BrtACEnd":break;case"BrtWsFmtInfoEx14":break;case"BrtWsFmtInfo":break;case"BrtBeginColInfos":break;case"BrtColInfo":break;case"BrtEndColInfos":break;case"BrtBeginSheetData":break;case"BrtEndSheetData":break;case"BrtSheetProtection":break;case"BrtPrintOptions":break;case"BrtMargins":break;case"BrtPageSetup":break;case"BrtFRTBegin":pass=true;break;case"BrtFRTEnd":pass=false;break;case"BrtEndSheet":break;case"BrtDrawing":break;case"BrtLegacyDrawing":break;case"BrtLegacyDrawingHF":break;case"BrtPhoneticInfo":break;case"BrtBeginHeaderFooter":break;case"BrtEndHeaderFooter":break;case"BrtBrk":break;case"BrtBeginRwBrk":break;case"BrtEndRwBrk":break;case"BrtBeginColBrk":break;case"BrtEndColBrk":break;case"BrtBeginUserShViews":break;case"BrtBeginUserShView":break;case"BrtEndUserShView":break;case"BrtEndUserShViews":break;case"BrtBkHim":break;case"BrtBeginOleObjects":break;case"BrtOleObject":break;case"BrtEndOleObjects":break;case"BrtBeginListParts":break;case"BrtListPart":break;case"BrtEndListParts":break;case"BrtBeginSortState":break;case"BrtBeginSortCond":break;case"BrtEndSortCond":break;case"BrtEndSortState":break;case"BrtBeginConditionalFormatting":break;case"BrtEndConditionalFormatting":break;case"BrtBeginCFRule":break;case"BrtEndCFRule":break;case"BrtBeginDVals":break;case"BrtDVal":break;case"BrtEndDVals":break;case"BrtRangeProtection":break;case"BrtBeginDCon":break;case"BrtEndDCon":break;case"BrtBeginDRefs":break;case"BrtDRef":break;case"BrtEndDRefs":break;case"BrtBeginActiveXControls":break;case"BrtActiveX":break;case"BrtEndActiveXControls":break;case"BrtBeginAFilter":break;case"BrtEndAFilter":break;case"BrtBeginFilterColumn":break;case"BrtBeginFilters":break;case"BrtFilter":break;case"BrtEndFilters":break;case"BrtEndFilterColumn":break;case"BrtDynamicFilter":break;case"BrtTop10Filter":break;case"BrtBeginCustomFilters":break;case"BrtCustomFilter":break;case"BrtEndCustomFilters":break;case"BrtBeginSmartTags":break;case"BrtBeginCellSmartTags":break;case"BrtBeginCellSmartTag":break;case"BrtCellSmartTagProperty":break;case"BrtEndCellSmartTag":break;case"BrtEndCellSmartTags":break;case"BrtEndSmartTags":break;case"BrtBeginCellWatches":break;case"BrtCellWatch":break;case"BrtEndCellWatches":break;case"BrtTable":break;case"BrtBeginCellIgnoreECs":break;case"BrtCellIgnoreEC":break;case"BrtEndCellIgnoreECs":break;default:if(!pass||opts.WTF)throw new Error("Unexpected record "+R.n)}},opts);if(!s["!ref"]&&(refguess.s.r<1e6||ref.e.r>0||ref.e.c>0||ref.s.r>0||ref.s.c>0))s["!ref"]=encode_range(ref);if(opts.sheetRows&&s["!ref"]){var tmpref=safe_decode_range(s["!ref"]);if(opts.sheetRows<+tmpref.e.r){tmpref.e.r=opts.sheetRows-1;if(tmpref.e.r>refguess.e.r)tmpref.e.r=refguess.e.r;if(tmpref.e.r<tmpref.s.r)tmpref.s.r=tmpref.e.r;if(tmpref.e.c>refguess.e.c)tmpref.e.c=refguess.e.c;if(tmpref.e.c<tmpref.s.c)tmpref.s.c=tmpref.e.c;s["!fullref"]=s["!ref"];s["!ref"]=encode_range(tmpref)}}if(mergecells.length>0)s["!merges"]=mergecells;return s}function write_ws_bin_cell(ba,cell,R,C,opts){if(cell.v===undefined)return"";var vv="";switch(cell.t){case"b":vv=cell.v?"1":"0";break;case"n":case"e":vv=""+cell.v;break;default:vv=cell.v;break}var o={r:R,c:C};o.s=get_cell_style(opts.cellXfs,cell,opts);switch(cell.t){case"s":case"str":if(opts.bookSST){vv=get_sst_id(opts.Strings,cell.v);o.t="s";break}o.t="str";break;case"n":break;case"b":o.t="b";break;case"e":o.t="e";break}write_record(ba,"BrtCellBlank",write_BrtCellBlank(cell,o))}function write_CELLTABLE(ba,ws,idx,opts,wb){var range=safe_decode_range(ws["!ref"]||"A1"),ref,rr="",cols=[];write_record(ba,"BrtBeginSheetData");for(var R=range.s.r;R<=range.e.r;++R){rr=encode_row(R);for(var C=range.s.c;C<=range.e.c;++C){if(R===range.s.r)cols[C]=encode_col(C);ref=cols[C]+rr;if(!ws[ref])continue;write_ws_bin_cell(ba,ws[ref],R,C,opts)}}write_record(ba,"BrtEndSheetData")}function write_ws_bin(idx,opts,wb){var ba=buf_array();var s=wb.SheetNames[idx],ws=wb.Sheets[s]||{};var r=safe_decode_range(ws["!ref"]||"A1");write_record(ba,"BrtBeginSheet");write_record(ba,"BrtWsDim",write_BrtWsDim(r));write_CELLTABLE(ba,ws,idx,opts,wb);write_record(ba,"BrtEndSheet");return ba.end()}var WBPropsDef=[["allowRefreshQuery","0"],["autoCompressPictures","1"],["backupFile","0"],["checkCompatibility","0"],["codeName",""],["date1904","0"],["dateCompatibility","1"],["filterPrivacy","0"],["hidePivotFieldList","0"],["promptedSolutions","0"],["publishItems","0"],["refreshAllConnections",false],["saveExternalLinkValues","1"],["showBorderUnselectedTables","1"],["showInkAnnotation","1"],["showObjects","all"],["showPivotChartFilter","0"]];var WBViewDef=[["activeTab","0"],["autoFilterDateGrouping","1"],["firstSheet","0"],["minimized","0"],["showHorizontalScroll","1"],["showSheetTabs","1"],["showVerticalScroll","1"],["tabRatio","600"],["visibility","visible"]];var SheetDef=[["state","visible"]];var CalcPrDef=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]];var CustomWBViewDef=[["autoUpdate","false"],["changesSavedWin","false"],["includeHiddenRowCol","true"],["includePrintSettings","true"],["maximized","false"],["minimized","false"],["onlySync","false"],["personalView","false"],["showComments","commIndicator"],["showFormulaBar","true"],["showHorizontalScroll","true"],["showObjects","all"],["showSheetTabs","true"],["showStatusbar","true"],["showVerticalScroll","true"],["tabRatio","600"],["xWindow","0"],["yWindow","0"]];function push_defaults_array(target,defaults){for(var j=0;j!=target.length;++j){var w=target[j];for(var i=0;i!=defaults.length;++i){var z=defaults[i];if(w[z[0]]==null)w[z[0]]=z[1]}}}function push_defaults(target,defaults){for(var i=0;i!=defaults.length;++i){var z=defaults[i];if(target[z[0]]==null)target[z[0]]=z[1]}}function parse_wb_defaults(wb){push_defaults(wb.WBProps,WBPropsDef);push_defaults(wb.CalcPr,CalcPrDef);push_defaults_array(wb.WBView,WBViewDef);push_defaults_array(wb.Sheets,SheetDef);_ssfopts.date1904=parsexmlbool(wb.WBProps.date1904,"date1904")}var wbnsregex=/<\w+:workbook/;function parse_wb_xml(data,opts){var wb={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""};var pass=false,xmlns="xmlns";data.match(tagregex).forEach(function xml_wb(x){var y=parsexmltag(x);switch(strip_ns(y[0])){case"<?xml":break;case"<workbook":if(x.match(wbnsregex))xmlns="xmlns"+x.match(/<(\w+):/)[1];wb.xmlns=y[xmlns];break;case"</workbook>":break;case"<fileVersion":delete y[0];wb.AppVersion=y;break;case"<fileVersion/>":break;case"<fileSharing":case"<fileSharing/>":break;case"<workbookPr":delete y[0];wb.WBProps=y;break;case"<workbookPr/>":delete y[0];wb.WBProps=y;break;case"<workbookProtection":break;case"<workbookProtection/>":break;case"<bookViews>":case"</bookViews>":break;case"<workbookView":delete y[0];wb.WBView.push(y);break;case"<sheets>":case"</sheets>":break;case"<sheet":delete y[0];y.name=utf8read(y.name);wb.Sheets.push(y);break;case"<functionGroups":case"<functionGroups/>":break;case"<functionGroup":break;case"<externalReferences":case"</externalReferences>":case"<externalReferences>":break;case"<externalReference":break;case"<definedNames/>":break;case"<definedNames>":case"<definedNames":pass=true;break;case"</definedNames>":pass=false;break;case"<definedName":case"<definedName/>":case"</definedName>":break;case"<calcPr":delete y[0];wb.CalcPr=y;break;case"<calcPr/>":delete y[0];wb.CalcPr=y;break;case"<oleSize":break;case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break;case"<customWorkbookView":case"</customWorkbookView>":break;case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":break;case"<pivotCache":break;case"<smartTagPr":case"<smartTagPr/>":break;case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":break;case"<smartTagType":break;case"<webPublishing":case"<webPublishing/>":break;case"<fileRecoveryPr":case"<fileRecoveryPr/>":break;case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":break;case"<webPublishObject":break;case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":pass=true;break;case"</ext>":pass=false;break;case"<ArchID":break;case"<AlternateContent":pass=true;break;case"</AlternateContent>":pass=false;break;default:if(!pass&&opts.WTF)throw"unrecognized "+y[0]+" in workbook"}});if(XMLNS.main.indexOf(wb.xmlns)===-1)throw new Error("Unknown Namespace: "+wb.xmlns);parse_wb_defaults(wb);return wb}var WB_XML_ROOT=writextag("workbook",null,{xmlns:XMLNS.main[0],"xmlns:r":XMLNS.r});function safe1904(wb){try{return parsexmlbool(wb.Workbook.WBProps.date1904)?"true":"false"}catch(e){return"false"}}function write_wb_xml(wb,opts){var o=[XML_HEADER];o[o.length]=WB_XML_ROOT;o[o.length]=writextag("workbookPr",null,{date1904:safe1904(wb)});o[o.length]="<sheets>";for(var i=0;i!=wb.SheetNames.length;++i)o[o.length]=writextag("sheet",null,{name:wb.SheetNames[i].substr(0,31),sheetId:""+(i+1),"r:id":"rId"+(i+1)});o[o.length]="</sheets>";if(o.length>2){o[o.length]="</workbook>";o[1]=o[1].replace("/>",">")}return o.join("")}function parse_BrtBundleSh(data,length){var z={};z.hsState=data.read_shift(4);z.iTabID=data.read_shift(4);z.strRelID=parse_RelID(data,length-8);z.name=parse_XLWideString(data);return z}function write_BrtBundleSh(data,o){if(!o)o=new_buf(127);o.write_shift(4,data.hsState);o.write_shift(4,data.iTabID);write_RelID(data.strRelID,o);write_XLWideString(data.name.substr(0,31),o);return o}function parse_BrtWbProp(data,length){data.read_shift(4);var dwThemeVersion=data.read_shift(4);var strName=length>8?parse_XLWideString(data):"";return[dwThemeVersion,strName]}function write_BrtWbProp(data,o){if(!o)o=new_buf(8);o.write_shift(4,0);o.write_shift(4,0);return o}function parse_BrtFRTArchID$(data,length){var o={};data.read_shift(4);o.ArchID=data.read_shift(4);data.l+=length-8;return o}function parse_wb_bin(data,opts){var wb={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""};var pass=false,z;recordhopper(data,function hopper_wb(val,R){switch(R.n){case"BrtBundleSh":wb.Sheets.push(val);break;case"BrtBeginBook":break;case"BrtFileVersion":break;case"BrtWbProp":break;case"BrtACBegin":break;case"BrtAbsPath15":break;case"BrtACEnd":break;case"BrtWbFactoid":break;case"BrtBookProtection":break;case"BrtBeginBookViews":break;case"BrtBookView":break;case"BrtEndBookViews":break;case"BrtBeginBundleShs":break;case"BrtEndBundleShs":break;case"BrtBeginFnGroup":break;case"BrtEndFnGroup":break;case"BrtBeginExternals":break;case"BrtSupSelf":break;case"BrtSupBookSrc":break;case"BrtExternSheet":break;case"BrtEndExternals":break;case"BrtName":break;case"BrtCalcProp":break;case"BrtUserBookView":break;case"BrtBeginPivotCacheIDs":break;case"BrtBeginPivotCacheID":break;case"BrtEndPivotCacheID":break;case"BrtEndPivotCacheIDs":break;case"BrtWebOpt":break;case"BrtFileRecover":break;case"BrtFileSharing":break;case"BrtBeginSmartTagTypes":break;case"BrtSmartTagType":break;case"BrtEndSmartTagTypes":break;case"BrtFRTBegin":pass=true;break;case"BrtFRTArchID$":break;case"BrtWorkBookPr15":break;case"BrtFRTEnd":pass=false;break;case"BrtEndBook":break;default:if(!pass||opts.WTF)throw new Error("Unexpected record "+R.n)}});parse_wb_defaults(wb);return wb}function write_BUNDLESHS(ba,wb,opts){write_record(ba,"BrtBeginBundleShs");for(var idx=0;idx!=wb.SheetNames.length;++idx){var d={hsState:0,iTabID:idx+1,strRelID:"rId"+(idx+1),name:wb.SheetNames[idx]};write_record(ba,"BrtBundleSh",write_BrtBundleSh(d))}write_record(ba,"BrtEndBundleShs")}function write_BrtFileVersion(data,o){if(!o)o=new_buf(127);for(var i=0;i!=4;++i)o.write_shift(4,0);write_XLWideString("SheetJS",o);write_XLWideString(XLSX.version,o);write_XLWideString(XLSX.version,o);write_XLWideString("7262",o);o.length=o.l;return o}function write_BOOKVIEWS(ba,wb,opts){write_record(ba,"BrtBeginBookViews");write_record(ba,"BrtEndBookViews")}function write_BrtCalcProp(data,o){if(!o)o=new_buf(26);o.write_shift(4,0);o.write_shift(4,1);o.write_shift(4,0);write_Xnum(0,o);o.write_shift(-4,1023);o.write_shift(1,51);o.write_shift(1,0);return o}function write_BrtFileRecover(data,o){if(!o)o=new_buf(1);o.write_shift(1,0);return o}function write_wb_bin(wb,opts){var ba=buf_array();write_record(ba,"BrtBeginBook");write_record(ba,"BrtFileVersion",write_BrtFileVersion());write_record(ba,"BrtWbProp",write_BrtWbProp());write_BOOKVIEWS(ba,wb,opts);write_BUNDLESHS(ba,wb,opts);write_record(ba,"BrtCalcProp",write_BrtCalcProp());write_record(ba,"BrtFileRecover",write_BrtFileRecover());write_record(ba,"BrtEndBook");return ba.end()}function parse_wb(data,name,opts){return(name.substr(-4)===".bin"?parse_wb_bin:parse_wb_xml)(data,opts)}function parse_ws(data,name,opts,rels){return(name.substr(-4)===".bin"?parse_ws_bin:parse_ws_xml)(data,opts,rels)}function parse_sty(data,name,opts){return(name.substr(-4)===".bin"?parse_sty_bin:parse_sty_xml)(data,opts)}function parse_theme(data,name,opts){return parse_theme_xml(data,opts)}function parse_sst(data,name,opts){return(name.substr(-4)===".bin"?parse_sst_bin:parse_sst_xml)(data,opts)}function parse_cmnt(data,name,opts){return(name.substr(-4)===".bin"?parse_comments_bin:parse_comments_xml)(data,opts)}function parse_cc(data,name,opts){return(name.substr(-4)===".bin"?parse_cc_bin:parse_cc_xml)(data,opts)}function write_wb(wb,name,opts){return(name.substr(-4)===".bin"?write_wb_bin:write_wb_xml)(wb,opts)}function write_ws(data,name,opts,wb){return(name.substr(-4)===".bin"?write_ws_bin:write_ws_xml)(data,opts,wb)}function write_sty(data,name,opts){return(name.substr(-4)===".bin"?write_sty_bin:write_sty_xml)(data,opts)}function write_sst(data,name,opts){return(name.substr(-4)===".bin"?write_sst_bin:write_sst_xml)(data,opts)}var attregexg2=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;var attregex2=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;var _chr=function(c){return String.fromCharCode(c)};function xlml_parsexmltag(tag,skip_root){var words=tag.split(/\s+/);var z=[];if(!skip_root)z[0]=words[0];if(words.length===1)return z;var m=tag.match(attregexg2),y,j,w,i;if(m)for(i=0;i!=m.length;++i){y=m[i].match(attregex2);if((j=y[1].indexOf(":"))===-1)z[y[1]]=y[2].substr(1,y[2].length-2);else{if(y[1].substr(0,6)==="xmlns:")w="xmlns"+y[1].substr(6);else w=y[1].substr(j+1);z[w]=y[2].substr(1,y[2].length-2)}}return z}function xlml_parsexmltagobj(tag){var words=tag.split(/\s+/);var z={};if(words.length===1)return z;var m=tag.match(attregexg2),y,j,w,i;if(m)for(i=0;i!=m.length;++i){y=m[i].match(attregex2);if((j=y[1].indexOf(":"))===-1)z[y[1]]=y[2].substr(1,y[2].length-2);else{if(y[1].substr(0,6)==="xmlns:")w="xmlns"+y[1].substr(6);else w=y[1].substr(j+1);z[w]=y[2].substr(1,y[2].length-2)}}return z}function xlml_format(format,value){var fmt=XLMLFormatMap[format]||unescapexml(format);if(fmt==="General")return SSF._general(value);return SSF.format(fmt,value)}function xlml_set_custprop(Custprops,Rn,cp,val){switch((cp[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":val=parsexmlbool(val);break;case"i2":case"int":val=parseInt(val,10);break;case"r4":case"float":val=parseFloat(val);break;case"date":case"dateTime.tz":val=new Date(val);break;case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break;default:throw"bad custprop:"+cp[0]}Custprops[unescapexml(Rn[3])]=val}function safe_format_xlml(cell,nf,o){try{if(cell.t==="e"){cell.w=cell.w||BErr[cell.v]}else if(nf==="General"){if(cell.t==="n"){if((cell.v|0)===cell.v)cell.w=SSF._general_int(cell.v);else cell.w=SSF._general_num(cell.v)}else cell.w=SSF._general(cell.v)}else cell.w=xlml_format(nf||"General",cell.v);if(o.cellNF)cell.z=XLMLFormatMap[nf]||nf||"General"}catch(e){if(o.WTF)throw e}}function process_style_xlml(styles,stag,opts){if(opts.cellStyles){if(stag.Interior){var I=stag.Interior;if(I.Pattern)I.patternType=XLMLPatternTypeMap[I.Pattern]||I.Pattern}}styles[stag.ID]=stag}function parse_xlml_data(xml,ss,data,cell,base,styles,csty,row,o){var nf="General",sid=cell.StyleID,S={};o=o||{};var interiors=[];if(sid===undefined&&row)sid=row.StyleID;if(sid===undefined&&csty)sid=csty.StyleID;while(styles[sid]!==undefined){if(styles[sid].nf)nf=styles[sid].nf;if(styles[sid].Interior)interiors.push(styles[sid].Interior);if(!styles[sid].Parent)break;sid=styles[sid].Parent}switch(data.Type){case"Boolean":cell.t="b";cell.v=parsexmlbool(xml);break;case"String":cell.t="s";cell.r=xlml_fixstr(unescapexml(xml));cell.v=xml.indexOf("<")>-1?ss:cell.r;break;case"DateTime":cell.v=(Date.parse(xml)-new Date(Date.UTC(1899,11,30)))/(24*60*60*1e3);if(cell.v!==cell.v)cell.v=unescapexml(xml);else if(cell.v>=1&&cell.v<60)cell.v=cell.v-1;if(!nf||nf=="General")nf="yyyy-mm-dd";case"Number":if(cell.v===undefined)cell.v=+xml;if(!cell.t)cell.t="n";break;case"Error":cell.t="e";cell.v=RBErr[xml];cell.w=xml;break;default:cell.t="s";cell.v=xlml_fixstr(ss);break}safe_format_xlml(cell,nf,o);if(o.cellFormula!=null&&cell.Formula){cell.f=rc_to_a1(unescapexml(cell.Formula),base);cell.Formula=undefined}if(o.cellStyles){interiors.forEach(function(x){if(!S.patternType&&x.patternType)S.patternType=x.patternType});cell.s=S}cell.ixfe=cell.StyleID!==undefined?cell.StyleID:"Default"}function xlml_clean_comment(comment){comment.t=comment.v;comment.v=comment.w=comment.ixfe=undefined}function xlml_normalize(d){if(has_buf&&Buffer.isBuffer(d))return d.toString("utf8");if(typeof d==="string")return d;throw"badf"}var xlmlregex=/<(\/?)([a-z0-9]*:|)(\w+)[^>]*>/gm;function parse_xlml_xml(d,opts){var str=xlml_normalize(d);var Rn;var state=[],tmp;var sheets={},sheetnames=[],cursheet={},sheetname="";var table={},cell={},row={},dtag,didx;var c=0,r=0;var refguess={s:{r:1e6,c:1e6},e:{r:0,c:0}};var styles={},stag={};var ss="",fidx=0;var mergecells=[];var Props={},Custprops={},pidx=0,cp={};var comments=[],comment={};var cstys=[],csty;xlmlregex.lastIndex=0;while(Rn=xlmlregex.exec(str))switch(Rn[3]){case"Data":if(state[state.length-1][1])break;if(Rn[1]==="/")parse_xlml_data(str.slice(didx,Rn.index),ss,dtag,state[state.length-1][0]=="Comment"?comment:cell,{c:c,r:r},styles,cstys[c],row,opts);else{ss="";dtag=xlml_parsexmltag(Rn[0]);didx=Rn.index+Rn[0].length}break;case"Cell":if(Rn[1]==="/"){if(comments.length>0)cell.c=comments;if((!opts.sheetRows||opts.sheetRows>r)&&cell.v!==undefined)cursheet[encode_col(c)+encode_row(r)]=cell;if(cell.HRef){cell.l={Target:cell.HRef,tooltip:cell.HRefScreenTip};cell.HRef=cell.HRefScreenTip=undefined}if(cell.MergeAcross||cell.MergeDown){var cc=c+(parseInt(cell.MergeAcross,10)|0);var rr=r+(parseInt(cell.MergeDown,10)|0);mergecells.push({s:{c:c,r:r},e:{c:cc,r:rr}})}++c;if(cell.MergeAcross)c+=+cell.MergeAcross}else{cell=xlml_parsexmltagobj(Rn[0]);if(cell.Index)c=+cell.Index-1;if(c<refguess.s.c)refguess.s.c=c;if(c>refguess.e.c)refguess.e.c=c;if(Rn[0].substr(-2)==="/>")++c;comments=[]}break;case"Row":if(Rn[1]==="/"||Rn[0].substr(-2)==="/>"){if(r<refguess.s.r)refguess.s.r=r;if(r>refguess.e.r)refguess.e.r=r;if(Rn[0].substr(-2)==="/>"){row=xlml_parsexmltag(Rn[0]);if(row.Index)r=+row.Index-1}c=0;++r}else{row=xlml_parsexmltag(Rn[0]);if(row.Index)r=+row.Index-1}break;case"Worksheet":if(Rn[1]==="/"){if((tmp=state.pop())[0]!==Rn[3])throw"Bad state: "+tmp;sheetnames.push(sheetname);if(refguess.s.r<=refguess.e.r&&refguess.s.c<=refguess.e.c)cursheet["!ref"]=encode_range(refguess);if(mergecells.length)cursheet["!merges"]=mergecells;sheets[sheetname]=cursheet}else{refguess={s:{r:1e6,c:1e6},e:{r:0,c:0}};r=c=0;state.push([Rn[3],false]);tmp=xlml_parsexmltag(Rn[0]);sheetname=tmp.Name;cursheet={};mergecells=[]}break;case"Table":if(Rn[1]==="/"){if((tmp=state.pop())[0]!==Rn[3])throw"Bad state: "+tmp}else if(Rn[0].slice(-2)=="/>")break;else{table=xlml_parsexmltag(Rn[0]);state.push([Rn[3],false]);cstys=[]}break;case"Style":if(Rn[1]==="/")process_style_xlml(styles,stag,opts);else stag=xlml_parsexmltag(Rn[0]);break;case"NumberFormat":stag.nf=xlml_parsexmltag(Rn[0]).Format||"General";break;case"Column":if(state[state.length-1][0]!=="Table")break;csty=xlml_parsexmltag(Rn[0]);cstys[csty.Index-1||cstys.length]=csty;for(var i=0;i<+csty.Span;++i)cstys[cstys.length]=csty;break;case"NamedRange":break;case"NamedCell":break;case"B":break;case"I":break;case"U":break;case"S":break;case"Sub":break;case"Sup":break;case"Span":break;case"Border":break;case"Alignment":break;case"Borders":break;case"Font":if(Rn[0].substr(-2)==="/>")break;else if(Rn[1]==="/")ss+=str.slice(fidx,Rn.index);else fidx=Rn.index+Rn[0].length;break;case"Interior":if(!opts.cellStyles)break;stag.Interior=xlml_parsexmltag(Rn[0]);break;case"Protection":break;case"Author":case"Title":case"Description":case"Created":case"Keywords":case"Subject":case"Category":case"Company":case"LastAuthor":case"LastSaved":case"LastPrinted":case"Version":case"Revision":case"TotalTime":case"HyperlinkBase":case"Manager":if(Rn[0].substr(-2)==="/>")break;else if(Rn[1]==="/")xlml_set_prop(Props,Rn[3],str.slice(pidx,Rn.index));else pidx=Rn.index+Rn[0].length;break;case"Paragraphs":break;case"Styles":case"Workbook":if(Rn[1]==="/"){if((tmp=state.pop())[0]!==Rn[3])throw"Bad state: "+tmp}else state.push([Rn[3],false]);break;case"Comment":if(Rn[1]==="/"){if((tmp=state.pop())[0]!==Rn[3])throw"Bad state: "+tmp;xlml_clean_comment(comment);comments.push(comment)}else{state.push([Rn[3],false]);tmp=xlml_parsexmltag(Rn[0]);comment={a:tmp.Author}}break;case"Name":break;case"ComponentOptions":case"DocumentProperties":case"CustomDocumentProperties":case"OfficeDocumentSettings":case"PivotTable":case"PivotCache":case"Names":case"MapInfo":case"PageBreaks":case"QueryTable":case"DataValidation":case"AutoFilter":case"Sorting":case"Schema":case"data":case"ConditionalFormatting":case"SmartTagType":case"SmartTags":case"ExcelWorkbook":case"WorkbookOptions":case"WorksheetOptions":if(Rn[1]==="/"){if((tmp=state.pop())[0]!==Rn[3])throw"Bad state: "+tmp}else if(Rn[0].charAt(Rn[0].length-2)!=="/")state.push([Rn[3],true]);break;default:var seen=true;switch(state[state.length-1][0]){case"OfficeDocumentSettings":switch(Rn[3]){case"AllowPNG":break;case"RemovePersonalInformation":break;case"DownloadComponents":break;case"LocationOfComponents":break;case"Colors":break;case"Color":break;case"Index":break;case"RGB":break;case"PixelsPerInch":break;case"TargetScreenSize":break;case"ReadOnlyRecommended":break;default:seen=false}break;case"ComponentOptions":switch(Rn[3]){case"Toolbar":break;case"HideOfficeLogo":break;case"SpreadsheetAutoFit":break;case"Label":break;case"Caption":break;case"MaxHeight":break;case"MaxWidth":break;case"NextSheetNumber":break;default:seen=false}break;case"ExcelWorkbook":switch(Rn[3]){case"WindowHeight":break;case"WindowWidth":break;case"WindowTopX":break;case"WindowTopY":break;case"TabRatio":break;case"ProtectStructure":break;case"ProtectWindows":break;case"ActiveSheet":break;case"DisplayInkNotes":break;case"FirstVisibleSheet":break;case"SupBook":break;case"SheetName":break;
case"SheetIndex":break;case"SheetIndexFirst":break;case"SheetIndexLast":break;case"Dll":break;case"AcceptLabelsInFormulas":break;case"DoNotSaveLinkValues":break;case"Date1904":break;case"Iteration":break;case"MaxIterations":break;case"MaxChange":break;case"Path":break;case"Xct":break;case"Count":break;case"SelectedSheets":break;case"Calculation":break;case"Uncalced":break;case"StartupPrompt":break;case"Crn":break;case"ExternName":break;case"Formula":break;case"ColFirst":break;case"ColLast":break;case"WantAdvise":break;case"Boolean":break;case"Error":break;case"Text":break;case"OLE":break;case"NoAutoRecover":break;case"PublishObjects":break;case"DoNotCalculateBeforeSave":break;case"Number":break;case"RefModeR1C1":break;case"EmbedSaveSmartTags":break;default:seen=false}break;case"WorkbookOptions":switch(Rn[3]){case"OWCVersion":break;case"Height":break;case"Width":break;default:seen=false}break;case"WorksheetOptions":switch(Rn[3]){case"Unsynced":break;case"Visible":break;case"Print":break;case"Panes":break;case"Scale":break;case"Pane":break;case"Number":break;case"Layout":break;case"Header":break;case"Footer":break;case"PageSetup":break;case"PageMargins":break;case"Selected":break;case"ProtectObjects":break;case"EnableSelection":break;case"ProtectScenarios":break;case"ValidPrinterInfo":break;case"HorizontalResolution":break;case"VerticalResolution":break;case"NumberofCopies":break;case"ActiveRow":break;case"ActiveCol":break;case"ActivePane":break;case"TopRowVisible":break;case"TopRowBottomPane":break;case"LeftColumnVisible":break;case"LeftColumnRightPane":break;case"FitToPage":break;case"RangeSelection":break;case"PaperSizeIndex":break;case"PageLayoutZoom":break;case"PageBreakZoom":break;case"FilterOn":break;case"DoNotDisplayGridlines":break;case"SplitHorizontal":break;case"SplitVertical":break;case"FreezePanes":break;case"FrozenNoSplit":break;case"FitWidth":break;case"FitHeight":break;case"CommentsLayout":break;case"Zoom":break;case"LeftToRight":break;case"Gridlines":break;case"AllowSort":break;case"AllowFilter":break;case"AllowInsertRows":break;case"AllowDeleteRows":break;case"AllowInsertCols":break;case"AllowDeleteCols":break;case"AllowInsertHyperlinks":break;case"AllowFormatCells":break;case"AllowSizeCols":break;case"AllowSizeRows":break;case"NoSummaryRowsBelowDetail":break;case"TabColorIndex":break;case"DoNotDisplayHeadings":break;case"ShowPageLayoutZoom":break;case"NoSummaryColumnsRightDetail":break;case"BlackAndWhite":break;case"DoNotDisplayZeros":break;case"DisplayPageBreak":break;case"RowColHeadings":break;case"DoNotDisplayOutline":break;case"NoOrientation":break;case"AllowUsePivotTables":break;case"ZeroHeight":break;case"ViewableRange":break;case"Selection":break;case"ProtectContents":break;default:seen=false}break;case"PivotTable":case"PivotCache":switch(Rn[3]){case"ImmediateItemsOnDrop":break;case"ShowPageMultipleItemLabel":break;case"CompactRowIndent":break;case"Location":break;case"PivotField":break;case"Orientation":break;case"LayoutForm":break;case"LayoutSubtotalLocation":break;case"LayoutCompactRow":break;case"Position":break;case"PivotItem":break;case"DataType":break;case"DataField":break;case"SourceName":break;case"ParentField":break;case"PTLineItems":break;case"PTLineItem":break;case"CountOfSameItems":break;case"Item":break;case"ItemType":break;case"PTSource":break;case"CacheIndex":break;case"ConsolidationReference":break;case"FileName":break;case"Reference":break;case"NoColumnGrand":break;case"NoRowGrand":break;case"BlankLineAfterItems":break;case"Hidden":break;case"Subtotal":break;case"BaseField":break;case"MapChildItems":break;case"Function":break;case"RefreshOnFileOpen":break;case"PrintSetTitles":break;case"MergeLabels":break;case"DefaultVersion":break;case"RefreshName":break;case"RefreshDate":break;case"RefreshDateCopy":break;case"VersionLastRefresh":break;case"VersionLastUpdate":break;case"VersionUpdateableMin":break;case"VersionRefreshableMin":break;case"Calculation":break;default:seen=false}break;case"PageBreaks":switch(Rn[3]){case"ColBreaks":break;case"ColBreak":break;case"RowBreaks":break;case"RowBreak":break;case"ColStart":break;case"ColEnd":break;case"RowEnd":break;default:seen=false}break;case"AutoFilter":switch(Rn[3]){case"AutoFilterColumn":break;case"AutoFilterCondition":break;case"AutoFilterAnd":break;case"AutoFilterOr":break;default:seen=false}break;case"QueryTable":switch(Rn[3]){case"Id":break;case"AutoFormatFont":break;case"AutoFormatPattern":break;case"QuerySource":break;case"QueryType":break;case"EnableRedirections":break;case"RefreshedInXl9":break;case"URLString":break;case"HTMLTables":break;case"Connection":break;case"CommandText":break;case"RefreshInfo":break;case"NoTitles":break;case"NextId":break;case"ColumnInfo":break;case"OverwriteCells":break;case"DoNotPromptForFile":break;case"TextWizardSettings":break;case"Source":break;case"Number":break;case"Decimal":break;case"ThousandSeparator":break;case"TrailingMinusNumbers":break;case"FormatSettings":break;case"FieldType":break;case"Delimiters":break;case"Tab":break;case"Comma":break;case"AutoFormatName":break;case"VersionLastEdit":break;case"VersionLastRefresh":break;default:seen=false}break;case"Sorting":case"ConditionalFormatting":case"DataValidation":switch(Rn[3]){case"Range":break;case"Type":break;case"Min":break;case"Max":break;case"Sort":break;case"Descending":break;case"Order":break;case"CaseSensitive":break;case"Value":break;case"ErrorStyle":break;case"ErrorMessage":break;case"ErrorTitle":break;case"CellRangeList":break;case"InputMessage":break;case"InputTitle":break;case"ComboHide":break;case"InputHide":break;case"Condition":break;case"Qualifier":break;case"UseBlank":break;case"Value1":break;case"Value2":break;case"Format":break;default:seen=false}break;case"MapInfo":case"Schema":case"data":switch(Rn[3]){case"Map":break;case"Entry":break;case"Range":break;case"XPath":break;case"Field":break;case"XSDType":break;case"FilterOn":break;case"Aggregate":break;case"ElementType":break;case"AttributeType":break;case"schema":case"element":case"complexType":case"datatype":case"all":case"attribute":case"extends":break;case"row":break;default:seen=false}break;case"SmartTags":break;default:seen=false;break}if(seen)break;if(!state[state.length-1][1])throw"Unrecognized tag: "+Rn[3]+"|"+state.join("|");if(state[state.length-1][0]==="CustomDocumentProperties"){if(Rn[0].substr(-2)==="/>")break;else if(Rn[1]==="/")xlml_set_custprop(Custprops,Rn,cp,str.slice(pidx,Rn.index));else{cp=Rn;pidx=Rn.index+Rn[0].length}break}if(opts.WTF)throw"Unrecognized tag: "+Rn[3]+"|"+state.join("|")}var out={};if(!opts.bookSheets&&!opts.bookProps)out.Sheets=sheets;out.SheetNames=sheetnames;out.SSF=SSF.get_table();out.Props=Props;out.Custprops=Custprops;return out}function parse_xlml(data,opts){fix_read_opts(opts=opts||{});switch(opts.type||"base64"){case"base64":return parse_xlml_xml(Base64.decode(data),opts);case"binary":case"buffer":case"file":return parse_xlml_xml(data,opts);case"array":return parse_xlml_xml(data.map(_chr).join(""),opts)}}function write_xlml(wb,opts){}function parse_compobj(obj){var v={};var o=obj.content;var l=28,m;m=__lpstr(o,l);l+=4+__readUInt32LE(o,l);v.UserType=m;m=__readUInt32LE(o,l);l+=4;switch(m){case 0:break;case 4294967295:case 4294967294:l+=4;break;default:if(m>400)throw new Error("Unsupported Clipboard: "+m.toString(16));l+=m}m=__lpstr(o,l);l+=m.length===0?0:5+m.length;v.Reserved1=m;if((m=__readUInt32LE(o,l))!==1907550708)return v;throw"Unsupported Unicode Extension"}function slurp(R,blob,length,opts){var l=length;var bufs=[];var d=blob.slice(blob.l,blob.l+l);if(opts&&opts.enc&&opts.enc.insitu_decrypt)switch(R.n){case"BOF":case"FilePass":case"FileLock":case"InterfaceHdr":case"RRDInfo":case"RRDHead":case"UsrExcl":break;default:if(d.length===0)break;opts.enc.insitu_decrypt(d)}bufs.push(d);blob.l+=l;var next=XLSRecordEnum[__readUInt16LE(blob,blob.l)];while(next!=null&&next.n==="Continue"){l=__readUInt16LE(blob,blob.l+2);bufs.push(blob.slice(blob.l+4,blob.l+4+l));blob.l+=4+l;next=XLSRecordEnum[__readUInt16LE(blob,blob.l)]}var b=bconcat(bufs);prep_blob(b,0);var ll=0;b.lens=[];for(var j=0;j<bufs.length;++j){b.lens.push(ll);ll+=bufs[j].length}return R.f(b,b.length,opts)}function safe_format_xf(p,opts,date1904){if(!p.XF)return;try{var fmtid=p.XF.ifmt||0;if(p.t==="e"){p.w=p.w||BErr[p.v]}else if(fmtid===0){if(p.t==="n"){if((p.v|0)===p.v)p.w=SSF._general_int(p.v);else p.w=SSF._general_num(p.v)}else p.w=SSF._general(p.v)}else p.w=SSF.format(fmtid,p.v,{date1904:date1904||false});if(opts.cellNF)p.z=SSF._table[fmtid]}catch(e){if(opts.WTF)throw e}}function make_cell(val,ixfe,t){return{v:val,ixfe:ixfe,t:t}}function parse_workbook(blob,options){var wb={opts:{}};var Sheets={};var out={};var Directory={};var found_sheet=false;var range={};var last_formula=null;var sst=[];var cur_sheet="";var Preamble={};var lastcell,last_cell,cc,cmnt,rng,rngC,rngR;var shared_formulae={};var array_formulae=[];var temp_val;var country;var cell_valid=true;var XFs=[];var palette=[];var get_rgb=function getrgb(icv){if(icv<8)return XLSIcv[icv];if(icv<64)return palette[icv-8]||XLSIcv[icv];return XLSIcv[icv]};var process_cell_style=function pcs(cell,line){var xfd=line.XF.data;if(!xfd||!xfd.patternType)return;line.s={};line.s.patternType=xfd.patternType;var t;if(t=rgb2Hex(get_rgb(xfd.icvFore))){line.s.fgColor={rgb:t}}if(t=rgb2Hex(get_rgb(xfd.icvBack))){line.s.bgColor={rgb:t}}};var addcell=function addcell(cell,line,options){if(!cell_valid)return;if(options.cellStyles&&line.XF&&line.XF.data)process_cell_style(cell,line);lastcell=cell;last_cell=encode_cell(cell);if(range.s){if(cell.r<range.s.r)range.s.r=cell.r;if(cell.c<range.s.c)range.s.c=cell.c}if(range.e){if(cell.r+1>range.e.r)range.e.r=cell.r+1;if(cell.c+1>range.e.c)range.e.c=cell.c+1}if(options.sheetRows&&lastcell.r>=options.sheetRows)cell_valid=false;else out[last_cell]=line};var opts={enc:false,sbcch:0,snames:[],sharedf:shared_formulae,arrayf:array_formulae,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,wtf:false};if(options.password)opts.password=options.password;var mergecells=[];var objects=[];var supbooks=[[]];var sbc=0,sbci=0,sbcli=0;supbooks.SheetNames=opts.snames;supbooks.sharedf=opts.sharedf;supbooks.arrayf=opts.arrayf;var last_Rn="";var file_depth=0;opts.codepage=1200;set_cp(1200);while(blob.l<blob.length-1){var s=blob.l;var RecordType=blob.read_shift(2);if(RecordType===0&&last_Rn==="EOF")break;var length=blob.l===blob.length?0:blob.read_shift(2),y;var R=XLSRecordEnum[RecordType];if(R&&R.f){if(options.bookSheets){if(last_Rn==="BoundSheet8"&&R.n!=="BoundSheet8")break}last_Rn=R.n;if(R.r===2||R.r==12){var rt=blob.read_shift(2);length-=2;if(!opts.enc&&rt!==RecordType)throw"rt mismatch";if(R.r==12){blob.l+=10;length-=10}}var val;if(R.n==="EOF")val=R.f(blob,length,opts);else val=slurp(R,blob,length,opts);var Rn=R.n;if(opts.biff===5||opts.biff===2)switch(Rn){case"Lbl":Rn="Label";break}switch(Rn){case"Date1904":wb.opts.Date1904=val;break;case"WriteProtect":wb.opts.WriteProtect=true;break;case"FilePass":if(!opts.enc)blob.l=0;opts.enc=val;if(opts.WTF)console.error(val);if(!options.password)throw new Error("File is password-protected");if(val.Type!==0)throw new Error("Encryption scheme unsupported");if(!val.valid)throw new Error("Password is incorrect");break;case"WriteAccess":opts.lastuser=val;break;case"FileSharing":break;case"CodePage":if(val===21010)val=1200;else if(val===32769)val=1252;opts.codepage=val;set_cp(val);break;case"RRTabId":opts.rrtabid=val;break;case"WinProtect":opts.winlocked=val;break;case"Template":break;case"RefreshAll":wb.opts.RefreshAll=val;break;case"BookBool":break;case"UsesELFs":break;case"MTRSettings":{if(val[0]&&val[1])throw"Unsupported threads: "+val}break;case"CalcCount":wb.opts.CalcCount=val;break;case"CalcDelta":wb.opts.CalcDelta=val;break;case"CalcIter":wb.opts.CalcIter=val;break;case"CalcMode":wb.opts.CalcMode=val;break;case"CalcPrecision":wb.opts.CalcPrecision=val;break;case"CalcSaveRecalc":wb.opts.CalcSaveRecalc=val;break;case"CalcRefMode":opts.CalcRefMode=val;break;case"Uncalced":break;case"ForceFullCalculation":wb.opts.FullCalc=val;break;case"WsBool":break;case"XF":XFs.push(val);break;case"ExtSST":break;case"BookExt":break;case"RichTextStream":break;case"BkHim":break;case"SupBook":supbooks[++sbc]=[val];sbci=0;break;case"ExternName":supbooks[sbc][++sbci]=val;break;case"Index":break;case"Lbl":supbooks[0][++sbcli]=val;break;case"ExternSheet":supbooks[sbc]=supbooks[sbc].concat(val);sbci+=val.length;break;case"Protect":out["!protect"]=val;break;case"Password":if(val!==0&&opts.WTF)console.error("Password verifier: "+val);break;case"Prot4Rev":case"Prot4RevPass":break;case"BoundSheet8":{Directory[val.pos]=val;opts.snames.push(val.name)}break;case"EOF":{if(--file_depth)break;if(range.e){out["!range"]=range;if(range.e.r>0&&range.e.c>0){range.e.r--;range.e.c--;out["!ref"]=encode_range(range);range.e.r++;range.e.c++}if(mergecells.length>0)out["!merges"]=mergecells;if(objects.length>0)out["!objects"]=objects}if(cur_sheet==="")Preamble=out;else Sheets[cur_sheet]=out;out={}}break;case"BOF":{if(opts.biff!==8);else if(val.BIFFVer===1280)opts.biff=5;else if(val.BIFFVer===2)opts.biff=2;else if(val.BIFFVer===7)opts.biff=2;if(file_depth++)break;cell_valid=true;out={};if(opts.biff===2){if(cur_sheet==="")cur_sheet="Sheet1";range={s:{r:0,c:0},e:{r:0,c:0}}}else cur_sheet=(Directory[s]||{name:""}).name;mergecells=[];objects=[]}break;case"Number":case"BIFF2NUM":{temp_val={ixfe:val.ixfe,XF:XFs[val.ixfe],v:val.val,t:"n"};if(temp_val.XF)safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options)}break;case"BoolErr":{temp_val={ixfe:val.ixfe,XF:XFs[val.ixfe],v:val.val,t:val.t};if(temp_val.XF)safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options)}break;case"RK":{temp_val={ixfe:val.ixfe,XF:XFs[val.ixfe],v:val.rknum,t:"n"};if(temp_val.XF)safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options)}break;case"MulRk":{for(var j=val.c;j<=val.C;++j){var ixfe=val.rkrec[j-val.c][0];temp_val={ixfe:ixfe,XF:XFs[ixfe],v:val.rkrec[j-val.c][1],t:"n"};if(temp_val.XF)safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:j,r:val.r},temp_val,options)}}break;case"Formula":{switch(val.val){case"String":last_formula=val;break;case"Array Formula":throw"Array Formula unsupported";default:temp_val={v:val.val,ixfe:val.cell.ixfe,t:val.tt};temp_val.XF=XFs[temp_val.ixfe];if(options.cellFormula)temp_val.f="="+stringify_formula(val.formula,range,val.cell,supbooks,opts);if(temp_val.XF)safe_format_xf(temp_val,options,wb.opts.Date1904);addcell(val.cell,temp_val,options);last_formula=val}}break;case"String":{if(last_formula){last_formula.val=val;temp_val={v:last_formula.val,ixfe:last_formula.cell.ixfe,t:"s"};temp_val.XF=XFs[temp_val.ixfe];if(options.cellFormula)temp_val.f="="+stringify_formula(last_formula.formula,range,last_formula.cell,supbooks,opts);if(temp_val.XF)safe_format_xf(temp_val,options,wb.opts.Date1904);addcell(last_formula.cell,temp_val,options);last_formula=null}}break;case"Array":{array_formulae.push(val)}break;case"ShrFmla":{if(!cell_valid)break;shared_formulae[encode_cell(last_formula.cell)]=val[0]}break;case"LabelSst":temp_val=make_cell(sst[val.isst].t,val.ixfe,"s");temp_val.XF=XFs[temp_val.ixfe];if(temp_val.XF)safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options);break;case"Label":case"BIFF2STR":temp_val=make_cell(val.val,val.ixfe,"s");temp_val.XF=XFs[temp_val.ixfe];if(temp_val.XF)safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options);break;case"Dimensions":{if(file_depth===1)range=val}break;case"SST":{sst=val}break;case"Format":{SSF.load(val[1],val[0])}break;case"MergeCells":mergecells=mergecells.concat(val);break;case"Obj":objects[val.cmo[0]]=opts.lastobj=val;break;case"TxO":opts.lastobj.TxO=val;break;case"HLink":{for(rngR=val[0].s.r;rngR<=val[0].e.r;++rngR)for(rngC=val[0].s.c;rngC<=val[0].e.c;++rngC)if(out[encode_cell({c:rngC,r:rngR})])out[encode_cell({c:rngC,r:rngR})].l=val[1]}break;case"HLinkTooltip":{for(rngR=val[0].s.r;rngR<=val[0].e.r;++rngR)for(rngC=val[0].s.c;rngC<=val[0].e.c;++rngC)if(out[encode_cell({c:rngC,r:rngR})])out[encode_cell({c:rngC,r:rngR})].l.tooltip=val[1]}break;case"Note":{if(opts.biff<=5&&opts.biff>=2)break;cc=out[encode_cell(val[0])];var noteobj=objects[val[2]];if(!cc)break;if(!cc.c)cc.c=[];cmnt={a:val[1],t:noteobj.TxO.t};cc.c.push(cmnt)}break;default:switch(R.n){case"ClrtClient":break;case"XFExt":update_xfext(XFs[val.ixfe],val.ext);break;case"NameCmt":break;case"Header":break;case"Footer":break;case"HCenter":break;case"VCenter":break;case"Pls":break;case"Setup":break;case"DefColWidth":break;case"GCW":break;case"LHRecord":break;case"ColInfo":break;case"Row":break;case"DBCell":break;case"MulBlank":break;case"EntExU2":break;case"SxView":break;case"Sxvd":break;case"SXVI":break;case"SXVDEx":break;case"SxIvd":break;case"SXDI":break;case"SXLI":break;case"SXEx":break;case"QsiSXTag":break;case"Selection":break;case"Feat":break;case"FeatHdr":case"FeatHdr11":break;case"Feature11":case"Feature12":case"List12":break;case"Blank":break;case"Country":country=val;break;case"RecalcId":break;case"DefaultRowHeight":case"DxGCol":break;case"Fbi":case"Fbi2":case"GelFrame":break;case"Font":break;case"XFCRC":break;case"Style":break;case"StyleExt":break;case"Palette":palette=val;break;case"Theme":break;case"ScenarioProtect":break;case"ObjProtect":break;case"CondFmt12":break;case"Table":break;case"TableStyles":break;case"TableStyle":break;case"TableStyleElement":break;case"SXStreamID":break;case"SXVS":break;case"DConRef":break;case"SXAddl":break;case"DConBin":break;case"DConName":break;case"SXPI":break;case"SxFormat":break;case"SxSelect":break;case"SxRule":break;case"SxFilt":break;case"SxItm":break;case"SxDXF":break;case"ScenMan":break;case"DCon":break;case"CellWatch":break;case"PrintRowCol":break;case"PrintGrid":break;case"PrintSize":break;case"XCT":break;case"CRN":break;case"Scl":{}break;case"SheetExt":{}break;case"SheetExtOptional":{}break;case"ObNoMacros":{}break;case"ObProj":{}break;case"CodeName":{}break;case"GUIDTypeLib":{}break;case"WOpt":break;case"PhoneticInfo":break;case"OleObjectSize":break;case"DXF":case"DXFN":case"DXFN12":case"DXFN12List":case"DXFN12NoCB":break;case"Dv":case"DVal":break;case"BRAI":case"Series":case"SeriesText":break;case"DConn":break;case"DbOrParamQry":break;case"DBQueryExt":break;case"IFmtRecord":break;case"CondFmt":case"CF":case"CF12":case"CFEx":break;case"Excel9File":break;case"Units":break;case"InterfaceHdr":case"Mms":case"InterfaceEnd":case"DSF":case"BuiltInFnGroupCount":case"Window1":case"Window2":case"HideObj":case"GridSet":case"Guts":case"UserBView":case"UserSViewBegin":case"UserSViewEnd":case"Pane":break;default:switch(R.n){case"Dat":case"Begin":case"End":case"StartBlock":case"EndBlock":case"Frame":case"Area":case"Axis":case"AxisLine":case"Tick":break;case"AxesUsed":case"CrtLayout12":case"CrtLayout12A":case"CrtLink":case"CrtLine":case"CrtMlFrt":case"CrtMlFrtContinue":break;case"LineFormat":case"AreaFormat":case"Chart":case"Chart3d":case"Chart3DBarShape":case"ChartFormat":case"ChartFrtInfo":break;case"PlotArea":case"PlotGrowth":break;case"SeriesList":case"SerParent":case"SerAuxTrend":break;case"DataFormat":case"SerToCrt":case"FontX":break;case"CatSerRange":case"AxcExt":case"SerFmt":break;case"ShtProps":break;case"DefaultText":case"Text":case"CatLab":break;case"DataLabExtContents":break;case"Legend":case"LegendException":break;case"Pie":case"Scatter":break;case"PieFormat":case"MarkerFormat":break;case"StartObject":case"EndObject":break;case"AlRuns":case"ObjectLink":break;case"SIIndex":break;case"AttachedLabel":case"YMult":break;case"Line":case"Bar":break;case"Surf":break;case"AxisParent":break;case"Pos":break;case"ValueRange":break;case"SXViewEx9":break;case"SXViewLink":break;case"PivotChartBits":break;case"SBaseRef":break;case"TextPropsStream":break;case"LnExt":break;case"MkrExt":break;case"CrtCoopt":break;case"Qsi":case"Qsif":case"Qsir":case"QsiSXTag":break;case"TxtQry":break;case"FilterMode":break;case"AutoFilter":case"AutoFilterInfo":break;case"AutoFilter12":break;case"DropDownObjIds":break;case"Sort":break;case"SortData":break;case"ShapePropsStream":break;case"MsoDrawing":case"MsoDrawingGroup":case"MsoDrawingSelection":break;case"ImData":break;case"WebPub":case"AutoWebPub":case"RightMargin":case"LeftMargin":case"TopMargin":case"BottomMargin":case"HeaderFooter":case"HFPicture":case"PLV":case"HorizontalPageBreaks":case"VerticalPageBreaks":case"Backup":case"CompressPictures":case"Compat12":break;case"Continue":case"ContinueFrt12":break;case"FrtFontList":case"FrtWrapper":break;case"ExternCount":break;case"RString":break;case"TabIdConf":case"Radar":case"RadarArea":case"DropBar":case"Intl":case"CoordList":case"SerAuxErrBar":break;default:switch(R.n){case"SCENARIO":case"DConBin":case"PicF":case"DataLabExt":case"Lel":case"BopPop":case"BopPopCustom":case"RealTimeData":case"Name":break;default:if(options.WTF)throw"Unrecognized Record "+R.n}}}}}else blob.l+=length}var sheetnamesraw=opts.biff===2?["Sheet1"]:Object.keys(Directory).sort(function(a,b){return Number(a)-Number(b)}).map(function(x){return Directory[x].name});var sheetnames=sheetnamesraw.slice();wb.Directory=sheetnamesraw;wb.SheetNames=sheetnamesraw;if(!options.bookSheets)wb.Sheets=Sheets;wb.Preamble=Preamble;wb.Strings=sst;wb.SSF=SSF.get_table();if(opts.enc)wb.Encryption=opts.enc;wb.Metadata={};if(country!==undefined)wb.Metadata.Country=country;return wb}function parse_xlscfb(cfb,options){if(!options)options={};fix_read_opts(options);reset_cp();var CompObj,Summary,Workbook;if(cfb.find){CompObj=cfb.find("!CompObj");Summary=cfb.find("!SummaryInformation");Workbook=cfb.find("/Workbook")}else{prep_blob(cfb,0);Workbook={content:cfb}}if(!Workbook)Workbook=cfb.find("/Book");var CompObjP,SummaryP,WorkbookP;if(CompObj)CompObjP=parse_compobj(CompObj);if(options.bookProps&&!options.bookSheets)WorkbookP={};else{if(Workbook)WorkbookP=parse_workbook(Workbook.content,options,!!Workbook.find);else throw new Error("Cannot find Workbook stream")}if(cfb.find)parse_props(cfb);var props={};for(var y in cfb.Summary)props[y]=cfb.Summary[y];for(y in cfb.DocSummary)props[y]=cfb.DocSummary[y];WorkbookP.Props=WorkbookP.Custprops=props;if(options.bookFiles)WorkbookP.cfb=cfb;WorkbookP.CompObjP=CompObjP;return WorkbookP}function parse_props(cfb){var DSI=cfb.find("!DocumentSummaryInformation");if(DSI)try{cfb.DocSummary=parse_PropertySetStream(DSI,DocSummaryPIDDSI)}catch(e){}var SI=cfb.find("!SummaryInformation");if(SI)try{cfb.Summary=parse_PropertySetStream(SI,SummaryPIDSI)}catch(e){}}var XLSBRecordEnum={0:{n:"BrtRowHdr",f:parse_BrtRowHdr},1:{n:"BrtCellBlank",f:parse_BrtCellBlank},2:{n:"BrtCellRk",f:parse_BrtCellRk},3:{n:"BrtCellError",f:parse_BrtCellError},4:{n:"BrtCellBool",f:parse_BrtCellBool},5:{n:"BrtCellReal",f:parse_BrtCellReal},6:{n:"BrtCellSt",f:parse_BrtCellSt},7:{n:"BrtCellIsst",f:parse_BrtCellIsst},8:{n:"BrtFmlaString",f:parse_BrtFmlaString},9:{n:"BrtFmlaNum",f:parse_BrtFmlaNum},10:{n:"BrtFmlaBool",f:parse_BrtFmlaBool},11:{n:"BrtFmlaError",f:parse_BrtFmlaError},16:{n:"BrtFRTArchID$",f:parse_BrtFRTArchID$},19:{n:"BrtSSTItem",f:parse_RichStr},20:{n:"BrtPCDIMissing",f:parsenoop},21:{n:"BrtPCDINumber",f:parsenoop},22:{n:"BrtPCDIBoolean",f:parsenoop},23:{n:"BrtPCDIError",f:parsenoop},24:{n:"BrtPCDIString",f:parsenoop},25:{n:"BrtPCDIDatetime",f:parsenoop},26:{n:"BrtPCDIIndex",f:parsenoop},27:{n:"BrtPCDIAMissing",f:parsenoop},28:{n:"BrtPCDIANumber",f:parsenoop},29:{n:"BrtPCDIABoolean",f:parsenoop},30:{n:"BrtPCDIAError",f:parsenoop},31:{n:"BrtPCDIAString",f:parsenoop},32:{n:"BrtPCDIADatetime",f:parsenoop},33:{n:"BrtPCRRecord",f:parsenoop},34:{n:"BrtPCRRecordDt",f:parsenoop},35:{n:"BrtFRTBegin",f:parsenoop},36:{n:"BrtFRTEnd",f:parsenoop},37:{n:"BrtACBegin",f:parsenoop},38:{n:"BrtACEnd",f:parsenoop},39:{n:"BrtName",f:parsenoop},40:{n:"BrtIndexRowBlock",f:parsenoop},42:{n:"BrtIndexBlock",f:parsenoop},43:{n:"BrtFont",f:parse_BrtFont},44:{n:"BrtFmt",f:parse_BrtFmt},45:{n:"BrtFill",f:parsenoop},46:{n:"BrtBorder",f:parsenoop},47:{n:"BrtXF",f:parse_BrtXF},48:{n:"BrtStyle",f:parsenoop},49:{n:"BrtCellMeta",f:parsenoop},50:{n:"BrtValueMeta",f:parsenoop},51:{n:"BrtMdb",f:parsenoop},52:{n:"BrtBeginFmd",f:parsenoop},53:{n:"BrtEndFmd",f:parsenoop},54:{n:"BrtBeginMdx",f:parsenoop},55:{n:"BrtEndMdx",f:parsenoop},56:{n:"BrtBeginMdxTuple",f:parsenoop},57:{n:"BrtEndMdxTuple",f:parsenoop},58:{n:"BrtMdxMbrIstr",f:parsenoop},59:{n:"BrtStr",f:parsenoop},60:{n:"BrtColInfo",f:parsenoop},62:{n:"BrtCellRString",f:parsenoop},63:{n:"BrtCalcChainItem$",f:parse_BrtCalcChainItem$},64:{n:"BrtDVal",f:parsenoop},65:{n:"BrtSxvcellNum",f:parsenoop},66:{n:"BrtSxvcellStr",f:parsenoop},67:{n:"BrtSxvcellBool",f:parsenoop},68:{n:"BrtSxvcellErr",f:parsenoop},69:{n:"BrtSxvcellDate",f:parsenoop},70:{n:"BrtSxvcellNil",f:parsenoop},128:{n:"BrtFileVersion",f:parsenoop},129:{n:"BrtBeginSheet",f:parsenoop},130:{n:"BrtEndSheet",f:parsenoop},131:{n:"BrtBeginBook",f:parsenoop,p:0},132:{n:"BrtEndBook",f:parsenoop},133:{n:"BrtBeginWsViews",f:parsenoop},134:{n:"BrtEndWsViews",f:parsenoop},135:{n:"BrtBeginBookViews",f:parsenoop},136:{n:"BrtEndBookViews",f:parsenoop},137:{n:"BrtBeginWsView",f:parsenoop},138:{n:"BrtEndWsView",f:parsenoop},139:{n:"BrtBeginCsViews",f:parsenoop},140:{n:"BrtEndCsViews",f:parsenoop},141:{n:"BrtBeginCsView",f:parsenoop},142:{n:"BrtEndCsView",f:parsenoop},143:{n:"BrtBeginBundleShs",f:parsenoop},144:{n:"BrtEndBundleShs",f:parsenoop},145:{n:"BrtBeginSheetData",f:parsenoop},146:{n:"BrtEndSheetData",f:parsenoop},147:{n:"BrtWsProp",f:parse_BrtWsProp},148:{n:"BrtWsDim",f:parse_BrtWsDim,p:16},151:{n:"BrtPane",f:parsenoop},152:{n:"BrtSel",f:parsenoop},153:{n:"BrtWbProp",f:parse_BrtWbProp},154:{n:"BrtWbFactoid",f:parsenoop},155:{n:"BrtFileRecover",f:parsenoop},156:{n:"BrtBundleSh",f:parse_BrtBundleSh},157:{n:"BrtCalcProp",f:parsenoop},158:{n:"BrtBookView",f:parsenoop},159:{n:"BrtBeginSst",f:parse_BrtBeginSst},160:{n:"BrtEndSst",f:parsenoop},161:{n:"BrtBeginAFilter",f:parsenoop},162:{n:"BrtEndAFilter",f:parsenoop},163:{n:"BrtBeginFilterColumn",f:parsenoop},164:{n:"BrtEndFilterColumn",f:parsenoop},165:{n:"BrtBeginFilters",f:parsenoop},166:{n:"BrtEndFilters",f:parsenoop},167:{n:"BrtFilter",f:parsenoop},168:{n:"BrtColorFilter",f:parsenoop},169:{n:"BrtIconFilter",f:parsenoop},170:{n:"BrtTop10Filter",f:parsenoop},171:{n:"BrtDynamicFilter",f:parsenoop},172:{n:"BrtBeginCustomFilters",f:parsenoop},173:{n:"BrtEndCustomFilters",f:parsenoop},174:{n:"BrtCustomFilter",f:parsenoop},175:{n:"BrtAFilterDateGroupItem",f:parsenoop},176:{n:"BrtMergeCell",f:parse_BrtMergeCell},177:{n:"BrtBeginMergeCells",f:parsenoop},178:{n:"BrtEndMergeCells",f:parsenoop},179:{n:"BrtBeginPivotCacheDef",f:parsenoop},180:{n:"BrtEndPivotCacheDef",f:parsenoop},181:{n:"BrtBeginPCDFields",f:parsenoop},182:{n:"BrtEndPCDFields",f:parsenoop},183:{n:"BrtBeginPCDField",f:parsenoop},184:{n:"BrtEndPCDField",f:parsenoop},185:{n:"BrtBeginPCDSource",f:parsenoop},186:{n:"BrtEndPCDSource",f:parsenoop},187:{n:"BrtBeginPCDSRange",f:parsenoop},188:{n:"BrtEndPCDSRange",f:parsenoop},189:{n:"BrtBeginPCDFAtbl",f:parsenoop},190:{n:"BrtEndPCDFAtbl",f:parsenoop},191:{n:"BrtBeginPCDIRun",f:parsenoop},192:{n:"BrtEndPCDIRun",f:parsenoop},193:{n:"BrtBeginPivotCacheRecords",f:parsenoop},194:{n:"BrtEndPivotCacheRecords",f:parsenoop},195:{n:"BrtBeginPCDHierarchies",f:parsenoop},196:{n:"BrtEndPCDHierarchies",f:parsenoop},197:{n:"BrtBeginPCDHierarchy",f:parsenoop},198:{n:"BrtEndPCDHierarchy",f:parsenoop},199:{n:"BrtBeginPCDHFieldsUsage",f:parsenoop},200:{n:"BrtEndPCDHFieldsUsage",f:parsenoop},201:{n:"BrtBeginExtConnection",f:parsenoop},202:{n:"BrtEndExtConnection",f:parsenoop},203:{n:"BrtBeginECDbProps",f:parsenoop},204:{n:"BrtEndECDbProps",f:parsenoop},205:{n:"BrtBeginECOlapProps",f:parsenoop},206:{n:"BrtEndECOlapProps",f:parsenoop},207:{n:"BrtBeginPCDSConsol",f:parsenoop},208:{n:"BrtEndPCDSConsol",f:parsenoop},209:{n:"BrtBeginPCDSCPages",f:parsenoop},210:{n:"BrtEndPCDSCPages",f:parsenoop},211:{n:"BrtBeginPCDSCPage",f:parsenoop},212:{n:"BrtEndPCDSCPage",f:parsenoop},213:{n:"BrtBeginPCDSCPItem",f:parsenoop},214:{n:"BrtEndPCDSCPItem",f:parsenoop},215:{n:"BrtBeginPCDSCSets",f:parsenoop},216:{n:"BrtEndPCDSCSets",f:parsenoop},217:{n:"BrtBeginPCDSCSet",f:parsenoop},218:{n:"BrtEndPCDSCSet",f:parsenoop},219:{n:"BrtBeginPCDFGroup",f:parsenoop},220:{n:"BrtEndPCDFGroup",f:parsenoop},221:{n:"BrtBeginPCDFGItems",f:parsenoop},222:{n:"BrtEndPCDFGItems",f:parsenoop},223:{n:"BrtBeginPCDFGRange",f:parsenoop},224:{n:"BrtEndPCDFGRange",f:parsenoop},225:{n:"BrtBeginPCDFGDiscrete",f:parsenoop},226:{n:"BrtEndPCDFGDiscrete",f:parsenoop},227:{n:"BrtBeginPCDSDTupleCache",f:parsenoop},228:{n:"BrtEndPCDSDTupleCache",f:parsenoop},229:{n:"BrtBeginPCDSDTCEntries",f:parsenoop},230:{n:"BrtEndPCDSDTCEntries",f:parsenoop},231:{n:"BrtBeginPCDSDTCEMembers",f:parsenoop},232:{n:"BrtEndPCDSDTCEMembers",f:parsenoop},233:{n:"BrtBeginPCDSDTCEMember",f:parsenoop},234:{n:"BrtEndPCDSDTCEMember",f:parsenoop},235:{n:"BrtBeginPCDSDTCQueries",f:parsenoop},236:{n:"BrtEndPCDSDTCQueries",f:parsenoop},237:{n:"BrtBeginPCDSDTCQuery",f:parsenoop},238:{n:"BrtEndPCDSDTCQuery",f:parsenoop},239:{n:"BrtBeginPCDSDTCSets",f:parsenoop},240:{n:"BrtEndPCDSDTCSets",f:parsenoop},241:{n:"BrtBeginPCDSDTCSet",f:parsenoop},242:{n:"BrtEndPCDSDTCSet",f:parsenoop},243:{n:"BrtBeginPCDCalcItems",f:parsenoop},244:{n:"BrtEndPCDCalcItems",f:parsenoop},245:{n:"BrtBeginPCDCalcItem",f:parsenoop},246:{n:"BrtEndPCDCalcItem",f:parsenoop},247:{n:"BrtBeginPRule",f:parsenoop},248:{n:"BrtEndPRule",f:parsenoop},249:{n:"BrtBeginPRFilters",f:parsenoop},250:{n:"BrtEndPRFilters",f:parsenoop},251:{n:"BrtBeginPRFilter",f:parsenoop},252:{n:"BrtEndPRFilter",f:parsenoop},253:{n:"BrtBeginPNames",f:parsenoop},254:{n:"BrtEndPNames",f:parsenoop},255:{n:"BrtBeginPName",f:parsenoop},256:{n:"BrtEndPName",f:parsenoop},257:{n:"BrtBeginPNPairs",f:parsenoop},258:{n:"BrtEndPNPairs",f:parsenoop},259:{n:"BrtBeginPNPair",f:parsenoop},260:{n:"BrtEndPNPair",f:parsenoop},261:{n:"BrtBeginECWebProps",f:parsenoop},262:{n:"BrtEndECWebProps",f:parsenoop},263:{n:"BrtBeginEcWpTables",f:parsenoop},264:{n:"BrtEndECWPTables",f:parsenoop},265:{n:"BrtBeginECParams",f:parsenoop},266:{n:"BrtEndECParams",f:parsenoop},267:{n:"BrtBeginECParam",f:parsenoop},268:{n:"BrtEndECParam",f:parsenoop},269:{n:"BrtBeginPCDKPIs",f:parsenoop},270:{n:"BrtEndPCDKPIs",f:parsenoop},271:{n:"BrtBeginPCDKPI",f:parsenoop},272:{n:"BrtEndPCDKPI",f:parsenoop},273:{n:"BrtBeginDims",f:parsenoop},274:{n:"BrtEndDims",f:parsenoop},275:{n:"BrtBeginDim",f:parsenoop},276:{n:"BrtEndDim",f:parsenoop},277:{n:"BrtIndexPartEnd",f:parsenoop},278:{n:"BrtBeginStyleSheet",f:parsenoop},279:{n:"BrtEndStyleSheet",f:parsenoop},280:{n:"BrtBeginSXView",f:parsenoop},281:{n:"BrtEndSXVI",f:parsenoop},282:{n:"BrtBeginSXVI",f:parsenoop},283:{n:"BrtBeginSXVIs",f:parsenoop},284:{n:"BrtEndSXVIs",f:parsenoop},285:{n:"BrtBeginSXVD",f:parsenoop},286:{n:"BrtEndSXVD",f:parsenoop},287:{n:"BrtBeginSXVDs",f:parsenoop},288:{n:"BrtEndSXVDs",f:parsenoop},289:{n:"BrtBeginSXPI",f:parsenoop},290:{n:"BrtEndSXPI",f:parsenoop},291:{n:"BrtBeginSXPIs",f:parsenoop},292:{n:"BrtEndSXPIs",f:parsenoop},293:{n:"BrtBeginSXDI",f:parsenoop},294:{n:"BrtEndSXDI",f:parsenoop},295:{n:"BrtBeginSXDIs",f:parsenoop},296:{n:"BrtEndSXDIs",f:parsenoop},297:{n:"BrtBeginSXLI",f:parsenoop},298:{n:"BrtEndSXLI",f:parsenoop},299:{n:"BrtBeginSXLIRws",f:parsenoop},300:{n:"BrtEndSXLIRws",f:parsenoop},301:{n:"BrtBeginSXLICols",f:parsenoop},302:{n:"BrtEndSXLICols",f:parsenoop},303:{n:"BrtBeginSXFormat",f:parsenoop},304:{n:"BrtEndSXFormat",f:parsenoop},305:{n:"BrtBeginSXFormats",f:parsenoop},306:{n:"BrtEndSxFormats",f:parsenoop},307:{n:"BrtBeginSxSelect",f:parsenoop},308:{n:"BrtEndSxSelect",f:parsenoop},309:{n:"BrtBeginISXVDRws",f:parsenoop},310:{n:"BrtEndISXVDRws",f:parsenoop},311:{n:"BrtBeginISXVDCols",f:parsenoop},312:{n:"BrtEndISXVDCols",f:parsenoop},313:{n:"BrtEndSXLocation",f:parsenoop},314:{n:"BrtBeginSXLocation",f:parsenoop},315:{n:"BrtEndSXView",f:parsenoop},316:{n:"BrtBeginSXTHs",f:parsenoop},317:{n:"BrtEndSXTHs",f:parsenoop},318:{n:"BrtBeginSXTH",f:parsenoop},319:{n:"BrtEndSXTH",f:parsenoop},320:{n:"BrtBeginISXTHRws",f:parsenoop},321:{n:"BrtEndISXTHRws",f:parsenoop},322:{n:"BrtBeginISXTHCols",f:parsenoop},323:{n:"BrtEndISXTHCols",f:parsenoop},324:{n:"BrtBeginSXTDMPS",f:parsenoop},325:{n:"BrtEndSXTDMPs",f:parsenoop},326:{n:"BrtBeginSXTDMP",f:parsenoop},327:{n:"BrtEndSXTDMP",f:parsenoop},328:{n:"BrtBeginSXTHItems",f:parsenoop},329:{n:"BrtEndSXTHItems",f:parsenoop},330:{n:"BrtBeginSXTHItem",f:parsenoop},331:{n:"BrtEndSXTHItem",f:parsenoop},332:{n:"BrtBeginMetadata",f:parsenoop},333:{n:"BrtEndMetadata",f:parsenoop},334:{n:"BrtBeginEsmdtinfo",f:parsenoop},335:{n:"BrtMdtinfo",f:parsenoop},336:{n:"BrtEndEsmdtinfo",f:parsenoop},337:{n:"BrtBeginEsmdb",f:parsenoop},338:{n:"BrtEndEsmdb",f:parsenoop},339:{n:"BrtBeginEsfmd",f:parsenoop},340:{n:"BrtEndEsfmd",f:parsenoop},341:{n:"BrtBeginSingleCells",f:parsenoop},342:{n:"BrtEndSingleCells",f:parsenoop},343:{n:"BrtBeginList",f:parsenoop},344:{n:"BrtEndList",f:parsenoop},345:{n:"BrtBeginListCols",f:parsenoop},346:{n:"BrtEndListCols",f:parsenoop},347:{n:"BrtBeginListCol",f:parsenoop},348:{n:"BrtEndListCol",f:parsenoop},349:{n:"BrtBeginListXmlCPr",f:parsenoop},350:{n:"BrtEndListXmlCPr",f:parsenoop},351:{n:"BrtListCCFmla",f:parsenoop},352:{n:"BrtListTrFmla",f:parsenoop},353:{n:"BrtBeginExternals",f:parsenoop},354:{n:"BrtEndExternals",f:parsenoop},355:{n:"BrtSupBookSrc",f:parsenoop},357:{n:"BrtSupSelf",f:parsenoop},358:{n:"BrtSupSame",f:parsenoop},359:{n:"BrtSupTabs",f:parsenoop},360:{n:"BrtBeginSupBook",f:parsenoop},361:{n:"BrtPlaceholderName",f:parsenoop},362:{n:"BrtExternSheet",f:parsenoop},363:{n:"BrtExternTableStart",f:parsenoop},364:{n:"BrtExternTableEnd",f:parsenoop},366:{n:"BrtExternRowHdr",f:parsenoop},367:{n:"BrtExternCellBlank",f:parsenoop},368:{n:"BrtExternCellReal",f:parsenoop},369:{n:"BrtExternCellBool",f:parsenoop},370:{n:"BrtExternCellError",f:parsenoop},371:{n:"BrtExternCellString",f:parsenoop},372:{n:"BrtBeginEsmdx",f:parsenoop},373:{n:"BrtEndEsmdx",f:parsenoop},374:{n:"BrtBeginMdxSet",f:parsenoop},375:{n:"BrtEndMdxSet",f:parsenoop},376:{n:"BrtBeginMdxMbrProp",f:parsenoop},377:{n:"BrtEndMdxMbrProp",f:parsenoop},378:{n:"BrtBeginMdxKPI",f:parsenoop},379:{n:"BrtEndMdxKPI",f:parsenoop},380:{n:"BrtBeginEsstr",f:parsenoop},381:{n:"BrtEndEsstr",f:parsenoop},382:{n:"BrtBeginPRFItem",f:parsenoop},383:{n:"BrtEndPRFItem",f:parsenoop},384:{n:"BrtBeginPivotCacheIDs",f:parsenoop},385:{n:"BrtEndPivotCacheIDs",f:parsenoop},386:{n:"BrtBeginPivotCacheID",f:parsenoop},387:{n:"BrtEndPivotCacheID",f:parsenoop},388:{n:"BrtBeginISXVIs",f:parsenoop},389:{n:"BrtEndISXVIs",f:parsenoop},390:{n:"BrtBeginColInfos",f:parsenoop},391:{n:"BrtEndColInfos",f:parsenoop},392:{n:"BrtBeginRwBrk",f:parsenoop},393:{n:"BrtEndRwBrk",f:parsenoop},394:{n:"BrtBeginColBrk",f:parsenoop},395:{n:"BrtEndColBrk",f:parsenoop},396:{n:"BrtBrk",f:parsenoop},397:{n:"BrtUserBookView",f:parsenoop},398:{n:"BrtInfo",f:parsenoop},399:{n:"BrtCUsr",f:parsenoop},400:{n:"BrtUsr",f:parsenoop},401:{n:"BrtBeginUsers",f:parsenoop},403:{n:"BrtEOF",f:parsenoop},404:{n:"BrtUCR",f:parsenoop},405:{n:"BrtRRInsDel",f:parsenoop},406:{n:"BrtRREndInsDel",f:parsenoop},407:{n:"BrtRRMove",f:parsenoop},408:{n:"BrtRREndMove",f:parsenoop},409:{n:"BrtRRChgCell",f:parsenoop},410:{n:"BrtRREndChgCell",f:parsenoop},411:{n:"BrtRRHeader",f:parsenoop},412:{n:"BrtRRUserView",f:parsenoop},413:{n:"BrtRRRenSheet",f:parsenoop},414:{n:"BrtRRInsertSh",f:parsenoop},415:{n:"BrtRRDefName",f:parsenoop},416:{n:"BrtRRNote",f:parsenoop},417:{n:"BrtRRConflict",f:parsenoop},418:{n:"BrtRRTQSIF",f:parsenoop},419:{n:"BrtRRFormat",f:parsenoop},420:{n:"BrtRREndFormat",f:parsenoop},421:{n:"BrtRRAutoFmt",f:parsenoop},422:{n:"BrtBeginUserShViews",f:parsenoop},423:{n:"BrtBeginUserShView",f:parsenoop},424:{n:"BrtEndUserShView",f:parsenoop},425:{n:"BrtEndUserShViews",f:parsenoop},426:{n:"BrtArrFmla",f:parsenoop},427:{n:"BrtShrFmla",f:parsenoop},428:{n:"BrtTable",f:parsenoop},429:{n:"BrtBeginExtConnections",f:parsenoop},430:{n:"BrtEndExtConnections",f:parsenoop},431:{n:"BrtBeginPCDCalcMems",f:parsenoop},432:{n:"BrtEndPCDCalcMems",f:parsenoop},433:{n:"BrtBeginPCDCalcMem",f:parsenoop},434:{n:"BrtEndPCDCalcMem",f:parsenoop},435:{n:"BrtBeginPCDHGLevels",f:parsenoop},436:{n:"BrtEndPCDHGLevels",f:parsenoop},437:{n:"BrtBeginPCDHGLevel",f:parsenoop},438:{n:"BrtEndPCDHGLevel",f:parsenoop},439:{n:"BrtBeginPCDHGLGroups",f:parsenoop},440:{n:"BrtEndPCDHGLGroups",f:parsenoop},441:{n:"BrtBeginPCDHGLGroup",f:parsenoop},442:{n:"BrtEndPCDHGLGroup",f:parsenoop},443:{n:"BrtBeginPCDHGLGMembers",f:parsenoop},444:{n:"BrtEndPCDHGLGMembers",f:parsenoop},445:{n:"BrtBeginPCDHGLGMember",f:parsenoop},446:{n:"BrtEndPCDHGLGMember",f:parsenoop},447:{n:"BrtBeginQSI",f:parsenoop},448:{n:"BrtEndQSI",f:parsenoop},449:{n:"BrtBeginQSIR",f:parsenoop},450:{n:"BrtEndQSIR",f:parsenoop},451:{n:"BrtBeginDeletedNames",f:parsenoop},452:{n:"BrtEndDeletedNames",f:parsenoop},453:{n:"BrtBeginDeletedName",f:parsenoop},454:{n:"BrtEndDeletedName",f:parsenoop},455:{n:"BrtBeginQSIFs",f:parsenoop},456:{n:"BrtEndQSIFs",f:parsenoop},457:{n:"BrtBeginQSIF",f:parsenoop},458:{n:"BrtEndQSIF",f:parsenoop},459:{n:"BrtBeginAutoSortScope",f:parsenoop},460:{n:"BrtEndAutoSortScope",f:parsenoop},461:{n:"BrtBeginConditionalFormatting",f:parsenoop},462:{n:"BrtEndConditionalFormatting",f:parsenoop},463:{n:"BrtBeginCFRule",f:parsenoop},464:{n:"BrtEndCFRule",f:parsenoop},465:{n:"BrtBeginIconSet",f:parsenoop},466:{n:"BrtEndIconSet",f:parsenoop},467:{n:"BrtBeginDatabar",f:parsenoop},468:{n:"BrtEndDatabar",f:parsenoop},469:{n:"BrtBeginColorScale",f:parsenoop},470:{n:"BrtEndColorScale",f:parsenoop},471:{n:"BrtCFVO",f:parsenoop},472:{n:"BrtExternValueMeta",f:parsenoop},473:{n:"BrtBeginColorPalette",f:parsenoop},474:{n:"BrtEndColorPalette",f:parsenoop},475:{n:"BrtIndexedColor",f:parsenoop},476:{n:"BrtMargins",f:parsenoop},477:{n:"BrtPrintOptions",f:parsenoop},478:{n:"BrtPageSetup",f:parsenoop},479:{n:"BrtBeginHeaderFooter",f:parsenoop},480:{n:"BrtEndHeaderFooter",f:parsenoop},481:{n:"BrtBeginSXCrtFormat",f:parsenoop},482:{n:"BrtEndSXCrtFormat",f:parsenoop},483:{n:"BrtBeginSXCrtFormats",f:parsenoop},484:{n:"BrtEndSXCrtFormats",f:parsenoop},485:{n:"BrtWsFmtInfo",f:parsenoop},486:{n:"BrtBeginMgs",f:parsenoop},487:{n:"BrtEndMGs",f:parsenoop},488:{n:"BrtBeginMGMaps",f:parsenoop},489:{n:"BrtEndMGMaps",f:parsenoop},490:{n:"BrtBeginMG",f:parsenoop},491:{n:"BrtEndMG",f:parsenoop},492:{n:"BrtBeginMap",f:parsenoop},493:{n:"BrtEndMap",f:parsenoop},494:{n:"BrtHLink",f:parse_BrtHLink},495:{n:"BrtBeginDCon",f:parsenoop},496:{n:"BrtEndDCon",f:parsenoop},497:{n:"BrtBeginDRefs",f:parsenoop},498:{n:"BrtEndDRefs",f:parsenoop},499:{n:"BrtDRef",f:parsenoop},500:{n:"BrtBeginScenMan",f:parsenoop},501:{n:"BrtEndScenMan",f:parsenoop},502:{n:"BrtBeginSct",f:parsenoop},503:{n:"BrtEndSct",f:parsenoop},504:{n:"BrtSlc",f:parsenoop},505:{n:"BrtBeginDXFs",f:parsenoop},506:{n:"BrtEndDXFs",f:parsenoop},507:{n:"BrtDXF",f:parsenoop},508:{n:"BrtBeginTableStyles",f:parsenoop},509:{n:"BrtEndTableStyles",f:parsenoop},510:{n:"BrtBeginTableStyle",f:parsenoop},511:{n:"BrtEndTableStyle",f:parsenoop},512:{n:"BrtTableStyleElement",f:parsenoop},513:{n:"BrtTableStyleClient",f:parsenoop},514:{n:"BrtBeginVolDeps",f:parsenoop},515:{n:"BrtEndVolDeps",f:parsenoop},516:{n:"BrtBeginVolType",f:parsenoop},517:{n:"BrtEndVolType",f:parsenoop},518:{n:"BrtBeginVolMain",f:parsenoop},519:{n:"BrtEndVolMain",f:parsenoop},520:{n:"BrtBeginVolTopic",f:parsenoop},521:{n:"BrtEndVolTopic",f:parsenoop},522:{n:"BrtVolSubtopic",f:parsenoop},523:{n:"BrtVolRef",f:parsenoop},524:{n:"BrtVolNum",f:parsenoop},525:{n:"BrtVolErr",f:parsenoop},526:{n:"BrtVolStr",f:parsenoop},527:{n:"BrtVolBool",f:parsenoop},528:{n:"BrtBeginCalcChain$",f:parsenoop},529:{n:"BrtEndCalcChain$",f:parsenoop},530:{n:"BrtBeginSortState",f:parsenoop},531:{n:"BrtEndSortState",f:parsenoop},532:{n:"BrtBeginSortCond",f:parsenoop},533:{n:"BrtEndSortCond",f:parsenoop},534:{n:"BrtBookProtection",f:parsenoop},535:{n:"BrtSheetProtection",f:parsenoop},536:{n:"BrtRangeProtection",f:parsenoop},537:{n:"BrtPhoneticInfo",f:parsenoop},538:{n:"BrtBeginECTxtWiz",f:parsenoop},539:{n:"BrtEndECTxtWiz",f:parsenoop},540:{n:"BrtBeginECTWFldInfoLst",f:parsenoop},541:{n:"BrtEndECTWFldInfoLst",f:parsenoop},542:{n:"BrtBeginECTwFldInfo",f:parsenoop},548:{n:"BrtFileSharing",f:parsenoop},549:{n:"BrtOleSize",f:parsenoop},550:{n:"BrtDrawing",f:parsenoop},551:{n:"BrtLegacyDrawing",f:parsenoop},552:{n:"BrtLegacyDrawingHF",f:parsenoop},553:{n:"BrtWebOpt",f:parsenoop},554:{n:"BrtBeginWebPubItems",f:parsenoop},555:{n:"BrtEndWebPubItems",f:parsenoop},556:{n:"BrtBeginWebPubItem",f:parsenoop},557:{n:"BrtEndWebPubItem",f:parsenoop},558:{n:"BrtBeginSXCondFmt",f:parsenoop},559:{n:"BrtEndSXCondFmt",f:parsenoop},560:{n:"BrtBeginSXCondFmts",f:parsenoop},561:{n:"BrtEndSXCondFmts",f:parsenoop},562:{n:"BrtBkHim",f:parsenoop},564:{n:"BrtColor",f:parsenoop},565:{n:"BrtBeginIndexedColors",f:parsenoop},566:{n:"BrtEndIndexedColors",f:parsenoop},569:{n:"BrtBeginMRUColors",f:parsenoop},570:{n:"BrtEndMRUColors",f:parsenoop},572:{n:"BrtMRUColor",f:parsenoop},573:{n:"BrtBeginDVals",f:parsenoop},574:{n:"BrtEndDVals",f:parsenoop},577:{n:"BrtSupNameStart",f:parsenoop},578:{n:"BrtSupNameValueStart",f:parsenoop},579:{n:"BrtSupNameValueEnd",f:parsenoop},580:{n:"BrtSupNameNum",f:parsenoop},581:{n:"BrtSupNameErr",f:parsenoop},582:{n:"BrtSupNameSt",f:parsenoop},583:{n:"BrtSupNameNil",f:parsenoop},584:{n:"BrtSupNameBool",f:parsenoop},585:{n:"BrtSupNameFmla",f:parsenoop},586:{n:"BrtSupNameBits",f:parsenoop},587:{n:"BrtSupNameEnd",f:parsenoop},588:{n:"BrtEndSupBook",f:parsenoop},589:{n:"BrtCellSmartTagProperty",f:parsenoop},590:{n:"BrtBeginCellSmartTag",f:parsenoop},591:{n:"BrtEndCellSmartTag",f:parsenoop},592:{n:"BrtBeginCellSmartTags",f:parsenoop},593:{n:"BrtEndCellSmartTags",f:parsenoop},594:{n:"BrtBeginSmartTags",f:parsenoop},595:{n:"BrtEndSmartTags",f:parsenoop},596:{n:"BrtSmartTagType",f:parsenoop},597:{n:"BrtBeginSmartTagTypes",f:parsenoop},598:{n:"BrtEndSmartTagTypes",f:parsenoop},599:{n:"BrtBeginSXFilters",f:parsenoop},600:{n:"BrtEndSXFilters",f:parsenoop},601:{n:"BrtBeginSXFILTER",f:parsenoop},602:{n:"BrtEndSXFilter",f:parsenoop},603:{n:"BrtBeginFills",f:parsenoop},604:{n:"BrtEndFills",f:parsenoop},605:{n:"BrtBeginCellWatches",f:parsenoop},606:{n:"BrtEndCellWatches",f:parsenoop},607:{n:"BrtCellWatch",f:parsenoop},608:{n:"BrtBeginCRErrs",f:parsenoop},609:{n:"BrtEndCRErrs",f:parsenoop},610:{n:"BrtCrashRecErr",f:parsenoop},611:{n:"BrtBeginFonts",f:parsenoop},612:{n:"BrtEndFonts",f:parsenoop},613:{n:"BrtBeginBorders",f:parsenoop},614:{n:"BrtEndBorders",f:parsenoop},615:{n:"BrtBeginFmts",f:parsenoop},616:{n:"BrtEndFmts",f:parsenoop},617:{n:"BrtBeginCellXFs",f:parsenoop},618:{n:"BrtEndCellXFs",f:parsenoop},619:{n:"BrtBeginStyles",f:parsenoop},620:{n:"BrtEndStyles",f:parsenoop},625:{n:"BrtBigName",f:parsenoop},626:{n:"BrtBeginCellStyleXFs",f:parsenoop},627:{n:"BrtEndCellStyleXFs",f:parsenoop},628:{n:"BrtBeginComments",f:parsenoop},629:{n:"BrtEndComments",f:parsenoop},630:{n:"BrtBeginCommentAuthors",f:parsenoop},631:{n:"BrtEndCommentAuthors",f:parsenoop},632:{n:"BrtCommentAuthor",f:parse_BrtCommentAuthor},633:{n:"BrtBeginCommentList",f:parsenoop},634:{n:"BrtEndCommentList",f:parsenoop},635:{n:"BrtBeginComment",f:parse_BrtBeginComment},636:{n:"BrtEndComment",f:parsenoop},637:{n:"BrtCommentText",f:parse_BrtCommentText},638:{n:"BrtBeginOleObjects",f:parsenoop},639:{n:"BrtOleObject",f:parsenoop},640:{n:"BrtEndOleObjects",f:parsenoop},641:{n:"BrtBeginSxrules",f:parsenoop},642:{n:"BrtEndSxRules",f:parsenoop},643:{n:"BrtBeginActiveXControls",f:parsenoop},644:{n:"BrtActiveX",f:parsenoop},645:{n:"BrtEndActiveXControls",f:parsenoop},646:{n:"BrtBeginPCDSDTCEMembersSortBy",f:parsenoop},648:{n:"BrtBeginCellIgnoreECs",f:parsenoop},649:{n:"BrtCellIgnoreEC",f:parsenoop},650:{n:"BrtEndCellIgnoreECs",f:parsenoop},651:{n:"BrtCsProp",f:parsenoop},652:{n:"BrtCsPageSetup",f:parsenoop},653:{n:"BrtBeginUserCsViews",f:parsenoop},654:{n:"BrtEndUserCsViews",f:parsenoop},655:{n:"BrtBeginUserCsView",f:parsenoop},656:{n:"BrtEndUserCsView",f:parsenoop},657:{n:"BrtBeginPcdSFCIEntries",f:parsenoop},658:{n:"BrtEndPCDSFCIEntries",f:parsenoop},659:{n:"BrtPCDSFCIEntry",f:parsenoop},660:{n:"BrtBeginListParts",f:parsenoop},661:{n:"BrtListPart",f:parsenoop},662:{n:"BrtEndListParts",f:parsenoop},663:{n:"BrtSheetCalcProp",f:parsenoop},664:{n:"BrtBeginFnGroup",f:parsenoop},665:{n:"BrtFnGroup",f:parsenoop},666:{n:"BrtEndFnGroup",f:parsenoop},667:{n:"BrtSupAddin",f:parsenoop},668:{n:"BrtSXTDMPOrder",f:parsenoop},669:{n:"BrtCsProtection",f:parsenoop},671:{n:"BrtBeginWsSortMap",f:parsenoop},672:{n:"BrtEndWsSortMap",f:parsenoop},673:{n:"BrtBeginRRSort",f:parsenoop},674:{n:"BrtEndRRSort",f:parsenoop},675:{n:"BrtRRSortItem",f:parsenoop},676:{n:"BrtFileSharingIso",f:parsenoop},677:{n:"BrtBookProtectionIso",f:parsenoop},678:{n:"BrtSheetProtectionIso",f:parsenoop},679:{n:"BrtCsProtectionIso",f:parsenoop},680:{n:"BrtRangeProtectionIso",f:parsenoop},1024:{n:"BrtRwDescent",f:parsenoop},1025:{n:"BrtKnownFonts",f:parsenoop},1026:{n:"BrtBeginSXTupleSet",f:parsenoop},1027:{n:"BrtEndSXTupleSet",f:parsenoop},1028:{n:"BrtBeginSXTupleSetHeader",f:parsenoop},1029:{n:"BrtEndSXTupleSetHeader",f:parsenoop},1030:{n:"BrtSXTupleSetHeaderItem",f:parsenoop},1031:{n:"BrtBeginSXTupleSetData",f:parsenoop},1032:{n:"BrtEndSXTupleSetData",f:parsenoop},1033:{n:"BrtBeginSXTupleSetRow",f:parsenoop},1034:{n:"BrtEndSXTupleSetRow",f:parsenoop},1035:{n:"BrtSXTupleSetRowItem",f:parsenoop},1036:{n:"BrtNameExt",f:parsenoop},1037:{n:"BrtPCDH14",f:parsenoop},1038:{n:"BrtBeginPCDCalcMem14",f:parsenoop},1039:{n:"BrtEndPCDCalcMem14",f:parsenoop},1040:{n:"BrtSXTH14",f:parsenoop},1041:{n:"BrtBeginSparklineGroup",f:parsenoop},1042:{n:"BrtEndSparklineGroup",f:parsenoop},1043:{n:"BrtSparkline",f:parsenoop},1044:{n:"BrtSXDI14",f:parsenoop},1045:{n:"BrtWsFmtInfoEx14",f:parsenoop},1046:{n:"BrtBeginConditionalFormatting14",f:parsenoop},1047:{n:"BrtEndConditionalFormatting14",f:parsenoop},1048:{n:"BrtBeginCFRule14",f:parsenoop},1049:{n:"BrtEndCFRule14",f:parsenoop},1050:{n:"BrtCFVO14",f:parsenoop},1051:{n:"BrtBeginDatabar14",f:parsenoop},1052:{n:"BrtBeginIconSet14",f:parsenoop},1053:{n:"BrtDVal14",f:parsenoop},1054:{n:"BrtBeginDVals14",f:parsenoop},1055:{n:"BrtColor14",f:parsenoop},1056:{n:"BrtBeginSparklines",f:parsenoop},1057:{n:"BrtEndSparklines",f:parsenoop},1058:{n:"BrtBeginSparklineGroups",f:parsenoop},1059:{n:"BrtEndSparklineGroups",f:parsenoop},1061:{n:"BrtSXVD14",f:parsenoop},1062:{n:"BrtBeginSxview14",f:parsenoop},1063:{n:"BrtEndSxview14",f:parsenoop},1066:{n:"BrtBeginPCD14",f:parsenoop},1067:{n:"BrtEndPCD14",f:parsenoop},1068:{n:"BrtBeginExtConn14",f:parsenoop},1069:{n:"BrtEndExtConn14",f:parsenoop},1070:{n:"BrtBeginSlicerCacheIDs",f:parsenoop},1071:{n:"BrtEndSlicerCacheIDs",f:parsenoop},1072:{n:"BrtBeginSlicerCacheID",f:parsenoop},1073:{n:"BrtEndSlicerCacheID",f:parsenoop},1075:{n:"BrtBeginSlicerCache",f:parsenoop},1076:{n:"BrtEndSlicerCache",f:parsenoop},1077:{n:"BrtBeginSlicerCacheDef",f:parsenoop},1078:{n:"BrtEndSlicerCacheDef",f:parsenoop},1079:{n:"BrtBeginSlicersEx",f:parsenoop},1080:{n:"BrtEndSlicersEx",f:parsenoop},1081:{n:"BrtBeginSlicerEx",f:parsenoop},1082:{n:"BrtEndSlicerEx",f:parsenoop},1083:{n:"BrtBeginSlicer",f:parsenoop},1084:{n:"BrtEndSlicer",f:parsenoop},1085:{n:"BrtSlicerCachePivotTables",f:parsenoop},1086:{n:"BrtBeginSlicerCacheOlapImpl",f:parsenoop},1087:{n:"BrtEndSlicerCacheOlapImpl",f:parsenoop},1088:{n:"BrtBeginSlicerCacheLevelsData",f:parsenoop},1089:{n:"BrtEndSlicerCacheLevelsData",f:parsenoop},1090:{n:"BrtBeginSlicerCacheLevelData",f:parsenoop},1091:{n:"BrtEndSlicerCacheLevelData",f:parsenoop},1092:{n:"BrtBeginSlicerCacheSiRanges",f:parsenoop},1093:{n:"BrtEndSlicerCacheSiRanges",f:parsenoop},1094:{n:"BrtBeginSlicerCacheSiRange",f:parsenoop},1095:{n:"BrtEndSlicerCacheSiRange",f:parsenoop},1096:{n:"BrtSlicerCacheOlapItem",f:parsenoop},1097:{n:"BrtBeginSlicerCacheSelections",f:parsenoop},1098:{n:"BrtSlicerCacheSelection",f:parsenoop},1099:{n:"BrtEndSlicerCacheSelections",f:parsenoop},1100:{n:"BrtBeginSlicerCacheNative",f:parsenoop},1101:{n:"BrtEndSlicerCacheNative",f:parsenoop},1102:{n:"BrtSlicerCacheNativeItem",f:parsenoop},1103:{n:"BrtRangeProtection14",f:parsenoop},1104:{n:"BrtRangeProtectionIso14",f:parsenoop},1105:{n:"BrtCellIgnoreEC14",f:parsenoop},1111:{n:"BrtList14",f:parsenoop},1112:{n:"BrtCFIcon",f:parsenoop},1113:{n:"BrtBeginSlicerCachesPivotCacheIDs",f:parsenoop},1114:{n:"BrtEndSlicerCachesPivotCacheIDs",f:parsenoop},1115:{n:"BrtBeginSlicers",f:parsenoop},1116:{n:"BrtEndSlicers",f:parsenoop},1117:{n:"BrtWbProp14",f:parsenoop},1118:{n:"BrtBeginSXEdit",f:parsenoop},1119:{n:"BrtEndSXEdit",f:parsenoop},1120:{n:"BrtBeginSXEdits",f:parsenoop},1121:{n:"BrtEndSXEdits",f:parsenoop},1122:{n:"BrtBeginSXChange",f:parsenoop},1123:{n:"BrtEndSXChange",f:parsenoop},1124:{n:"BrtBeginSXChanges",f:parsenoop},1125:{n:"BrtEndSXChanges",f:parsenoop},1126:{n:"BrtSXTupleItems",f:parsenoop},1128:{n:"BrtBeginSlicerStyle",f:parsenoop},1129:{n:"BrtEndSlicerStyle",f:parsenoop},1130:{n:"BrtSlicerStyleElement",f:parsenoop},1131:{n:"BrtBeginStyleSheetExt14",f:parsenoop},1132:{n:"BrtEndStyleSheetExt14",f:parsenoop},1133:{n:"BrtBeginSlicerCachesPivotCacheID",f:parsenoop},1134:{n:"BrtEndSlicerCachesPivotCacheID",f:parsenoop},1135:{n:"BrtBeginConditionalFormattings",f:parsenoop},1136:{n:"BrtEndConditionalFormattings",f:parsenoop},1137:{n:"BrtBeginPCDCalcMemExt",f:parsenoop},1138:{n:"BrtEndPCDCalcMemExt",f:parsenoop},1139:{n:"BrtBeginPCDCalcMemsExt",f:parsenoop},1140:{n:"BrtEndPCDCalcMemsExt",f:parsenoop},1141:{n:"BrtPCDField14",f:parsenoop},1142:{n:"BrtBeginSlicerStyles",f:parsenoop},1143:{n:"BrtEndSlicerStyles",f:parsenoop},1144:{n:"BrtBeginSlicerStyleElements",f:parsenoop},1145:{n:"BrtEndSlicerStyleElements",f:parsenoop},1146:{n:"BrtCFRuleExt",f:parsenoop},1147:{n:"BrtBeginSXCondFmt14",f:parsenoop},1148:{n:"BrtEndSXCondFmt14",f:parsenoop},1149:{n:"BrtBeginSXCondFmts14",f:parsenoop},1150:{n:"BrtEndSXCondFmts14",f:parsenoop},1152:{n:"BrtBeginSortCond14",f:parsenoop},1153:{n:"BrtEndSortCond14",f:parsenoop},1154:{n:"BrtEndDVals14",f:parsenoop},1155:{n:"BrtEndIconSet14",f:parsenoop},1156:{n:"BrtEndDatabar14",f:parsenoop},1157:{n:"BrtBeginColorScale14",f:parsenoop},1158:{n:"BrtEndColorScale14",f:parsenoop},1159:{n:"BrtBeginSxrules14",f:parsenoop},1160:{n:"BrtEndSxrules14",f:parsenoop},1161:{n:"BrtBeginPRule14",f:parsenoop},1162:{n:"BrtEndPRule14",f:parsenoop},1163:{n:"BrtBeginPRFilters14",f:parsenoop},1164:{n:"BrtEndPRFilters14",f:parsenoop},1165:{n:"BrtBeginPRFilter14",f:parsenoop},1166:{n:"BrtEndPRFilter14",f:parsenoop},1167:{n:"BrtBeginPRFItem14",f:parsenoop},1168:{n:"BrtEndPRFItem14",f:parsenoop},1169:{n:"BrtBeginCellIgnoreECs14",f:parsenoop},1170:{n:"BrtEndCellIgnoreECs14",f:parsenoop},1171:{n:"BrtDxf14",f:parsenoop},1172:{n:"BrtBeginDxF14s",f:parsenoop},1173:{n:"BrtEndDxf14s",f:parsenoop},1177:{n:"BrtFilter14",f:parsenoop},1178:{n:"BrtBeginCustomFilters14",f:parsenoop},1180:{n:"BrtCustomFilter14",f:parsenoop},1181:{n:"BrtIconFilter14",f:parsenoop},1182:{n:"BrtPivotCacheConnectionName",f:parsenoop},2048:{n:"BrtBeginDecoupledPivotCacheIDs",f:parsenoop},2049:{n:"BrtEndDecoupledPivotCacheIDs",f:parsenoop},2050:{n:"BrtDecoupledPivotCacheID",f:parsenoop},2051:{n:"BrtBeginPivotTableRefs",f:parsenoop},2052:{n:"BrtEndPivotTableRefs",f:parsenoop},2053:{n:"BrtPivotTableRef",f:parsenoop},2054:{n:"BrtSlicerCacheBookPivotTables",f:parsenoop},2055:{n:"BrtBeginSxvcells",f:parsenoop},2056:{n:"BrtEndSxvcells",f:parsenoop},2057:{n:"BrtBeginSxRow",f:parsenoop},2058:{n:"BrtEndSxRow",f:parsenoop},2060:{n:"BrtPcdCalcMem15",f:parsenoop},2067:{n:"BrtQsi15",f:parsenoop},2068:{n:"BrtBeginWebExtensions",f:parsenoop},2069:{n:"BrtEndWebExtensions",f:parsenoop},2070:{n:"BrtWebExtension",f:parsenoop},2071:{n:"BrtAbsPath15",f:parsenoop},2072:{n:"BrtBeginPivotTableUISettings",f:parsenoop},2073:{n:"BrtEndPivotTableUISettings",f:parsenoop},2075:{n:"BrtTableSlicerCacheIDs",f:parsenoop},2076:{n:"BrtTableSlicerCacheID",f:parsenoop},2077:{n:"BrtBeginTableSlicerCache",f:parsenoop},2078:{n:"BrtEndTableSlicerCache",f:parsenoop},2079:{n:"BrtSxFilter15",f:parsenoop},2080:{n:"BrtBeginTimelineCachePivotCacheIDs",f:parsenoop},2081:{n:"BrtEndTimelineCachePivotCacheIDs",f:parsenoop},2082:{n:"BrtTimelineCachePivotCacheID",f:parsenoop},2083:{n:"BrtBeginTimelineCacheIDs",f:parsenoop},2084:{n:"BrtEndTimelineCacheIDs",f:parsenoop},2085:{n:"BrtBeginTimelineCacheID",f:parsenoop},2086:{n:"BrtEndTimelineCacheID",f:parsenoop},2087:{n:"BrtBeginTimelinesEx",f:parsenoop},2088:{n:"BrtEndTimelinesEx",f:parsenoop},2089:{n:"BrtBeginTimelineEx",f:parsenoop},2090:{n:"BrtEndTimelineEx",f:parsenoop},2091:{n:"BrtWorkBookPr15",f:parsenoop},2092:{n:"BrtPCDH15",f:parsenoop},2093:{n:"BrtBeginTimelineStyle",f:parsenoop},2094:{n:"BrtEndTimelineStyle",f:parsenoop},2095:{n:"BrtTimelineStyleElement",f:parsenoop},2096:{n:"BrtBeginTimelineStylesheetExt15",f:parsenoop},2097:{n:"BrtEndTimelineStylesheetExt15",f:parsenoop},2098:{n:"BrtBeginTimelineStyles",f:parsenoop},2099:{n:"BrtEndTimelineStyles",f:parsenoop},2100:{n:"BrtBeginTimelineStyleElements",f:parsenoop},2101:{n:"BrtEndTimelineStyleElements",f:parsenoop},2102:{n:"BrtDxf15",f:parsenoop},2103:{n:"BrtBeginDxfs15",f:parsenoop},2104:{n:"brtEndDxfs15",f:parsenoop},2105:{n:"BrtSlicerCacheHideItemsWithNoData",f:parsenoop},2106:{n:"BrtBeginItemUniqueNames",f:parsenoop},2107:{n:"BrtEndItemUniqueNames",f:parsenoop},2108:{n:"BrtItemUniqueName",f:parsenoop},2109:{n:"BrtBeginExtConn15",f:parsenoop},2110:{n:"BrtEndExtConn15",f:parsenoop},2111:{n:"BrtBeginOledbPr15",f:parsenoop},2112:{n:"BrtEndOledbPr15",f:parsenoop},2113:{n:"BrtBeginDataFeedPr15",f:parsenoop},2114:{n:"BrtEndDataFeedPr15",f:parsenoop},2115:{n:"BrtTextPr15",f:parsenoop},2116:{n:"BrtRangePr15",f:parsenoop},2117:{n:"BrtDbCommand15",f:parsenoop},2118:{n:"BrtBeginDbTables15",f:parsenoop},2119:{n:"BrtEndDbTables15",f:parsenoop},2120:{n:"BrtDbTable15",f:parsenoop},2121:{n:"BrtBeginDataModel",f:parsenoop},2122:{n:"BrtEndDataModel",f:parsenoop},2123:{n:"BrtBeginModelTables",f:parsenoop},2124:{n:"BrtEndModelTables",f:parsenoop},2125:{n:"BrtModelTable",f:parsenoop},2126:{n:"BrtBeginModelRelationships",f:parsenoop},2127:{n:"BrtEndModelRelationships",f:parsenoop},2128:{n:"BrtModelRelationship",f:parsenoop},2129:{n:"BrtBeginECTxtWiz15",f:parsenoop},2130:{n:"BrtEndECTxtWiz15",f:parsenoop},2131:{n:"BrtBeginECTWFldInfoLst15",f:parsenoop},2132:{n:"BrtEndECTWFldInfoLst15",f:parsenoop},2133:{n:"BrtBeginECTWFldInfo15",f:parsenoop},2134:{n:"BrtFieldListActiveItem",f:parsenoop},2135:{n:"BrtPivotCacheIdVersion",f:parsenoop},2136:{n:"BrtSXDI15",f:parsenoop},65535:{n:"",f:parsenoop}};
var evert_RE=evert_key(XLSBRecordEnum,"n");var XLSRecordEnum={3:{n:"BIFF2NUM",f:parse_BIFF2NUM},4:{n:"BIFF2STR",f:parse_BIFF2STR},6:{n:"Formula",f:parse_Formula},9:{n:"BOF",f:parse_BOF},10:{n:"EOF",f:parse_EOF},12:{n:"CalcCount",f:parse_CalcCount},13:{n:"CalcMode",f:parse_CalcMode},14:{n:"CalcPrecision",f:parse_CalcPrecision},15:{n:"CalcRefMode",f:parse_CalcRefMode},16:{n:"CalcDelta",f:parse_CalcDelta},17:{n:"CalcIter",f:parse_CalcIter},18:{n:"Protect",f:parse_Protect},19:{n:"Password",f:parse_Password},20:{n:"Header",f:parse_Header},21:{n:"Footer",f:parse_Footer},23:{n:"ExternSheet",f:parse_ExternSheet},24:{n:"Lbl",f:parse_Lbl},25:{n:"WinProtect",f:parse_WinProtect},26:{n:"VerticalPageBreaks",f:parse_VerticalPageBreaks},27:{n:"HorizontalPageBreaks",f:parse_HorizontalPageBreaks},28:{n:"Note",f:parse_Note},29:{n:"Selection",f:parse_Selection},34:{n:"Date1904",f:parse_Date1904},35:{n:"ExternName",f:parse_ExternName},38:{n:"LeftMargin",f:parse_LeftMargin},39:{n:"RightMargin",f:parse_RightMargin},40:{n:"TopMargin",f:parse_TopMargin},41:{n:"BottomMargin",f:parse_BottomMargin},42:{n:"PrintRowCol",f:parse_PrintRowCol},43:{n:"PrintGrid",f:parse_PrintGrid},47:{n:"FilePass",f:parse_FilePass},49:{n:"Font",f:parse_Font},51:{n:"PrintSize",f:parse_PrintSize},60:{n:"Continue",f:parse_Continue},61:{n:"Window1",f:parse_Window1},64:{n:"Backup",f:parse_Backup},65:{n:"Pane",f:parse_Pane},66:{n:"CodePage",f:parse_CodePage},77:{n:"Pls",f:parse_Pls},80:{n:"DCon",f:parse_DCon},81:{n:"DConRef",f:parse_DConRef},82:{n:"DConName",f:parse_DConName},85:{n:"DefColWidth",f:parse_DefColWidth},89:{n:"XCT",f:parse_XCT},90:{n:"CRN",f:parse_CRN},91:{n:"FileSharing",f:parse_FileSharing},92:{n:"WriteAccess",f:parse_WriteAccess},93:{n:"Obj",f:parse_Obj},94:{n:"Uncalced",f:parse_Uncalced},95:{n:"CalcSaveRecalc",f:parse_CalcSaveRecalc},96:{n:"Template",f:parse_Template},97:{n:"Intl",f:parse_Intl},99:{n:"ObjProtect",f:parse_ObjProtect},125:{n:"ColInfo",f:parse_ColInfo},128:{n:"Guts",f:parse_Guts},129:{n:"WsBool",f:parse_WsBool},130:{n:"GridSet",f:parse_GridSet},131:{n:"HCenter",f:parse_HCenter},132:{n:"VCenter",f:parse_VCenter},133:{n:"BoundSheet8",f:parse_BoundSheet8},134:{n:"WriteProtect",f:parse_WriteProtect},140:{n:"Country",f:parse_Country},141:{n:"HideObj",f:parse_HideObj},144:{n:"Sort",f:parse_Sort},146:{n:"Palette",f:parse_Palette},151:{n:"Sync",f:parse_Sync},152:{n:"LPr",f:parse_LPr},153:{n:"DxGCol",f:parse_DxGCol},154:{n:"FnGroupName",f:parse_FnGroupName},155:{n:"FilterMode",f:parse_FilterMode},156:{n:"BuiltInFnGroupCount",f:parse_BuiltInFnGroupCount},157:{n:"AutoFilterInfo",f:parse_AutoFilterInfo},158:{n:"AutoFilter",f:parse_AutoFilter},160:{n:"Scl",f:parse_Scl},161:{n:"Setup",f:parse_Setup},174:{n:"ScenMan",f:parse_ScenMan},175:{n:"SCENARIO",f:parse_SCENARIO},176:{n:"SxView",f:parse_SxView},177:{n:"Sxvd",f:parse_Sxvd},178:{n:"SXVI",f:parse_SXVI},180:{n:"SxIvd",f:parse_SxIvd},181:{n:"SXLI",f:parse_SXLI},182:{n:"SXPI",f:parse_SXPI},184:{n:"DocRoute",f:parse_DocRoute},185:{n:"RecipName",f:parse_RecipName},189:{n:"MulRk",f:parse_MulRk},190:{n:"MulBlank",f:parse_MulBlank},193:{n:"Mms",f:parse_Mms},197:{n:"SXDI",f:parse_SXDI},198:{n:"SXDB",f:parse_SXDB},199:{n:"SXFDB",f:parse_SXFDB},200:{n:"SXDBB",f:parse_SXDBB},201:{n:"SXNum",f:parse_SXNum},202:{n:"SxBool",f:parse_SxBool},203:{n:"SxErr",f:parse_SxErr},204:{n:"SXInt",f:parse_SXInt},205:{n:"SXString",f:parse_SXString},206:{n:"SXDtr",f:parse_SXDtr},207:{n:"SxNil",f:parse_SxNil},208:{n:"SXTbl",f:parse_SXTbl},209:{n:"SXTBRGIITM",f:parse_SXTBRGIITM},210:{n:"SxTbpg",f:parse_SxTbpg},211:{n:"ObProj",f:parse_ObProj},213:{n:"SXStreamID",f:parse_SXStreamID},215:{n:"DBCell",f:parse_DBCell},216:{n:"SXRng",f:parse_SXRng},217:{n:"SxIsxoper",f:parse_SxIsxoper},218:{n:"BookBool",f:parse_BookBool},220:{n:"DbOrParamQry",f:parse_DbOrParamQry},221:{n:"ScenarioProtect",f:parse_ScenarioProtect},222:{n:"OleObjectSize",f:parse_OleObjectSize},224:{n:"XF",f:parse_XF},225:{n:"InterfaceHdr",f:parse_InterfaceHdr},226:{n:"InterfaceEnd",f:parse_InterfaceEnd},227:{n:"SXVS",f:parse_SXVS},229:{n:"MergeCells",f:parse_MergeCells},233:{n:"BkHim",f:parse_BkHim},235:{n:"MsoDrawingGroup",f:parse_MsoDrawingGroup},236:{n:"MsoDrawing",f:parse_MsoDrawing},237:{n:"MsoDrawingSelection",f:parse_MsoDrawingSelection},239:{n:"PhoneticInfo",f:parse_PhoneticInfo},240:{n:"SxRule",f:parse_SxRule},241:{n:"SXEx",f:parse_SXEx},242:{n:"SxFilt",f:parse_SxFilt},244:{n:"SxDXF",f:parse_SxDXF},245:{n:"SxItm",f:parse_SxItm},246:{n:"SxName",f:parse_SxName},247:{n:"SxSelect",f:parse_SxSelect},248:{n:"SXPair",f:parse_SXPair},249:{n:"SxFmla",f:parse_SxFmla},251:{n:"SxFormat",f:parse_SxFormat},252:{n:"SST",f:parse_SST},253:{n:"LabelSst",f:parse_LabelSst},255:{n:"ExtSST",f:parse_ExtSST},256:{n:"SXVDEx",f:parse_SXVDEx},259:{n:"SXFormula",f:parse_SXFormula},290:{n:"SXDBEx",f:parse_SXDBEx},311:{n:"RRDInsDel",f:parse_RRDInsDel},312:{n:"RRDHead",f:parse_RRDHead},315:{n:"RRDChgCell",f:parse_RRDChgCell},317:{n:"RRTabId",f:parse_RRTabId},318:{n:"RRDRenSheet",f:parse_RRDRenSheet},319:{n:"RRSort",f:parse_RRSort},320:{n:"RRDMove",f:parse_RRDMove},330:{n:"RRFormat",f:parse_RRFormat},331:{n:"RRAutoFmt",f:parse_RRAutoFmt},333:{n:"RRInsertSh",f:parse_RRInsertSh},334:{n:"RRDMoveBegin",f:parse_RRDMoveBegin},335:{n:"RRDMoveEnd",f:parse_RRDMoveEnd},336:{n:"RRDInsDelBegin",f:parse_RRDInsDelBegin},337:{n:"RRDInsDelEnd",f:parse_RRDInsDelEnd},338:{n:"RRDConflict",f:parse_RRDConflict},339:{n:"RRDDefName",f:parse_RRDDefName},340:{n:"RRDRstEtxp",f:parse_RRDRstEtxp},351:{n:"LRng",f:parse_LRng},352:{n:"UsesELFs",f:parse_UsesELFs},353:{n:"DSF",f:parse_DSF},401:{n:"CUsr",f:parse_CUsr},402:{n:"CbUsr",f:parse_CbUsr},403:{n:"UsrInfo",f:parse_UsrInfo},404:{n:"UsrExcl",f:parse_UsrExcl},405:{n:"FileLock",f:parse_FileLock},406:{n:"RRDInfo",f:parse_RRDInfo},407:{n:"BCUsrs",f:parse_BCUsrs},408:{n:"UsrChk",f:parse_UsrChk},425:{n:"UserBView",f:parse_UserBView},426:{n:"UserSViewBegin",f:parse_UserSViewBegin},427:{n:"UserSViewEnd",f:parse_UserSViewEnd},428:{n:"RRDUserView",f:parse_RRDUserView},429:{n:"Qsi",f:parse_Qsi},430:{n:"SupBook",f:parse_SupBook},431:{n:"Prot4Rev",f:parse_Prot4Rev},432:{n:"CondFmt",f:parse_CondFmt},433:{n:"CF",f:parse_CF},434:{n:"DVal",f:parse_DVal},437:{n:"DConBin",f:parse_DConBin},438:{n:"TxO",f:parse_TxO},439:{n:"RefreshAll",f:parse_RefreshAll},440:{n:"HLink",f:parse_HLink},441:{n:"Lel",f:parse_Lel},442:{n:"CodeName",f:parse_XLSCodeName},443:{n:"SXFDBType",f:parse_SXFDBType},444:{n:"Prot4RevPass",f:parse_Prot4RevPass},445:{n:"ObNoMacros",f:parse_ObNoMacros},446:{n:"Dv",f:parse_Dv},448:{n:"Excel9File",f:parse_Excel9File},449:{n:"RecalcId",f:parse_RecalcId,r:2},450:{n:"EntExU2",f:parse_EntExU2},512:{n:"Dimensions",f:parse_Dimensions},513:{n:"Blank",f:parse_Blank},515:{n:"Number",f:parse_Number},516:{n:"Label",f:parse_Label},517:{n:"BoolErr",f:parse_BoolErr},519:{n:"String",f:parse_String},520:{n:"Row",f:parse_Row},523:{n:"Index",f:parse_Index},545:{n:"Array",f:parse_Array},549:{n:"DefaultRowHeight",f:parse_DefaultRowHeight},566:{n:"Table",f:parse_Table},574:{n:"Window2",f:parse_Window2},638:{n:"RK",f:parse_RK},659:{n:"Style",f:parse_Style},1048:{n:"BigName",f:parse_BigName},1054:{n:"Format",f:parse_Format},1084:{n:"ContinueBigName",f:parse_ContinueBigName},1212:{n:"ShrFmla",f:parse_ShrFmla},2048:{n:"HLinkTooltip",f:parse_HLinkTooltip},2049:{n:"WebPub",f:parse_WebPub},2050:{n:"QsiSXTag",f:parse_QsiSXTag},2051:{n:"DBQueryExt",f:parse_DBQueryExt},2052:{n:"ExtString",f:parse_ExtString},2053:{n:"TxtQry",f:parse_TxtQry},2054:{n:"Qsir",f:parse_Qsir},2055:{n:"Qsif",f:parse_Qsif},2056:{n:"RRDTQSIF",f:parse_RRDTQSIF},2057:{n:"BOF",f:parse_BOF},2058:{n:"OleDbConn",f:parse_OleDbConn},2059:{n:"WOpt",f:parse_WOpt},2060:{n:"SXViewEx",f:parse_SXViewEx},2061:{n:"SXTH",f:parse_SXTH},2062:{n:"SXPIEx",f:parse_SXPIEx},2063:{n:"SXVDTEx",f:parse_SXVDTEx},2064:{n:"SXViewEx9",f:parse_SXViewEx9},2066:{n:"ContinueFrt",f:parse_ContinueFrt},2067:{n:"RealTimeData",f:parse_RealTimeData},2128:{n:"ChartFrtInfo",f:parse_ChartFrtInfo},2129:{n:"FrtWrapper",f:parse_FrtWrapper},2130:{n:"StartBlock",f:parse_StartBlock},2131:{n:"EndBlock",f:parse_EndBlock},2132:{n:"StartObject",f:parse_StartObject},2133:{n:"EndObject",f:parse_EndObject},2134:{n:"CatLab",f:parse_CatLab},2135:{n:"YMult",f:parse_YMult},2136:{n:"SXViewLink",f:parse_SXViewLink},2137:{n:"PivotChartBits",f:parse_PivotChartBits},2138:{n:"FrtFontList",f:parse_FrtFontList},2146:{n:"SheetExt",f:parse_SheetExt},2147:{n:"BookExt",f:parse_BookExt,r:12},2148:{n:"SXAddl",f:parse_SXAddl},2149:{n:"CrErr",f:parse_CrErr},2150:{n:"HFPicture",f:parse_HFPicture},2151:{n:"FeatHdr",f:parse_FeatHdr},2152:{n:"Feat",f:parse_Feat},2154:{n:"DataLabExt",f:parse_DataLabExt},2155:{n:"DataLabExtContents",f:parse_DataLabExtContents},2156:{n:"CellWatch",f:parse_CellWatch},2161:{n:"FeatHdr11",f:parse_FeatHdr11},2162:{n:"Feature11",f:parse_Feature11},2164:{n:"DropDownObjIds",f:parse_DropDownObjIds},2165:{n:"ContinueFrt11",f:parse_ContinueFrt11},2166:{n:"DConn",f:parse_DConn},2167:{n:"List12",f:parse_List12},2168:{n:"Feature12",f:parse_Feature12},2169:{n:"CondFmt12",f:parse_CondFmt12},2170:{n:"CF12",f:parse_CF12},2171:{n:"CFEx",f:parse_CFEx},2172:{n:"XFCRC",f:parse_XFCRC,r:12},2173:{n:"XFExt",f:parse_XFExt,r:12},2174:{n:"AutoFilter12",f:parse_AutoFilter12},2175:{n:"ContinueFrt12",f:parse_ContinueFrt12},2180:{n:"MDTInfo",f:parse_MDTInfo},2181:{n:"MDXStr",f:parse_MDXStr},2182:{n:"MDXTuple",f:parse_MDXTuple},2183:{n:"MDXSet",f:parse_MDXSet},2184:{n:"MDXProp",f:parse_MDXProp},2185:{n:"MDXKPI",f:parse_MDXKPI},2186:{n:"MDB",f:parse_MDB},2187:{n:"PLV",f:parse_PLV},2188:{n:"Compat12",f:parse_Compat12,r:12},2189:{n:"DXF",f:parse_DXF},2190:{n:"TableStyles",f:parse_TableStyles,r:12},2191:{n:"TableStyle",f:parse_TableStyle},2192:{n:"TableStyleElement",f:parse_TableStyleElement},2194:{n:"StyleExt",f:parse_StyleExt},2195:{n:"NamePublish",f:parse_NamePublish},2196:{n:"NameCmt",f:parse_NameCmt},2197:{n:"SortData",f:parse_SortData},2198:{n:"Theme",f:parse_Theme,r:12},2199:{n:"GUIDTypeLib",f:parse_GUIDTypeLib},2200:{n:"FnGrp12",f:parse_FnGrp12},2201:{n:"NameFnGrp12",f:parse_NameFnGrp12},2202:{n:"MTRSettings",f:parse_MTRSettings,r:12},2203:{n:"CompressPictures",f:parse_CompressPictures},2204:{n:"HeaderFooter",f:parse_HeaderFooter},2205:{n:"CrtLayout12",f:parse_CrtLayout12},2206:{n:"CrtMlFrt",f:parse_CrtMlFrt},2207:{n:"CrtMlFrtContinue",f:parse_CrtMlFrtContinue},2211:{n:"ForceFullCalculation",f:parse_ForceFullCalculation},2212:{n:"ShapePropsStream",f:parse_ShapePropsStream},2213:{n:"TextPropsStream",f:parse_TextPropsStream},2214:{n:"RichTextStream",f:parse_RichTextStream},2215:{n:"CrtLayout12A",f:parse_CrtLayout12A},4097:{n:"Units",f:parse_Units},4098:{n:"Chart",f:parse_Chart},4099:{n:"Series",f:parse_Series},4102:{n:"DataFormat",f:parse_DataFormat},4103:{n:"LineFormat",f:parse_LineFormat},4105:{n:"MarkerFormat",f:parse_MarkerFormat},4106:{n:"AreaFormat",f:parse_AreaFormat},4107:{n:"PieFormat",f:parse_PieFormat},4108:{n:"AttachedLabel",f:parse_AttachedLabel},4109:{n:"SeriesText",f:parse_SeriesText},4116:{n:"ChartFormat",f:parse_ChartFormat},4117:{n:"Legend",f:parse_Legend},4118:{n:"SeriesList",f:parse_SeriesList},4119:{n:"Bar",f:parse_Bar},4120:{n:"Line",f:parse_Line},4121:{n:"Pie",f:parse_Pie},4122:{n:"Area",f:parse_Area},4123:{n:"Scatter",f:parse_Scatter},4124:{n:"CrtLine",f:parse_CrtLine},4125:{n:"Axis",f:parse_Axis},4126:{n:"Tick",f:parse_Tick},4127:{n:"ValueRange",f:parse_ValueRange},4128:{n:"CatSerRange",f:parse_CatSerRange},4129:{n:"AxisLine",f:parse_AxisLine},4130:{n:"CrtLink",f:parse_CrtLink},4132:{n:"DefaultText",f:parse_DefaultText},4133:{n:"Text",f:parse_Text},4134:{n:"FontX",f:parse_FontX},4135:{n:"ObjectLink",f:parse_ObjectLink},4146:{n:"Frame",f:parse_Frame},4147:{n:"Begin",f:parse_Begin},4148:{n:"End",f:parse_End},4149:{n:"PlotArea",f:parse_PlotArea},4154:{n:"Chart3d",f:parse_Chart3d},4156:{n:"PicF",f:parse_PicF},4157:{n:"DropBar",f:parse_DropBar},4158:{n:"Radar",f:parse_Radar},4159:{n:"Surf",f:parse_Surf},4160:{n:"RadarArea",f:parse_RadarArea},4161:{n:"AxisParent",f:parse_AxisParent},4163:{n:"LegendException",f:parse_LegendException},4164:{n:"ShtProps",f:parse_ShtProps},4165:{n:"SerToCrt",f:parse_SerToCrt},4166:{n:"AxesUsed",f:parse_AxesUsed},4168:{n:"SBaseRef",f:parse_SBaseRef},4170:{n:"SerParent",f:parse_SerParent},4171:{n:"SerAuxTrend",f:parse_SerAuxTrend},4174:{n:"IFmtRecord",f:parse_IFmtRecord},4175:{n:"Pos",f:parse_Pos},4176:{n:"AlRuns",f:parse_AlRuns},4177:{n:"BRAI",f:parse_BRAI},4187:{n:"SerAuxErrBar",f:parse_SerAuxErrBar},4188:{n:"ClrtClient",f:parse_ClrtClient},4189:{n:"SerFmt",f:parse_SerFmt},4191:{n:"Chart3DBarShape",f:parse_Chart3DBarShape},4192:{n:"Fbi",f:parse_Fbi},4193:{n:"BopPop",f:parse_BopPop},4194:{n:"AxcExt",f:parse_AxcExt},4195:{n:"Dat",f:parse_Dat},4196:{n:"PlotGrowth",f:parse_PlotGrowth},4197:{n:"SIIndex",f:parse_SIIndex},4198:{n:"GelFrame",f:parse_GelFrame},4199:{n:"BopPopCustom",f:parse_BopPopCustom},4200:{n:"Fbi2",f:parse_Fbi2},22:{n:"ExternCount",f:parsenoop},126:{n:"RK",f:parsenoop},127:{n:"ImData",f:parsenoop},135:{n:"Addin",f:parsenoop},136:{n:"Edg",f:parsenoop},137:{n:"Pub",f:parsenoop},145:{n:"Sub",f:parsenoop},148:{n:"LHRecord",f:parsenoop},149:{n:"LHNGraph",f:parsenoop},150:{n:"Sound",f:parsenoop},169:{n:"CoordList",f:parsenoop},171:{n:"GCW",f:parsenoop},188:{n:"ShrFmla",f:parsenoop},194:{n:"AddMenu",f:parsenoop},195:{n:"DelMenu",f:parsenoop},214:{n:"RString",f:parsenoop},223:{n:"UDDesc",f:parsenoop},234:{n:"TabIdConf",f:parsenoop},354:{n:"XL5Modify",f:parsenoop},421:{n:"FileSharing2",f:parsenoop},536:{n:"Name",f:parsenoop},547:{n:"ExternName",f:parse_ExternName},561:{n:"Font",f:parsenoop},1030:{n:"Formula",f:parse_Formula},2157:{n:"FeatInfo",f:parsenoop},2163:{n:"FeatInfo11",f:parsenoop},2177:{n:"SXAddl12",f:parsenoop},2240:{n:"AutoWebPub",f:parsenoop},2241:{n:"ListObj",f:parsenoop},2242:{n:"ListField",f:parsenoop},2243:{n:"ListDV",f:parsenoop},2244:{n:"ListCondFmt",f:parsenoop},2245:{n:"ListCF",f:parsenoop},2246:{n:"FMQry",f:parsenoop},2247:{n:"FMSQry",f:parsenoop},2248:{n:"PLV",f:parsenoop},2249:{n:"LnExt",f:parsenoop},2250:{n:"MkrExt",f:parsenoop},2251:{n:"CrtCoopt",f:parsenoop},0:{}};function parse_ods(zip,opts){if(typeof module!=="undefined"&&typeof require!=="undefined"&&typeof ODS==="undefined")ODS=require("./od"+"s");if(typeof ODS==="undefined"||!ODS.parse_ods)throw new Error("Unsupported ODS");return ODS.parse_ods(zip,opts)}function fix_opts_func(defaults){return function fix_opts(opts){for(var i=0;i!=defaults.length;++i){var d=defaults[i];if(opts[d[0]]===undefined)opts[d[0]]=d[1];if(d[2]==="n")opts[d[0]]=Number(opts[d[0]])}}}var fix_read_opts=fix_opts_func([["cellNF",false],["cellHTML",true],["cellFormula",true],["cellStyles",false],["cellDates",false],["sheetStubs",false],["sheetRows",0,"n"],["bookDeps",false],["bookSheets",false],["bookProps",false],["bookFiles",false],["bookVBA",false],["password",""],["WTF",false]]);var fix_write_opts=fix_opts_func([["cellDates",false],["bookSST",false],["bookType","xlsx"],["WTF",false]]);function safe_parse_wbrels(wbrels,sheets){if(!wbrels)return 0;try{wbrels=sheets.map(function pwbr(w){return[w.name,wbrels["!id"][w.id].Target]})}catch(e){return null}return!wbrels||wbrels.length===0?null:wbrels}function safe_parse_ws(zip,path,relsPath,sheet,sheetRels,sheets,opts){try{sheetRels[sheet]=parse_rels(getzipdata(zip,relsPath,true),path);sheets[sheet]=parse_ws(getzipdata(zip,path),path,opts,sheetRels[sheet])}catch(e){if(opts.WTF)throw e}}var nodirs=function nodirs(x){return x.substr(-1)!="/"};function parse_zip(zip,opts){make_ssf(SSF);opts=opts||{};fix_read_opts(opts);reset_cp();if(safegetzipfile(zip,"META-INF/manifest.xml"))return parse_ods(zip,opts);var entries=keys(zip.files).filter(nodirs).sort();var dir=parse_ct(getzipdata(zip,"[Content_Types].xml"),opts);var xlsb=false;var sheets,binname;if(dir.workbooks.length===0){binname="xl/workbook.xml";if(getzipdata(zip,binname,true))dir.workbooks.push(binname)}if(dir.workbooks.length===0){binname="xl/workbook.bin";if(!getzipfile(zip,binname,true))throw new Error("Could not find workbook");dir.workbooks.push(binname);xlsb=true}if(dir.workbooks[0].substr(-3)=="bin")xlsb=true;if(xlsb)set_cp(1200);if(!opts.bookSheets&&!opts.bookProps){strs=[];if(dir.sst)strs=parse_sst(getzipdata(zip,dir.sst.replace(/^\//,"")),dir.sst,opts);styles={};if(dir.style)styles=parse_sty(getzipdata(zip,dir.style.replace(/^\//,"")),dir.style,opts);themes={};if(opts.cellStyles&&dir.themes.length)themes=parse_theme(getzipdata(zip,dir.themes[0].replace(/^\//,""),true),dir.themes[0],opts)}var wb=parse_wb(getzipdata(zip,dir.workbooks[0].replace(/^\//,"")),dir.workbooks[0],opts);var props={},propdata="";if(dir.coreprops.length!==0){propdata=getzipdata(zip,dir.coreprops[0].replace(/^\//,""),true);if(propdata)props=parse_core_props(propdata);if(dir.extprops.length!==0){propdata=getzipdata(zip,dir.extprops[0].replace(/^\//,""),true);if(propdata)parse_ext_props(propdata,props)}}var custprops={};if(!opts.bookSheets||opts.bookProps){if(dir.custprops.length!==0){propdata=getzipdata(zip,dir.custprops[0].replace(/^\//,""),true);if(propdata)custprops=parse_cust_props(propdata,opts)}}var out={};if(opts.bookSheets||opts.bookProps){if(props.Worksheets&&props.SheetNames.length>0)sheets=props.SheetNames;else if(wb.Sheets)sheets=wb.Sheets.map(function pluck(x){return x.name});if(opts.bookProps){out.Props=props;out.Custprops=custprops}if(typeof sheets!=="undefined")out.SheetNames=sheets;if(opts.bookSheets?out.SheetNames:opts.bookProps)return out}sheets={};var deps={};if(opts.bookDeps&&dir.calcchain)deps=parse_cc(getzipdata(zip,dir.calcchain.replace(/^\//,"")),dir.calcchain,opts);var i=0;var sheetRels={};var path,relsPath;if(!props.Worksheets){var wbsheets=wb.Sheets;props.Worksheets=wbsheets.length;props.SheetNames=[];for(var j=0;j!=wbsheets.length;++j){props.SheetNames[j]=wbsheets[j].name}}var wbext=xlsb?"bin":"xml";var wbrelsfile="xl/_rels/workbook."+wbext+".rels";var wbrels=parse_rels(getzipdata(zip,wbrelsfile,true),wbrelsfile);if(wbrels)wbrels=safe_parse_wbrels(wbrels,wb.Sheets);var nmode=getzipdata(zip,"xl/worksheets/sheet.xml",true)?1:0;for(i=0;i!=props.Worksheets;++i){if(wbrels)path="xl/"+wbrels[i][1].replace(/[\/]?xl\//,"");else{path="xl/worksheets/sheet"+(i+1-nmode)+"."+wbext;path=path.replace(/sheet0\./,"sheet.")}relsPath=path.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels");safe_parse_ws(zip,path,relsPath,props.SheetNames[i],sheetRels,sheets,opts)}if(dir.comments)parse_comments(zip,dir.comments,sheets,sheetRels,opts);out={Directory:dir,Workbook:wb,Props:props,Custprops:custprops,Deps:deps,Sheets:sheets,SheetNames:props.SheetNames,Strings:strs,Styles:styles,Themes:themes,SSF:SSF.get_table()};if(opts.bookFiles){out.keys=entries;out.files=zip.files}if(opts.bookVBA){if(dir.vba.length>0)out.vbaraw=getzipdata(zip,dir.vba[0],true);else if(dir.defaults.bin==="application/vnd.ms-office.vbaProject")out.vbaraw=getzipdata(zip,"xl/vbaProject.bin",true)}return out}function add_rels(rels,rId,f,type,relobj){if(!relobj)relobj={};if(!rels["!id"])rels["!id"]={};relobj.Id="rId"+rId;relobj.Type=type;relobj.Target=f;if(rels["!id"][relobj.Id])throw new Error("Cannot rewrite rId "+rId);rels["!id"][relobj.Id]=relobj;rels[("/"+relobj.Target).replace("//","/")]=relobj}function write_zip(wb,opts){if(wb&&!wb.SSF){wb.SSF=SSF.get_table()}if(wb&&wb.SSF){make_ssf(SSF);SSF.load_table(wb.SSF);opts.revssf=evert_num(wb.SSF);opts.revssf[wb.SSF[65535]]=0}opts.rels={};opts.wbrels={};opts.Strings=[];opts.Strings.Count=0;opts.Strings.Unique=0;var wbext=opts.bookType=="xlsb"?"bin":"xml";var ct={workbooks:[],sheets:[],calcchains:[],themes:[],styles:[],coreprops:[],extprops:[],custprops:[],strs:[],comments:[],vba:[],TODO:[],rels:[],xmlns:""};fix_write_opts(opts=opts||{});var zip=new jszip;var f="",rId=0;opts.cellXfs=[];get_cell_style(opts.cellXfs,{},{revssf:{General:0}});f="docProps/core.xml";zip.file(f,write_core_props(wb.Props,opts));ct.coreprops.push(f);add_rels(opts.rels,2,f,RELS.CORE_PROPS);f="docProps/app.xml";if(!wb.Props)wb.Props={};wb.Props.SheetNames=wb.SheetNames;wb.Props.Worksheets=wb.SheetNames.length;zip.file(f,write_ext_props(wb.Props,opts));ct.extprops.push(f);add_rels(opts.rels,3,f,RELS.EXT_PROPS);if(wb.Custprops!==wb.Props&&keys(wb.Custprops||{}).length>0){f="docProps/custom.xml";zip.file(f,write_cust_props(wb.Custprops,opts));ct.custprops.push(f);add_rels(opts.rels,4,f,RELS.CUST_PROPS)}f="xl/workbook."+wbext;zip.file(f,write_wb(wb,f,opts));ct.workbooks.push(f);add_rels(opts.rels,1,f,RELS.WB);for(rId=1;rId<=wb.SheetNames.length;++rId){f="xl/worksheets/sheet"+rId+"."+wbext;zip.file(f,write_ws(rId-1,f,opts,wb));ct.sheets.push(f);add_rels(opts.wbrels,rId,"worksheets/sheet"+rId+"."+wbext,RELS.WS)}if(opts.Strings!=null&&opts.Strings.length>0){f="xl/sharedStrings."+wbext;zip.file(f,write_sst(opts.Strings,f,opts));ct.strs.push(f);add_rels(opts.wbrels,++rId,"sharedStrings."+wbext,RELS.SST)}f="xl/theme/theme1.xml";zip.file(f,write_theme());ct.themes.push(f);add_rels(opts.wbrels,++rId,"theme/theme1.xml",RELS.THEME);f="xl/styles."+wbext;zip.file(f,write_sty(wb,f,opts));ct.styles.push(f);add_rels(opts.wbrels,++rId,"styles."+wbext,RELS.STY);zip.file("[Content_Types].xml",write_ct(ct,opts));zip.file("_rels/.rels",write_rels(opts.rels));zip.file("xl/_rels/workbook."+wbext+".rels",write_rels(opts.wbrels));return zip}function firstbyte(f,o){switch((o||{}).type||"base64"){case"buffer":return f[0];case"base64":return Base64.decode(f.substr(0,12)).charCodeAt(0);case"binary":return f.charCodeAt(0);case"array":return f[0];default:throw new Error("Unrecognized type "+o.type)}}function read_zip(data,opts){var zip,d=data;var o=opts||{};if(!o.type)o.type=has_buf&&Buffer.isBuffer(data)?"buffer":"base64";switch(o.type){case"base64":zip=new jszip(d,{base64:true});break;case"binary":case"array":zip=new jszip(d,{base64:false});break;case"buffer":zip=new jszip(d);break;case"file":zip=new jszip(d=_fs.readFileSync(data));break;default:throw new Error("Unrecognized type "+o.type)}return parse_zip(zip,o)}function readSync(data,opts){var zip,d=data,isfile=false,n;var o=opts||{};if(!o.type)o.type=has_buf&&Buffer.isBuffer(data)?"buffer":"base64";if(o.type=="file"){isfile=true;o.type="buffer";d=_fs.readFileSync(data)}switch(n=firstbyte(d,o)){case 208:if(isfile)o.type="file";return parse_xlscfb(CFB.read(data,o),o);case 9:return parse_xlscfb(s2a(o.type==="base64"?Base64.decode(data):data),o);case 60:return parse_xlml(d,o);case 80:if(isfile)o.type="file";return read_zip(data,opts);default:throw new Error("Unsupported file "+n)}}function readFileSync(data,opts){var o=opts||{};o.type="file";return readSync(data,o)}function write_zip_type(wb,opts){var o=opts||{};var z=write_zip(wb,o);switch(o.type){case"base64":return z.generate({type:"base64"});case"binary":return z.generate({type:"string"});case"buffer":return z.generate({type:"nodebuffer"});case"file":return _fs.writeFileSync(o.file,z.generate({type:"nodebuffer"}));default:throw new Error("Unrecognized type "+o.type)}}function writeSync(wb,opts){var o=opts||{};switch(o.bookType){case"xml":return write_xlml(wb,o);default:return write_zip_type(wb,o)}}function writeFileSync(wb,filename,opts){var o=opts||{};o.type="file";o.file=filename;switch(o.file.substr(-5).toLowerCase()){case".xlsx":o.bookType="xlsx";break;case".xlsm":o.bookType="xlsm";break;case".xlsb":o.bookType="xlsb";break;default:switch(o.file.substr(-4).toLowerCase()){case".xls":o.bookType="xls";break;case".xml":o.bookType="xml";break}}return writeSync(wb,o)}function decode_row(rowstr){return parseInt(unfix_row(rowstr),10)-1}function encode_row(row){return""+(row+1)}function fix_row(cstr){return cstr.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function unfix_row(cstr){return cstr.replace(/\$(\d+)$/,"$1")}function decode_col(colstr){var c=unfix_col(colstr),d=0,i=0;for(;i!==c.length;++i)d=26*d+c.charCodeAt(i)-64;return d-1}function encode_col(col){var s="";for(++col;col;col=Math.floor((col-1)/26))s=String.fromCharCode((col-1)%26+65)+s;return s}function fix_col(cstr){return cstr.replace(/^([A-Z])/,"$$$1")}function unfix_col(cstr){return cstr.replace(/^\$([A-Z])/,"$1")}function split_cell(cstr){return cstr.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function decode_cell(cstr){var splt=split_cell(cstr);return{c:decode_col(splt[0]),r:decode_row(splt[1])}}function encode_cell(cell){return encode_col(cell.c)+encode_row(cell.r)}function fix_cell(cstr){return fix_col(fix_row(cstr))}function unfix_cell(cstr){return unfix_col(unfix_row(cstr))}function decode_range(range){var x=range.split(":").map(decode_cell);return{s:x[0],e:x[x.length-1]}}function encode_range(cs,ce){if(ce===undefined||typeof ce==="number")return encode_range(cs.s,cs.e);if(typeof cs!=="string")cs=encode_cell(cs);if(typeof ce!=="string")ce=encode_cell(ce);return cs==ce?cs:cs+":"+ce}function safe_decode_range(range){var o={s:{c:0,r:0},e:{c:0,r:0}};var idx=0,i=0,cc=0;var len=range.length;for(idx=0;i<len;++i){if((cc=range.charCodeAt(i)-64)<1||cc>26)break;idx=26*idx+cc}o.s.c=--idx;for(idx=0;i<len;++i){if((cc=range.charCodeAt(i)-48)<0||cc>9)break;idx=10*idx+cc}o.s.r=--idx;if(i===len||range.charCodeAt(++i)===58){o.e.c=o.s.c;o.e.r=o.s.r;return o}for(idx=0;i!=len;++i){if((cc=range.charCodeAt(i)-64)<1||cc>26)break;idx=26*idx+cc}o.e.c=--idx;for(idx=0;i!=len;++i){if((cc=range.charCodeAt(i)-48)<0||cc>9)break;idx=10*idx+cc}o.e.r=--idx;return o}function safe_format_cell(cell,v){if(cell.z!==undefined)try{return cell.w=SSF.format(cell.z,v)}catch(e){}if(!cell.XF)return v;try{return cell.w=SSF.format(cell.XF.ifmt||0,v)}catch(e){return""+v}}function format_cell(cell,v){if(cell==null||cell.t==null)return"";if(cell.w!==undefined)return cell.w;if(v===undefined)return safe_format_cell(cell,cell.v);return safe_format_cell(cell,v)}function sheet_to_json(sheet,opts){var val,row,range,header=0,offset=1,r,hdr=[],isempty,R,C,v;var o=opts!=null?opts:{};var raw=o.raw;if(sheet==null||sheet["!ref"]==null)return[];range=o.range!==undefined?o.range:sheet["!ref"];if(o.header===1)header=1;else if(o.header==="A")header=2;else if(Array.isArray(o.header))header=3;switch(typeof range){case"string":r=safe_decode_range(range);break;case"number":r=safe_decode_range(sheet["!ref"]);r.s.r=range;break;default:r=range}if(header>0)offset=0;var rr=encode_row(r.s.r);var cols=new Array(r.e.c-r.s.c+1);var out=new Array(r.e.r-r.s.r-offset+1);var outi=0;for(C=r.s.c;C<=r.e.c;++C){cols[C]=encode_col(C);val=sheet[cols[C]+rr];switch(header){case 1:hdr[C]=C;break;case 2:hdr[C]=cols[C];break;case 3:hdr[C]=o.header[C-r.s.c];break;default:if(val===undefined)continue;hdr[C]=format_cell(val)}}for(R=r.s.r+offset;R<=r.e.r;++R){rr=encode_row(R);isempty=true;if(header===1)row=[];else{row={};if(Object.defineProperty)Object.defineProperty(row,"__rowNum__",{value:R,enumerable:false});else row.__rowNum__=R}for(C=r.s.c;C<=r.e.c;++C){val=sheet[cols[C]+rr];if(val===undefined||val.t===undefined)continue;v=val.v;switch(val.t){case"e":continue;case"s":break;case"b":case"n":break;default:throw"unrecognized type "+val.t}if(v!==undefined){row[hdr[C]]=raw?v:format_cell(val,v);isempty=false}}if(isempty===false||header===1)out[outi++]=row}out.length=outi;return out}function sheet_to_row_object_array(sheet,opts){return sheet_to_json(sheet,opts!=null?opts:{})}function sheet_to_csv(sheet,opts){var out="",txt="",qreg=/"/g;var o=opts==null?{}:opts;if(sheet==null||sheet["!ref"]==null)return"";var r=safe_decode_range(sheet["!ref"]);var FS=o.FS!==undefined?o.FS:",",fs=FS.charCodeAt(0);var RS=o.RS!==undefined?o.RS:"\n",rs=RS.charCodeAt(0);var row="",rr="",cols=[];var i=0,cc=0,val;var R=0,C=0;for(C=r.s.c;C<=r.e.c;++C)cols[C]=encode_col(C);for(R=r.s.r;R<=r.e.r;++R){row="";rr=encode_row(R);for(C=r.s.c;C<=r.e.c;++C){val=sheet[cols[C]+rr];txt=val!==undefined?""+format_cell(val):"";for(i=0,cc=0;i!==txt.length;++i)if((cc=txt.charCodeAt(i))===fs||cc===rs||cc===34){txt='"'+txt.replace(qreg,'""')+'"';break}row+=(C===r.s.c?"":FS)+txt}out+=row+RS}return out}var make_csv=sheet_to_csv;function sheet_to_formulae(sheet){var cmds,y="",x,val="";if(sheet==null||sheet["!ref"]==null)return"";var r=safe_decode_range(sheet["!ref"]),rr="",cols=[],C;cmds=new Array((r.e.r-r.s.r+1)*(r.e.c-r.s.c+1));var i=0;for(C=r.s.c;C<=r.e.c;++C)cols[C]=encode_col(C);for(var R=r.s.r;R<=r.e.r;++R){rr=encode_row(R);for(C=r.s.c;C<=r.e.c;++C){y=cols[C]+rr;x=sheet[y];val="";if(x===undefined)continue;if(x.f!=null)val=x.f;else if(x.w!==undefined)val="'"+x.w;else if(x.v===undefined)continue;else val=""+x.v;cmds[i++]=y+"="+val}}cmds.length=i;return cmds}var utils={encode_col:encode_col,encode_row:encode_row,encode_cell:encode_cell,encode_range:encode_range,decode_col:decode_col,decode_row:decode_row,split_cell:split_cell,decode_cell:decode_cell,decode_range:decode_range,format_cell:format_cell,get_formulae:sheet_to_formulae,make_csv:sheet_to_csv,make_json:sheet_to_json,make_formulae:sheet_to_formulae,sheet_to_csv:sheet_to_csv,sheet_to_json:sheet_to_json,sheet_to_formulae:sheet_to_formulae,sheet_to_row_object_array:sheet_to_row_object_array};XLSX.parse_xlscfb=parse_xlscfb;XLSX.parse_zip=parse_zip;XLSX.read=readSync;XLSX.readFile=readFileSync;XLSX.readFileSync=readFileSync;XLSX.write=writeSync;XLSX.writeFile=writeFileSync;XLSX.writeFileSync=writeFileSync;XLSX.utils=utils;XLSX.CFB=CFB;XLSX.SSF=SSF})(typeof exports!=="undefined"?exports:XLSX);var XLS=XLSX;
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* globals window */
if (typeof window !== 'undefined' && window.XLSX) {
    module.exports = window.XLSX;
} else {
    module.exports = require('./browser-xlsx');
}

},{"./browser-xlsx":1}],2:[function(require,module,exports){
"use strict"; // eslint-disable-line quotes

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');

var Data = function () {
    function Data(data, name, ws) {
        _classCallCheck(this, Data);

        if (_.isArray(data)) {
            this.data = data;
        } else {
            throw new TypeError('data provided to 1D data super-class must be an array');
        }
        this.name = name;
        this.ws = ws;
    }

    _createClass(Data, [{
        key: 'get',
        value: function get(i) {
            return this.data[i] || {
                v: '',
                t: 's'
            };
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            return _.map(this.data, 'v');
        }
    }]);

    return Data;
}();

module.exports = Data;
},{"lodash":12}],3:[function(require,module,exports){
'use strict';

/* globals window */
window.XLSX = require('./index');
},{"./index":5}],4:[function(require,module,exports){
"use strict"; // eslint-disable-line quotes

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('./util');
var _ = require('lodash');

var Data = require('./1d_data');

var Column = function (_Data) {
    _inherits(Column, _Data);

    function Column(data, _num, ws) {
        _classCallCheck(this, Column);

        _num = _num || 0;
        var num = util.encode_col(_num);
        if (_.isObject(data)) {
            if (data['!ref']) {
                var range = util.decode_range(data['!ref']);
                var s = range.s.r,
                    e = range.e.r,
                    c = range.s.c;
                if (e < s) {
                    // prevent an infinite loop
                    var t = e; // support platforms that don't support destructuring
                    e = s;
                    s = t;
                }
                var arr = [];
                for (var i = s; i <= e; i++) {
                    arr.push(data[util.encode_cell({ c: c, r: i })]);
                }

                var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, arr, num, ws));

                _.extend(_this, data);
                return _possibleConstructorReturn(_this);
            } else {
                data = _.values(data);
            }
        }
        if (_.isArray(data)) {
            var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, data, num, ws));

            _this['!ref'] = util.encode_range({ s: { c: _num, r: 0 }, e: { c: _num, r: data.length - 1 } });
            data.forEach(function (cell, r) {
                _this[util.encode_cell({ c: _num, r: r })] = cell;
            });
        } else {
            throw new TypeError('could not parse data provided to Column');
        }
        return _possibleConstructorReturn(_this);
    }

    _createClass(Column, [{
        key: 'get',
        value: function get(i) {
            if (_.isString(i)) {
                i = util.decode_row(i);
            }
            return _get(Column.prototype.__proto__ || Object.getPrototypeOf(Column.prototype), 'get', this).call(this, i);
        }
    }]);

    return Column;
}(Data);

module.exports = Column;
},{"./1d_data":2,"./util":8,"lodash":12}],5:[function(require,module,exports){
"use strict"; // eslint-disable-line quotes

var XLSX = require('./../browser-xlsx');
var _ = require('lodash');

var io = require('./io');
var Worksheet = require('./worksheet');
var Workbook = require('./workbook');

_.extend(exports, XLSX);
exports.version = require('../package.json').version;

_.extend(exports, io);

exports.utils = exports.util = require('./util');

exports.Workbook = Workbook;
exports.Worksheet = Worksheet;
},{"../package.json":13,"./../browser-xlsx":1,"./io":6,"./util":8,"./workbook":9,"./worksheet":10,"lodash":12}],6:[function(require,module,exports){
"use strict"; // eslint-disable-line quotes

var XLSX = require('./../browser-xlsx');
var _ = require('lodash');
var fs = require('fs');

var Workbook = require('./workbook');

function read(data, options) {
    return new Workbook(XLSX.read(data, options));
}
exports.read = read;

function readFileSync(filename, options) {
    return new Workbook(XLSX.readFileSync(filename, options));
}
exports.readFileSync = readFileSync;

function readFile(filename, options, cb) {
    if (_.isFunction(options)) {
        // readFile(filename, cb)
        cb = options;
        options = undefined;
    }
    if (!_.isFunction(cb)) {
        // readFile(filename, [options])
        // for compatibility
        return readFileSync(filename, options);
    }
    // readFile(filename, [options], cb)
    fs.readFile(filename, function (err, data) {
        if (err) {
            return cb(err);
        }
        cb(null, read(data, options));
    });
}
exports.readFile = readFile;
},{"./../browser-xlsx":1,"./workbook":9,"fs":11,"lodash":12}],7:[function(require,module,exports){
"use strict"; // eslint-disable-line quotes

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('./util');
var _ = require('lodash');

var Data = require('./1d_data');

var Row = function (_Data) {
    _inherits(Row, _Data);

    function Row(data, _num, ws) {
        _classCallCheck(this, Row);

        _num = _num || 0;
        var num = util.encode_row(_num);
        if (_.isObject(data)) {
            if (data['!ref']) {
                var range = util.decode_range(data['!ref']);
                var s = range.s.c,
                    e = range.e.c,
                    r = range.s.r;
                if (e < s) {
                    // prevent an infinite loop
                    var t = e; // support platforms that don't support destructuring
                    e = s;
                    s = t;
                }
                var arr = [];
                for (var i = s; i <= e; i++) {
                    arr.push(data[util.encode_cell({ c: i, r: r })]);
                }

                var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, arr, num, ws));

                _.extend(_this, data);
                return _possibleConstructorReturn(_this);
            } else {
                data = _.values(data);
            }
        }
        if (_.isArray(data)) {
            var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, data, num, ws));

            _this['!ref'] = util.encode_range({ s: { c: 0, r: _num }, e: { c: data.length - 1, r: _num } });
            data.forEach(function (cell, c) {
                _this[util.encode_cell({ r: _num, c: c })] = cell;
            });
        } else {
            throw new TypeError('could not parse data provided to Row');
        }
        return _possibleConstructorReturn(_this);
    }

    _createClass(Row, [{
        key: 'get',
        value: function get(i) {
            if (_.isString(i)) {
                i = util.decode_col(i);
            }
            return _get(Row.prototype.__proto__ || Object.getPrototypeOf(Row.prototype), 'get', this).call(this, i);
        }
    }]);

    return Row;
}(Data);

module.exports = Row;
},{"./1d_data":2,"./util":8,"lodash":12}],8:[function(require,module,exports){
"use strict"; // eslint-disable-line quotes

var XLSX = require('./../browser-xlsx');
var util = XLSX.utils;
var _ = require('lodash');

_.extend(exports, util);

exports.cell_in_range = function (cell, range) {
    cell = util.decode_cell(cell);
    range = util.decode_range(range);
    return range.s.c <= cell.c && range.s.r <= cell.r && range.e.c >= cell.c && range.e.r >= cell.r;
};

exports.encode_cell = function (cell) {
    return util.encode_cell({
        r: _.isString(cell.r) ? util.decode_row(cell.r) : cell.r,
        c: _.isString(cell.c) ? util.decode_col(cell.c) : cell.c
    });
};
},{"./../browser-xlsx":1,"lodash":12}],9:[function(require,module,exports){
"use strict"; // eslint-disable-line quotes

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');

var Worksheet = require('./worksheet');

var Workbook = function () {
    function Workbook(x_wb) {
        var _this = this;

        _classCallCheck(this, Workbook);

        if (x_wb) {
            _.extend(this, x_wb);
            this.Sheets = _.mapValues(this.Sheets, function (sheet, name) {
                return new Worksheet(sheet, name, _this);
            });
        } else {
            this.SheetNames = [];
            this.Sheets = {};
        }
    }

    _createClass(Workbook, [{
        key: 'addSheet',
        value: function addSheet(ws) {
            this.SheetNames.push(ws.name);
            this.Sheets[ws.name] = ws;
            ws._workbook = this;
        }
    }, {
        key: 'toJSON',
        value: function toJSON(opts) {
            return _.mapValues(this.Sheets, function (s) {
                return s.toJSON(opts);
            });
        }
    }, {
        key: 'toArray',
        value: function toArray(opts) {
            return _.map(this.Sheets, function (s) {
                return s.toArray(opts);
            });
        }
    }]);

    return Workbook;
}();

module.exports = Workbook;
},{"./worksheet":10,"lodash":12}],10:[function(require,module,exports){
"use strict"; // eslint-disable-line quotes

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('./util');
var _ = require('lodash');

var Row = require('./row');
var Column = require('./col');

var Worksheet = function () {
    function Worksheet(data, name, wb) {
        var _this = this;

        _classCallCheck(this, Worksheet);

        if (data['!ref']) {
            _.extend(this, data);
        } else if (_.isArray(data)) {
            var maxLength = 0;
            data.forEach(function (row, r) {
                row.forEach(function (cell, c) {
                    var t = void 0;
                    switch (typeof cell === 'undefined' ? 'undefined' : _typeof(cell)) {
                        case 'string':
                            t = 's';
                            break;
                        case 'number':
                            t = 'n';
                            break;
                        case 'boolean':
                            t = 'b';
                            break;
                        case 'object':
                            if (_.isDate(cell)) {
                                t = 'd';
                                break;
                            }
                        // else falls through
                        default:
                            t = 's';
                            break;
                    }
                    _this[util.encode_cell({ c: c, r: r })] = _.isObject(cell) ? cell : { v: cell, t: t };
                });
                maxLength = Math.max(maxLength, row.length - 1);
            });
            this['!ref'] = util.encode_range({ s: util.decode_cell('A1'), e: { c: maxLength, r: Math.max(data.length - 1, 0) } });
        }

        this.name = name;
        this._workbook = wb;
    }

    _createClass(Worksheet, [{
        key: 'getCell',
        value: function getCell() {
            var cell = void 0;
            switch (arguments.length) {
                case 1:
                    cell = arguments[0];
                    if (_.isObject(arguments[0])) {
                        return this[util.encode_cell(arguments[0])];
                    } else if (_.isString(arguments[0])) {
                        return this[cell];
                    }
                    break;
                case 2:
                    return this.getCell({
                        r: arguments[0],
                        c: arguments[1]
                    });
            }
            throw new TypeError('bad arguments passed to getCell');
        }
    }, {
        key: 'getCol',
        value: function getCol(col) {
            col = util.decode_col(col);
            var range = util.decode_range(this['!ref']);
            var col_obj = {
                '!ref': util.encode_range({
                    s: { c: col, r: range.s.r },
                    e: { c: col, r: range.e.r }
                })
            };
            for (var r = range.s.r; r < range.e.r; r++) {
                var cell = util.encode_cell({ c: col, r: r });
                col_obj[cell] = this[cell];
            }
            return new Column(col_obj, col, this);
        }
    }, {
        key: 'getRow',
        value: function getRow(row) {
            row = util.decode_row(row);
            var range = util.decode_range(this['!ref']);
            var row_obj = {
                '!ref': util.encode_range({
                    s: { c: range.s.c, r: row },
                    e: { c: range.e.c, r: row }
                })
            };
            for (var c = range.s.c; c < range.e.c; c++) {
                var cell = util.encode_cell({ c: c, r: row });
                row_obj[cell] = this[cell];
            }
            return new Row(row_obj, row, this);
        }
    }, {
        key: 'getRange',
        value: function getRange(range) {
            var r = _.pickBy(this, function (val, key) {
                return util.cell_in_range(key, range);
            });
            r['!ref'] = range;
            return new Worksheet(r, this.name, this._workbook);
        }
    }, {
        key: 'toJSON',
        value: function toJSON(opts) {
            var defaultOpts = {
                raw: true,
                array: true
            };
            opts = _.extend(defaultOpts, opts);
            var data = util.sheet_to_json(this, opts);
            if (opts.array) {
                return data;
            } else {
                return _.fromPairs(_.keys(data[0]).map(function (key) {
                    return [key, data.map(function (v) {
                        return v[key];
                    })];
                }));
            }
        }
    }, {
        key: 'toArray',
        value: function toArray(opts) {
            var defaultOpts = {
                raw: true,
                header: 1
            };
            opts = _.extend(defaultOpts, opts);
            return util.sheet_to_json(this, opts);
        }
    }, {
        key: 'toCSV',
        value: function toCSV(opts) {
            opts = opts || {};
            var defaultOpts = {
                FS: opts.delimiter,
                RS: opts.line
            };
            opts = _.extend(defaultOpts, opts);
            return util.sheet_to_csv(this, opts);
        }
    }]);

    return Worksheet;
}();

module.exports = Worksheet;
},{"./col":4,"./row":7,"./util":8,"lodash":12}],11:[function(require,module,exports){

},{}],12:[function(require,module,exports){
(function (global){
/**
 * @license
 * lodash <https://lodash.com/>
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.16.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://github.com/es-shims.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for function metadata. */
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      CURRY_BOUND_FLAG = 4,
      CURRY_FLAG = 8,
      CURRY_RIGHT_FLAG = 16,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64,
      ARY_FLAG = 128,
      REARG_FLAG = 256,
      FLIP_FLAG = 512;

  /** Used to compose bitmasks for comparison styles. */
  var UNORDERED_COMPARE_FLAG = 1,
      PARTIAL_COMPARE_FLAG = 2;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 500,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', ARY_FLAG],
    ['bind', BIND_FLAG],
    ['bindKey', BIND_KEY_FLAG],
    ['curry', CURRY_FLAG],
    ['curryRight', CURRY_RIGHT_FLAG],
    ['flip', FLIP_FLAG],
    ['partial', PARTIAL_FLAG],
    ['partialRight', PARTIAL_RIGHT_FLAG],
    ['rearg', REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
      rsComboSymbolsRange = '\\u20d0-\\u20f0',
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
      rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
    rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
    rsUpper + '+' + rsOptUpperContr,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array ? array.length : 0;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array ? array.length : 0,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array ? array.length : 0;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array ? array.length : 0;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array ? array.length : 0;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array ? array.length : 0;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        iteratorSymbol = Symbol ? Symbol.iterator : undefined,
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array of at least `200` elements
     * and any iteratees accept only one argument. The heuristic for whether a
     * section qualifies for shortcut fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB). Change the following template settings to use
     * alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || arrLength < LARGE_ARRAY_SIZE ||
          (arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values ? values.length : 0;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function assignInDefaults(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths of elements to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          isNil = object == null,
          length = paths.length,
          result = Array(length);

      while (++index < length) {
        result[index] = isNil ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {boolean} [isFull] Specify a clone including symbols.
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var props = isArr ? undefined : (isFull ? getAllKeys : keys)(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      return objectToString.call(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      if (!isKey(path, object)) {
        path = castPath(path);
        object = parent(object, path);
        path = last(path);
      }
      var func = object == null ? object : object[toKey(path)];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && objectToString.call(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && objectToString.call(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && objectToString.call(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {boolean} [bitmask] The bitmask of comparison flags.
     *  The bitmask may be composed of the following flags:
     *     1 - Unordered comparison
     *     2 - Partial comparison
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, customizer, bitmask, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = arrayTag,
          othTag = arrayTag;

      if (!objIsArr) {
        objTag = getTag(object);
        objTag = objTag == argsTag ? objectTag : objTag;
      }
      if (!othIsArr) {
        othTag = getTag(other);
        othTag = othTag == argsTag ? objectTag : othTag;
      }
      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
          : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
      }
      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObject(value) && objectToString.call(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} props The property identifiers to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, props) {
      object = Object(object);
      return basePickBy(object, props, function(value, key) {
        return key in object;
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} props The property identifiers to pick from.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, props, predicate) {
      var index = -1,
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index],
            value = object[key];

        if (predicate(value, key)) {
          baseAssignValue(result, key, value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          }
          else if (!isKey(index, array)) {
            var path = castPath(index),
                object = parent(array, path);

            if (object != null) {
              delete object[toKey(last(path))];
            }
          }
          else {
            delete array[toKey(index)];
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = isKey(path, object) ? [path] : castPath(path);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array ? array.length : low;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array ? array.length : 0,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);
      object = parent(object, path);

      var key = toKey(last(path));
      return !(object != null && hasOwnProperty.call(object, key)) || delete object[key];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var index = -1,
          length = arrays.length;

      while (++index < length) {
        var result = result
          ? arrayPush(
              baseDifference(result, arrays[index], iteratee, comparator),
              baseDifference(arrays[index], result, iteratee, comparator)
            )
          : arrays[index];
      }
      return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbol properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 &&
              isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & ARY_FLAG,
          isBind = bitmask & BIND_FLAG,
          isBindKey = bitmask & BIND_KEY_FLAG,
          isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
          isFlip = bitmask & FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

      if (!(bitmask & CURRY_BOUND_FLAG)) {
        bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *  The bitmask may be composed of the following flags:
     *     1 - `_.bind`
     *     2 - `_.bindKey`
     *     4 - `_.curry` or `_.curryRight` of a bound function
     *     8 - `_.curry`
     *    16 - `_.curryRight`
     *    32 - `_.partial`
     *    64 - `_.partialRight`
     *   128 - `_.rearg`
     *   256 - `_.ary`
     *   512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] == null
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
        bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, customizer, bitmask, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= UNORDERED_COMPARE_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} customizer The function to customize comparisons.
     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
     *  for more details.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
          objProps = keys(object),
          objLength = objProps.length,
          othProps = keys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * Creates an array of the own enumerable symbol properties of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

    /**
     * Creates an array of the own and inherited enumerable symbol properties
     * of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = objectToString.call(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : undefined;

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = isKey(path, object) ? [path] : castPath(path);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object ? object.length : 0;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);

      var isCombo =
        ((srcBitmask == ARY_FLAG) && (bitmask == CURRY_FLAG)) ||
        ((srcBitmask == ARY_FLAG) && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (ARY_FLAG | REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function mergeDefaults(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      string = toString(string);

      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to process.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array ? array.length : 0;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array ? array.length : 0;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array ? array.length : 0;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs ? pairs.length : 0,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array ? array.length : 0;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (comparator === last(mapped)) {
        comparator = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array ? nativeJoin.call(array, separator) : '';
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array ? array.length : 0;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array ? array.length : 0,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array ? nativeReverse.call(array) : array;
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array ? array.length : 0;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array ? array.length : 0;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array ? array.length : 0;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false},
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length)
        ? baseUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length)
        ? baseUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      return (array && array.length)
        ? baseUniq(array, undefined, comparator)
        : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths of elements to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity]
     *  The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity]
     *  The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity]
     *  The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity]
     *  The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          isProp = isKey(path),
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
        result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity]
     *  The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      wrapper = wrapper == null ? identity : wrapper;
      return partial(wrapper, value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, false, true);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      return baseClone(value, false, true, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, true, true);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      return baseClone(value, true, true, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && objectToString.call(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return value != null && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are **not** supported.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      return (objectToString.call(value) == errorTag) ||
        (typeof value.message == 'string' && typeof value.name == 'string');
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed array and other constructors.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && objectToString.call(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return (typeof Ctor == 'function' &&
        Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && objectToString.call(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (iteratorSymbol && value[iteratorSymbol]) {
        return iteratorToArray(value[iteratorSymbol]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths of elements to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties ? baseAssign(result, properties) : result;
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, assignInDefaults);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, mergeDefaults);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable string keyed properties of `object` that are
     * not omitted.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [props] The property identifiers to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, props) {
      if (object == null) {
        return {};
      }
      props = arrayMap(props, toKey);
      return basePick(object, baseDifference(getAllKeysIn(object), props));
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [props] The property identifiers to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, props) {
      return object == null ? {} : basePick(object, arrayMap(props, toKey));
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      return object == null ? {} : basePickBy(object, getAllKeysIn(object), getIteratee(predicate));
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = isKey(path, object) ? [path] : castPath(path);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        object = undefined;
        length = 1;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object ? baseValues(object, keys(object)) : [];
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = baseClamp(toInteger(position), 0, string.length);
      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, assignInDefaults);

      var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs ? pairs.length : 0,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, true));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, true));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, true));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(value));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        var filtered = this.__filtered__;
        if (filtered && !index) {
          return new LazyWrapper(this);
        }
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = this.clone();
        if (filtered) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (iteratorSymbol) {
      lodash.prototype[iteratorSymbol] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function() {
      return _;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],13:[function(require,module,exports){
module.exports={
  "version": "0.1.2"
}
},{}]},{},[3]);
