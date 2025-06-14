"use strict";(()=>{var JI=Object.create;var Ku=Object.defineProperty;var ZI=Object.getOwnPropertyDescriptor;var eP=Object.getOwnPropertyNames;var tP=Object.getPrototypeOf,rP=Object.prototype.hasOwnProperty;var nP=(t,e)=>()=>(t&&(e=t(t=0)),e);var O=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Dn=(t,e)=>{for(var r in e)Ku(t,r,{get:e[r],enumerable:!0})},zu=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of eP(e))!rP.call(t,o)&&o!==r&&Ku(t,o,{get:()=>e[o],enumerable:!(n=ZI(e,o))||n.enumerable});return t},ie=(t,e,r)=>(zu(t,e,"default"),r&&zu(r,e,"default")),Lt=(t,e,r)=>(r=t!=null?JI(tP(t)):{},zu(e||!t||!t.__esModule?Ku(r,"default",{value:t,enumerable:!0}):r,t)),lf=t=>zu(Ku({},"__esModule",{value:!0}),t);var Rc={};Dn(Rc,{AnnotatedTextEdit:()=>bn,ChangeAnnotation:()=>Fo,ChangeAnnotationIdentifier:()=>bt,CodeAction:()=>rg,CodeActionContext:()=>tg,CodeActionKind:()=>eg,CodeActionTriggerKind:()=>Is,CodeDescription:()=>Ey,CodeLens:()=>ng,Color:()=>Ac,ColorInformation:()=>by,ColorPresentation:()=>ky,Command:()=>Wo,CompletionItem:()=>Gy,CompletionItemKind:()=>Oy,CompletionItemLabelDetails:()=>Wy,CompletionItemTag:()=>Ky,CompletionList:()=>Hy,CreateFile:()=>ri,DeleteFile:()=>oi,Diagnostic:()=>bs,DiagnosticRelatedInformation:()=>Sc,DiagnosticSeverity:()=>Iy,DiagnosticTag:()=>Py,DocumentHighlight:()=>Vy,DocumentHighlightKind:()=>jy,DocumentLink:()=>ag,DocumentSymbol:()=>Zy,DocumentUri:()=>Ty,EOL:()=>t0,FoldingRange:()=>$y,FoldingRangeKind:()=>Ry,FormattingOptions:()=>og,Hover:()=>By,InlayHint:()=>hg,InlayHintKind:()=>bc,InlayHintLabelPart:()=>kc,InlineCompletionContext:()=>Ag,InlineCompletionItem:()=>gg,InlineCompletionList:()=>mg,InlineCompletionTriggerKind:()=>vg,InlineValueContext:()=>fg,InlineValueEvaluatableExpression:()=>pg,InlineValueText:()=>cg,InlineValueVariableLookup:()=>dg,InsertReplaceEdit:()=>Ly,InsertTextFormat:()=>zy,InsertTextMode:()=>Fy,Location:()=>xs,LocationLink:()=>xy,MarkedString:()=>$s,MarkupContent:()=>ai,MarkupKind:()=>xc,OptionalVersionedTextDocumentIdentifier:()=>Rs,ParameterInformation:()=>qy,Position:()=>ue,Range:()=>ne,RenameFile:()=>ni,SelectedCompletionInfo:()=>wg,SelectionRange:()=>ig,SemanticTokenModifiers:()=>ug,SemanticTokenTypes:()=>sg,SemanticTokens:()=>lg,SignatureInformation:()=>Uy,StringValue:()=>yg,SymbolInformation:()=>Qy,SymbolKind:()=>Xy,SymbolTag:()=>Yy,TextDocument:()=>Tg,TextDocumentEdit:()=>ks,TextDocumentIdentifier:()=>Dy,TextDocumentItem:()=>My,TextEdit:()=>Ar,URI:()=>wc,VersionedTextDocumentIdentifier:()=>_y,WorkspaceChange:()=>Ny,WorkspaceEdit:()=>Tc,WorkspaceFolder:()=>Sg,WorkspaceSymbol:()=>Jy,integer:()=>Cy,uinteger:()=>Cs});var Ty,wc,Cy,Cs,ue,ne,xs,xy,Ac,by,ky,Ry,$y,Sc,Iy,Py,Ey,bs,Wo,Ar,Fo,bt,bn,ks,ri,ni,oi,Tc,ti,Cc,Ny,Dy,_y,Rs,My,xc,ai,Oy,zy,Ky,Ly,Fy,Wy,Gy,Hy,$s,By,qy,Uy,jy,Vy,Xy,Yy,Qy,Jy,Zy,eg,Is,tg,rg,ng,og,ag,ig,sg,ug,lg,cg,dg,pg,fg,bc,kc,hg,yg,gg,mg,vg,wg,Ag,Sg,t0,Tg,Cg,w,Go=nP(()=>{"use strict";(function(t){function e(r){return typeof r=="string"}t.is=e})(Ty||(Ty={}));(function(t){function e(r){return typeof r=="string"}t.is=e})(wc||(wc={}));(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Cy||(Cy={}));(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Cs||(Cs={}));(function(t){function e(n,o){return n===Number.MAX_VALUE&&(n=Cs.MAX_VALUE),o===Number.MAX_VALUE&&(o=Cs.MAX_VALUE),{line:n,character:o}}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&w.uinteger(o.line)&&w.uinteger(o.character)}t.is=r})(ue||(ue={}));(function(t){function e(n,o,a,i){if(w.uinteger(n)&&w.uinteger(o)&&w.uinteger(a)&&w.uinteger(i))return{start:ue.create(n,o),end:ue.create(a,i)};if(ue.is(n)&&ue.is(o))return{start:n,end:o};throw new Error(`Range#create called with invalid arguments[${n}, ${o}, ${a}, ${i}]`)}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&ue.is(o.start)&&ue.is(o.end)}t.is=r})(ne||(ne={}));(function(t){function e(n,o){return{uri:n,range:o}}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&ne.is(o.range)&&(w.string(o.uri)||w.undefined(o.uri))}t.is=r})(xs||(xs={}));(function(t){function e(n,o,a,i){return{targetUri:n,targetRange:o,targetSelectionRange:a,originSelectionRange:i}}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&ne.is(o.targetRange)&&w.string(o.targetUri)&&ne.is(o.targetSelectionRange)&&(ne.is(o.originSelectionRange)||w.undefined(o.originSelectionRange))}t.is=r})(xy||(xy={}));(function(t){function e(n,o,a,i){return{red:n,green:o,blue:a,alpha:i}}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&w.numberRange(o.red,0,1)&&w.numberRange(o.green,0,1)&&w.numberRange(o.blue,0,1)&&w.numberRange(o.alpha,0,1)}t.is=r})(Ac||(Ac={}));(function(t){function e(n,o){return{range:n,color:o}}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&ne.is(o.range)&&Ac.is(o.color)}t.is=r})(by||(by={}));(function(t){function e(n,o,a){return{label:n,textEdit:o,additionalTextEdits:a}}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&w.string(o.label)&&(w.undefined(o.textEdit)||Ar.is(o))&&(w.undefined(o.additionalTextEdits)||w.typedArray(o.additionalTextEdits,Ar.is))}t.is=r})(ky||(ky={}));(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(Ry||(Ry={}));(function(t){function e(n,o,a,i,s,u){let l={startLine:n,endLine:o};return w.defined(a)&&(l.startCharacter=a),w.defined(i)&&(l.endCharacter=i),w.defined(s)&&(l.kind=s),w.defined(u)&&(l.collapsedText=u),l}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&w.uinteger(o.startLine)&&w.uinteger(o.startLine)&&(w.undefined(o.startCharacter)||w.uinteger(o.startCharacter))&&(w.undefined(o.endCharacter)||w.uinteger(o.endCharacter))&&(w.undefined(o.kind)||w.string(o.kind))}t.is=r})($y||($y={}));(function(t){function e(n,o){return{location:n,message:o}}t.create=e;function r(n){let o=n;return w.defined(o)&&xs.is(o.location)&&w.string(o.message)}t.is=r})(Sc||(Sc={}));(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(Iy||(Iy={}));(function(t){t.Unnecessary=1,t.Deprecated=2})(Py||(Py={}));(function(t){function e(r){let n=r;return w.objectLiteral(n)&&w.string(n.href)}t.is=e})(Ey||(Ey={}));(function(t){function e(n,o,a,i,s,u){let l={range:n,message:o};return w.defined(a)&&(l.severity=a),w.defined(i)&&(l.code=i),w.defined(s)&&(l.source=s),w.defined(u)&&(l.relatedInformation=u),l}t.create=e;function r(n){var o;let a=n;return w.defined(a)&&ne.is(a.range)&&w.string(a.message)&&(w.number(a.severity)||w.undefined(a.severity))&&(w.integer(a.code)||w.string(a.code)||w.undefined(a.code))&&(w.undefined(a.codeDescription)||w.string((o=a.codeDescription)===null||o===void 0?void 0:o.href))&&(w.string(a.source)||w.undefined(a.source))&&(w.undefined(a.relatedInformation)||w.typedArray(a.relatedInformation,Sc.is))}t.is=r})(bs||(bs={}));(function(t){function e(n,o,...a){let i={title:n,command:o};return w.defined(a)&&a.length>0&&(i.arguments=a),i}t.create=e;function r(n){let o=n;return w.defined(o)&&w.string(o.title)&&w.string(o.command)}t.is=r})(Wo||(Wo={}));(function(t){function e(a,i){return{range:a,newText:i}}t.replace=e;function r(a,i){return{range:{start:a,end:a},newText:i}}t.insert=r;function n(a){return{range:a,newText:""}}t.del=n;function o(a){let i=a;return w.objectLiteral(i)&&w.string(i.newText)&&ne.is(i.range)}t.is=o})(Ar||(Ar={}));(function(t){function e(n,o,a){let i={label:n};return o!==void 0&&(i.needsConfirmation=o),a!==void 0&&(i.description=a),i}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&w.string(o.label)&&(w.boolean(o.needsConfirmation)||o.needsConfirmation===void 0)&&(w.string(o.description)||o.description===void 0)}t.is=r})(Fo||(Fo={}));(function(t){function e(r){let n=r;return w.string(n)}t.is=e})(bt||(bt={}));(function(t){function e(a,i,s){return{range:a,newText:i,annotationId:s}}t.replace=e;function r(a,i,s){return{range:{start:a,end:a},newText:i,annotationId:s}}t.insert=r;function n(a,i){return{range:a,newText:"",annotationId:i}}t.del=n;function o(a){let i=a;return Ar.is(i)&&(Fo.is(i.annotationId)||bt.is(i.annotationId))}t.is=o})(bn||(bn={}));(function(t){function e(n,o){return{textDocument:n,edits:o}}t.create=e;function r(n){let o=n;return w.defined(o)&&Rs.is(o.textDocument)&&Array.isArray(o.edits)}t.is=r})(ks||(ks={}));(function(t){function e(n,o,a){let i={kind:"create",uri:n};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(i.options=o),a!==void 0&&(i.annotationId=a),i}t.create=e;function r(n){let o=n;return o&&o.kind==="create"&&w.string(o.uri)&&(o.options===void 0||(o.options.overwrite===void 0||w.boolean(o.options.overwrite))&&(o.options.ignoreIfExists===void 0||w.boolean(o.options.ignoreIfExists)))&&(o.annotationId===void 0||bt.is(o.annotationId))}t.is=r})(ri||(ri={}));(function(t){function e(n,o,a,i){let s={kind:"rename",oldUri:n,newUri:o};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(s.options=a),i!==void 0&&(s.annotationId=i),s}t.create=e;function r(n){let o=n;return o&&o.kind==="rename"&&w.string(o.oldUri)&&w.string(o.newUri)&&(o.options===void 0||(o.options.overwrite===void 0||w.boolean(o.options.overwrite))&&(o.options.ignoreIfExists===void 0||w.boolean(o.options.ignoreIfExists)))&&(o.annotationId===void 0||bt.is(o.annotationId))}t.is=r})(ni||(ni={}));(function(t){function e(n,o,a){let i={kind:"delete",uri:n};return o!==void 0&&(o.recursive!==void 0||o.ignoreIfNotExists!==void 0)&&(i.options=o),a!==void 0&&(i.annotationId=a),i}t.create=e;function r(n){let o=n;return o&&o.kind==="delete"&&w.string(o.uri)&&(o.options===void 0||(o.options.recursive===void 0||w.boolean(o.options.recursive))&&(o.options.ignoreIfNotExists===void 0||w.boolean(o.options.ignoreIfNotExists)))&&(o.annotationId===void 0||bt.is(o.annotationId))}t.is=r})(oi||(oi={}));(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(o=>w.string(o.kind)?ri.is(o)||ni.is(o)||oi.is(o):ks.is(o)))}t.is=e})(Tc||(Tc={}));ti=class{constructor(e,r){this.edits=e,this.changeAnnotations=r}insert(e,r,n){let o,a;if(n===void 0?o=Ar.insert(e,r):bt.is(n)?(a=n,o=bn.insert(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(n),o=bn.insert(e,r,a)),this.edits.push(o),a!==void 0)return a}replace(e,r,n){let o,a;if(n===void 0?o=Ar.replace(e,r):bt.is(n)?(a=n,o=bn.replace(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(n),o=bn.replace(e,r,a)),this.edits.push(o),a!==void 0)return a}delete(e,r){let n,o;if(r===void 0?n=Ar.del(e):bt.is(r)?(o=r,n=bn.del(e,r)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(r),n=bn.del(e,o)),this.edits.push(n),o!==void 0)return o}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}},Cc=class{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,r){let n;if(bt.is(e)?n=e:(n=this.nextId(),r=e),this._annotations[n]!==void 0)throw new Error(`Id ${n} is already in use.`);if(r===void 0)throw new Error(`No annotation provided for id ${n}`);return this._annotations[n]=r,this._size++,n}nextId(){return this._counter++,this._counter.toString()}},Ny=class{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new Cc(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(r=>{if(ks.is(r)){let n=new ti(r.edits,this._changeAnnotations);this._textEditChanges[r.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(r=>{let n=new ti(e.changes[r]);this._textEditChanges[r]=n})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(Rs.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let r={uri:e.uri,version:e.version},n=this._textEditChanges[r.uri];if(!n){let o=[],a={textDocument:r,edits:o};this._workspaceEdit.documentChanges.push(a),n=new ti(o,this._changeAnnotations),this._textEditChanges[r.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let r=this._textEditChanges[e];if(!r){let n=[];this._workspaceEdit.changes[e]=n,r=new ti(n),this._textEditChanges[e]=r}return r}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Cc,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;Fo.is(r)||bt.is(r)?o=r:n=r;let a,i;if(o===void 0?a=ri.create(e,n):(i=bt.is(o)?o:this._changeAnnotations.manage(o),a=ri.create(e,n,i)),this._workspaceEdit.documentChanges.push(a),i!==void 0)return i}renameFile(e,r,n,o){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let a;Fo.is(n)||bt.is(n)?a=n:o=n;let i,s;if(a===void 0?i=ni.create(e,r,o):(s=bt.is(a)?a:this._changeAnnotations.manage(a),i=ni.create(e,r,o,s)),this._workspaceEdit.documentChanges.push(i),s!==void 0)return s}deleteFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;Fo.is(r)||bt.is(r)?o=r:n=r;let a,i;if(o===void 0?a=oi.create(e,n):(i=bt.is(o)?o:this._changeAnnotations.manage(o),a=oi.create(e,n,i)),this._workspaceEdit.documentChanges.push(a),i!==void 0)return i}};(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let o=n;return w.defined(o)&&w.string(o.uri)}t.is=r})(Dy||(Dy={}));(function(t){function e(n,o){return{uri:n,version:o}}t.create=e;function r(n){let o=n;return w.defined(o)&&w.string(o.uri)&&w.integer(o.version)}t.is=r})(_y||(_y={}));(function(t){function e(n,o){return{uri:n,version:o}}t.create=e;function r(n){let o=n;return w.defined(o)&&w.string(o.uri)&&(o.version===null||w.integer(o.version))}t.is=r})(Rs||(Rs={}));(function(t){function e(n,o,a,i){return{uri:n,languageId:o,version:a,text:i}}t.create=e;function r(n){let o=n;return w.defined(o)&&w.string(o.uri)&&w.string(o.languageId)&&w.integer(o.version)&&w.string(o.text)}t.is=r})(My||(My={}));(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(xc||(xc={}));(function(t){function e(r){let n=r;return w.objectLiteral(r)&&xc.is(n.kind)&&w.string(n.value)}t.is=e})(ai||(ai={}));(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(Oy||(Oy={}));(function(t){t.PlainText=1,t.Snippet=2})(zy||(zy={}));(function(t){t.Deprecated=1})(Ky||(Ky={}));(function(t){function e(n,o,a){return{newText:n,insert:o,replace:a}}t.create=e;function r(n){let o=n;return o&&w.string(o.newText)&&ne.is(o.insert)&&ne.is(o.replace)}t.is=r})(Ly||(Ly={}));(function(t){t.asIs=1,t.adjustIndentation=2})(Fy||(Fy={}));(function(t){function e(r){let n=r;return n&&(w.string(n.detail)||n.detail===void 0)&&(w.string(n.description)||n.description===void 0)}t.is=e})(Wy||(Wy={}));(function(t){function e(r){return{label:r}}t.create=e})(Gy||(Gy={}));(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(Hy||(Hy={}));(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let o=n;return w.string(o)||w.objectLiteral(o)&&w.string(o.language)&&w.string(o.value)}t.is=r})($s||($s={}));(function(t){function e(r){let n=r;return!!n&&w.objectLiteral(n)&&(ai.is(n.contents)||$s.is(n.contents)||w.typedArray(n.contents,$s.is))&&(r.range===void 0||ne.is(r.range))}t.is=e})(By||(By={}));(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(qy||(qy={}));(function(t){function e(r,n,...o){let a={label:r};return w.defined(n)&&(a.documentation=n),w.defined(o)?a.parameters=o:a.parameters=[],a}t.create=e})(Uy||(Uy={}));(function(t){t.Text=1,t.Read=2,t.Write=3})(jy||(jy={}));(function(t){function e(r,n){let o={range:r};return w.number(n)&&(o.kind=n),o}t.create=e})(Vy||(Vy={}));(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(Xy||(Xy={}));(function(t){t.Deprecated=1})(Yy||(Yy={}));(function(t){function e(r,n,o,a,i){let s={name:r,kind:n,location:{uri:a,range:o}};return i&&(s.containerName=i),s}t.create=e})(Qy||(Qy={}));(function(t){function e(r,n,o,a){return a!==void 0?{name:r,kind:n,location:{uri:o,range:a}}:{name:r,kind:n,location:{uri:o}}}t.create=e})(Jy||(Jy={}));(function(t){function e(n,o,a,i,s,u){let l={name:n,detail:o,kind:a,range:i,selectionRange:s};return u!==void 0&&(l.children=u),l}t.create=e;function r(n){let o=n;return o&&w.string(o.name)&&w.number(o.kind)&&ne.is(o.range)&&ne.is(o.selectionRange)&&(o.detail===void 0||w.string(o.detail))&&(o.deprecated===void 0||w.boolean(o.deprecated))&&(o.children===void 0||Array.isArray(o.children))&&(o.tags===void 0||Array.isArray(o.tags))}t.is=r})(Zy||(Zy={}));(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(eg||(eg={}));(function(t){t.Invoked=1,t.Automatic=2})(Is||(Is={}));(function(t){function e(n,o,a){let i={diagnostics:n};return o!=null&&(i.only=o),a!=null&&(i.triggerKind=a),i}t.create=e;function r(n){let o=n;return w.defined(o)&&w.typedArray(o.diagnostics,bs.is)&&(o.only===void 0||w.typedArray(o.only,w.string))&&(o.triggerKind===void 0||o.triggerKind===Is.Invoked||o.triggerKind===Is.Automatic)}t.is=r})(tg||(tg={}));(function(t){function e(n,o,a){let i={title:n},s=!0;return typeof o=="string"?(s=!1,i.kind=o):Wo.is(o)?i.command=o:i.edit=o,s&&a!==void 0&&(i.kind=a),i}t.create=e;function r(n){let o=n;return o&&w.string(o.title)&&(o.diagnostics===void 0||w.typedArray(o.diagnostics,bs.is))&&(o.kind===void 0||w.string(o.kind))&&(o.edit!==void 0||o.command!==void 0)&&(o.command===void 0||Wo.is(o.command))&&(o.isPreferred===void 0||w.boolean(o.isPreferred))&&(o.edit===void 0||Tc.is(o.edit))}t.is=r})(rg||(rg={}));(function(t){function e(n,o){let a={range:n};return w.defined(o)&&(a.data=o),a}t.create=e;function r(n){let o=n;return w.defined(o)&&ne.is(o.range)&&(w.undefined(o.command)||Wo.is(o.command))}t.is=r})(ng||(ng={}));(function(t){function e(n,o){return{tabSize:n,insertSpaces:o}}t.create=e;function r(n){let o=n;return w.defined(o)&&w.uinteger(o.tabSize)&&w.boolean(o.insertSpaces)}t.is=r})(og||(og={}));(function(t){function e(n,o,a){return{range:n,target:o,data:a}}t.create=e;function r(n){let o=n;return w.defined(o)&&ne.is(o.range)&&(w.undefined(o.target)||w.string(o.target))}t.is=r})(ag||(ag={}));(function(t){function e(n,o){return{range:n,parent:o}}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&ne.is(o.range)&&(o.parent===void 0||t.is(o.parent))}t.is=r})(ig||(ig={}));(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(sg||(sg={}));(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(ug||(ug={}));(function(t){function e(r){let n=r;return w.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(lg||(lg={}));(function(t){function e(n,o){return{range:n,text:o}}t.create=e;function r(n){let o=n;return o!=null&&ne.is(o.range)&&w.string(o.text)}t.is=r})(cg||(cg={}));(function(t){function e(n,o,a){return{range:n,variableName:o,caseSensitiveLookup:a}}t.create=e;function r(n){let o=n;return o!=null&&ne.is(o.range)&&w.boolean(o.caseSensitiveLookup)&&(w.string(o.variableName)||o.variableName===void 0)}t.is=r})(dg||(dg={}));(function(t){function e(n,o){return{range:n,expression:o}}t.create=e;function r(n){let o=n;return o!=null&&ne.is(o.range)&&(w.string(o.expression)||o.expression===void 0)}t.is=r})(pg||(pg={}));(function(t){function e(n,o){return{frameId:n,stoppedLocation:o}}t.create=e;function r(n){let o=n;return w.defined(o)&&ne.is(n.stoppedLocation)}t.is=r})(fg||(fg={}));(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(bc||(bc={}));(function(t){function e(n){return{value:n}}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&(o.tooltip===void 0||w.string(o.tooltip)||ai.is(o.tooltip))&&(o.location===void 0||xs.is(o.location))&&(o.command===void 0||Wo.is(o.command))}t.is=r})(kc||(kc={}));(function(t){function e(n,o,a){let i={position:n,label:o};return a!==void 0&&(i.kind=a),i}t.create=e;function r(n){let o=n;return w.objectLiteral(o)&&ue.is(o.position)&&(w.string(o.label)||w.typedArray(o.label,kc.is))&&(o.kind===void 0||bc.is(o.kind))&&o.textEdits===void 0||w.typedArray(o.textEdits,Ar.is)&&(o.tooltip===void 0||w.string(o.tooltip)||ai.is(o.tooltip))&&(o.paddingLeft===void 0||w.boolean(o.paddingLeft))&&(o.paddingRight===void 0||w.boolean(o.paddingRight))}t.is=r})(hg||(hg={}));(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(yg||(yg={}));(function(t){function e(r,n,o,a){return{insertText:r,filterText:n,range:o,command:a}}t.create=e})(gg||(gg={}));(function(t){function e(r){return{items:r}}t.create=e})(mg||(mg={}));(function(t){t.Invoked=0,t.Automatic=1})(vg||(vg={}));(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(wg||(wg={}));(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(Ag||(Ag={}));(function(t){function e(r){let n=r;return w.objectLiteral(n)&&wc.is(n.uri)&&w.string(n.name)}t.is=e})(Sg||(Sg={}));t0=[`
`,`\r
`,"\r"];(function(t){function e(a,i,s,u){return new Cg(a,i,s,u)}t.create=e;function r(a){let i=a;return!!(w.defined(i)&&w.string(i.uri)&&(w.undefined(i.languageId)||w.string(i.languageId))&&w.uinteger(i.lineCount)&&w.func(i.getText)&&w.func(i.positionAt)&&w.func(i.offsetAt))}t.is=r;function n(a,i){let s=a.getText(),u=o(i,(c,d)=>{let p=c.range.start.line-d.range.start.line;return p===0?c.range.start.character-d.range.start.character:p}),l=s.length;for(let c=u.length-1;c>=0;c--){let d=u[c],p=a.offsetAt(d.range.start),h=a.offsetAt(d.range.end);if(h<=l)s=s.substring(0,p)+d.newText+s.substring(h,s.length);else throw new Error("Overlapping edit");l=p}return s}t.applyEdits=n;function o(a,i){if(a.length<=1)return a;let s=a.length/2|0,u=a.slice(0,s),l=a.slice(s);o(u,i),o(l,i);let c=0,d=0,p=0;for(;c<u.length&&d<l.length;)i(u[c],l[d])<=0?a[p++]=u[c++]:a[p++]=l[d++];for(;c<u.length;)a[p++]=u[c++];for(;d<l.length;)a[p++]=l[d++];return a}})(Tg||(Tg={}));Cg=class{constructor(e,r,n,o){this._uri=e,this._languageId=r,this._version=n,this._content=o,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let o=0;o<r.length;o++){n&&(e.push(o),n=!1);let a=r.charAt(o);n=a==="\r"||a===`
`,a==="\r"&&o+1<r.length&&r.charAt(o+1)===`
`&&o++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,o=r.length;if(o===0)return ue.create(0,e);for(;n<o;){let i=Math.floor((n+o)/2);r[i]>e?o=i:n=i+1}let a=n-1;return ue.create(a,e-r[a])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],o=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,o),n)}get lineCount(){return this.getLineOffsets().length}};(function(t){let e=Object.prototype.toString;function r(h){return typeof h<"u"}t.defined=r;function n(h){return typeof h>"u"}t.undefined=n;function o(h){return h===!0||h===!1}t.boolean=o;function a(h){return e.call(h)==="[object String]"}t.string=a;function i(h){return e.call(h)==="[object Number]"}t.number=i;function s(h,v,A){return e.call(h)==="[object Number]"&&v<=h&&h<=A}t.numberRange=s;function u(h){return e.call(h)==="[object Number]"&&-2147483648<=h&&h<=2147483647}t.integer=u;function l(h){return e.call(h)==="[object Number]"&&0<=h&&h<=2147483647}t.uinteger=l;function c(h){return e.call(h)==="[object Function]"}t.func=c;function d(h){return h!==null&&typeof h=="object"}t.objectLiteral=d;function p(h,v){return Array.isArray(h)&&h.every(v)}t.typedArray=p})(w||(w={}))});var to=O(Ng=>{"use strict";Object.defineProperty(Ng,"__esModule",{value:!0});var Pg;function Eg(){if(Pg===void 0)throw new Error("No runtime abstraction layer installed");return Pg}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Pg=r}t.install=e})(Eg||(Eg={}));Ng.default=Eg});var ui=O(Nt=>{"use strict";Object.defineProperty(Nt,"__esModule",{value:!0});Nt.stringArray=Nt.array=Nt.func=Nt.error=Nt.number=Nt.string=Nt.boolean=void 0;function p0(t){return t===!0||t===!1}Nt.boolean=p0;function MC(t){return typeof t=="string"||t instanceof String}Nt.string=MC;function f0(t){return typeof t=="number"||t instanceof Number}Nt.number=f0;function h0(t){return t instanceof Error}Nt.error=h0;function y0(t){return typeof t=="function"}Nt.func=y0;function OC(t){return Array.isArray(t)}Nt.array=OC;function g0(t){return OC(t)&&t.every(e=>MC(e))}Nt.stringArray=g0});var Uo=O(li=>{"use strict";Object.defineProperty(li,"__esModule",{value:!0});li.Emitter=li.Event=void 0;var m0=to(),zC;(function(t){let e={dispose(){}};t.None=function(){return e}})(zC||(li.Event=zC={}));var Dg=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let o=0,a=this._callbacks.length;o<a;o++)if(this._callbacks[o]===e)if(this._contexts[o]===r){this._callbacks.splice(o,1),this._contexts.splice(o,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),o=this._contexts.slice(0);for(let a=0,i=n.length;a<i;a++)try{r.push(n[a].apply(o[a],e))}catch(s){(0,m0.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Nc=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Dg),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let o={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),o.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(o),o}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};li.Emitter=Nc;Nc._noop=function(){}});var zs=O(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.CancellationTokenSource=ci.CancellationToken=void 0;var v0=to(),w0=ui(),_g=Uo(),Dc;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:_g.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:_g.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||w0.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Dc||(ci.CancellationToken=Dc={}));var A0=Object.freeze(function(t,e){let r=(0,v0.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),_c=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?A0:(this._emitter||(this._emitter=new _g.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Mg=class{get token(){return this._token||(this._token=new _c),this._token}cancel(){this._token?this._token.cancel():this._token=Dc.Cancelled}dispose(){this._token?this._token instanceof _c&&this._token.dispose():this._token=Dc.None}};ci.CancellationTokenSource=Mg});var Am=O(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.Message=B.NotificationType9=B.NotificationType8=B.NotificationType7=B.NotificationType6=B.NotificationType5=B.NotificationType4=B.NotificationType3=B.NotificationType2=B.NotificationType1=B.NotificationType0=B.NotificationType=B.RequestType9=B.RequestType8=B.RequestType7=B.RequestType6=B.RequestType5=B.RequestType4=B.RequestType3=B.RequestType2=B.RequestType1=B.RequestType=B.RequestType0=B.AbstractMessageSignature=B.ParameterStructures=B.ResponseError=B.ErrorCodes=void 0;var Qo=ui(),Yg;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Yg||(B.ErrorCodes=Yg={}));var Qg=class t extends Error{constructor(e,r,n){super(r),this.code=Qo.number(e)?e:Yg.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};B.ResponseError=Qg;var ar=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};B.ParameterStructures=ar;ar.auto=new ar("auto");ar.byPosition=new ar("byPosition");ar.byName=new ar("byName");var Ee=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return ar.auto}};B.AbstractMessageSignature=Ee;var Jg=class extends Ee{constructor(e){super(e,0)}};B.RequestType0=Jg;var Zg=class extends Ee{constructor(e,r=ar.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};B.RequestType=Zg;var em=class extends Ee{constructor(e,r=ar.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};B.RequestType1=em;var tm=class extends Ee{constructor(e){super(e,2)}};B.RequestType2=tm;var rm=class extends Ee{constructor(e){super(e,3)}};B.RequestType3=rm;var nm=class extends Ee{constructor(e){super(e,4)}};B.RequestType4=nm;var om=class extends Ee{constructor(e){super(e,5)}};B.RequestType5=om;var am=class extends Ee{constructor(e){super(e,6)}};B.RequestType6=am;var im=class extends Ee{constructor(e){super(e,7)}};B.RequestType7=im;var sm=class extends Ee{constructor(e){super(e,8)}};B.RequestType8=sm;var um=class extends Ee{constructor(e){super(e,9)}};B.RequestType9=um;var lm=class extends Ee{constructor(e,r=ar.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};B.NotificationType=lm;var cm=class extends Ee{constructor(e){super(e,0)}};B.NotificationType0=cm;var dm=class extends Ee{constructor(e,r=ar.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};B.NotificationType1=dm;var pm=class extends Ee{constructor(e){super(e,2)}};B.NotificationType2=pm;var fm=class extends Ee{constructor(e){super(e,3)}};B.NotificationType3=fm;var hm=class extends Ee{constructor(e){super(e,4)}};B.NotificationType4=hm;var ym=class extends Ee{constructor(e){super(e,5)}};B.NotificationType5=ym;var gm=class extends Ee{constructor(e){super(e,6)}};B.NotificationType6=gm;var mm=class extends Ee{constructor(e){super(e,7)}};B.NotificationType7=mm;var vm=class extends Ee{constructor(e){super(e,8)}};B.NotificationType8=vm;var wm=class extends Ee{constructor(e){super(e,9)}};B.NotificationType9=wm;var nx;(function(t){function e(o){let a=o;return a&&Qo.string(a.method)&&(Qo.string(a.id)||Qo.number(a.id))}t.isRequest=e;function r(o){let a=o;return a&&Qo.string(a.method)&&o.id===void 0}t.isNotification=r;function n(o){let a=o;return a&&(a.result!==void 0||!!a.error)&&(Qo.string(a.id)||Qo.number(a.id)||a.id===null)}t.isResponse=n})(nx||(B.Message=nx={}))});var Tm=O(no=>{"use strict";var ox;Object.defineProperty(no,"__esModule",{value:!0});no.LRUCache=no.LinkedMap=no.Touch=void 0;var Dt;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(Dt||(no.Touch=Dt={}));var qc=class{constructor(){this[ox]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=Dt.None){let n=this._map.get(e);if(n)return r!==Dt.None&&this.touch(n,r),n.value}set(e,r,n=Dt.None){let o=this._map.get(e);if(o)o.value=r,n!==Dt.None&&this.touch(o,n);else{switch(o={key:e,value:r,next:void 0,previous:void 0},n){case Dt.None:this.addItemLast(o);break;case Dt.First:this.addItemFirst(o);break;case Dt.Last:this.addItemLast(o);break;default:this.addItemLast(o);break}this._map.set(e,o),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,o=this._head;for(;o;){if(r?e.bind(r)(o.value,o.key,this):e(o.value,o.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");o=o.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:r.key,done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:r.value,done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let o={value:[r.key,r.value],done:!1};return r=r.next,o}else return{value:void 0,done:!0}}};return n}[(ox=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==Dt.First&&r!==Dt.Last)){if(r===Dt.First){if(e===this._head)return;let n=e.next,o=e.previous;e===this._tail?(o.next=void 0,this._tail=o):(n.previous=o,o.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===Dt.Last){if(e===this._tail)return;let n=e.next,o=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=o,o.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};no.LinkedMap=qc;var Sm=class extends qc{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=Dt.AsNew){return super.get(e,r)}peek(e){return super.get(e,Dt.None)}set(e,r){return super.set(e,r,Dt.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};no.LRUCache=Sm});var ix=O(Uc=>{"use strict";Object.defineProperty(Uc,"__esModule",{value:!0});Uc.Disposable=void 0;var ax;(function(t){function e(r){return{dispose:r}}t.create=e})(ax||(Uc.Disposable=ax={}))});var sx=O(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.SharedArrayReceiverStrategy=mi.SharedArraySenderStrategy=void 0;var K0=zs(),gu;(function(t){t.Continue=0,t.Cancelled=1})(gu||(gu={}));var Cm=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=gu.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let o=new Int32Array(n,0,1);Atomics.store(o,0,gu.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};mi.SharedArraySenderStrategy=Cm;var xm=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===gu.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},bm=class{constructor(e){this.token=new xm(e)}cancel(){}dispose(){}},km=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new K0.CancellationTokenSource:new bm(r)}};mi.SharedArrayReceiverStrategy=km});var $m=O(jc=>{"use strict";Object.defineProperty(jc,"__esModule",{value:!0});jc.Semaphore=void 0;var L0=to(),Rm=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,L0.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};jc.Semaphore=Rm});var lx=O(oo=>{"use strict";Object.defineProperty(oo,"__esModule",{value:!0});oo.ReadableStreamMessageReader=oo.AbstractMessageReader=oo.MessageReader=void 0;var Pm=to(),vi=ui(),Im=Uo(),F0=$m(),ux;(function(t){function e(r){let n=r;return n&&vi.func(n.listen)&&vi.func(n.dispose)&&vi.func(n.onError)&&vi.func(n.onClose)&&vi.func(n.onPartialMessage)}t.is=e})(ux||(oo.MessageReader=ux={}));var Vc=class{constructor(){this.errorEmitter=new Im.Emitter,this.closeEmitter=new Im.Emitter,this.partialMessageEmitter=new Im.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${vi.string(e.message)?e.message:"unknown"}`)}};oo.AbstractMessageReader=Vc;var Em;(function(t){function e(r){let n,o,a,i=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(a=r.contentDecoder,i.set(a.name,a)),r.contentDecoders!==void 0)for(let l of r.contentDecoders)i.set(l.name,l);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let l of r.contentTypeDecoders)u.set(l.name,l)}return s===void 0&&(s=(0,Pm.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:a,contentDecoders:i,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(Em||(Em={}));var Nm=class extends Vc{constructor(e,r){super(),this.readable=e,this.options=Em.fromOptions(r),this.buffer=(0,Pm.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new F0.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let o=n.get("content-length");if(!o){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let a=parseInt(o);if(isNaN(a)){this.fireError(new Error(`Content-Length value must be a number. Got ${o}`));return}this.nextMessageLength=a}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,o=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(o)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Pm.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};oo.ReadableStreamMessageReader=Nm});var hx=O(ao=>{"use strict";Object.defineProperty(ao,"__esModule",{value:!0});ao.WriteableStreamMessageWriter=ao.AbstractMessageWriter=ao.MessageWriter=void 0;var cx=to(),mu=ui(),W0=$m(),dx=Uo(),G0="Content-Length: ",px=`\r
`,fx;(function(t){function e(r){let n=r;return n&&mu.func(n.dispose)&&mu.func(n.onClose)&&mu.func(n.onError)&&mu.func(n.write)}t.is=e})(fx||(ao.MessageWriter=fx={}));var Xc=class{constructor(){this.errorEmitter=new dx.Emitter,this.closeEmitter=new dx.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${mu.string(e.message)?e.message:"unknown"}`)}};ao.AbstractMessageWriter=Xc;var Dm;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,cx.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,cx.default)().applicationJson.encoder}}t.fromOptions=e})(Dm||(Dm={}));var _m=class extends Xc{constructor(e,r){super(),this.writable=e,this.options=Dm.fromOptions(r),this.errorCount=0,this.writeSemaphore=new W0.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let o=[];return o.push(G0,n.byteLength.toString(),px),o.push(px),this.doWrite(e,o,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(o){return this.handleError(o,e),Promise.reject(o)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};ao.WriteableStreamMessageWriter=_m});var yx=O(Yc=>{"use strict";Object.defineProperty(Yc,"__esModule",{value:!0});Yc.AbstractMessageBuffer=void 0;var H0=13,B0=10,q0=`\r
`,Mm=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,o=0,a=0;e:for(;n<this._chunks.length;){let l=this._chunks[n];for(o=0;o<l.length;){switch(l[o]){case H0:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case B0:switch(r){case 1:r=2;break;case 3:r=4,o++;break e;default:r=0}break;default:r=0}o++}a+=l.byteLength,n++}if(r!==4)return;let i=this._read(a+o),s=new Map,u=this.toString(i,"ascii").split(q0);if(u.length<2)return s;for(let l=0;l<u.length-2;l++){let c=u[l],d=c.indexOf(":");if(d===-1)throw new Error(`Message header must separate key and value using ':'
${c}`);let p=c.substr(0,d),h=c.substr(d+1).trim();s.set(e?p.toLowerCase():p,h)}return s}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let a=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(a)}if(this._chunks[0].byteLength>e){let a=this._chunks[0],i=this.asNative(a,e);return this._chunks[0]=a.slice(e),this._totalLength-=e,i}let r=this.allocNative(e),n=0,o=0;for(;e>0;){let a=this._chunks[o];if(a.byteLength>e){let i=a.slice(0,e);r.set(i,n),n+=e,this._chunks[o]=a.slice(e),this._totalLength-=e,e-=e}else r.set(a,n),n+=a.byteLength,this._chunks.shift(),this._totalLength-=a.byteLength,e-=a.byteLength}return r}};Yc.AbstractMessageBuffer=Mm});var Ax=O(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.createMessageConnection=J.ConnectionOptions=J.MessageStrategy=J.CancellationStrategy=J.CancellationSenderStrategy=J.CancellationReceiverStrategy=J.RequestCancellationReceiverStrategy=J.IdCancellationReceiverStrategy=J.ConnectionStrategy=J.ConnectionError=J.ConnectionErrors=J.LogTraceNotification=J.SetTraceNotification=J.TraceFormat=J.TraceValues=J.Trace=J.NullLogger=J.ProgressType=J.ProgressToken=void 0;var gx=to(),He=ui(),j=Am(),mx=Tm(),vu=Uo(),Om=zs(),Su;(function(t){t.type=new j.NotificationType("$/cancelRequest")})(Su||(Su={}));var zm;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(zm||(J.ProgressToken=zm={}));var wu;(function(t){t.type=new j.NotificationType("$/progress")})(wu||(wu={}));var Km=class{constructor(){}};J.ProgressType=Km;var Lm;(function(t){function e(r){return He.func(r)}t.is=e})(Lm||(Lm={}));J.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var pe;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(pe||(J.Trace=pe={}));var vx;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(vx||(J.TraceValues=vx={}));(function(t){function e(n){if(!He.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(pe||(J.Trace=pe={}));var fr;(function(t){t.Text="text",t.JSON="json"})(fr||(J.TraceFormat=fr={}));(function(t){function e(r){return He.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(fr||(J.TraceFormat=fr={}));var Fm;(function(t){t.type=new j.NotificationType("$/setTrace")})(Fm||(J.SetTraceNotification=Fm={}));var Qc;(function(t){t.type=new j.NotificationType("$/logTrace")})(Qc||(J.LogTraceNotification=Qc={}));var Au;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(Au||(J.ConnectionErrors=Au={}));var wi=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};J.ConnectionError=wi;var Wm;(function(t){function e(r){let n=r;return n&&He.func(n.cancelUndispatched)}t.is=e})(Wm||(J.ConnectionStrategy=Wm={}));var Jc;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&He.func(n.createCancellationTokenSource)&&(n.dispose===void 0||He.func(n.dispose))}t.is=e})(Jc||(J.IdCancellationReceiverStrategy=Jc={}));var Gm;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&He.func(n.createCancellationTokenSource)&&(n.dispose===void 0||He.func(n.dispose))}t.is=e})(Gm||(J.RequestCancellationReceiverStrategy=Gm={}));var Zc;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Om.CancellationTokenSource}});function e(r){return Jc.is(r)||Gm.is(r)}t.is=e})(Zc||(J.CancellationReceiverStrategy=Zc={}));var ed;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(Su.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&He.func(n.sendCancellation)&&He.func(n.cleanup)}t.is=e})(ed||(J.CancellationSenderStrategy=ed={}));var td;(function(t){t.Message=Object.freeze({receiver:Zc.Message,sender:ed.Message});function e(r){let n=r;return n&&Zc.is(n.receiver)&&ed.is(n.sender)}t.is=e})(td||(J.CancellationStrategy=td={}));var rd;(function(t){function e(r){let n=r;return n&&He.func(n.handleMessage)}t.is=e})(rd||(J.MessageStrategy=rd={}));var wx;(function(t){function e(r){let n=r;return n&&(td.is(n.cancellationStrategy)||Wm.is(n.connectionStrategy)||rd.is(n.messageStrategy))}t.is=e})(wx||(J.ConnectionOptions=wx={}));var zr;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(zr||(zr={}));function U0(t,e,r,n){let o=r!==void 0?r:J.NullLogger,a=0,i=0,s=0,u="2.0",l,c=new Map,d,p=new Map,h=new Map,v,A=new mx.LinkedMap,C=new Map,S=new Set,g=new Map,f=pe.Off,T=fr.Text,P,Q=zr.New,vt=new vu.Emitter,Qe=new vu.Emitter,lr=new vu.Emitter,jt=new vu.Emitter,_=new vu.Emitter,b=n&&n.cancellationStrategy?n.cancellationStrategy:td.Message;function W(m){if(m===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+m.toString()}function z(m){return m===null?"res-unknown-"+(++s).toString():"res-"+m.toString()}function re(){return"not-"+(++i).toString()}function V(m,k){j.Message.isRequest(k)?m.set(W(k.id),k):j.Message.isResponse(k)?m.set(z(k.id),k):m.set(re(),k)}function $(m){}function R(){return Q===zr.Listening}function fe(){return Q===zr.Closed}function le(){return Q===zr.Disposed}function Wr(){(Q===zr.New||Q===zr.Listening)&&(Q=zr.Closed,Qe.fire(void 0))}function _u(m){vt.fire([m,void 0,void 0])}function af(m){vt.fire(m)}t.onClose(Wr),t.onError(_u),e.onClose(Wr),e.onError(af);function Oi(){v||A.size===0||(v=(0,gx.default)().timer.setImmediate(()=>{v=void 0,Mu()}))}function Vt(m){j.Message.isRequest(m)?Xt(m):j.Message.isNotification(m)?zt(m):j.Message.isResponse(m)?En(m):Ir(m)}function Mu(){if(A.size===0)return;let m=A.shift();try{let k=n?.messageStrategy;rd.is(k)?k.handleMessage(m,Vt):Vt(m)}finally{Oi()}}let dt=m=>{try{if(j.Message.isNotification(m)&&m.method===Su.type.method){let k=m.params.id,N=W(k),G=A.get(N);if(j.Message.isRequest(G)){let ve=n?.connectionStrategy,Be=ve&&ve.cancelUndispatched?ve.cancelUndispatched(G,$):void 0;if(Be&&(Be.error!==void 0||Be.result!==void 0)){A.delete(N),g.delete(k),Be.id=G.id,Nn(Be,m.method,Date.now()),e.write(Be).catch(()=>o.error("Sending response for canceled message failed."));return}}let $e=g.get(k);if($e!==void 0){$e.cancel(),sf(m);return}else S.add(k)}V(A,m)}finally{Oi()}};function Xt(m){if(le())return;function k(se,ze,ge){let ut={jsonrpc:u,id:m.id};se instanceof j.ResponseError?ut.error=se.toJson():ut.result=se===void 0?null:se,Nn(ut,ze,ge),e.write(ut).catch(()=>o.error("Sending response failed."))}function N(se,ze,ge){let ut={jsonrpc:u,id:m.id,error:se.toJson()};Nn(ut,ze,ge),e.write(ut).catch(()=>o.error("Sending response failed."))}function G(se,ze,ge){se===void 0&&(se=null);let ut={jsonrpc:u,id:m.id,result:se};Nn(ut,ze,ge),e.write(ut).catch(()=>o.error("Sending response failed."))}Ou(m);let $e=c.get(m.method),ve,Be;$e&&(ve=$e.type,Be=$e.handler);let Je=Date.now();if(Be||l){let se=m.id??String(Date.now()),ze=Jc.is(b.receiver)?b.receiver.createCancellationTokenSource(se):b.receiver.createCancellationTokenSource(m);m.id!==null&&S.has(m.id)&&ze.cancel(),m.id!==null&&g.set(se,ze);try{let ge;if(Be)if(m.params===void 0){if(ve!==void 0&&ve.numberOfParams!==0){N(new j.ResponseError(j.ErrorCodes.InvalidParams,`Request ${m.method} defines ${ve.numberOfParams} params but received none.`),m.method,Je);return}ge=Be(ze.token)}else if(Array.isArray(m.params)){if(ve!==void 0&&ve.parameterStructures===j.ParameterStructures.byName){N(new j.ResponseError(j.ErrorCodes.InvalidParams,`Request ${m.method} defines parameters by name but received parameters by position`),m.method,Je);return}ge=Be(...m.params,ze.token)}else{if(ve!==void 0&&ve.parameterStructures===j.ParameterStructures.byPosition){N(new j.ResponseError(j.ErrorCodes.InvalidParams,`Request ${m.method} defines parameters by position but received parameters by name`),m.method,Je);return}ge=Be(m.params,ze.token)}else l&&(ge=l(m.method,m.params,ze.token));let ut=ge;ge?ut.then?ut.then(Kt=>{g.delete(se),k(Kt,m.method,Je)},Kt=>{g.delete(se),Kt instanceof j.ResponseError?N(Kt,m.method,Je):Kt&&He.string(Kt.message)?N(new j.ResponseError(j.ErrorCodes.InternalError,`Request ${m.method} failed with message: ${Kt.message}`),m.method,Je):N(new j.ResponseError(j.ErrorCodes.InternalError,`Request ${m.method} failed unexpectedly without providing any details.`),m.method,Je)}):(g.delete(se),k(ge,m.method,Je)):(g.delete(se),G(ge,m.method,Je))}catch(ge){g.delete(se),ge instanceof j.ResponseError?k(ge,m.method,Je):ge&&He.string(ge.message)?N(new j.ResponseError(j.ErrorCodes.InternalError,`Request ${m.method} failed with message: ${ge.message}`),m.method,Je):N(new j.ResponseError(j.ErrorCodes.InternalError,`Request ${m.method} failed unexpectedly without providing any details.`),m.method,Je)}}else N(new j.ResponseError(j.ErrorCodes.MethodNotFound,`Unhandled method ${m.method}`),m.method,Je)}function En(m){if(!le())if(m.id===null)m.error?o.error(`Received response message without id: Error is: 
${JSON.stringify(m.error,void 0,4)}`):o.error("Received response message without id. No further error information provided.");else{let k=m.id,N=C.get(k);if(VI(m,N),N!==void 0){C.delete(k);try{if(m.error){let G=m.error;N.reject(new j.ResponseError(G.code,G.message,G.data))}else if(m.result!==void 0)N.resolve(m.result);else throw new Error("Should never happen.")}catch(G){G.message?o.error(`Response handler '${N.method}' failed with message: ${G.message}`):o.error(`Response handler '${N.method}' failed unexpectedly.`)}}}}function zt(m){if(le())return;let k,N;if(m.method===Su.type.method){let G=m.params.id;S.delete(G),sf(m);return}else{let G=p.get(m.method);G&&(N=G.handler,k=G.type)}if(N||d)try{if(sf(m),N)if(m.params===void 0)k!==void 0&&k.numberOfParams!==0&&k.parameterStructures!==j.ParameterStructures.byName&&o.error(`Notification ${m.method} defines ${k.numberOfParams} params but received none.`),N();else if(Array.isArray(m.params)){let G=m.params;m.method===wu.type.method&&G.length===2&&zm.is(G[0])?N({token:G[0],value:G[1]}):(k!==void 0&&(k.parameterStructures===j.ParameterStructures.byName&&o.error(`Notification ${m.method} defines parameters by name but received parameters by position`),k.numberOfParams!==m.params.length&&o.error(`Notification ${m.method} defines ${k.numberOfParams} params but received ${G.length} arguments`)),N(...G))}else k!==void 0&&k.parameterStructures===j.ParameterStructures.byPosition&&o.error(`Notification ${m.method} defines parameters by position but received parameters by name`),N(m.params);else d&&d(m.method,m.params)}catch(G){G.message?o.error(`Notification handler '${m.method}' failed with message: ${G.message}`):o.error(`Notification handler '${m.method}' failed unexpectedly.`)}else lr.fire(m)}function Ir(m){if(!m){o.error("Received empty message.");return}o.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(m,null,4)}`);let k=m;if(He.string(k.id)||He.number(k.id)){let N=k.id,G=C.get(N);G&&G.reject(new Error("The received response has neither a result nor an error property."))}}function wt(m){if(m!=null)switch(f){case pe.Verbose:return JSON.stringify(m,null,4);case pe.Compact:return JSON.stringify(m);default:return}}function Pr(m){if(!(f===pe.Off||!P))if(T===fr.Text){let k;(f===pe.Verbose||f===pe.Compact)&&m.params&&(k=`Params: ${wt(m.params)}

`),P.log(`Sending request '${m.method} - (${m.id})'.`,k)}else na("send-request",m)}function dn(m){if(!(f===pe.Off||!P))if(T===fr.Text){let k;(f===pe.Verbose||f===pe.Compact)&&(m.params?k=`Params: ${wt(m.params)}

`:k=`No parameters provided.

`),P.log(`Sending notification '${m.method}'.`,k)}else na("send-notification",m)}function Nn(m,k,N){if(!(f===pe.Off||!P))if(T===fr.Text){let G;(f===pe.Verbose||f===pe.Compact)&&(m.error&&m.error.data?G=`Error data: ${wt(m.error.data)}

`:m.result?G=`Result: ${wt(m.result)}

`:m.error===void 0&&(G=`No result returned.

`)),P.log(`Sending response '${k} - (${m.id})'. Processing request took ${Date.now()-N}ms`,G)}else na("send-response",m)}function Ou(m){if(!(f===pe.Off||!P))if(T===fr.Text){let k;(f===pe.Verbose||f===pe.Compact)&&m.params&&(k=`Params: ${wt(m.params)}

`),P.log(`Received request '${m.method} - (${m.id})'.`,k)}else na("receive-request",m)}function sf(m){if(!(f===pe.Off||!P||m.method===Qc.type.method))if(T===fr.Text){let k;(f===pe.Verbose||f===pe.Compact)&&(m.params?k=`Params: ${wt(m.params)}

`:k=`No parameters provided.

`),P.log(`Received notification '${m.method}'.`,k)}else na("receive-notification",m)}function VI(m,k){if(!(f===pe.Off||!P))if(T===fr.Text){let N;if((f===pe.Verbose||f===pe.Compact)&&(m.error&&m.error.data?N=`Error data: ${wt(m.error.data)}

`:m.result?N=`Result: ${wt(m.result)}

`:m.error===void 0&&(N=`No result returned.

`)),k){let G=m.error?` Request failed: ${m.error.message} (${m.error.code}).`:"";P.log(`Received response '${k.method} - (${m.id})' in ${Date.now()-k.timerStart}ms.${G}`,N)}else P.log(`Received response ${m.id} without active response promise.`,N)}else na("receive-response",m)}function na(m,k){if(!P||f===pe.Off)return;let N={isLSPMessage:!0,type:m,message:k,timestamp:Date.now()};P.log(N)}function zi(){if(fe())throw new wi(Au.Closed,"Connection is closed.");if(le())throw new wi(Au.Disposed,"Connection is disposed.")}function XI(){if(R())throw new wi(Au.AlreadyListening,"Connection is already listening")}function YI(){if(!R())throw new Error("Call listen() first.")}function Ki(m){return m===void 0?null:m}function qv(m){if(m!==null)return m}function Uv(m){return m!=null&&!Array.isArray(m)&&typeof m=="object"}function uf(m,k){switch(m){case j.ParameterStructures.auto:return Uv(k)?qv(k):[Ki(k)];case j.ParameterStructures.byName:if(!Uv(k))throw new Error("Received parameters by name but param is not an object literal.");return qv(k);case j.ParameterStructures.byPosition:return[Ki(k)];default:throw new Error(`Unknown parameter structure ${m.toString()}`)}}function jv(m,k){let N,G=m.numberOfParams;switch(G){case 0:N=void 0;break;case 1:N=uf(m.parameterStructures,k[0]);break;default:N=[];for(let $e=0;$e<k.length&&$e<G;$e++)N.push(Ki(k[$e]));if(k.length<G)for(let $e=k.length;$e<G;$e++)N.push(null);break}return N}let oa={sendNotification:(m,...k)=>{zi();let N,G;if(He.string(m)){N=m;let ve=k[0],Be=0,Je=j.ParameterStructures.auto;j.ParameterStructures.is(ve)&&(Be=1,Je=ve);let se=k.length,ze=se-Be;switch(ze){case 0:G=void 0;break;case 1:G=uf(Je,k[Be]);break;default:if(Je===j.ParameterStructures.byName)throw new Error(`Received ${ze} parameters for 'by Name' notification parameter structure.`);G=k.slice(Be,se).map(ge=>Ki(ge));break}}else{let ve=k;N=m.method,G=jv(m,ve)}let $e={jsonrpc:u,method:N,params:G};return dn($e),e.write($e).catch(ve=>{throw o.error("Sending notification failed."),ve})},onNotification:(m,k)=>{zi();let N;return He.func(m)?d=m:k&&(He.string(m)?(N=m,p.set(m,{type:void 0,handler:k})):(N=m.method,p.set(m.method,{type:m,handler:k}))),{dispose:()=>{N!==void 0?p.delete(N):d=void 0}}},onProgress:(m,k,N)=>{if(h.has(k))throw new Error(`Progress handler for token ${k} already registered`);return h.set(k,N),{dispose:()=>{h.delete(k)}}},sendProgress:(m,k,N)=>oa.sendNotification(wu.type,{token:k,value:N}),onUnhandledProgress:jt.event,sendRequest:(m,...k)=>{zi(),YI();let N,G,$e;if(He.string(m)){N=m;let se=k[0],ze=k[k.length-1],ge=0,ut=j.ParameterStructures.auto;j.ParameterStructures.is(se)&&(ge=1,ut=se);let Kt=k.length;Om.CancellationToken.is(ze)&&(Kt=Kt-1,$e=ze);let Gr=Kt-ge;switch(Gr){case 0:G=void 0;break;case 1:G=uf(ut,k[ge]);break;default:if(ut===j.ParameterStructures.byName)throw new Error(`Received ${Gr} parameters for 'by Name' request parameter structure.`);G=k.slice(ge,Kt).map(QI=>Ki(QI));break}}else{let se=k;N=m.method,G=jv(m,se);let ze=m.numberOfParams;$e=Om.CancellationToken.is(se[ze])?se[ze]:void 0}let ve=a++,Be;$e&&(Be=$e.onCancellationRequested(()=>{let se=b.sender.sendCancellation(oa,ve);return se===void 0?(o.log(`Received no promise from cancellation strategy when cancelling id ${ve}`),Promise.resolve()):se.catch(()=>{o.log(`Sending cancellation messages for id ${ve} failed`)})}));let Je={jsonrpc:u,id:ve,method:N,params:G};return Pr(Je),typeof b.sender.enableCancellation=="function"&&b.sender.enableCancellation(Je),new Promise(async(se,ze)=>{let ge=Gr=>{se(Gr),b.sender.cleanup(ve),Be?.dispose()},ut=Gr=>{ze(Gr),b.sender.cleanup(ve),Be?.dispose()},Kt={method:N,timerStart:Date.now(),resolve:ge,reject:ut};try{await e.write(Je),C.set(ve,Kt)}catch(Gr){throw o.error("Sending request failed."),Kt.reject(new j.ResponseError(j.ErrorCodes.MessageWriteError,Gr.message?Gr.message:"Unknown reason")),Gr}})},onRequest:(m,k)=>{zi();let N=null;return Lm.is(m)?(N=void 0,l=m):He.string(m)?(N=null,k!==void 0&&(N=m,c.set(m,{handler:k,type:void 0}))):k!==void 0&&(N=m.method,c.set(m.method,{type:m,handler:k})),{dispose:()=>{N!==null&&(N!==void 0?c.delete(N):l=void 0)}}},hasPendingResponse:()=>C.size>0,trace:async(m,k,N)=>{let G=!1,$e=fr.Text;N!==void 0&&(He.boolean(N)?G=N:(G=N.sendNotification||!1,$e=N.traceFormat||fr.Text)),f=m,T=$e,f===pe.Off?P=void 0:P=k,G&&!fe()&&!le()&&await oa.sendNotification(Fm.type,{value:pe.toString(m)})},onError:vt.event,onClose:Qe.event,onUnhandledNotification:lr.event,onDispose:_.event,end:()=>{e.end()},dispose:()=>{if(le())return;Q=zr.Disposed,_.fire(void 0);let m=new j.ResponseError(j.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let k of C.values())k.reject(m);C=new Map,g=new Map,S=new Set,A=new mx.LinkedMap,He.func(e.dispose)&&e.dispose(),He.func(t.dispose)&&t.dispose()},listen:()=>{zi(),XI(),Q=zr.Listening,t.listen(dt)},inspect:()=>{(0,gx.default)().console.log("inspect")}};return oa.onNotification(Qc.type,m=>{if(f===pe.Off||!P)return;let k=f===pe.Verbose||f===pe.Compact;P.log(m.message,k?m.verbose:void 0)}),oa.onNotification(wu.type,m=>{let k=h.get(m.token);k?k(m.value):jt.fire(m)}),oa}J.createMessageConnection=U0});var nd=O(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.ProgressType=x.ProgressToken=x.createMessageConnection=x.NullLogger=x.ConnectionOptions=x.ConnectionStrategy=x.AbstractMessageBuffer=x.WriteableStreamMessageWriter=x.AbstractMessageWriter=x.MessageWriter=x.ReadableStreamMessageReader=x.AbstractMessageReader=x.MessageReader=x.SharedArrayReceiverStrategy=x.SharedArraySenderStrategy=x.CancellationToken=x.CancellationTokenSource=x.Emitter=x.Event=x.Disposable=x.LRUCache=x.Touch=x.LinkedMap=x.ParameterStructures=x.NotificationType9=x.NotificationType8=x.NotificationType7=x.NotificationType6=x.NotificationType5=x.NotificationType4=x.NotificationType3=x.NotificationType2=x.NotificationType1=x.NotificationType0=x.NotificationType=x.ErrorCodes=x.ResponseError=x.RequestType9=x.RequestType8=x.RequestType7=x.RequestType6=x.RequestType5=x.RequestType4=x.RequestType3=x.RequestType2=x.RequestType1=x.RequestType0=x.RequestType=x.Message=x.RAL=void 0;x.MessageStrategy=x.CancellationStrategy=x.CancellationSenderStrategy=x.CancellationReceiverStrategy=x.ConnectionError=x.ConnectionErrors=x.LogTraceNotification=x.SetTraceNotification=x.TraceFormat=x.TraceValues=x.Trace=void 0;var Re=Am();Object.defineProperty(x,"Message",{enumerable:!0,get:function(){return Re.Message}});Object.defineProperty(x,"RequestType",{enumerable:!0,get:function(){return Re.RequestType}});Object.defineProperty(x,"RequestType0",{enumerable:!0,get:function(){return Re.RequestType0}});Object.defineProperty(x,"RequestType1",{enumerable:!0,get:function(){return Re.RequestType1}});Object.defineProperty(x,"RequestType2",{enumerable:!0,get:function(){return Re.RequestType2}});Object.defineProperty(x,"RequestType3",{enumerable:!0,get:function(){return Re.RequestType3}});Object.defineProperty(x,"RequestType4",{enumerable:!0,get:function(){return Re.RequestType4}});Object.defineProperty(x,"RequestType5",{enumerable:!0,get:function(){return Re.RequestType5}});Object.defineProperty(x,"RequestType6",{enumerable:!0,get:function(){return Re.RequestType6}});Object.defineProperty(x,"RequestType7",{enumerable:!0,get:function(){return Re.RequestType7}});Object.defineProperty(x,"RequestType8",{enumerable:!0,get:function(){return Re.RequestType8}});Object.defineProperty(x,"RequestType9",{enumerable:!0,get:function(){return Re.RequestType9}});Object.defineProperty(x,"ResponseError",{enumerable:!0,get:function(){return Re.ResponseError}});Object.defineProperty(x,"ErrorCodes",{enumerable:!0,get:function(){return Re.ErrorCodes}});Object.defineProperty(x,"NotificationType",{enumerable:!0,get:function(){return Re.NotificationType}});Object.defineProperty(x,"NotificationType0",{enumerable:!0,get:function(){return Re.NotificationType0}});Object.defineProperty(x,"NotificationType1",{enumerable:!0,get:function(){return Re.NotificationType1}});Object.defineProperty(x,"NotificationType2",{enumerable:!0,get:function(){return Re.NotificationType2}});Object.defineProperty(x,"NotificationType3",{enumerable:!0,get:function(){return Re.NotificationType3}});Object.defineProperty(x,"NotificationType4",{enumerable:!0,get:function(){return Re.NotificationType4}});Object.defineProperty(x,"NotificationType5",{enumerable:!0,get:function(){return Re.NotificationType5}});Object.defineProperty(x,"NotificationType6",{enumerable:!0,get:function(){return Re.NotificationType6}});Object.defineProperty(x,"NotificationType7",{enumerable:!0,get:function(){return Re.NotificationType7}});Object.defineProperty(x,"NotificationType8",{enumerable:!0,get:function(){return Re.NotificationType8}});Object.defineProperty(x,"NotificationType9",{enumerable:!0,get:function(){return Re.NotificationType9}});Object.defineProperty(x,"ParameterStructures",{enumerable:!0,get:function(){return Re.ParameterStructures}});var Hm=Tm();Object.defineProperty(x,"LinkedMap",{enumerable:!0,get:function(){return Hm.LinkedMap}});Object.defineProperty(x,"LRUCache",{enumerable:!0,get:function(){return Hm.LRUCache}});Object.defineProperty(x,"Touch",{enumerable:!0,get:function(){return Hm.Touch}});var j0=ix();Object.defineProperty(x,"Disposable",{enumerable:!0,get:function(){return j0.Disposable}});var Sx=Uo();Object.defineProperty(x,"Event",{enumerable:!0,get:function(){return Sx.Event}});Object.defineProperty(x,"Emitter",{enumerable:!0,get:function(){return Sx.Emitter}});var Tx=zs();Object.defineProperty(x,"CancellationTokenSource",{enumerable:!0,get:function(){return Tx.CancellationTokenSource}});Object.defineProperty(x,"CancellationToken",{enumerable:!0,get:function(){return Tx.CancellationToken}});var Cx=sx();Object.defineProperty(x,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return Cx.SharedArraySenderStrategy}});Object.defineProperty(x,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return Cx.SharedArrayReceiverStrategy}});var Bm=lx();Object.defineProperty(x,"MessageReader",{enumerable:!0,get:function(){return Bm.MessageReader}});Object.defineProperty(x,"AbstractMessageReader",{enumerable:!0,get:function(){return Bm.AbstractMessageReader}});Object.defineProperty(x,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Bm.ReadableStreamMessageReader}});var qm=hx();Object.defineProperty(x,"MessageWriter",{enumerable:!0,get:function(){return qm.MessageWriter}});Object.defineProperty(x,"AbstractMessageWriter",{enumerable:!0,get:function(){return qm.AbstractMessageWriter}});Object.defineProperty(x,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return qm.WriteableStreamMessageWriter}});var V0=yx();Object.defineProperty(x,"AbstractMessageBuffer",{enumerable:!0,get:function(){return V0.AbstractMessageBuffer}});var Rt=Ax();Object.defineProperty(x,"ConnectionStrategy",{enumerable:!0,get:function(){return Rt.ConnectionStrategy}});Object.defineProperty(x,"ConnectionOptions",{enumerable:!0,get:function(){return Rt.ConnectionOptions}});Object.defineProperty(x,"NullLogger",{enumerable:!0,get:function(){return Rt.NullLogger}});Object.defineProperty(x,"createMessageConnection",{enumerable:!0,get:function(){return Rt.createMessageConnection}});Object.defineProperty(x,"ProgressToken",{enumerable:!0,get:function(){return Rt.ProgressToken}});Object.defineProperty(x,"ProgressType",{enumerable:!0,get:function(){return Rt.ProgressType}});Object.defineProperty(x,"Trace",{enumerable:!0,get:function(){return Rt.Trace}});Object.defineProperty(x,"TraceValues",{enumerable:!0,get:function(){return Rt.TraceValues}});Object.defineProperty(x,"TraceFormat",{enumerable:!0,get:function(){return Rt.TraceFormat}});Object.defineProperty(x,"SetTraceNotification",{enumerable:!0,get:function(){return Rt.SetTraceNotification}});Object.defineProperty(x,"LogTraceNotification",{enumerable:!0,get:function(){return Rt.LogTraceNotification}});Object.defineProperty(x,"ConnectionErrors",{enumerable:!0,get:function(){return Rt.ConnectionErrors}});Object.defineProperty(x,"ConnectionError",{enumerable:!0,get:function(){return Rt.ConnectionError}});Object.defineProperty(x,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return Rt.CancellationReceiverStrategy}});Object.defineProperty(x,"CancellationSenderStrategy",{enumerable:!0,get:function(){return Rt.CancellationSenderStrategy}});Object.defineProperty(x,"CancellationStrategy",{enumerable:!0,get:function(){return Rt.CancellationStrategy}});Object.defineProperty(x,"MessageStrategy",{enumerable:!0,get:function(){return Rt.MessageStrategy}});var X0=to();x.RAL=X0.default});var bx=O(Xm=>{"use strict";Object.defineProperty(Xm,"__esModule",{value:!0});var an=nd(),od=class t extends an.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};od.emptyBuffer=new Uint8Array(0);var Um=class{constructor(e){this.socket=e,this._onData=new an.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(o=>{this._onData.fire(new Uint8Array(o))},()=>{(0,an.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),an.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),an.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),an.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},jm=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),an.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),an.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),an.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},Y0=new TextEncoder,xx=Object.freeze({messageBuffer:Object.freeze({create:t=>new od(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(Y0.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new Um(t),asWritableStream:t=>new jm(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Vm(){return xx}(function(t){function e(){an.RAL.install(xx)}t.install=e})(Vm||(Vm={}));Xm.default=Vm});var Jo=O(hr=>{"use strict";var Q0=hr&&hr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),J0=hr&&hr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Q0(e,t,r)};Object.defineProperty(hr,"__esModule",{value:!0});hr.createMessageConnection=hr.BrowserMessageWriter=hr.BrowserMessageReader=void 0;var Z0=bx();Z0.default.install();var Ai=nd();J0(nd(),hr);var Ym=class extends Ai.AbstractMessageReader{constructor(e){super(),this._onData=new Ai.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};hr.BrowserMessageReader=Ym;var Qm=class extends Ai.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};hr.BrowserMessageWriter=Qm;function eF(t,e,r,n){return r===void 0&&(r=Ai.NullLogger),Ai.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Ai.createMessageConnection)(t,e,r,n)}hr.createMessageConnection=eF});var Jm=O(($re,kx)=>{"use strict";kx.exports=Jo()});var Oe=O(ir=>{"use strict";Object.defineProperty(ir,"__esModule",{value:!0});ir.ProtocolNotificationType=ir.ProtocolNotificationType0=ir.ProtocolRequestType=ir.ProtocolRequestType0=ir.RegistrationType=ir.MessageDirection=void 0;var Si=Jo(),Rx;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(Rx||(ir.MessageDirection=Rx={}));var Zm=class{constructor(e){this.method=e}};ir.RegistrationType=Zm;var ev=class extends Si.RequestType0{constructor(e){super(e)}};ir.ProtocolRequestType0=ev;var tv=class extends Si.RequestType{constructor(e){super(e,Si.ParameterStructures.byName)}};ir.ProtocolRequestType=tv;var rv=class extends Si.NotificationType0{constructor(e){super(e)}};ir.ProtocolNotificationType0=rv;var nv=class extends Si.NotificationType{constructor(e){super(e,Si.ParameterStructures.byName)}};ir.ProtocolNotificationType=nv});var ad=O(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.objectLiteral=it.typedArray=it.stringArray=it.array=it.func=it.error=it.number=it.string=it.boolean=void 0;function tF(t){return t===!0||t===!1}it.boolean=tF;function $x(t){return typeof t=="string"||t instanceof String}it.string=$x;function rF(t){return typeof t=="number"||t instanceof Number}it.number=rF;function nF(t){return t instanceof Error}it.error=nF;function oF(t){return typeof t=="function"}it.func=oF;function Ix(t){return Array.isArray(t)}it.array=Ix;function aF(t){return Ix(t)&&t.every(e=>$x(e))}it.stringArray=aF;function iF(t,e){return Array.isArray(t)&&t.every(e)}it.typedArray=iF;function sF(t){return t!==null&&typeof t=="object"}it.objectLiteral=sF});var Nx=O(id=>{"use strict";Object.defineProperty(id,"__esModule",{value:!0});id.ImplementationRequest=void 0;var Px=Oe(),Ex;(function(t){t.method="textDocument/implementation",t.messageDirection=Px.MessageDirection.clientToServer,t.type=new Px.ProtocolRequestType(t.method)})(Ex||(id.ImplementationRequest=Ex={}))});var Mx=O(sd=>{"use strict";Object.defineProperty(sd,"__esModule",{value:!0});sd.TypeDefinitionRequest=void 0;var Dx=Oe(),_x;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=Dx.MessageDirection.clientToServer,t.type=new Dx.ProtocolRequestType(t.method)})(_x||(sd.TypeDefinitionRequest=_x={}))});var Kx=O(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.DidChangeWorkspaceFoldersNotification=Ti.WorkspaceFoldersRequest=void 0;var ud=Oe(),Ox;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=ud.MessageDirection.serverToClient,t.type=new ud.ProtocolRequestType0(t.method)})(Ox||(Ti.WorkspaceFoldersRequest=Ox={}));var zx;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=ud.MessageDirection.clientToServer,t.type=new ud.ProtocolNotificationType(t.method)})(zx||(Ti.DidChangeWorkspaceFoldersNotification=zx={}))});var Wx=O(ld=>{"use strict";Object.defineProperty(ld,"__esModule",{value:!0});ld.ConfigurationRequest=void 0;var Lx=Oe(),Fx;(function(t){t.method="workspace/configuration",t.messageDirection=Lx.MessageDirection.serverToClient,t.type=new Lx.ProtocolRequestType(t.method)})(Fx||(ld.ConfigurationRequest=Fx={}))});var Bx=O(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.ColorPresentationRequest=Ci.DocumentColorRequest=void 0;var cd=Oe(),Gx;(function(t){t.method="textDocument/documentColor",t.messageDirection=cd.MessageDirection.clientToServer,t.type=new cd.ProtocolRequestType(t.method)})(Gx||(Ci.DocumentColorRequest=Gx={}));var Hx;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=cd.MessageDirection.clientToServer,t.type=new cd.ProtocolRequestType(t.method)})(Hx||(Ci.ColorPresentationRequest=Hx={}))});var jx=O(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.FoldingRangeRefreshRequest=xi.FoldingRangeRequest=void 0;var dd=Oe(),qx;(function(t){t.method="textDocument/foldingRange",t.messageDirection=dd.MessageDirection.clientToServer,t.type=new dd.ProtocolRequestType(t.method)})(qx||(xi.FoldingRangeRequest=qx={}));var Ux;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=dd.MessageDirection.serverToClient,t.type=new dd.ProtocolRequestType0(t.method)})(Ux||(xi.FoldingRangeRefreshRequest=Ux={}))});var Yx=O(pd=>{"use strict";Object.defineProperty(pd,"__esModule",{value:!0});pd.DeclarationRequest=void 0;var Vx=Oe(),Xx;(function(t){t.method="textDocument/declaration",t.messageDirection=Vx.MessageDirection.clientToServer,t.type=new Vx.ProtocolRequestType(t.method)})(Xx||(pd.DeclarationRequest=Xx={}))});var Zx=O(fd=>{"use strict";Object.defineProperty(fd,"__esModule",{value:!0});fd.SelectionRangeRequest=void 0;var Qx=Oe(),Jx;(function(t){t.method="textDocument/selectionRange",t.messageDirection=Qx.MessageDirection.clientToServer,t.type=new Qx.ProtocolRequestType(t.method)})(Jx||(fd.SelectionRangeRequest=Jx={}))});var nb=O(io=>{"use strict";Object.defineProperty(io,"__esModule",{value:!0});io.WorkDoneProgressCancelNotification=io.WorkDoneProgressCreateRequest=io.WorkDoneProgress=void 0;var uF=Jo(),hd=Oe(),eb;(function(t){t.type=new uF.ProgressType;function e(r){return r===t.type}t.is=e})(eb||(io.WorkDoneProgress=eb={}));var tb;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=hd.MessageDirection.serverToClient,t.type=new hd.ProtocolRequestType(t.method)})(tb||(io.WorkDoneProgressCreateRequest=tb={}));var rb;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=hd.MessageDirection.clientToServer,t.type=new hd.ProtocolNotificationType(t.method)})(rb||(io.WorkDoneProgressCancelNotification=rb={}))});var sb=O(so=>{"use strict";Object.defineProperty(so,"__esModule",{value:!0});so.CallHierarchyOutgoingCallsRequest=so.CallHierarchyIncomingCallsRequest=so.CallHierarchyPrepareRequest=void 0;var bi=Oe(),ob;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=bi.MessageDirection.clientToServer,t.type=new bi.ProtocolRequestType(t.method)})(ob||(so.CallHierarchyPrepareRequest=ob={}));var ab;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=bi.MessageDirection.clientToServer,t.type=new bi.ProtocolRequestType(t.method)})(ab||(so.CallHierarchyIncomingCallsRequest=ab={}));var ib;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=bi.MessageDirection.clientToServer,t.type=new bi.ProtocolRequestType(t.method)})(ib||(so.CallHierarchyOutgoingCallsRequest=ib={}))});var fb=O(sr=>{"use strict";Object.defineProperty(sr,"__esModule",{value:!0});sr.SemanticTokensRefreshRequest=sr.SemanticTokensRangeRequest=sr.SemanticTokensDeltaRequest=sr.SemanticTokensRequest=sr.SemanticTokensRegistrationType=sr.TokenFormat=void 0;var In=Oe(),ub;(function(t){t.Relative="relative"})(ub||(sr.TokenFormat=ub={}));var Tu;(function(t){t.method="textDocument/semanticTokens",t.type=new In.RegistrationType(t.method)})(Tu||(sr.SemanticTokensRegistrationType=Tu={}));var lb;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=In.MessageDirection.clientToServer,t.type=new In.ProtocolRequestType(t.method),t.registrationMethod=Tu.method})(lb||(sr.SemanticTokensRequest=lb={}));var cb;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=In.MessageDirection.clientToServer,t.type=new In.ProtocolRequestType(t.method),t.registrationMethod=Tu.method})(cb||(sr.SemanticTokensDeltaRequest=cb={}));var db;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=In.MessageDirection.clientToServer,t.type=new In.ProtocolRequestType(t.method),t.registrationMethod=Tu.method})(db||(sr.SemanticTokensRangeRequest=db={}));var pb;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=In.MessageDirection.serverToClient,t.type=new In.ProtocolRequestType0(t.method)})(pb||(sr.SemanticTokensRefreshRequest=pb={}))});var gb=O(yd=>{"use strict";Object.defineProperty(yd,"__esModule",{value:!0});yd.ShowDocumentRequest=void 0;var hb=Oe(),yb;(function(t){t.method="window/showDocument",t.messageDirection=hb.MessageDirection.serverToClient,t.type=new hb.ProtocolRequestType(t.method)})(yb||(yd.ShowDocumentRequest=yb={}))});var wb=O(gd=>{"use strict";Object.defineProperty(gd,"__esModule",{value:!0});gd.LinkedEditingRangeRequest=void 0;var mb=Oe(),vb;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=mb.MessageDirection.clientToServer,t.type=new mb.ProtocolRequestType(t.method)})(vb||(gd.LinkedEditingRangeRequest=vb={}))});var Rb=O(_t=>{"use strict";Object.defineProperty(_t,"__esModule",{value:!0});_t.WillDeleteFilesRequest=_t.DidDeleteFilesNotification=_t.DidRenameFilesNotification=_t.WillRenameFilesRequest=_t.DidCreateFilesNotification=_t.WillCreateFilesRequest=_t.FileOperationPatternKind=void 0;var Sr=Oe(),Ab;(function(t){t.file="file",t.folder="folder"})(Ab||(_t.FileOperationPatternKind=Ab={}));var Sb;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Sr.MessageDirection.clientToServer,t.type=new Sr.ProtocolRequestType(t.method)})(Sb||(_t.WillCreateFilesRequest=Sb={}));var Tb;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Sr.MessageDirection.clientToServer,t.type=new Sr.ProtocolNotificationType(t.method)})(Tb||(_t.DidCreateFilesNotification=Tb={}));var Cb;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Sr.MessageDirection.clientToServer,t.type=new Sr.ProtocolRequestType(t.method)})(Cb||(_t.WillRenameFilesRequest=Cb={}));var xb;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Sr.MessageDirection.clientToServer,t.type=new Sr.ProtocolNotificationType(t.method)})(xb||(_t.DidRenameFilesNotification=xb={}));var bb;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Sr.MessageDirection.clientToServer,t.type=new Sr.ProtocolNotificationType(t.method)})(bb||(_t.DidDeleteFilesNotification=bb={}));var kb;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Sr.MessageDirection.clientToServer,t.type=new Sr.ProtocolRequestType(t.method)})(kb||(_t.WillDeleteFilesRequest=kb={}))});var Nb=O(uo=>{"use strict";Object.defineProperty(uo,"__esModule",{value:!0});uo.MonikerRequest=uo.MonikerKind=uo.UniquenessLevel=void 0;var $b=Oe(),Ib;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Ib||(uo.UniquenessLevel=Ib={}));var Pb;(function(t){t.$import="import",t.$export="export",t.local="local"})(Pb||(uo.MonikerKind=Pb={}));var Eb;(function(t){t.method="textDocument/moniker",t.messageDirection=$b.MessageDirection.clientToServer,t.type=new $b.ProtocolRequestType(t.method)})(Eb||(uo.MonikerRequest=Eb={}))});var Ob=O(lo=>{"use strict";Object.defineProperty(lo,"__esModule",{value:!0});lo.TypeHierarchySubtypesRequest=lo.TypeHierarchySupertypesRequest=lo.TypeHierarchyPrepareRequest=void 0;var ki=Oe(),Db;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=ki.MessageDirection.clientToServer,t.type=new ki.ProtocolRequestType(t.method)})(Db||(lo.TypeHierarchyPrepareRequest=Db={}));var _b;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=ki.MessageDirection.clientToServer,t.type=new ki.ProtocolRequestType(t.method)})(_b||(lo.TypeHierarchySupertypesRequest=_b={}));var Mb;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=ki.MessageDirection.clientToServer,t.type=new ki.ProtocolRequestType(t.method)})(Mb||(lo.TypeHierarchySubtypesRequest=Mb={}))});var Lb=O(Ri=>{"use strict";Object.defineProperty(Ri,"__esModule",{value:!0});Ri.InlineValueRefreshRequest=Ri.InlineValueRequest=void 0;var md=Oe(),zb;(function(t){t.method="textDocument/inlineValue",t.messageDirection=md.MessageDirection.clientToServer,t.type=new md.ProtocolRequestType(t.method)})(zb||(Ri.InlineValueRequest=zb={}));var Kb;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=md.MessageDirection.serverToClient,t.type=new md.ProtocolRequestType0(t.method)})(Kb||(Ri.InlineValueRefreshRequest=Kb={}))});var Hb=O(co=>{"use strict";Object.defineProperty(co,"__esModule",{value:!0});co.InlayHintRefreshRequest=co.InlayHintResolveRequest=co.InlayHintRequest=void 0;var $i=Oe(),Fb;(function(t){t.method="textDocument/inlayHint",t.messageDirection=$i.MessageDirection.clientToServer,t.type=new $i.ProtocolRequestType(t.method)})(Fb||(co.InlayHintRequest=Fb={}));var Wb;(function(t){t.method="inlayHint/resolve",t.messageDirection=$i.MessageDirection.clientToServer,t.type=new $i.ProtocolRequestType(t.method)})(Wb||(co.InlayHintResolveRequest=Wb={}));var Gb;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=$i.MessageDirection.serverToClient,t.type=new $i.ProtocolRequestType0(t.method)})(Gb||(co.InlayHintRefreshRequest=Gb={}))});var Yb=O(Tr=>{"use strict";Object.defineProperty(Tr,"__esModule",{value:!0});Tr.DiagnosticRefreshRequest=Tr.WorkspaceDiagnosticRequest=Tr.DocumentDiagnosticRequest=Tr.DocumentDiagnosticReportKind=Tr.DiagnosticServerCancellationData=void 0;var Xb=Jo(),lF=ad(),Ii=Oe(),Bb;(function(t){function e(r){let n=r;return n&&lF.boolean(n.retriggerRequest)}t.is=e})(Bb||(Tr.DiagnosticServerCancellationData=Bb={}));var qb;(function(t){t.Full="full",t.Unchanged="unchanged"})(qb||(Tr.DocumentDiagnosticReportKind=qb={}));var Ub;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Ii.MessageDirection.clientToServer,t.type=new Ii.ProtocolRequestType(t.method),t.partialResult=new Xb.ProgressType})(Ub||(Tr.DocumentDiagnosticRequest=Ub={}));var jb;(function(t){t.method="workspace/diagnostic",t.messageDirection=Ii.MessageDirection.clientToServer,t.type=new Ii.ProtocolRequestType(t.method),t.partialResult=new Xb.ProgressType})(jb||(Tr.WorkspaceDiagnosticRequest=jb={}));var Vb;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Ii.MessageDirection.serverToClient,t.type=new Ii.ProtocolRequestType0(t.method)})(Vb||(Tr.DiagnosticRefreshRequest=Vb={}))});var nk=O(Xe=>{"use strict";Object.defineProperty(Xe,"__esModule",{value:!0});Xe.DidCloseNotebookDocumentNotification=Xe.DidSaveNotebookDocumentNotification=Xe.DidChangeNotebookDocumentNotification=Xe.NotebookCellArrayChange=Xe.DidOpenNotebookDocumentNotification=Xe.NotebookDocumentSyncRegistrationType=Xe.NotebookDocument=Xe.NotebookCell=Xe.ExecutionSummary=Xe.NotebookCellKind=void 0;var Cu=(Go(),lf(Rc)),Kr=ad(),sn=Oe(),ov;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(ov||(Xe.NotebookCellKind=ov={}));var av;(function(t){function e(o,a){let i={executionOrder:o};return(a===!0||a===!1)&&(i.success=a),i}t.create=e;function r(o){let a=o;return Kr.objectLiteral(a)&&Cu.uinteger.is(a.executionOrder)&&(a.success===void 0||Kr.boolean(a.success))}t.is=r;function n(o,a){return o===a?!0:o==null||a===null||a===void 0?!1:o.executionOrder===a.executionOrder&&o.success===a.success}t.equals=n})(av||(Xe.ExecutionSummary=av={}));var vd;(function(t){function e(a,i){return{kind:a,document:i}}t.create=e;function r(a){let i=a;return Kr.objectLiteral(i)&&ov.is(i.kind)&&Cu.DocumentUri.is(i.document)&&(i.metadata===void 0||Kr.objectLiteral(i.metadata))}t.is=r;function n(a,i){let s=new Set;return a.document!==i.document&&s.add("document"),a.kind!==i.kind&&s.add("kind"),a.executionSummary!==i.executionSummary&&s.add("executionSummary"),(a.metadata!==void 0||i.metadata!==void 0)&&!o(a.metadata,i.metadata)&&s.add("metadata"),(a.executionSummary!==void 0||i.executionSummary!==void 0)&&!av.equals(a.executionSummary,i.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function o(a,i){if(a===i)return!0;if(a==null||i===null||i===void 0||typeof a!=typeof i||typeof a!="object")return!1;let s=Array.isArray(a),u=Array.isArray(i);if(s!==u)return!1;if(s&&u){if(a.length!==i.length)return!1;for(let l=0;l<a.length;l++)if(!o(a[l],i[l]))return!1}if(Kr.objectLiteral(a)&&Kr.objectLiteral(i)){let l=Object.keys(a),c=Object.keys(i);if(l.length!==c.length||(l.sort(),c.sort(),!o(l,c)))return!1;for(let d=0;d<l.length;d++){let p=l[d];if(!o(a[p],i[p]))return!1}}return!0}})(vd||(Xe.NotebookCell=vd={}));var Qb;(function(t){function e(n,o,a,i){return{uri:n,notebookType:o,version:a,cells:i}}t.create=e;function r(n){let o=n;return Kr.objectLiteral(o)&&Kr.string(o.uri)&&Cu.integer.is(o.version)&&Kr.typedArray(o.cells,vd.is)}t.is=r})(Qb||(Xe.NotebookDocument=Qb={}));var Pi;(function(t){t.method="notebookDocument/sync",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.RegistrationType(t.method)})(Pi||(Xe.NotebookDocumentSyncRegistrationType=Pi={}));var Jb;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.ProtocolNotificationType(t.method),t.registrationMethod=Pi.method})(Jb||(Xe.DidOpenNotebookDocumentNotification=Jb={}));var Zb;(function(t){function e(n){let o=n;return Kr.objectLiteral(o)&&Cu.uinteger.is(o.start)&&Cu.uinteger.is(o.deleteCount)&&(o.cells===void 0||Kr.typedArray(o.cells,vd.is))}t.is=e;function r(n,o,a){let i={start:n,deleteCount:o};return a!==void 0&&(i.cells=a),i}t.create=r})(Zb||(Xe.NotebookCellArrayChange=Zb={}));var ek;(function(t){t.method="notebookDocument/didChange",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.ProtocolNotificationType(t.method),t.registrationMethod=Pi.method})(ek||(Xe.DidChangeNotebookDocumentNotification=ek={}));var tk;(function(t){t.method="notebookDocument/didSave",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.ProtocolNotificationType(t.method),t.registrationMethod=Pi.method})(tk||(Xe.DidSaveNotebookDocumentNotification=tk={}));var rk;(function(t){t.method="notebookDocument/didClose",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.ProtocolNotificationType(t.method),t.registrationMethod=Pi.method})(rk||(Xe.DidCloseNotebookDocumentNotification=rk={}))});var ik=O(wd=>{"use strict";Object.defineProperty(wd,"__esModule",{value:!0});wd.InlineCompletionRequest=void 0;var ok=Oe(),ak;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=ok.MessageDirection.clientToServer,t.type=new ok.ProtocolRequestType(t.method)})(ak||(wd.InlineCompletionRequest=ak={}))});var wR=O(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.WorkspaceSymbolRequest=y.CodeActionResolveRequest=y.CodeActionRequest=y.DocumentSymbolRequest=y.DocumentHighlightRequest=y.ReferencesRequest=y.DefinitionRequest=y.SignatureHelpRequest=y.SignatureHelpTriggerKind=y.HoverRequest=y.CompletionResolveRequest=y.CompletionRequest=y.CompletionTriggerKind=y.PublishDiagnosticsNotification=y.WatchKind=y.RelativePattern=y.FileChangeType=y.DidChangeWatchedFilesNotification=y.WillSaveTextDocumentWaitUntilRequest=y.WillSaveTextDocumentNotification=y.TextDocumentSaveReason=y.DidSaveTextDocumentNotification=y.DidCloseTextDocumentNotification=y.DidChangeTextDocumentNotification=y.TextDocumentContentChangeEvent=y.DidOpenTextDocumentNotification=y.TextDocumentSyncKind=y.TelemetryEventNotification=y.LogMessageNotification=y.ShowMessageRequest=y.ShowMessageNotification=y.MessageType=y.DidChangeConfigurationNotification=y.ExitNotification=y.ShutdownRequest=y.InitializedNotification=y.InitializeErrorCodes=y.InitializeRequest=y.WorkDoneProgressOptions=y.TextDocumentRegistrationOptions=y.StaticRegistrationOptions=y.PositionEncodingKind=y.FailureHandlingKind=y.ResourceOperationKind=y.UnregistrationRequest=y.RegistrationRequest=y.DocumentSelector=y.NotebookCellTextDocumentFilter=y.NotebookDocumentFilter=y.TextDocumentFilter=void 0;y.MonikerRequest=y.MonikerKind=y.UniquenessLevel=y.WillDeleteFilesRequest=y.DidDeleteFilesNotification=y.WillRenameFilesRequest=y.DidRenameFilesNotification=y.WillCreateFilesRequest=y.DidCreateFilesNotification=y.FileOperationPatternKind=y.LinkedEditingRangeRequest=y.ShowDocumentRequest=y.SemanticTokensRegistrationType=y.SemanticTokensRefreshRequest=y.SemanticTokensRangeRequest=y.SemanticTokensDeltaRequest=y.SemanticTokensRequest=y.TokenFormat=y.CallHierarchyPrepareRequest=y.CallHierarchyOutgoingCallsRequest=y.CallHierarchyIncomingCallsRequest=y.WorkDoneProgressCancelNotification=y.WorkDoneProgressCreateRequest=y.WorkDoneProgress=y.SelectionRangeRequest=y.DeclarationRequest=y.FoldingRangeRefreshRequest=y.FoldingRangeRequest=y.ColorPresentationRequest=y.DocumentColorRequest=y.ConfigurationRequest=y.DidChangeWorkspaceFoldersNotification=y.WorkspaceFoldersRequest=y.TypeDefinitionRequest=y.ImplementationRequest=y.ApplyWorkspaceEditRequest=y.ExecuteCommandRequest=y.PrepareRenameRequest=y.RenameRequest=y.PrepareSupportDefaultBehavior=y.DocumentOnTypeFormattingRequest=y.DocumentRangesFormattingRequest=y.DocumentRangeFormattingRequest=y.DocumentFormattingRequest=y.DocumentLinkResolveRequest=y.DocumentLinkRequest=y.CodeLensRefreshRequest=y.CodeLensResolveRequest=y.CodeLensRequest=y.WorkspaceSymbolResolveRequest=void 0;y.InlineCompletionRequest=y.DidCloseNotebookDocumentNotification=y.DidSaveNotebookDocumentNotification=y.DidChangeNotebookDocumentNotification=y.NotebookCellArrayChange=y.DidOpenNotebookDocumentNotification=y.NotebookDocumentSyncRegistrationType=y.NotebookDocument=y.NotebookCell=y.ExecutionSummary=y.NotebookCellKind=y.DiagnosticRefreshRequest=y.WorkspaceDiagnosticRequest=y.DocumentDiagnosticRequest=y.DocumentDiagnosticReportKind=y.DiagnosticServerCancellationData=y.InlayHintRefreshRequest=y.InlayHintResolveRequest=y.InlayHintRequest=y.InlineValueRefreshRequest=y.InlineValueRequest=y.TypeHierarchySupertypesRequest=y.TypeHierarchySubtypesRequest=y.TypeHierarchyPrepareRequest=void 0;var I=Oe(),sk=(Go(),lf(Rc)),mt=ad(),cF=Nx();Object.defineProperty(y,"ImplementationRequest",{enumerable:!0,get:function(){return cF.ImplementationRequest}});var dF=Mx();Object.defineProperty(y,"TypeDefinitionRequest",{enumerable:!0,get:function(){return dF.TypeDefinitionRequest}});var yR=Kx();Object.defineProperty(y,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return yR.WorkspaceFoldersRequest}});Object.defineProperty(y,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return yR.DidChangeWorkspaceFoldersNotification}});var pF=Wx();Object.defineProperty(y,"ConfigurationRequest",{enumerable:!0,get:function(){return pF.ConfigurationRequest}});var gR=Bx();Object.defineProperty(y,"DocumentColorRequest",{enumerable:!0,get:function(){return gR.DocumentColorRequest}});Object.defineProperty(y,"ColorPresentationRequest",{enumerable:!0,get:function(){return gR.ColorPresentationRequest}});var mR=jx();Object.defineProperty(y,"FoldingRangeRequest",{enumerable:!0,get:function(){return mR.FoldingRangeRequest}});Object.defineProperty(y,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return mR.FoldingRangeRefreshRequest}});var fF=Yx();Object.defineProperty(y,"DeclarationRequest",{enumerable:!0,get:function(){return fF.DeclarationRequest}});var hF=Zx();Object.defineProperty(y,"SelectionRangeRequest",{enumerable:!0,get:function(){return hF.SelectionRangeRequest}});var cv=nb();Object.defineProperty(y,"WorkDoneProgress",{enumerable:!0,get:function(){return cv.WorkDoneProgress}});Object.defineProperty(y,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return cv.WorkDoneProgressCreateRequest}});Object.defineProperty(y,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return cv.WorkDoneProgressCancelNotification}});var dv=sb();Object.defineProperty(y,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return dv.CallHierarchyIncomingCallsRequest}});Object.defineProperty(y,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return dv.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(y,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return dv.CallHierarchyPrepareRequest}});var Ei=fb();Object.defineProperty(y,"TokenFormat",{enumerable:!0,get:function(){return Ei.TokenFormat}});Object.defineProperty(y,"SemanticTokensRequest",{enumerable:!0,get:function(){return Ei.SemanticTokensRequest}});Object.defineProperty(y,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Ei.SemanticTokensDeltaRequest}});Object.defineProperty(y,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Ei.SemanticTokensRangeRequest}});Object.defineProperty(y,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Ei.SemanticTokensRefreshRequest}});Object.defineProperty(y,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Ei.SemanticTokensRegistrationType}});var yF=gb();Object.defineProperty(y,"ShowDocumentRequest",{enumerable:!0,get:function(){return yF.ShowDocumentRequest}});var gF=wb();Object.defineProperty(y,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return gF.LinkedEditingRangeRequest}});var Zo=Rb();Object.defineProperty(y,"FileOperationPatternKind",{enumerable:!0,get:function(){return Zo.FileOperationPatternKind}});Object.defineProperty(y,"DidCreateFilesNotification",{enumerable:!0,get:function(){return Zo.DidCreateFilesNotification}});Object.defineProperty(y,"WillCreateFilesRequest",{enumerable:!0,get:function(){return Zo.WillCreateFilesRequest}});Object.defineProperty(y,"DidRenameFilesNotification",{enumerable:!0,get:function(){return Zo.DidRenameFilesNotification}});Object.defineProperty(y,"WillRenameFilesRequest",{enumerable:!0,get:function(){return Zo.WillRenameFilesRequest}});Object.defineProperty(y,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return Zo.DidDeleteFilesNotification}});Object.defineProperty(y,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return Zo.WillDeleteFilesRequest}});var pv=Nb();Object.defineProperty(y,"UniquenessLevel",{enumerable:!0,get:function(){return pv.UniquenessLevel}});Object.defineProperty(y,"MonikerKind",{enumerable:!0,get:function(){return pv.MonikerKind}});Object.defineProperty(y,"MonikerRequest",{enumerable:!0,get:function(){return pv.MonikerRequest}});var fv=Ob();Object.defineProperty(y,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return fv.TypeHierarchyPrepareRequest}});Object.defineProperty(y,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return fv.TypeHierarchySubtypesRequest}});Object.defineProperty(y,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return fv.TypeHierarchySupertypesRequest}});var vR=Lb();Object.defineProperty(y,"InlineValueRequest",{enumerable:!0,get:function(){return vR.InlineValueRequest}});Object.defineProperty(y,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return vR.InlineValueRefreshRequest}});var hv=Hb();Object.defineProperty(y,"InlayHintRequest",{enumerable:!0,get:function(){return hv.InlayHintRequest}});Object.defineProperty(y,"InlayHintResolveRequest",{enumerable:!0,get:function(){return hv.InlayHintResolveRequest}});Object.defineProperty(y,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return hv.InlayHintRefreshRequest}});var xu=Yb();Object.defineProperty(y,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return xu.DiagnosticServerCancellationData}});Object.defineProperty(y,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return xu.DocumentDiagnosticReportKind}});Object.defineProperty(y,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return xu.DocumentDiagnosticRequest}});Object.defineProperty(y,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return xu.WorkspaceDiagnosticRequest}});Object.defineProperty(y,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return xu.DiagnosticRefreshRequest}});var un=nk();Object.defineProperty(y,"NotebookCellKind",{enumerable:!0,get:function(){return un.NotebookCellKind}});Object.defineProperty(y,"ExecutionSummary",{enumerable:!0,get:function(){return un.ExecutionSummary}});Object.defineProperty(y,"NotebookCell",{enumerable:!0,get:function(){return un.NotebookCell}});Object.defineProperty(y,"NotebookDocument",{enumerable:!0,get:function(){return un.NotebookDocument}});Object.defineProperty(y,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return un.NotebookDocumentSyncRegistrationType}});Object.defineProperty(y,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return un.DidOpenNotebookDocumentNotification}});Object.defineProperty(y,"NotebookCellArrayChange",{enumerable:!0,get:function(){return un.NotebookCellArrayChange}});Object.defineProperty(y,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return un.DidChangeNotebookDocumentNotification}});Object.defineProperty(y,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return un.DidSaveNotebookDocumentNotification}});Object.defineProperty(y,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return un.DidCloseNotebookDocumentNotification}});var mF=ik();Object.defineProperty(y,"InlineCompletionRequest",{enumerable:!0,get:function(){return mF.InlineCompletionRequest}});var iv;(function(t){function e(r){let n=r;return mt.string(n)||mt.string(n.language)||mt.string(n.scheme)||mt.string(n.pattern)}t.is=e})(iv||(y.TextDocumentFilter=iv={}));var sv;(function(t){function e(r){let n=r;return mt.objectLiteral(n)&&(mt.string(n.notebookType)||mt.string(n.scheme)||mt.string(n.pattern))}t.is=e})(sv||(y.NotebookDocumentFilter=sv={}));var uv;(function(t){function e(r){let n=r;return mt.objectLiteral(n)&&(mt.string(n.notebook)||sv.is(n.notebook))&&(n.language===void 0||mt.string(n.language))}t.is=e})(uv||(y.NotebookCellTextDocumentFilter=uv={}));var lv;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!mt.string(n)&&!iv.is(n)&&!uv.is(n))return!1;return!0}t.is=e})(lv||(y.DocumentSelector=lv={}));var uk;(function(t){t.method="client/registerCapability",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolRequestType(t.method)})(uk||(y.RegistrationRequest=uk={}));var lk;(function(t){t.method="client/unregisterCapability",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolRequestType(t.method)})(lk||(y.UnregistrationRequest=lk={}));var ck;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(ck||(y.ResourceOperationKind=ck={}));var dk;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(dk||(y.FailureHandlingKind=dk={}));var pk;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(pk||(y.PositionEncodingKind=pk={}));var fk;(function(t){function e(r){let n=r;return n&&mt.string(n.id)&&n.id.length>0}t.hasId=e})(fk||(y.StaticRegistrationOptions=fk={}));var hk;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||lv.is(n.documentSelector))}t.is=e})(hk||(y.TextDocumentRegistrationOptions=hk={}));var yk;(function(t){function e(n){let o=n;return mt.objectLiteral(o)&&(o.workDoneProgress===void 0||mt.boolean(o.workDoneProgress))}t.is=e;function r(n){let o=n;return o&&mt.boolean(o.workDoneProgress)}t.hasWorkDoneProgress=r})(yk||(y.WorkDoneProgressOptions=yk={}));var gk;(function(t){t.method="initialize",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(gk||(y.InitializeRequest=gk={}));var mk;(function(t){t.unknownProtocolVersion=1})(mk||(y.InitializeErrorCodes=mk={}));var vk;(function(t){t.method="initialized",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType(t.method)})(vk||(y.InitializedNotification=vk={}));var wk;(function(t){t.method="shutdown",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType0(t.method)})(wk||(y.ShutdownRequest=wk={}));var Ak;(function(t){t.method="exit",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType0(t.method)})(Ak||(y.ExitNotification=Ak={}));var Sk;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType(t.method)})(Sk||(y.DidChangeConfigurationNotification=Sk={}));var Tk;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})(Tk||(y.MessageType=Tk={}));var Ck;(function(t){t.method="window/showMessage",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolNotificationType(t.method)})(Ck||(y.ShowMessageNotification=Ck={}));var xk;(function(t){t.method="window/showMessageRequest",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolRequestType(t.method)})(xk||(y.ShowMessageRequest=xk={}));var bk;(function(t){t.method="window/logMessage",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolNotificationType(t.method)})(bk||(y.LogMessageNotification=bk={}));var kk;(function(t){t.method="telemetry/event",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolNotificationType(t.method)})(kk||(y.TelemetryEventNotification=kk={}));var Rk;(function(t){t.None=0,t.Full=1,t.Incremental=2})(Rk||(y.TextDocumentSyncKind=Rk={}));var $k;(function(t){t.method="textDocument/didOpen",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType(t.method)})($k||(y.DidOpenTextDocumentNotification=$k={}));var Ik;(function(t){function e(n){let o=n;return o!=null&&typeof o.text=="string"&&o.range!==void 0&&(o.rangeLength===void 0||typeof o.rangeLength=="number")}t.isIncremental=e;function r(n){let o=n;return o!=null&&typeof o.text=="string"&&o.range===void 0&&o.rangeLength===void 0}t.isFull=r})(Ik||(y.TextDocumentContentChangeEvent=Ik={}));var Pk;(function(t){t.method="textDocument/didChange",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType(t.method)})(Pk||(y.DidChangeTextDocumentNotification=Pk={}));var Ek;(function(t){t.method="textDocument/didClose",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType(t.method)})(Ek||(y.DidCloseTextDocumentNotification=Ek={}));var Nk;(function(t){t.method="textDocument/didSave",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType(t.method)})(Nk||(y.DidSaveTextDocumentNotification=Nk={}));var Dk;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(Dk||(y.TextDocumentSaveReason=Dk={}));var _k;(function(t){t.method="textDocument/willSave",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType(t.method)})(_k||(y.WillSaveTextDocumentNotification=_k={}));var Mk;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Mk||(y.WillSaveTextDocumentWaitUntilRequest=Mk={}));var Ok;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolNotificationType(t.method)})(Ok||(y.DidChangeWatchedFilesNotification=Ok={}));var zk;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(zk||(y.FileChangeType=zk={}));var Kk;(function(t){function e(r){let n=r;return mt.objectLiteral(n)&&(sk.URI.is(n.baseUri)||sk.WorkspaceFolder.is(n.baseUri))&&mt.string(n.pattern)}t.is=e})(Kk||(y.RelativePattern=Kk={}));var Lk;(function(t){t.Create=1,t.Change=2,t.Delete=4})(Lk||(y.WatchKind=Lk={}));var Fk;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolNotificationType(t.method)})(Fk||(y.PublishDiagnosticsNotification=Fk={}));var Wk;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(Wk||(y.CompletionTriggerKind=Wk={}));var Gk;(function(t){t.method="textDocument/completion",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Gk||(y.CompletionRequest=Gk={}));var Hk;(function(t){t.method="completionItem/resolve",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Hk||(y.CompletionResolveRequest=Hk={}));var Bk;(function(t){t.method="textDocument/hover",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Bk||(y.HoverRequest=Bk={}));var qk;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(qk||(y.SignatureHelpTriggerKind=qk={}));var Uk;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Uk||(y.SignatureHelpRequest=Uk={}));var jk;(function(t){t.method="textDocument/definition",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(jk||(y.DefinitionRequest=jk={}));var Vk;(function(t){t.method="textDocument/references",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Vk||(y.ReferencesRequest=Vk={}));var Xk;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Xk||(y.DocumentHighlightRequest=Xk={}));var Yk;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Yk||(y.DocumentSymbolRequest=Yk={}));var Qk;(function(t){t.method="textDocument/codeAction",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Qk||(y.CodeActionRequest=Qk={}));var Jk;(function(t){t.method="codeAction/resolve",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Jk||(y.CodeActionResolveRequest=Jk={}));var Zk;(function(t){t.method="workspace/symbol",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(Zk||(y.WorkspaceSymbolRequest=Zk={}));var eR;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(eR||(y.WorkspaceSymbolResolveRequest=eR={}));var tR;(function(t){t.method="textDocument/codeLens",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(tR||(y.CodeLensRequest=tR={}));var rR;(function(t){t.method="codeLens/resolve",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(rR||(y.CodeLensResolveRequest=rR={}));var nR;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolRequestType0(t.method)})(nR||(y.CodeLensRefreshRequest=nR={}));var oR;(function(t){t.method="textDocument/documentLink",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(oR||(y.DocumentLinkRequest=oR={}));var aR;(function(t){t.method="documentLink/resolve",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(aR||(y.DocumentLinkResolveRequest=aR={}));var iR;(function(t){t.method="textDocument/formatting",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(iR||(y.DocumentFormattingRequest=iR={}));var sR;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(sR||(y.DocumentRangeFormattingRequest=sR={}));var uR;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(uR||(y.DocumentRangesFormattingRequest=uR={}));var lR;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(lR||(y.DocumentOnTypeFormattingRequest=lR={}));var cR;(function(t){t.Identifier=1})(cR||(y.PrepareSupportDefaultBehavior=cR={}));var dR;(function(t){t.method="textDocument/rename",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(dR||(y.RenameRequest=dR={}));var pR;(function(t){t.method="textDocument/prepareRename",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(pR||(y.PrepareRenameRequest=pR={}));var fR;(function(t){t.method="workspace/executeCommand",t.messageDirection=I.MessageDirection.clientToServer,t.type=new I.ProtocolRequestType(t.method)})(fR||(y.ExecuteCommandRequest=fR={}));var hR;(function(t){t.method="workspace/applyEdit",t.messageDirection=I.MessageDirection.serverToClient,t.type=new I.ProtocolRequestType("workspace/applyEdit")})(hR||(y.ApplyWorkspaceEditRequest=hR={}))});var SR=O(Ad=>{"use strict";Object.defineProperty(Ad,"__esModule",{value:!0});Ad.createProtocolConnection=void 0;var AR=Jo();function vF(t,e,r,n){return AR.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,AR.createMessageConnection)(t,e,r,n)}Ad.createProtocolConnection=vF});var CR=O(ur=>{"use strict";var wF=ur&&ur.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Sd=ur&&ur.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&wF(e,t,r)};Object.defineProperty(ur,"__esModule",{value:!0});ur.LSPErrorCodes=ur.createProtocolConnection=void 0;Sd(Jo(),ur);Sd((Go(),lf(Rc)),ur);Sd(Oe(),ur);Sd(wR(),ur);var AF=SR();Object.defineProperty(ur,"createProtocolConnection",{enumerable:!0,get:function(){return AF.createProtocolConnection}});var TR;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(TR||(ur.LSPErrorCodes=TR={}))});var Ye=O(ln=>{"use strict";var SF=ln&&ln.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),xR=ln&&ln.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&SF(e,t,r)};Object.defineProperty(ln,"__esModule",{value:!0});ln.createProtocolConnection=void 0;var TF=Jm();xR(Jm(),ln);xR(CR(),ln);function CF(t,e,r,n){return(0,TF.createMessageConnection)(t,e,r,n)}ln.createProtocolConnection=CF});var gv=O(po=>{"use strict";Object.defineProperty(po,"__esModule",{value:!0});po.SemanticTokensBuilder=po.SemanticTokensDiff=po.SemanticTokensFeature=void 0;var Td=Ye(),xF=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(Td.SemanticTokensRefreshRequest.type),on:e=>{let r=Td.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=Td.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=Td.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};po.SemanticTokensFeature=xF;var Cd=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let o=e-1,a=r-1;for(;o>=n&&a>=n&&this.originalSequence[o]===this.modifiedSequence[a];)o--,a--;(o<n||a<n)&&(o++,a++);let i=o-n+1,s=this.modifiedSequence.slice(n,a+1);return s.length===1&&s[0]===this.originalSequence[o]?[{start:n,deleteCount:i-1}]:[{start:n,deleteCount:i,data:s}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};po.SemanticTokensDiff=Cd;var yv=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,o,a){let i=e,s=r;this._dataLen>0&&(i-=this._prevLine,i===0&&(s-=this._prevChar)),this._data[this._dataLen++]=i,this._data[this._dataLen++]=s,this._data[this._dataLen++]=n,this._data[this._dataLen++]=o,this._data[this._dataLen++]=a,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new Cd(this._prevData,this._data).computeDiff()}:this.build()}};po.SemanticTokensBuilder=yv});var bR=O(xd=>{"use strict";Object.defineProperty(xd,"__esModule",{value:!0});xd.InlineCompletionFeature=void 0;var bF=Ye(),kF=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(bF.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};xd.InlineCompletionFeature=kF});var vv=O(bd=>{"use strict";Object.defineProperty(bd,"__esModule",{value:!0});bd.TextDocuments=void 0;var ea=Ye(),mv=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new ea.Emitter,this._onDidOpen=new ea.Emitter,this._onDidClose=new ea.Emitter,this._onDidSave=new ea.Emitter,this._onWillSave=new ea.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=ea.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let o=n.textDocument,a=this._configuration.create(o.uri,o.languageId,o.version,o.text);this._syncedDocuments.set(o.uri,a);let i=Object.freeze({document:a});this._onDidOpen.fire(i),this._onDidChangeContent.fire(i)})),r.push(e.onDidChangeTextDocument(n=>{let o=n.textDocument,a=n.contentChanges;if(a.length===0)return;let{version:i}=o;if(i==null)throw new Error(`Received document change event for ${o.uri} without valid version identifier`);let s=this._syncedDocuments.get(o.uri);s!==void 0&&(s=this._configuration.update(s,a,i),this._syncedDocuments.set(o.uri,s),this._onDidChangeContent.fire(Object.freeze({document:s})))})),r.push(e.onDidCloseTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:o})))})),r.push(e.onWillSaveTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&this._onWillSave.fire(Object.freeze({document:o,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,o)=>{let a=this._syncedDocuments.get(n.textDocument.uri);return a!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:a,reason:n.reason}),o):[]})),r.push(e.onDidSaveTextDocument(n=>{let o=this._syncedDocuments.get(n.textDocument.uri);o!==void 0&&this._onDidSave.fire(Object.freeze({document:o}))})),ea.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};bd.TextDocuments=mv});var Av=O(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.NotebookDocuments=Ni.NotebookSyncFeature=void 0;var Cr=Ye(),kR=vv(),RF=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Cr.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Cr.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Cr.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Cr.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};Ni.NotebookSyncFeature=RF;var kd=class t{onDidOpenTextDocument(e){return this.openHandler=e,Cr.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Cr.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Cr.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};kd.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var wv=class{constructor(e){e instanceof kR.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new kR.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Cr.Emitter,this._onDidChange=new Cr.Emitter,this._onDidSave=new Cr.Emitter,this._onDidClose=new Cr.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new kd,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(o=>{this.notebookDocuments.set(o.notebookDocument.uri,o.notebookDocument);for(let a of o.cellTextDocuments)r.openTextDocument({textDocument:a});this.updateCellMap(o.notebookDocument),this._onDidOpen.fire(o.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(o=>{let a=this.notebookDocuments.get(o.notebookDocument.uri);if(a===void 0)return;a.version=o.notebookDocument.version;let i=a.metadata,s=!1,u=o.change;u.metadata!==void 0&&(s=!0,a.metadata=u.metadata);let l=[],c=[],d=[],p=[];if(u.cells!==void 0){let S=u.cells;if(S.structure!==void 0){let g=S.structure.array;if(a.cells.splice(g.start,g.deleteCount,...g.cells!==void 0?g.cells:[]),S.structure.didOpen!==void 0)for(let f of S.structure.didOpen)r.openTextDocument({textDocument:f}),l.push(f.uri);if(S.structure.didClose)for(let f of S.structure.didClose)r.closeTextDocument({textDocument:f}),c.push(f.uri)}if(S.data!==void 0){let g=new Map(S.data.map(f=>[f.document,f]));for(let f=0;f<=a.cells.length;f++){let T=g.get(a.cells[f].document);if(T!==void 0){let P=a.cells.splice(f,1,T);if(d.push({old:P[0],new:T}),g.delete(T.document),g.size===0)break}}}if(S.textContent!==void 0)for(let g of S.textContent)r.changeTextDocument({textDocument:g.document,contentChanges:g.changes}),p.push(g.document.uri)}this.updateCellMap(a);let h={notebookDocument:a};s&&(h.metadata={old:i,new:a.metadata});let v=[];for(let S of l)v.push(this.getNotebookCell(S));let A=[];for(let S of c)A.push(this.getNotebookCell(S));let C=[];for(let S of p)C.push(this.getNotebookCell(S));(v.length>0||A.length>0||d.length>0||C.length>0)&&(h.cells={added:v,removed:A,changed:{data:d,textContent:C}}),(h.metadata!==void 0||h.cells!==void 0)&&this._onDidChange.fire(h)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(o=>{let a=this.notebookDocuments.get(o.notebookDocument.uri);a!==void 0&&this._onDidSave.fire(a)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(o=>{let a=this.notebookDocuments.get(o.notebookDocument.uri);if(a!==void 0){this._onDidClose.fire(a);for(let i of o.cellTextDocuments)r.closeTextDocument({textDocument:i});this.notebookDocuments.delete(o.notebookDocument.uri);for(let i of a.cells)this.notebookCellMap.delete(i.document)}})),Cr.Disposable.create(()=>{n.forEach(o=>o.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};Ni.NotebookDocuments=wv});var Sv=O(st=>{"use strict";Object.defineProperty(st,"__esModule",{value:!0});st.thenable=st.typedArray=st.stringArray=st.array=st.func=st.error=st.number=st.string=st.boolean=void 0;function $F(t){return t===!0||t===!1}st.boolean=$F;function RR(t){return typeof t=="string"||t instanceof String}st.string=RR;function IF(t){return typeof t=="number"||t instanceof Number}st.number=IF;function PF(t){return t instanceof Error}st.error=PF;function $R(t){return typeof t=="function"}st.func=$R;function IR(t){return Array.isArray(t)}st.array=IR;function EF(t){return IR(t)&&t.every(e=>RR(e))}st.stringArray=EF;function NF(t,e){return Array.isArray(t)&&t.every(e)}st.typedArray=NF;function DF(t){return t&&$R(t.then)}st.thenable=DF});var Tv=O(xr=>{"use strict";Object.defineProperty(xr,"__esModule",{value:!0});xr.generateUuid=xr.parse=xr.isUUID=xr.v4=xr.empty=void 0;var bu=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},ku=class t extends bu{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};ku._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];ku._timeHighBits=["8","9","a","b"];xr.empty=new bu("00000000-0000-0000-0000-000000000000");function PR(){return new ku}xr.v4=PR;var _F=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function ER(t){return _F.test(t)}xr.isUUID=ER;function MF(t){if(!ER(t))throw new Error("invalid uuid");return new bu(t)}xr.parse=MF;function OF(){return PR().asHex()}xr.generateUuid=OF});var NR=O(ho=>{"use strict";Object.defineProperty(ho,"__esModule",{value:!0});ho.attachPartialResult=ho.ProgressFeature=ho.attachWorkDone=void 0;var fo=Ye(),zF=Tv(),ta=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,o){let a={kind:"begin",title:e,percentage:r,message:n,cancellable:o};this._connection.sendProgress(fo.WorkDoneProgress.type,this._token,a)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(fo.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(fo.WorkDoneProgress.type,this._token,{kind:"end"})}};ta.Instances=new Map;var Rd=class extends ta{constructor(e,r){super(e,r),this._source=new fo.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},Ru=class{constructor(){}begin(){}report(){}done(){}},$d=class extends Ru{constructor(){super(),this._source=new fo.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function KF(t,e){if(e===void 0||e.workDoneToken===void 0)return new Ru;let r=e.workDoneToken;return delete e.workDoneToken,new ta(t,r)}ho.attachWorkDone=KF;var LF=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(fo.WorkDoneProgressCancelNotification.type,r=>{let n=ta.Instances.get(r.token);(n instanceof Rd||n instanceof $d)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Ru:new ta(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,zF.generateUuid)();return this.connection.sendRequest(fo.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Rd(this.connection,e))}else return Promise.resolve(new $d)}};ho.ProgressFeature=LF;var Cv;(function(t){t.type=new fo.ProgressType})(Cv||(Cv={}));var xv=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(Cv.type,this._token,e)}};function FF(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new xv(t,r)}ho.attachPartialResult=FF});var DR=O(Id=>{"use strict";Object.defineProperty(Id,"__esModule",{value:!0});Id.ConfigurationFeature=void 0;var WF=Ye(),GF=Sv(),HF=t=>class extends t{getConfiguration(e){return e?GF.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(WF.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};Id.ConfigurationFeature=HF});var _R=O(Ed=>{"use strict";Object.defineProperty(Ed,"__esModule",{value:!0});Ed.WorkspaceFoldersFeature=void 0;var Pd=Ye(),BF=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Pd.Emitter,this.connection.onNotification(Pd.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Pd.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Pd.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Ed.WorkspaceFoldersFeature=BF});var MR=O(Nd=>{"use strict";Object.defineProperty(Nd,"__esModule",{value:!0});Nd.CallHierarchyFeature=void 0;var bv=Ye(),qF=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(bv.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=bv.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=bv.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Nd.CallHierarchyFeature=qF});var OR=O(Dd=>{"use strict";Object.defineProperty(Dd,"__esModule",{value:!0});Dd.ShowDocumentFeature=void 0;var UF=Ye(),jF=t=>class extends t{showDocument(e){return this.connection.sendRequest(UF.ShowDocumentRequest.type,e)}};Dd.ShowDocumentFeature=jF});var zR=O(_d=>{"use strict";Object.defineProperty(_d,"__esModule",{value:!0});_d.FileOperationsFeature=void 0;var Di=Ye(),VF=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Di.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(Di.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(Di.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(Di.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(Di.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(Di.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};_d.FileOperationsFeature=VF});var KR=O(Md=>{"use strict";Object.defineProperty(Md,"__esModule",{value:!0});Md.LinkedEditingRangeFeature=void 0;var XF=Ye(),YF=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(XF.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};Md.LinkedEditingRangeFeature=YF});var LR=O(Od=>{"use strict";Object.defineProperty(Od,"__esModule",{value:!0});Od.TypeHierarchyFeature=void 0;var kv=Ye(),QF=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(kv.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=kv.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=kv.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Od.TypeHierarchyFeature=QF});var WR=O(zd=>{"use strict";Object.defineProperty(zd,"__esModule",{value:!0});zd.InlineValueFeature=void 0;var FR=Ye(),JF=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(FR.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(FR.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};zd.InlineValueFeature=JF});var HR=O(Kd=>{"use strict";Object.defineProperty(Kd,"__esModule",{value:!0});Kd.FoldingRangeFeature=void 0;var GR=Ye(),ZF=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(GR.FoldingRangeRefreshRequest.type),on:e=>{let r=GR.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Kd.FoldingRangeFeature=ZF});var BR=O(Ld=>{"use strict";Object.defineProperty(Ld,"__esModule",{value:!0});Ld.InlayHintFeature=void 0;var Rv=Ye(),eW=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Rv.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Rv.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Rv.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};Ld.InlayHintFeature=eW});var qR=O(Fd=>{"use strict";Object.defineProperty(Fd,"__esModule",{value:!0});Fd.DiagnosticFeature=void 0;var $u=Ye(),tW=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest($u.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest($u.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress($u.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest($u.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress($u.WorkspaceDiagnosticRequest.partialResult,r)))}}};Fd.DiagnosticFeature=tW});var UR=O(Wd=>{"use strict";Object.defineProperty(Wd,"__esModule",{value:!0});Wd.MonikerFeature=void 0;var rW=Ye(),nW=t=>class extends t{get moniker(){return{on:e=>{let r=rW.MonikerRequest.type;return this.connection.onRequest(r,(n,o)=>e(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Wd.MonikerFeature=nW});var s$=O(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.createConnection=de.combineFeatures=de.combineNotebooksFeatures=de.combineLanguagesFeatures=de.combineWorkspaceFeatures=de.combineWindowFeatures=de.combineClientFeatures=de.combineTracerFeatures=de.combineTelemetryFeatures=de.combineConsoleFeatures=de._NotebooksImpl=de._LanguagesImpl=de.BulkUnregistration=de.BulkRegistration=de.ErrorMessageTracker=void 0;var D=Ye(),br=Sv(),Iv=Tv(),Y=NR(),oW=DR(),aW=_R(),iW=MR(),sW=gv(),uW=OR(),lW=zR(),cW=KR(),dW=LR(),pW=WR(),fW=HR(),hW=BR(),yW=qR(),gW=Av(),mW=UR();function $v(t){if(t!==null)return t}var Pv=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};de.ErrorMessageTracker=Pv;var Gd=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(D.MessageType.Error,e)}warn(e){this.send(D.MessageType.Warning,e)}info(e){this.send(D.MessageType.Info,e)}log(e){this.send(D.MessageType.Log,e)}debug(e){this.send(D.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(D.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,D.RAL)().console.error("Sending log message failed")})}},Ev=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:D.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then($v)}showWarningMessage(e,...r){let n={type:D.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then($v)}showInformationMessage(e,...r){let n={type:D.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then($v)}},jR=(0,uW.ShowDocumentFeature)((0,Y.ProgressFeature)(Ev)),VR;(function(t){function e(){return new Hd}t.create=e})(VR||(de.BulkRegistration=VR={}));var Hd=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=br.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let o=Iv.generateUuid();this._registrations.push({id:o,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},XR;(function(t){function e(){return new Iu(void 0,[])}t.create=e})(XR||(de.BulkUnregistration=XR={}));var Iu=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(D.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=br.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let o={unregisterations:[n]};return this._connection.sendRequest(D.UnregistrationRequest.type,o).then(()=>{this._unregistrations.delete(r)},a=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Bd=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Hd?this.registerMany(e):e instanceof Iu?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let o=br.string(r)?r:r.method,a=Iv.generateUuid(),i={registrations:[{id:a,method:o,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(D.RegistrationRequest.type,i).then(s=>(e.add({id:a,method:o}),e),s=>(this.connection.console.info(`Registering request handler for ${o} failed.`),Promise.reject(s)))}registerSingle2(e,r){let n=br.string(e)?e:e.method,o=Iv.generateUuid(),a={registrations:[{id:o,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(D.RegistrationRequest.type,a).then(i=>D.Disposable.create(()=>{this.unregisterSingle(o,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${o} failed.`)})}),i=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(i)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(D.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(D.RegistrationRequest.type,r).then(()=>new Iu(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Nv=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(o){return o&&!!o.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(D.ApplyWorkspaceEditRequest.type,n)}},YR=(0,lW.FileOperationsFeature)((0,aW.WorkspaceFoldersFeature)((0,oW.ConfigurationFeature)(Nv))),qd=class{constructor(){this._trace=D.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==D.Trace.Off&&this.connection.sendNotification(D.LogTraceNotification.type,{message:e,verbose:this._trace===D.Trace.Verbose?r:void 0}).catch(()=>{})}},Ud=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(D.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},jd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,Y.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,Y.attachPartialResult)(this.connection,r)}};de._LanguagesImpl=jd;var QR=(0,fW.FoldingRangeFeature)((0,mW.MonikerFeature)((0,yW.DiagnosticFeature)((0,hW.InlayHintFeature)((0,pW.InlineValueFeature)((0,dW.TypeHierarchyFeature)((0,cW.LinkedEditingRangeFeature)((0,sW.SemanticTokensFeature)((0,iW.CallHierarchyFeature)(jd))))))))),Vd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,Y.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,Y.attachPartialResult)(this.connection,r)}};de._NotebooksImpl=Vd;var JR=(0,gW.NotebookSyncFeature)(Vd);function ZR(t,e){return function(r){return e(t(r))}}de.combineConsoleFeatures=ZR;function e$(t,e){return function(r){return e(t(r))}}de.combineTelemetryFeatures=e$;function t$(t,e){return function(r){return e(t(r))}}de.combineTracerFeatures=t$;function r$(t,e){return function(r){return e(t(r))}}de.combineClientFeatures=r$;function n$(t,e){return function(r){return e(t(r))}}de.combineWindowFeatures=n$;function o$(t,e){return function(r){return e(t(r))}}de.combineWorkspaceFeatures=o$;function a$(t,e){return function(r){return e(t(r))}}de.combineLanguagesFeatures=a$;function i$(t,e){return function(r){return e(t(r))}}de.combineNotebooksFeatures=i$;function vW(t,e){function r(o,a,i){return o&&a?i(o,a):o||a}return{__brand:"features",console:r(t.console,e.console,ZR),tracer:r(t.tracer,e.tracer,t$),telemetry:r(t.telemetry,e.telemetry,e$),client:r(t.client,e.client,r$),window:r(t.window,e.window,n$),workspace:r(t.workspace,e.workspace,o$),languages:r(t.languages,e.languages,a$),notebooks:r(t.notebooks,e.notebooks,i$)}}de.combineFeatures=vW;function wW(t,e,r){let n=r&&r.console?new(r.console(Gd)):new Gd,o=t(n);n.rawAttach(o);let a=r&&r.tracer?new(r.tracer(qd)):new qd,i=r&&r.telemetry?new(r.telemetry(Ud)):new Ud,s=r&&r.client?new(r.client(Bd)):new Bd,u=r&&r.window?new(r.window(jR)):new jR,l=r&&r.workspace?new(r.workspace(YR)):new YR,c=r&&r.languages?new(r.languages(QR)):new QR,d=r&&r.notebooks?new(r.notebooks(JR)):new JR,p=[n,a,i,s,u,l,c,d];function h(g){return g instanceof Promise?g:br.thenable(g)?new Promise((f,T)=>{g.then(P=>f(P),P=>T(P))}):Promise.resolve(g)}let v,A,C,S={listen:()=>o.listen(),sendRequest:(g,...f)=>o.sendRequest(br.string(g)?g:g.method,...f),onRequest:(g,f)=>o.onRequest(g,f),sendNotification:(g,f)=>{let T=br.string(g)?g:g.method;return o.sendNotification(T,f)},onNotification:(g,f)=>o.onNotification(g,f),onProgress:o.onProgress,sendProgress:o.sendProgress,onInitialize:g=>(A=g,{dispose:()=>{A=void 0}}),onInitialized:g=>o.onNotification(D.InitializedNotification.type,g),onShutdown:g=>(v=g,{dispose:()=>{v=void 0}}),onExit:g=>(C=g,{dispose:()=>{C=void 0}}),get console(){return n},get telemetry(){return i},get tracer(){return a},get client(){return s},get window(){return u},get workspace(){return l},get languages(){return c},get notebooks(){return d},onDidChangeConfiguration:g=>o.onNotification(D.DidChangeConfigurationNotification.type,g),onDidChangeWatchedFiles:g=>o.onNotification(D.DidChangeWatchedFilesNotification.type,g),__textDocumentSync:void 0,onDidOpenTextDocument:g=>o.onNotification(D.DidOpenTextDocumentNotification.type,g),onDidChangeTextDocument:g=>o.onNotification(D.DidChangeTextDocumentNotification.type,g),onDidCloseTextDocument:g=>o.onNotification(D.DidCloseTextDocumentNotification.type,g),onWillSaveTextDocument:g=>o.onNotification(D.WillSaveTextDocumentNotification.type,g),onWillSaveTextDocumentWaitUntil:g=>o.onRequest(D.WillSaveTextDocumentWaitUntilRequest.type,g),onDidSaveTextDocument:g=>o.onNotification(D.DidSaveTextDocumentNotification.type,g),sendDiagnostics:g=>o.sendNotification(D.PublishDiagnosticsNotification.type,g),onHover:g=>o.onRequest(D.HoverRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),void 0)),onCompletion:g=>o.onRequest(D.CompletionRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onCompletionResolve:g=>o.onRequest(D.CompletionResolveRequest.type,g),onSignatureHelp:g=>o.onRequest(D.SignatureHelpRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),void 0)),onDeclaration:g=>o.onRequest(D.DeclarationRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onDefinition:g=>o.onRequest(D.DefinitionRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onTypeDefinition:g=>o.onRequest(D.TypeDefinitionRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onImplementation:g=>o.onRequest(D.ImplementationRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onReferences:g=>o.onRequest(D.ReferencesRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onDocumentHighlight:g=>o.onRequest(D.DocumentHighlightRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onDocumentSymbol:g=>o.onRequest(D.DocumentSymbolRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onWorkspaceSymbol:g=>o.onRequest(D.WorkspaceSymbolRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onWorkspaceSymbolResolve:g=>o.onRequest(D.WorkspaceSymbolResolveRequest.type,g),onCodeAction:g=>o.onRequest(D.CodeActionRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onCodeActionResolve:g=>o.onRequest(D.CodeActionResolveRequest.type,(f,T)=>g(f,T)),onCodeLens:g=>o.onRequest(D.CodeLensRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onCodeLensResolve:g=>o.onRequest(D.CodeLensResolveRequest.type,(f,T)=>g(f,T)),onDocumentFormatting:g=>o.onRequest(D.DocumentFormattingRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),void 0)),onDocumentRangeFormatting:g=>o.onRequest(D.DocumentRangeFormattingRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),void 0)),onDocumentOnTypeFormatting:g=>o.onRequest(D.DocumentOnTypeFormattingRequest.type,(f,T)=>g(f,T)),onRenameRequest:g=>o.onRequest(D.RenameRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),void 0)),onPrepareRename:g=>o.onRequest(D.PrepareRenameRequest.type,(f,T)=>g(f,T)),onDocumentLinks:g=>o.onRequest(D.DocumentLinkRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onDocumentLinkResolve:g=>o.onRequest(D.DocumentLinkResolveRequest.type,(f,T)=>g(f,T)),onDocumentColor:g=>o.onRequest(D.DocumentColorRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onColorPresentation:g=>o.onRequest(D.ColorPresentationRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onFoldingRanges:g=>o.onRequest(D.FoldingRangeRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onSelectionRanges:g=>o.onRequest(D.SelectionRangeRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),(0,Y.attachPartialResult)(o,f))),onExecuteCommand:g=>o.onRequest(D.ExecuteCommandRequest.type,(f,T)=>g(f,T,(0,Y.attachWorkDone)(o,f),void 0)),dispose:()=>o.dispose()};for(let g of p)g.attach(S);return o.onRequest(D.InitializeRequest.type,g=>{e.initialize(g),br.string(g.trace)&&(a.trace=D.Trace.fromString(g.trace));for(let f of p)f.initialize(g.capabilities);if(A){let f=A(g,new D.CancellationTokenSource().token,(0,Y.attachWorkDone)(o,g),void 0);return h(f).then(T=>{if(T instanceof D.ResponseError)return T;let P=T;P||(P={capabilities:{}});let Q=P.capabilities;Q||(Q={},P.capabilities=Q),Q.textDocumentSync===void 0||Q.textDocumentSync===null?Q.textDocumentSync=br.number(S.__textDocumentSync)?S.__textDocumentSync:D.TextDocumentSyncKind.None:!br.number(Q.textDocumentSync)&&!br.number(Q.textDocumentSync.change)&&(Q.textDocumentSync.change=br.number(S.__textDocumentSync)?S.__textDocumentSync:D.TextDocumentSyncKind.None);for(let vt of p)vt.fillServerCapabilities(Q);return P})}else{let f={capabilities:{textDocumentSync:D.TextDocumentSyncKind.None}};for(let T of p)T.fillServerCapabilities(f.capabilities);return f}}),o.onRequest(D.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,v)return v(new D.CancellationTokenSource().token)}),o.onNotification(D.ExitNotification.type,()=>{try{C&&C()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),o.onNotification(D.SetTraceNotification.type,g=>{a.trace=D.Trace.fromString(g.value)}),S}de.createConnection=wW});var Dv=O(Mt=>{"use strict";var AW=Mt&&Mt.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),l$=Mt&&Mt.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&AW(e,t,r)};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.ProposedFeatures=Mt.NotebookDocuments=Mt.TextDocuments=Mt.SemanticTokensBuilder=void 0;var SW=gv();Object.defineProperty(Mt,"SemanticTokensBuilder",{enumerable:!0,get:function(){return SW.SemanticTokensBuilder}});var TW=bR();l$(Ye(),Mt);var CW=vv();Object.defineProperty(Mt,"TextDocuments",{enumerable:!0,get:function(){return CW.TextDocuments}});var xW=Av();Object.defineProperty(Mt,"NotebookDocuments",{enumerable:!0,get:function(){return xW.NotebookDocuments}});l$(s$(),Mt);var u$;(function(t){t.all={__brand:"features",languages:TW.InlineCompletionFeature}})(u$||(Mt.ProposedFeatures=u$={}))});var d$=O((Lne,c$)=>{"use strict";c$.exports=Ye()});var yr=O(cn=>{"use strict";var bW=cn&&cn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),f$=cn&&cn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&bW(e,t,r)};Object.defineProperty(cn,"__esModule",{value:!0});cn.createConnection=void 0;var Xd=Dv();f$(d$(),cn);f$(Dv(),cn);var p$=!1,kW={initialize:t=>{},get shutdownReceived(){return p$},set shutdownReceived(t){p$=t},exit:t=>{}};function RW(t,e,r,n){let o,a,i,s;t!==void 0&&t.__brand==="features"&&(o=t,t=e,e=r,r=n),Xd.ConnectionStrategy.is(t)||Xd.ConnectionOptions.is(t)?s=t:(a=t,i=e,s=r);let u=l=>(0,Xd.createProtocolConnection)(a,i,l,s);return(0,Xd.createConnection)(u,kW,o)}cn.createConnection=RW});var N$=O((oie,E$)=>{"use strict";E$.exports=yr()});var at={};Dn(at,{AbstractAstReflection:()=>mo,AbstractCstNode:()=>Es,AbstractLangiumParser:()=>Ns,AbstractParserErrorMessageProvider:()=>Ic,AbstractThreadedAsyncParser:()=>jg,AstUtils:()=>Ju,BiMap:()=>jo,Cancellation:()=>L,CompositeCstNodeImpl:()=>Bo,ContextCache:()=>Vo,CstNodeBuilder:()=>Ps,CstUtils:()=>Hu,DONE_RESULT:()=>St,DatatypeSymbol:()=>$c,DefaultAstNodeDescriptionProvider:()=>Qs,DefaultAstNodeLocator:()=>Zs,DefaultAsyncParser:()=>lu,DefaultCommentProvider:()=>uu,DefaultConfigurationProvider:()=>eu,DefaultDocumentBuilder:()=>tu,DefaultDocumentValidator:()=>Ys,DefaultHydrator:()=>du,DefaultIndexManager:()=>ru,DefaultJsonSerializer:()=>js,DefaultLangiumDocumentFactory:()=>Ks,DefaultLangiumDocuments:()=>Ls,DefaultLexer:()=>ou,DefaultLinker:()=>Fs,DefaultNameProvider:()=>Ws,DefaultReferenceDescriptionProvider:()=>Js,DefaultReferences:()=>Gs,DefaultScopeComputation:()=>Hs,DefaultScopeProvider:()=>Us,DefaultServiceRegistry:()=>Vs,DefaultTokenBuilder:()=>Ms,DefaultValueConverter:()=>Os,DefaultWorkspaceLock:()=>cu,DefaultWorkspaceManager:()=>nu,Deferred:()=>Or,Disposable:()=>Xo,DisposableCache:()=>fi,DocumentCache:()=>zc,DocumentState:()=>H,DocumentValidator:()=>$n,EMPTY_SCOPE:()=>T0,EMPTY_STREAM:()=>_n,EmptyFileSystem:()=>yu,EmptyFileSystemProvider:()=>Hc,ErrorWithLocation:()=>So,GrammarAST:()=>Co,GrammarUtils:()=>al,JSDocDocumentationProvider:()=>su,LangiumCompletionParser:()=>_s,LangiumParser:()=>Ds,LangiumParserErrorMessageProvider:()=>si,LeafCstNodeImpl:()=>Ho,MapScope:()=>Bs,Module:()=>gi,MultiMap:()=>on,OperationCancelled:()=>Rn,ParserWorker:()=>Vg,Reduction:()=>aa,RegExpUtils:()=>rl,RootCstNodeImpl:()=>ii,SimpleCache:()=>qs,StreamImpl:()=>Wt,StreamScope:()=>pi,TextDocument:()=>ro,TreeStreamImpl:()=>gr,URI:()=>Me,UriUtils:()=>kt,ValidationCategory:()=>yi,ValidationRegistry:()=>Xs,ValueConverter:()=>rn,WorkspaceCache:()=>hi,assertUnreachable:()=>Mn,createCompletionParser:()=>$g,createDefaultCoreModule:()=>pu,createDefaultSharedCoreModule:()=>fu,createGrammarConfig:()=>Mh,createLangiumParser:()=>Ig,delayNextTick:()=>zg,diagnosticData:()=>Kc,eagerLoad:()=>hu,getDiagnosticRange:()=>UC,inject:()=>Yo,interruptAndCheck:()=>Ge,isAstNode:()=>Ie,isAstNodeDescription:()=>cf,isAstNodeWithComment:()=>Lg,isCompositeCstNode:()=>Ft,isIMultiModeLexerDefinition:()=>Wg,isJSDoc:()=>qg,isLeafCstNode:()=>Er,isLinkingError:()=>vo,isNamed:()=>Oc,isOperationCancelled:()=>nn,isReference:()=>At,isRootCstNode:()=>Li,isTokenTypeArray:()=>jC,isTokenTypeDictionary:()=>Fg,loadGrammarFromJson:()=>Bc,parseJSDoc:()=>Bg,prepareLangiumParser:()=>_C,setInterruptionPeriod:()=>FC,startCancelableOperation:()=>LC,stream:()=>te,toDiagnosticSeverity:()=>Lc});var Hu={};Dn(Hu,{DefaultNameRegexp:()=>Wu,RangeComparison:()=>pn,compareRange:()=>Xv,findCommentNode:()=>hf,findDeclarationNodeAtOffset:()=>pt,findLeafNodeAtOffset:()=>Gu,findLeafNodeBeforeOffset:()=>Fi,flattenCst:()=>pf,getInteriorNodes:()=>gf,getNextNode:()=>yf,getPreviousNode:()=>Qv,getStartlineNode:()=>aP,inRange:()=>Fu,isChildNode:()=>ff,isCommentNode:()=>df,streamCst:()=>wo,toDocumentSegment:()=>Ao,tokenToRange:()=>ia});function Ie(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function At(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function cf(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function vo(t){return typeof t=="object"&&t!==null&&Ie(t.container)&&At(t.reference)&&typeof t.message=="string"}var mo=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Ie(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let o=n[r];if(o!==void 0)return o;{let a=this.computeIsSubtype(e,r);return n[r]=a,a}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),o=[];for(let a of n)this.isSubtype(a,e)&&o.push(a);return this.allSubtypes[e]=o,o}}};function Ft(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function Er(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function Li(t){return Ft(t)&&typeof t.fullText=="string"}var Wt=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(o=>[e?e(o):o,r?r(o):o]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let o;if(!n.firstDone){do if(o=this.nextFn(n.first),!o.done)return o;while(!o.done);n.firstDone=!0}do if(o=r.next(),!o.done)return o;while(!o.done);return St})}join(e=","){let r=this.iterator(),n="",o,a=!1;do o=r.next(),o.done||(a&&(n+=e),n+=oP(o.value)),a=!0;while(!o.done);return n}indexOf(e,r=0){let n=this.iterator(),o=0,a=n.next();for(;!a.done;){if(o>=r&&a.value===e)return o;a=n.next(),o++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,o=r.next();for(;!o.done;)e(o.value,n),o=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:o}=this.nextFn(r);return n?St:{done:!1,value:e(o)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return St})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),o=r,a=n.next();for(;!a.done;)o===void 0?o=a.value:o=e(o,a.value),a=n.next();return o}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let o=e.next();if(o.done)return n;let a=this.recursiveReduce(e,r,n);return a===void 0?o.value:r(a,o.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,o=r.next();for(;!o.done;){if(e(o.value))return n;o=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let a=r.iterator.next();if(a.done)r.iterator=void 0;else return a}let{done:n,value:o}=this.nextFn(r.this);if(!n){let a=e(o);if(Lu(a))r.iterator=a[Symbol.iterator]();else return{done:!1,value:a}}}while(r.iterator);return St})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let i=n.iterator.next();if(i.done)n.iterator=void 0;else return i}let{done:o,value:a}=r.nextFn(n.this);if(!o)if(Lu(a))n.iterator=a[Symbol.iterator]();else return{done:!1,value:a}}while(n.iterator);return St})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?St:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let o=e?e(n):n;return r.has(o)?!1:(r.add(o),!0)})}exclude(e,r){let n=new Set;for(let o of e){let a=r?r(o):o;n.add(a)}return this.filter(o=>{let a=r?r(o):o;return!n.has(a)})}};function oP(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function Lu(t){return!!t&&typeof t[Symbol.iterator]=="function"}var _n=new Wt(()=>{},()=>St),St=Object.freeze({done:!0,value:void 0});function te(...t){if(t.length===1){let e=t[0];if(e instanceof Wt)return e;if(Lu(e))return new Wt(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new Wt(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:St)}return t.length>1?new Wt(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];Lu(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return St}):_n}var gr=class extends Wt{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),o=>{for(o.pruned&&(o.iterators.pop(),o.pruned=!1);o.iterators.length>0;){let i=o.iterators[o.iterators.length-1].next();if(i.done)o.iterators.pop();else return o.iterators.push(r(i.value)[Symbol.iterator]()),i}return St})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},aa;(function(t){function e(a){return a.reduce((i,s)=>i+s,0)}t.sum=e;function r(a){return a.reduce((i,s)=>i*s,0)}t.product=r;function n(a){return a.reduce((i,s)=>Math.min(i,s))}t.min=n;function o(a){return a.reduce((i,s)=>Math.max(i,s))}t.max=o})(aa||(aa={}));function wo(t){return new gr(t,e=>Ft(e)?e.content:[],{includeRoot:!0})}function pf(t){return wo(t).filter(Er)}function ff(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function ia(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function Ao(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var pn;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(pn||(pn={}));function Xv(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return pn.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return pn.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?pn.Inside:r?pn.OverlapBack:pn.OverlapFront}function Fu(t,e){return Xv(t,e)>pn.After}var Wu=/^[\w\p{L}]$/u;function pt(t,e,r=Wu){if(t){if(e>0){let n=e-t.offset,o=t.text.charAt(n);r.test(o)||e--}return Gu(t,e)}}function hf(t,e){if(t){let r=Qv(t,!0);if(r&&df(r,e))return r;if(Li(t)){let n=t.content.findIndex(o=>!o.hidden);for(let o=n-1;o>=0;o--){let a=t.content[o];if(df(a,e))return a}}}}function df(t,e){return Er(t)&&e.includes(t.tokenType.name)}function Gu(t,e){if(Er(t))return t;if(Ft(t)){let r=Yv(t,e,!1);if(r)return Gu(r,e)}}function Fi(t,e){if(Er(t))return t;if(Ft(t)){let r=Yv(t,e,!0);if(r)return Fi(r,e)}}function Yv(t,e,r){let n=0,o=t.content.length-1,a;for(;n<=o;){let i=Math.floor((n+o)/2),s=t.content[i];if(s.offset<=e&&s.end>e)return s;s.end<=e?(a=r?s:void 0,n=i+1):o=i-1}return a}function Qv(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function yf(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),o=r.content.length-1;for(;n<o;){n++;let a=r.content[n];if(e||!a.hidden)return a}t=r}}function aP(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.container;){let o=t.container,a=n??o.content.indexOf(t);if(a===0?(t=o,n=void 0):(n=a-1,t=o.content[n]),t.range.start.line!==e)break;r=t}return r}function gf(t,e){let r=iP(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function iP(t,e){let r=Vv(t),n=Vv(e),o;for(let a=0;a<r.length&&a<n.length;a++){let i=r[a],s=n[a];if(i.parent===s.parent)o={parent:i.parent,a:i.index,b:s.index};else break}return o}function Vv(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}var al={};Dn(al,{findAssignment:()=>Eh,findNameAssignment:()=>ol,findNodeForKeyword:()=>fa,findNodeForProperty:()=>On,findNodesForKeyword:()=>nl,findNodesForKeywordInternal:()=>Ph,findNodesForProperty:()=>pa,getActionAtElement:()=>cw,getActionType:()=>pw,getAllReachableRules:()=>Xi,getCrossReferenceTerminal:()=>Yi,getEntryRule:()=>Vi,getExplicitRuleType:()=>Po,getHiddenRules:()=>sw,getRuleType:()=>Dh,getTypeName:()=>hn,isArrayCardinality:()=>Nh,isArrayOperator:()=>RP,isCommentTerminal:()=>$h,isDataType:()=>$P,isDataTypeRule:()=>Qi,isOptionalCardinality:()=>Io,terminalRegex:()=>zn});var So=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function Mn(t){throw new Error("Error! The input value was not handled.")}var Co={};Dn(Co,{AbstractElement:()=>vf,AbstractRule:()=>Wi,AbstractType:()=>Gi,Action:()=>Uf,Alternatives:()=>jf,ArrayLiteral:()=>wf,ArrayType:()=>Af,Assignment:()=>Vf,BooleanLiteral:()=>Tf,CharacterRange:()=>Xf,Condition:()=>Bu,Conjunction:()=>xf,CrossReference:()=>Qf,Disjunction:()=>kf,EndOfFile:()=>Jf,Grammar:()=>$f,GrammarImport:()=>Zv,Group:()=>eh,InferredType:()=>If,Interface:()=>Pf,Keyword:()=>th,LangiumGrammarAstReflection:()=>sa,LangiumGrammarTerminals:()=>sP,NamedArgument:()=>ew,NegatedToken:()=>rh,Negation:()=>Ef,NumberLiteral:()=>Df,Parameter:()=>_f,ParameterReference:()=>Mf,ParserRule:()=>zf,ReferenceType:()=>Kf,RegexToken:()=>oh,ReturnType:()=>tw,RuleCall:()=>ih,SimpleType:()=>Wf,StringLiteral:()=>Gf,TerminalAlternatives:()=>sh,TerminalGroup:()=>lh,TerminalRule:()=>Uu,TerminalRuleCall:()=>dh,Type:()=>Hf,TypeAttribute:()=>rw,TypeDefinition:()=>mf,UnionType:()=>Bf,UnorderedGroup:()=>ph,UntilToken:()=>fh,ValueLiteral:()=>qu,Wildcard:()=>yh,isAbstractElement:()=>To,isAbstractRule:()=>uP,isAbstractType:()=>lP,isAction:()=>Nr,isAlternatives:()=>ua,isArrayLiteral:()=>hP,isArrayType:()=>Sf,isAssignment:()=>It,isBooleanLiteral:()=>Cf,isCharacterRange:()=>Yf,isCondition:()=>cP,isConjunction:()=>bf,isCrossReference:()=>Dr,isDisjunction:()=>Rf,isEndOfFile:()=>Zf,isFeatureName:()=>dP,isGrammar:()=>yP,isGrammarImport:()=>gP,isGroup:()=>mr,isInferredType:()=>ju,isInterface:()=>Vu,isKeyword:()=>Tt,isNamedArgument:()=>mP,isNegatedToken:()=>nh,isNegation:()=>Nf,isNumberLiteral:()=>vP,isParameter:()=>wP,isParameterReference:()=>Of,isParserRule:()=>qe,isPrimitiveType:()=>Jv,isReferenceType:()=>Lf,isRegexToken:()=>ah,isReturnType:()=>Ff,isRuleCall:()=>Qt,isSimpleType:()=>Xu,isStringLiteral:()=>AP,isTerminalAlternatives:()=>uh,isTerminalGroup:()=>ch,isTerminalRule:()=>Yt,isTerminalRuleCall:()=>Yu,isType:()=>Hi,isTypeAttribute:()=>SP,isTypeDefinition:()=>pP,isUnionType:()=>qf,isUnorderedGroup:()=>la,isUntilToken:()=>hh,isValueLiteral:()=>fP,isWildcard:()=>gh,reflection:()=>X});var sP={ID:/\^?[_a-zA-Z][\w_]*/,STRING:/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,NUMBER:/NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,RegexLiteral:/\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,WS:/\s+/,ML_COMMENT:/\/\*[\s\S]*?\*\//,SL_COMMENT:/\/\/[^\n\r]*/},Wi="AbstractRule";function uP(t){return X.isInstance(t,Wi)}var Gi="AbstractType";function lP(t){return X.isInstance(t,Gi)}var Bu="Condition";function cP(t){return X.isInstance(t,Bu)}function dP(t){return Jv(t)||t==="current"||t==="entry"||t==="extends"||t==="false"||t==="fragment"||t==="grammar"||t==="hidden"||t==="import"||t==="interface"||t==="returns"||t==="terminal"||t==="true"||t==="type"||t==="infer"||t==="infers"||t==="with"||typeof t=="string"&&/\^?[_a-zA-Z][\w_]*/.test(t)}function Jv(t){return t==="string"||t==="number"||t==="boolean"||t==="Date"||t==="bigint"}var mf="TypeDefinition";function pP(t){return X.isInstance(t,mf)}var qu="ValueLiteral";function fP(t){return X.isInstance(t,qu)}var vf="AbstractElement";function To(t){return X.isInstance(t,vf)}var wf="ArrayLiteral";function hP(t){return X.isInstance(t,wf)}var Af="ArrayType";function Sf(t){return X.isInstance(t,Af)}var Tf="BooleanLiteral";function Cf(t){return X.isInstance(t,Tf)}var xf="Conjunction";function bf(t){return X.isInstance(t,xf)}var kf="Disjunction";function Rf(t){return X.isInstance(t,kf)}var $f="Grammar";function yP(t){return X.isInstance(t,$f)}var Zv="GrammarImport";function gP(t){return X.isInstance(t,Zv)}var If="InferredType";function ju(t){return X.isInstance(t,If)}var Pf="Interface";function Vu(t){return X.isInstance(t,Pf)}var ew="NamedArgument";function mP(t){return X.isInstance(t,ew)}var Ef="Negation";function Nf(t){return X.isInstance(t,Ef)}var Df="NumberLiteral";function vP(t){return X.isInstance(t,Df)}var _f="Parameter";function wP(t){return X.isInstance(t,_f)}var Mf="ParameterReference";function Of(t){return X.isInstance(t,Mf)}var zf="ParserRule";function qe(t){return X.isInstance(t,zf)}var Kf="ReferenceType";function Lf(t){return X.isInstance(t,Kf)}var tw="ReturnType";function Ff(t){return X.isInstance(t,tw)}var Wf="SimpleType";function Xu(t){return X.isInstance(t,Wf)}var Gf="StringLiteral";function AP(t){return X.isInstance(t,Gf)}var Uu="TerminalRule";function Yt(t){return X.isInstance(t,Uu)}var Hf="Type";function Hi(t){return X.isInstance(t,Hf)}var rw="TypeAttribute";function SP(t){return X.isInstance(t,rw)}var Bf="UnionType";function qf(t){return X.isInstance(t,Bf)}var Uf="Action";function Nr(t){return X.isInstance(t,Uf)}var jf="Alternatives";function ua(t){return X.isInstance(t,jf)}var Vf="Assignment";function It(t){return X.isInstance(t,Vf)}var Xf="CharacterRange";function Yf(t){return X.isInstance(t,Xf)}var Qf="CrossReference";function Dr(t){return X.isInstance(t,Qf)}var Jf="EndOfFile";function Zf(t){return X.isInstance(t,Jf)}var eh="Group";function mr(t){return X.isInstance(t,eh)}var th="Keyword";function Tt(t){return X.isInstance(t,th)}var rh="NegatedToken";function nh(t){return X.isInstance(t,rh)}var oh="RegexToken";function ah(t){return X.isInstance(t,oh)}var ih="RuleCall";function Qt(t){return X.isInstance(t,ih)}var sh="TerminalAlternatives";function uh(t){return X.isInstance(t,sh)}var lh="TerminalGroup";function ch(t){return X.isInstance(t,lh)}var dh="TerminalRuleCall";function Yu(t){return X.isInstance(t,dh)}var ph="UnorderedGroup";function la(t){return X.isInstance(t,ph)}var fh="UntilToken";function hh(t){return X.isInstance(t,fh)}var yh="Wildcard";function gh(t){return X.isInstance(t,yh)}var sa=class extends mo{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayLiteral","ArrayType","Assignment","BooleanLiteral","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","EndOfFile","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","NamedArgument","NegatedToken","Negation","NumberLiteral","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","StringLiteral","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","ValueLiteral","Wildcard"]}computeIsSubtype(e,r){switch(e){case Uf:case jf:case Vf:case Xf:case Qf:case Jf:case eh:case th:case rh:case oh:case ih:case sh:case lh:case dh:case ph:case fh:case yh:return this.isSubtype(vf,r);case wf:case Df:case Gf:return this.isSubtype(qu,r);case Af:case Kf:case Wf:case Bf:return this.isSubtype(mf,r);case Tf:return this.isSubtype(Bu,r)||this.isSubtype(qu,r);case xf:case kf:case Ef:case Mf:return this.isSubtype(Bu,r);case If:case Pf:case Hf:return this.isSubtype(Gi,r);case zf:return this.isSubtype(Wi,r)||this.isSubtype(Gi,r);case Uu:return this.isSubtype(Wi,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return Gi;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return Wi;case"Grammar:usedGrammars":return $f;case"NamedArgument:parameter":case"ParameterReference:parameter":return _f;case"TerminalRuleCall:rule":return Uu;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AbstractElement":return{name:"AbstractElement",properties:[{name:"cardinality"},{name:"lookahead"}]};case"ArrayLiteral":return{name:"ArrayLiteral",properties:[{name:"elements",defaultValue:[]}]};case"ArrayType":return{name:"ArrayType",properties:[{name:"elementType"}]};case"BooleanLiteral":return{name:"BooleanLiteral",properties:[{name:"true",defaultValue:!1}]};case"Conjunction":return{name:"Conjunction",properties:[{name:"left"},{name:"right"}]};case"Disjunction":return{name:"Disjunction",properties:[{name:"left"},{name:"right"}]};case"Grammar":return{name:"Grammar",properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case"GrammarImport":return{name:"GrammarImport",properties:[{name:"path"}]};case"InferredType":return{name:"InferredType",properties:[{name:"name"}]};case"Interface":return{name:"Interface",properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case"NamedArgument":return{name:"NamedArgument",properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case"Negation":return{name:"Negation",properties:[{name:"value"}]};case"NumberLiteral":return{name:"NumberLiteral",properties:[{name:"value"}]};case"Parameter":return{name:"Parameter",properties:[{name:"name"}]};case"ParameterReference":return{name:"ParameterReference",properties:[{name:"parameter"}]};case"ParserRule":return{name:"ParserRule",properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case"ReferenceType":return{name:"ReferenceType",properties:[{name:"referenceType"}]};case"ReturnType":return{name:"ReturnType",properties:[{name:"name"}]};case"SimpleType":return{name:"SimpleType",properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case"StringLiteral":return{name:"StringLiteral",properties:[{name:"value"}]};case"TerminalRule":return{name:"TerminalRule",properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case"Type":return{name:"Type",properties:[{name:"name"},{name:"type"}]};case"TypeAttribute":return{name:"TypeAttribute",properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case"UnionType":return{name:"UnionType",properties:[{name:"types",defaultValue:[]}]};case"Action":return{name:"Action",properties:[{name:"feature"},{name:"inferredType"},{name:"operator"},{name:"type"}]};case"Alternatives":return{name:"Alternatives",properties:[{name:"elements",defaultValue:[]}]};case"Assignment":return{name:"Assignment",properties:[{name:"feature"},{name:"operator"},{name:"terminal"}]};case"CharacterRange":return{name:"CharacterRange",properties:[{name:"left"},{name:"right"}]};case"CrossReference":return{name:"CrossReference",properties:[{name:"deprecatedSyntax",defaultValue:!1},{name:"terminal"},{name:"type"}]};case"Group":return{name:"Group",properties:[{name:"elements",defaultValue:[]},{name:"guardCondition"}]};case"Keyword":return{name:"Keyword",properties:[{name:"value"}]};case"NegatedToken":return{name:"NegatedToken",properties:[{name:"terminal"}]};case"RegexToken":return{name:"RegexToken",properties:[{name:"regex"}]};case"RuleCall":return{name:"RuleCall",properties:[{name:"arguments",defaultValue:[]},{name:"rule"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",properties:[{name:"elements",defaultValue:[]}]};case"TerminalGroup":return{name:"TerminalGroup",properties:[{name:"elements",defaultValue:[]}]};case"TerminalRuleCall":return{name:"TerminalRuleCall",properties:[{name:"rule"}]};case"UnorderedGroup":return{name:"UnorderedGroup",properties:[{name:"elements",defaultValue:[]}]};case"UntilToken":return{name:"UntilToken",properties:[{name:"terminal"}]};default:return{name:e,properties:[]}}}},X=new sa;var Ju={};Dn(Ju,{assignMandatoryProperties:()=>Bi,copyAstNode:()=>vh,findLocalReferences:()=>CP,findRootNode:()=>nw,getContainerOfType:()=>cr,getDocument:()=>Ke,hasContainerOfType:()=>TP,linkContentToContainer:()=>Qu,streamAllContents:()=>Jt,streamAst:()=>Zt,streamContents:()=>xo,streamReferences:()=>ca});function Qu(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,o)=>{Ie(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=o)}):Ie(r)&&(r.$container=t,r.$containerProperty=e))}function cr(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function TP(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}function Ke(t){let r=nw(t).$document;if(!r)throw new Error("AST node has no document.");return r}function nw(t){for(;t.$container;)t=t.$container;return t}function xo(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e?.range;return new Wt(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let o=n.keys[n.keyIndex];if(!o.startsWith("$")){let a=t[o];if(Ie(a)){if(n.keyIndex++,mh(a,r))return{done:!1,value:a}}else if(Array.isArray(a)){for(;n.arrayIndex<a.length;){let i=n.arrayIndex++,s=a[i];if(Ie(s)&&mh(s,r))return{done:!1,value:s}}n.arrayIndex=0}}n.keyIndex++}return St})}function Jt(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new gr(t,r=>xo(r,e))}function Zt(t,e){if(t){if(e?.range&&!mh(t,e.range))return new gr(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new gr(t,r=>xo(r,e),{includeRoot:!0})}function mh(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?Fu(n,e):!1}function ca(t){return new Wt(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(At(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let o=e.arrayIndex++,a=n[o];if(At(a))return{done:!1,value:{reference:a,container:t,property:r,index:o}}}e.arrayIndex=0}}e.keyIndex++}return St})}function CP(t,e=Ke(t).parseResult.value){let r=[];return Zt(e).forEach(n=>{ca(n).forEach(o=>{o.reference.ref===t&&r.push(o.reference)})}),te(r)}function Bi(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let o of r.properties)o.defaultValue!==void 0&&n[o.name]===void 0&&(n[o.name]=ow(o.defaultValue))}function ow(t){return Array.isArray(t)?[...t.map(ow)]:t}function vh(t,e){let r={$type:t.$type};for(let[n,o]of Object.entries(t))if(!n.startsWith("$"))if(Ie(o))r[n]=vh(o,e);else if(At(o))r[n]=e(r,n,o.$refNode,o.$refText);else if(Array.isArray(o)){let a=[];for(let i of o)Ie(i)?a.push(vh(i,e)):At(i)?a.push(e(r,n,i.$refNode,i.$refText)):a.push(i);r[n]=a}else r[n]=o;return Qu(r),r}var rl={};Dn(rl,{NEWLINE_REGEXP:()=>Th,escapeRegExp:()=>$o,getCaseInsensitivePattern:()=>xh,getTerminalParts:()=>kP,isMultilineComment:()=>Ch,isWhitespace:()=>tl,partialMatches:()=>bh,partialRegExp:()=>iw});function U(t){return t.charCodeAt(0)}function Zu(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function da(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function bo(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function qi(){throw Error("Internal Error - Should never get here!")}function wh(t){return t.type==="Character"}var Ui=[];for(let t=U("0");t<=U("9");t++)Ui.push(t);var ji=[U("_")].concat(Ui);for(let t=U("a");t<=U("z");t++)ji.push(t);for(let t=U("A");t<=U("Z");t++)ji.push(t);var Ah=[U(" "),U("\f"),U(`
`),U("\r"),U("	"),U("\v"),U("	"),U("\xA0"),U("\u1680"),U("\u2000"),U("\u2001"),U("\u2002"),U("\u2003"),U("\u2004"),U("\u2005"),U("\u2006"),U("\u2007"),U("\u2008"),U("\u2009"),U("\u200A"),U("\u2028"),U("\u2029"),U("\u202F"),U("\u205F"),U("\u3000"),U("\uFEFF")];var xP=/[0-9a-fA-F]/,el=/[0-9]/,bP=/[1-9]/,ko=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":da(n,"global");break;case"i":da(n,"ignoreCase");break;case"m":da(n,"multiLine");break;case"u":da(n,"unicode");break;case"y":da(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}bo(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return qi()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let o=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:o,atMost:o};break;case",":let a;this.isDigit()?(a=this.integerIncludingZero(),r={atLeast:o,atMost:a}):r={atLeast:o,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;bo(r);break}if(!(e===!0&&r===void 0)&&bo(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),bo(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):qi()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[U(`
`),U("\r"),U("\u2028"),U("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=Ui;break;case"D":e=Ui,r=!0;break;case"s":e=Ah;break;case"S":e=Ah,r=!0;break;case"w":e=ji;break;case"W":e=ji,r=!0;break}return bo(e)?{type:"Set",value:e,complement:r}:qi()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=U("\f");break;case"n":e=U(`
`);break;case"r":e=U("\r");break;case"t":e=U("	");break;case"v":e=U("\v");break}return bo(e)?{type:"Character",value:e}:qi()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:U("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:U(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:U(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),o=n.type==="Character";if(wh(n)&&this.isRangeDash()){this.consumeChar("-");let a=this.classAtom(),i=a.type==="Character";if(wh(a)){if(a.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:a.value})}else Zu(n.value,e),e.push(U("-")),Zu(a.value,e)}else Zu(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:U("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(bP.test(e)===!1)throw Error("Expecting a positive integer");for(;el.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(el.test(e)===!1)throw Error("Expecting an integer");for(;el.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:U(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return el.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let o=0;o<e;o++){let a=this.popChar();if(xP.test(a)===!1)throw Error("Expecting a HexDecimal digits");r+=a}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var Hr=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(o=>{this.visit(o)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var Th=/\r?\n/gm,aw=new ko,Sh=class extends Hr{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let n=$o(r);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},Ro=new Sh;function kP(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=aw.pattern(t),r=[];for(let n of e.value.value)Ro.reset(t),Ro.visit(n),r.push({start:Ro.startRegexp,end:Ro.endRegex});return r}catch{return[]}}function Ch(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),Ro.reset(t),Ro.visit(aw.pattern(t)),Ro.multiline}catch{return!1}}function tl(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function $o(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xh(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:$o(e)).join("")}function bh(t,e){let r=iw(t),n=e.match(r);return!!n&&n[0].length>0}function iw(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function o(){let a="",i;function s(l){a+=r.substr(n,l),n+=l}function u(l){a+="(?:"+r.substr(n,l)+"|$)",n+=l}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":u(3);break;case"x":u(4);break;case"u":e.unicode?r[n+2]==="{"?u(r.indexOf("}",n)-n+1):u(6):u(2);break;case"p":case"P":e.unicode?u(r.indexOf("}",n)-n+1):u(2);break;case"k":u(r.indexOf(">",n)-n+1);break;default:u(2);break}break;case"[":i=/\[(?:\\.|.)*?\]/g,i.lastIndex=n,i=i.exec(r)||[],u(i[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":s(1);break;case"{":i=/\{\d+,?\d*\}/g,i.lastIndex=n,i=i.exec(r),i?s(i[0].length):u(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":a+="(?:",n+=3,a+=o()+"|$)";break;case"=":a+="(?=",n+=3,a+=o()+")";break;case"!":i=n,n+=3,o(),a+=r.substr(i,n-i);break;case"<":switch(r[n+3]){case"=":case"!":i=n,n+=4,o(),a+=r.substr(i,n-i);break;default:s(r.indexOf(">",n)-n+1),a+=o()+"|$)";break}break}else s(1),a+=o()+"|$)";break;case")":return++n,a;default:u(1);break}return a}return new RegExp(o(),t.flags)}function Vi(t){return t.rules.find(e=>qe(e)&&e.entry)}function sw(t){return t.rules.filter(e=>Yt(e)&&e.hidden)}function Xi(t,e){let r=new Set,n=Vi(t);if(!n)return new Set(t.rules);let o=[n].concat(sw(t));for(let i of o)uw(i,r,e);let a=new Set;for(let i of t.rules)(r.has(i.name)||Yt(i)&&i.hidden)&&a.add(i);return a}function uw(t,e,r){e.add(t.name),Jt(t).forEach(n=>{if(Qt(n)||r&&Yu(n)){let o=n.rule.ref;o&&!e.has(o.name)&&uw(o,e,r)}})}function Yi(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=ol(t.type.ref);return e?.terminal}}function $h(t){return t.hidden&&!zn(t).test(" ")}function pa(t,e){return!t||!e?[]:Ih(t,e,t.astNode,!0)}function On(t,e,r){if(!t||!e)return;let n=Ih(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Ih(t,e,r,n){if(!n){let o=cr(t.grammarSource,It);if(o&&o.feature===e)return[t]}return Ft(t)&&t.astNode===r?t.content.flatMap(o=>Ih(o,e,r,!1)):[]}function nl(t,e){return t?Ph(t,e,t?.astNode):[]}function fa(t,e,r){if(!t)return;let n=Ph(t,e,t?.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Ph(t,e,r){if(t.astNode!==r)return[];if(Tt(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=wo(t).iterator(),o,a=[];do if(o=n.next(),!o.done){let i=o.value;i.astNode===r?Tt(i.grammarSource)&&i.grammarSource.value===e&&a.push(i):n.prune()}while(!o.done);return a}function Eh(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=cr(t.grammarSource,It);if(n)return n;t=t.container}}function ol(t){let e=t;return ju(e)&&(Nr(e.$container)?e=e.$container.$container:qe(e.$container)?e=e.$container:Mn(e.$container)),lw(t,e,new Map)}function lw(t,e,r){var n;function o(a,i){let s;return cr(a,It)||(s=lw(i,i,r)),r.set(t,s),s}if(r.has(t))return r.get(t);r.set(t,void 0);for(let a of Jt(e)){if(It(a)&&a.feature.toLowerCase()==="name")return r.set(t,a),a;if(Qt(a)&&qe(a.rule.ref))return o(a,a.rule.ref);if(Xu(a)&&(!((n=a.typeRef)===null||n===void 0)&&n.ref))return o(a,a.typeRef.ref)}}function cw(t){let e=t.$container;if(mr(e)){let r=e.elements,n=r.indexOf(t);for(let o=n-1;o>=0;o--){let a=r[o];if(Nr(a))return a;{let i=Jt(r[o]).find(Nr);if(i)return i}}}if(To(e))return cw(e)}function Io(t,e){return t==="?"||t==="*"||mr(e)&&!!e.guardCondition}function Nh(t){return t==="*"||t==="+"}function RP(t){return t==="+="}function Qi(t){return dw(t,new Set)}function dw(t,e){if(e.has(t))return!0;e.add(t);for(let r of Jt(t))if(Qt(r)){if(!r.rule.ref||qe(r.rule.ref)&&!dw(r.rule.ref,e))return!1}else{if(It(r))return!1;if(Nr(r))return!1}return!!t.definition}function $P(t){return Rh(t.type,new Set)}function Rh(t,e){if(e.has(t))return!0;if(e.add(t),Sf(t))return!1;if(Lf(t))return!1;if(qf(t))return t.types.every(r=>Rh(r,e));if(Xu(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return Hi(r)?Rh(r.type,e):!1}else return!1}else return!1}function Po(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(qe(e))return e.name;if(Vu(e)||Hi(e))return e.name}}}function hn(t){var e;if(qe(t))return Qi(t)?t.name:(e=Po(t))!==null&&e!==void 0?e:t.name;if(Vu(t)||Hi(t)||Ff(t))return t.name;if(Nr(t)){let r=pw(t);if(r)return r}else if(ju(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function pw(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return hn(t.type.ref)}function Dh(t){var e,r,n;return Yt(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Qi(t)?t.name:(n=Po(t))!==null&&n!==void 0?n:t.name}function zn(t){let e={s:!1,i:!1,u:!1},r=ha(t.definition,e),n=Object.entries(e).filter(([,o])=>o).map(([o])=>o).join("");return new RegExp(r,n)}var _h=/[\s\S]/.source;function ha(t,e){if(uh(t))return IP(t);if(ch(t))return PP(t);if(Yf(t))return DP(t);if(Yu(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return fn(ha(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(nh(t))return NP(t);if(hh(t))return EP(t);if(ah(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),o=t.regex.substring(r+1);return e&&(e.i=o.includes("i"),e.s=o.includes("s"),e.u=o.includes("u")),fn(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(gh(t))return fn(_h,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t?.$type}`)}}}function IP(t){return fn(t.elements.map(e=>ha(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function PP(t){return fn(t.elements.map(e=>ha(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function EP(t){return fn(`${_h}*?${ha(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function NP(t){return fn(`(?!${ha(t.terminal)})${_h}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function DP(t){return t.right?fn(`[${kh(t.left)}-${kh(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):fn(kh(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function kh(t){return $o(t.value)}function fn(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function Mh(t){let e=[],r=t.Grammar;for(let n of r.rules)Yt(n)&&$h(n)&&Ch(zn(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:Wu}}var _P=typeof global=="object"&&global&&global.Object===Object&&global,il=_P;var MP=typeof self=="object"&&self&&self.Object===Object&&self,OP=il||MP||Function("return this")(),rt=OP;var zP=rt.Symbol,ft=zP;var fw=Object.prototype,KP=fw.hasOwnProperty,LP=fw.toString,Ji=ft?ft.toStringTag:void 0;function FP(t){var e=KP.call(t,Ji),r=t[Ji];try{t[Ji]=void 0;var n=!0}catch{}var o=LP.call(t);return n&&(e?t[Ji]=r:delete t[Ji]),o}var hw=FP;var WP=Object.prototype,GP=WP.toString;function HP(t){return GP.call(t)}var yw=HP;var BP="[object Null]",qP="[object Undefined]",gw=ft?ft.toStringTag:void 0;function UP(t){return t==null?t===void 0?qP:BP:gw&&gw in Object(t)?hw(t):yw(t)}var Gt=UP;function jP(t){return t!=null&&typeof t=="object"}var Ze=jP;var VP="[object Symbol]";function XP(t){return typeof t=="symbol"||Ze(t)&&Gt(t)==VP}var Br=XP;function YP(t,e){for(var r=-1,n=t==null?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var qr=YP;var QP=Array.isArray,F=QP;var JP=1/0,mw=ft?ft.prototype:void 0,vw=mw?mw.toString:void 0;function ww(t){if(typeof t=="string")return t;if(F(t))return qr(t,ww)+"";if(Br(t))return vw?vw.call(t):"";var e=t+"";return e=="0"&&1/t==-JP?"-0":e}var Aw=ww;var ZP=/\s/;function eE(t){for(var e=t.length;e--&&ZP.test(t.charAt(e)););return e}var Sw=eE;var tE=/^\s+/;function rE(t){return t&&t.slice(0,Sw(t)+1).replace(tE,"")}var Tw=rE;function nE(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Le=nE;var Cw=NaN,oE=/^[-+]0x[0-9a-f]+$/i,aE=/^0b[01]+$/i,iE=/^0o[0-7]+$/i,sE=parseInt;function uE(t){if(typeof t=="number")return t;if(Br(t))return Cw;if(Le(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Le(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Tw(t);var r=aE.test(t);return r||iE.test(t)?sE(t.slice(2),r?2:8):oE.test(t)?Cw:+t}var xw=uE;var bw=1/0,lE=17976931348623157e292;function cE(t){if(!t)return t===0?t:0;if(t=xw(t),t===bw||t===-bw){var e=t<0?-1:1;return e*lE}return t===t?t:0}var kw=cE;function dE(t){var e=kw(t),r=e%1;return e===e?r?e-r:e:0}var Ur=dE;function pE(t){return t}var er=pE;var fE="[object AsyncFunction]",hE="[object Function]",yE="[object GeneratorFunction]",gE="[object Proxy]";function mE(t){if(!Le(t))return!1;var e=Gt(t);return e==hE||e==yE||e==fE||e==gE}var Ht=mE;var vE=rt["__core-js_shared__"],sl=vE;var Rw=function(){var t=/[^.]+$/.exec(sl&&sl.keys&&sl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function wE(t){return!!Rw&&Rw in t}var $w=wE;var AE=Function.prototype,SE=AE.toString;function TE(t){if(t!=null){try{return SE.call(t)}catch{}try{return t+""}catch{}}return""}var yn=TE;var CE=/[\\^$.*+?()[\]{}|]/g,xE=/^\[object .+?Constructor\]$/,bE=Function.prototype,kE=Object.prototype,RE=bE.toString,$E=kE.hasOwnProperty,IE=RegExp("^"+RE.call($E).replace(CE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function PE(t){if(!Le(t)||$w(t))return!1;var e=Ht(t)?IE:xE;return e.test(yn(t))}var Iw=PE;function EE(t,e){return t?.[e]}var Pw=EE;function NE(t,e){var r=Pw(t,e);return Iw(r)?r:void 0}var tr=NE;var DE=tr(rt,"WeakMap"),ul=DE;var Ew=Object.create,_E=function(){function t(){}return function(e){if(!Le(e))return{};if(Ew)return Ew(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),Nw=_E;function ME(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var Dw=ME;function OE(){}var Fe=OE;function zE(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var _w=zE;var KE=800,LE=16,FE=Date.now;function WE(t){var e=0,r=0;return function(){var n=FE(),o=LE-(n-r);if(r=n,o>0){if(++e>=KE)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var Mw=WE;function GE(t){return function(){return t}}var Ow=GE;var HE=function(){try{var t=tr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ya=HE;var BE=ya?function(t,e){return ya(t,"toString",{configurable:!0,enumerable:!1,value:Ow(e),writable:!0})}:er,zw=BE;var qE=Mw(zw),Kw=qE;function UE(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var ll=UE;function jE(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var cl=jE;function VE(t){return t!==t}var Lw=VE;function XE(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}var Fw=XE;function YE(t,e,r){return e===e?Fw(t,e,r):cl(t,Lw,r)}var ga=YE;function QE(t,e){var r=t==null?0:t.length;return!!r&&ga(t,e,0)>-1}var dl=QE;var JE=9007199254740991,ZE=/^(?:0|[1-9]\d*)$/;function eN(t,e){var r=typeof t;return e=e??JE,!!e&&(r=="number"||r!="symbol"&&ZE.test(t))&&t>-1&&t%1==0&&t<e}var Kn=eN;function tN(t,e,r){e=="__proto__"&&ya?ya(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var ma=tN;function rN(t,e){return t===e||t!==t&&e!==e}var jr=rN;var nN=Object.prototype,oN=nN.hasOwnProperty;function aN(t,e,r){var n=t[e];(!(oN.call(t,e)&&jr(n,r))||r===void 0&&!(e in t))&&ma(t,e,r)}var Ln=aN;function iN(t,e,r,n){var o=!r;r||(r={});for(var a=-1,i=e.length;++a<i;){var s=e[a],u=n?n(r[s],t[s],s,r,t):void 0;u===void 0&&(u=t[s]),o?ma(r,s,u):Ln(r,s,u)}return r}var Vr=iN;var Ww=Math.max;function sN(t,e,r){return e=Ww(e===void 0?t.length-1:e,0),function(){for(var n=arguments,o=-1,a=Ww(n.length-e,0),i=Array(a);++o<a;)i[o]=n[e+o];o=-1;for(var s=Array(e+1);++o<e;)s[o]=n[o];return s[e]=r(i),Dw(t,this,s)}}var Gw=sN;function uN(t,e){return Kw(Gw(t,e,er),t+"")}var va=uN;var lN=9007199254740991;function cN(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=lN}var wa=cN;function dN(t){return t!=null&&wa(t.length)&&!Ht(t)}var nt=dN;function pN(t,e,r){if(!Le(r))return!1;var n=typeof e;return(n=="number"?nt(r)&&Kn(e,r.length):n=="string"&&e in r)?jr(r[e],t):!1}var Fn=pN;function fN(t){return va(function(e,r){var n=-1,o=r.length,a=o>1?r[o-1]:void 0,i=o>2?r[2]:void 0;for(a=t.length>3&&typeof a=="function"?(o--,a):void 0,i&&Fn(r[0],r[1],i)&&(a=o<3?void 0:a,o=1),e=Object(e);++n<o;){var s=r[n];s&&t(e,s,n,a)}return e})}var Hw=fN;var hN=Object.prototype;function yN(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||hN;return t===r}var Xr=yN;function gN(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Bw=gN;var mN="[object Arguments]";function vN(t){return Ze(t)&&Gt(t)==mN}var Oh=vN;var qw=Object.prototype,wN=qw.hasOwnProperty,AN=qw.propertyIsEnumerable,SN=Oh(function(){return arguments}())?Oh:function(t){return Ze(t)&&wN.call(t,"callee")&&!AN.call(t,"callee")},Wn=SN;function TN(){return!1}var Uw=TN;var Xw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jw=Xw&&typeof module=="object"&&module&&!module.nodeType&&module,CN=jw&&jw.exports===Xw,Vw=CN?rt.Buffer:void 0,xN=Vw?Vw.isBuffer:void 0,bN=xN||Uw,gn=bN;var kN="[object Arguments]",RN="[object Array]",$N="[object Boolean]",IN="[object Date]",PN="[object Error]",EN="[object Function]",NN="[object Map]",DN="[object Number]",_N="[object Object]",MN="[object RegExp]",ON="[object Set]",zN="[object String]",KN="[object WeakMap]",LN="[object ArrayBuffer]",FN="[object DataView]",WN="[object Float32Array]",GN="[object Float64Array]",HN="[object Int8Array]",BN="[object Int16Array]",qN="[object Int32Array]",UN="[object Uint8Array]",jN="[object Uint8ClampedArray]",VN="[object Uint16Array]",XN="[object Uint32Array]",Pe={};Pe[WN]=Pe[GN]=Pe[HN]=Pe[BN]=Pe[qN]=Pe[UN]=Pe[jN]=Pe[VN]=Pe[XN]=!0;Pe[kN]=Pe[RN]=Pe[LN]=Pe[$N]=Pe[FN]=Pe[IN]=Pe[PN]=Pe[EN]=Pe[NN]=Pe[DN]=Pe[_N]=Pe[MN]=Pe[ON]=Pe[zN]=Pe[KN]=!1;function YN(t){return Ze(t)&&wa(t.length)&&!!Pe[Gt(t)]}var Yw=YN;function QN(t){return function(e){return t(e)}}var Yr=QN;var Qw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Zi=Qw&&typeof module=="object"&&module&&!module.nodeType&&module,JN=Zi&&Zi.exports===Qw,zh=JN&&il.process,ZN=function(){try{var t=Zi&&Zi.require&&Zi.require("util").types;return t||zh&&zh.binding&&zh.binding("util")}catch{}}(),vr=ZN;var Jw=vr&&vr.isTypedArray,eD=Jw?Yr(Jw):Yw,Aa=eD;var tD=Object.prototype,rD=tD.hasOwnProperty;function nD(t,e){var r=F(t),n=!r&&Wn(t),o=!r&&!n&&gn(t),a=!r&&!n&&!o&&Aa(t),i=r||n||o||a,s=i?Bw(t.length,String):[],u=s.length;for(var l in t)(e||rD.call(t,l))&&!(i&&(l=="length"||o&&(l=="offset"||l=="parent")||a&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Kn(l,u)))&&s.push(l);return s}var pl=nD;function oD(t,e){return function(r){return t(e(r))}}var fl=oD;var aD=fl(Object.keys,Object),Zw=aD;var iD=Object.prototype,sD=iD.hasOwnProperty;function uD(t){if(!Xr(t))return Zw(t);var e=[];for(var r in Object(t))sD.call(t,r)&&r!="constructor"&&e.push(r);return e}var hl=uD;function lD(t){return nt(t)?pl(t):hl(t)}var Se=lD;var cD=Object.prototype,dD=cD.hasOwnProperty,pD=Hw(function(t,e){if(Xr(e)||nt(e)){Vr(e,Se(e),t);return}for(var r in e)dD.call(e,r)&&Ln(t,r,e[r])}),Ct=pD;function fD(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var eA=fD;var hD=Object.prototype,yD=hD.hasOwnProperty;function gD(t){if(!Le(t))return eA(t);var e=Xr(t),r=[];for(var n in t)n=="constructor"&&(e||!yD.call(t,n))||r.push(n);return r}var tA=gD;function mD(t){return nt(t)?pl(t,!0):tA(t)}var Gn=mD;var vD=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wD=/^\w*$/;function AD(t,e){if(F(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Br(t)?!0:wD.test(t)||!vD.test(t)||e!=null&&t in Object(e)}var Sa=AD;var SD=tr(Object,"create"),mn=SD;function TD(){this.__data__=mn?mn(null):{},this.size=0}var rA=TD;function CD(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var nA=CD;var xD="__lodash_hash_undefined__",bD=Object.prototype,kD=bD.hasOwnProperty;function RD(t){var e=this.__data__;if(mn){var r=e[t];return r===xD?void 0:r}return kD.call(e,t)?e[t]:void 0}var oA=RD;var $D=Object.prototype,ID=$D.hasOwnProperty;function PD(t){var e=this.__data__;return mn?e[t]!==void 0:ID.call(e,t)}var aA=PD;var ED="__lodash_hash_undefined__";function ND(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=mn&&e===void 0?ED:e,this}var iA=ND;function Ta(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ta.prototype.clear=rA;Ta.prototype.delete=nA;Ta.prototype.get=oA;Ta.prototype.has=aA;Ta.prototype.set=iA;var Kh=Ta;function DD(){this.__data__=[],this.size=0}var sA=DD;function _D(t,e){for(var r=t.length;r--;)if(jr(t[r][0],e))return r;return-1}var Hn=_D;var MD=Array.prototype,OD=MD.splice;function zD(t){var e=this.__data__,r=Hn(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():OD.call(e,r,1),--this.size,!0}var uA=zD;function KD(t){var e=this.__data__,r=Hn(e,t);return r<0?void 0:e[r][1]}var lA=KD;function LD(t){return Hn(this.__data__,t)>-1}var cA=LD;function FD(t,e){var r=this.__data__,n=Hn(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var dA=FD;function Ca(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ca.prototype.clear=sA;Ca.prototype.delete=uA;Ca.prototype.get=lA;Ca.prototype.has=cA;Ca.prototype.set=dA;var Bn=Ca;var WD=tr(rt,"Map"),qn=WD;function GD(){this.size=0,this.__data__={hash:new Kh,map:new(qn||Bn),string:new Kh}}var pA=GD;function HD(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var fA=HD;function BD(t,e){var r=t.__data__;return fA(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Un=BD;function qD(t){var e=Un(this,t).delete(t);return this.size-=e?1:0,e}var hA=qD;function UD(t){return Un(this,t).get(t)}var yA=UD;function jD(t){return Un(this,t).has(t)}var gA=jD;function VD(t,e){var r=Un(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var mA=VD;function xa(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}xa.prototype.clear=pA;xa.prototype.delete=hA;xa.prototype.get=yA;xa.prototype.has=gA;xa.prototype.set=mA;var Eo=xa;var XD="Expected a function";function Lh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(XD);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(Lh.Cache||Eo),r}Lh.Cache=Eo;var vA=Lh;var YD=500;function QD(t){var e=vA(t,function(n){return r.size===YD&&r.clear(),n}),r=e.cache;return e}var wA=QD;var JD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ZD=/\\(\\)?/g,e_=wA(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(JD,function(r,n,o,a){e.push(o?a.replace(ZD,"$1"):n||r)}),e}),AA=e_;function t_(t){return t==null?"":Aw(t)}var SA=t_;function r_(t,e){return F(t)?t:Sa(t,e)?[t]:AA(SA(t))}var jn=r_;var n_=1/0;function o_(t){if(typeof t=="string"||Br(t))return t;var e=t+"";return e=="0"&&1/t==-n_?"-0":e}var Qr=o_;function a_(t,e){e=jn(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Qr(e[r++])];return r&&r==n?t:void 0}var ba=a_;function i_(t,e,r){var n=t==null?void 0:ba(t,e);return n===void 0?r:n}var TA=i_;function s_(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}var ka=s_;var CA=ft?ft.isConcatSpreadable:void 0;function u_(t){return F(t)||Wn(t)||!!(CA&&t&&t[CA])}var xA=u_;function bA(t,e,r,n,o){var a=-1,i=t.length;for(r||(r=xA),o||(o=[]);++a<i;){var s=t[a];e>0&&r(s)?e>1?bA(s,e-1,r,n,o):ka(o,s):n||(o[o.length]=s)}return o}var Ra=bA;function l_(t){var e=t==null?0:t.length;return e?Ra(t,1):[]}var et=l_;var c_=fl(Object.getPrototypeOf,Object),yl=c_;function d_(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+e];return a}var gl=d_;function p_(t,e,r,n){var o=-1,a=t==null?0:t.length;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}var kA=p_;function f_(){this.__data__=new Bn,this.size=0}var RA=f_;function h_(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var $A=h_;function y_(t){return this.__data__.get(t)}var IA=y_;function g_(t){return this.__data__.has(t)}var PA=g_;var m_=200;function v_(t,e){var r=this.__data__;if(r instanceof Bn){var n=r.__data__;if(!qn||n.length<m_-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Eo(n)}return r.set(t,e),this.size=r.size,this}var EA=v_;function $a(t){var e=this.__data__=new Bn(t);this.size=e.size}$a.prototype.clear=RA;$a.prototype.delete=$A;$a.prototype.get=IA;$a.prototype.has=PA;$a.prototype.set=EA;var Vn=$a;function w_(t,e){return t&&Vr(e,Se(e),t)}var NA=w_;function A_(t,e){return t&&Vr(e,Gn(e),t)}var DA=A_;var zA=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_A=zA&&typeof module=="object"&&module&&!module.nodeType&&module,S_=_A&&_A.exports===zA,MA=S_?rt.Buffer:void 0,OA=MA?MA.allocUnsafe:void 0;function T_(t,e){if(e)return t.slice();var r=t.length,n=OA?OA(r):new t.constructor(r);return t.copy(n),n}var KA=T_;function C_(t,e){for(var r=-1,n=t==null?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}var Ia=C_;function x_(){return[]}var ml=x_;var b_=Object.prototype,k_=b_.propertyIsEnumerable,LA=Object.getOwnPropertySymbols,R_=LA?function(t){return t==null?[]:(t=Object(t),Ia(LA(t),function(e){return k_.call(t,e)}))}:ml,Pa=R_;function $_(t,e){return Vr(t,Pa(t),e)}var FA=$_;var I_=Object.getOwnPropertySymbols,P_=I_?function(t){for(var e=[];t;)ka(e,Pa(t)),t=yl(t);return e}:ml,vl=P_;function E_(t,e){return Vr(t,vl(t),e)}var WA=E_;function N_(t,e,r){var n=e(t);return F(t)?n:ka(n,r(t))}var wl=N_;function D_(t){return wl(t,Se,Pa)}var es=D_;function __(t){return wl(t,Gn,vl)}var Al=__;var M_=tr(rt,"DataView"),Sl=M_;var O_=tr(rt,"Promise"),Tl=O_;var z_=tr(rt,"Set"),Xn=z_;var GA="[object Map]",K_="[object Object]",HA="[object Promise]",BA="[object Set]",qA="[object WeakMap]",UA="[object DataView]",L_=yn(Sl),F_=yn(qn),W_=yn(Tl),G_=yn(Xn),H_=yn(ul),No=Gt;(Sl&&No(new Sl(new ArrayBuffer(1)))!=UA||qn&&No(new qn)!=GA||Tl&&No(Tl.resolve())!=HA||Xn&&No(new Xn)!=BA||ul&&No(new ul)!=qA)&&(No=function(t){var e=Gt(t),r=e==K_?t.constructor:void 0,n=r?yn(r):"";if(n)switch(n){case L_:return UA;case F_:return GA;case W_:return HA;case G_:return BA;case H_:return qA}return e});var _r=No;var B_=Object.prototype,q_=B_.hasOwnProperty;function U_(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&q_.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var jA=U_;var j_=rt.Uint8Array,Ea=j_;function V_(t){var e=new t.constructor(t.byteLength);return new Ea(e).set(new Ea(t)),e}var Na=V_;function X_(t,e){var r=e?Na(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var VA=X_;var Y_=/\w*$/;function Q_(t){var e=new t.constructor(t.source,Y_.exec(t));return e.lastIndex=t.lastIndex,e}var XA=Q_;var YA=ft?ft.prototype:void 0,QA=YA?YA.valueOf:void 0;function J_(t){return QA?Object(QA.call(t)):{}}var JA=J_;function Z_(t,e){var r=e?Na(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var ZA=Z_;var eM="[object Boolean]",tM="[object Date]",rM="[object Map]",nM="[object Number]",oM="[object RegExp]",aM="[object Set]",iM="[object String]",sM="[object Symbol]",uM="[object ArrayBuffer]",lM="[object DataView]",cM="[object Float32Array]",dM="[object Float64Array]",pM="[object Int8Array]",fM="[object Int16Array]",hM="[object Int32Array]",yM="[object Uint8Array]",gM="[object Uint8ClampedArray]",mM="[object Uint16Array]",vM="[object Uint32Array]";function wM(t,e,r){var n=t.constructor;switch(e){case uM:return Na(t);case eM:case tM:return new n(+t);case lM:return VA(t,r);case cM:case dM:case pM:case fM:case hM:case yM:case gM:case mM:case vM:return ZA(t,r);case rM:return new n;case nM:case iM:return new n(t);case oM:return XA(t);case aM:return new n;case sM:return JA(t)}}var eS=wM;function AM(t){return typeof t.constructor=="function"&&!Xr(t)?Nw(yl(t)):{}}var tS=AM;var SM="[object Map]";function TM(t){return Ze(t)&&_r(t)==SM}var rS=TM;var nS=vr&&vr.isMap,CM=nS?Yr(nS):rS,oS=CM;var xM="[object Set]";function bM(t){return Ze(t)&&_r(t)==xM}var aS=bM;var iS=vr&&vr.isSet,kM=iS?Yr(iS):aS,sS=kM;var RM=1,$M=2,IM=4,uS="[object Arguments]",PM="[object Array]",EM="[object Boolean]",NM="[object Date]",DM="[object Error]",lS="[object Function]",_M="[object GeneratorFunction]",MM="[object Map]",OM="[object Number]",cS="[object Object]",zM="[object RegExp]",KM="[object Set]",LM="[object String]",FM="[object Symbol]",WM="[object WeakMap]",GM="[object ArrayBuffer]",HM="[object DataView]",BM="[object Float32Array]",qM="[object Float64Array]",UM="[object Int8Array]",jM="[object Int16Array]",VM="[object Int32Array]",XM="[object Uint8Array]",YM="[object Uint8ClampedArray]",QM="[object Uint16Array]",JM="[object Uint32Array]",Te={};Te[uS]=Te[PM]=Te[GM]=Te[HM]=Te[EM]=Te[NM]=Te[BM]=Te[qM]=Te[UM]=Te[jM]=Te[VM]=Te[MM]=Te[OM]=Te[cS]=Te[zM]=Te[KM]=Te[LM]=Te[FM]=Te[XM]=Te[YM]=Te[QM]=Te[JM]=!0;Te[DM]=Te[lS]=Te[WM]=!1;function Cl(t,e,r,n,o,a){var i,s=e&RM,u=e&$M,l=e&IM;if(r&&(i=o?r(t,n,o,a):r(t)),i!==void 0)return i;if(!Le(t))return t;var c=F(t);if(c){if(i=jA(t),!s)return _w(t,i)}else{var d=_r(t),p=d==lS||d==_M;if(gn(t))return KA(t,s);if(d==cS||d==uS||p&&!o){if(i=u||p?{}:tS(t),!s)return u?WA(t,DA(i,t)):FA(t,NA(i,t))}else{if(!Te[d])return o?t:{};i=eS(t,d,s)}}a||(a=new Vn);var h=a.get(t);if(h)return h;a.set(t,i),sS(t)?t.forEach(function(C){i.add(Cl(C,e,r,C,t,a))}):oS(t)&&t.forEach(function(C,S){i.set(S,Cl(C,e,r,S,t,a))});var v=l?u?Al:es:u?Gn:Se,A=c?void 0:v(t);return ll(A||t,function(C,S){A&&(S=C,C=t[S]),Ln(i,S,Cl(C,e,r,S,t,a))}),i}var dS=Cl;var ZM=4;function eO(t){return dS(t,ZM)}var Ce=eO;function tO(t){for(var e=-1,r=t==null?0:t.length,n=0,o=[];++e<r;){var a=t[e];a&&(o[n++]=a)}return o}var Jr=tO;var rO="__lodash_hash_undefined__";function nO(t){return this.__data__.set(t,rO),this}var pS=nO;function oO(t){return this.__data__.has(t)}var fS=oO;function xl(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new Eo;++e<r;)this.add(t[e])}xl.prototype.add=xl.prototype.push=pS;xl.prototype.has=fS;var Da=xl;function aO(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var bl=aO;function iO(t,e){return t.has(e)}var _a=iO;var sO=1,uO=2;function lO(t,e,r,n,o,a){var i=r&sO,s=t.length,u=e.length;if(s!=u&&!(i&&u>s))return!1;var l=a.get(t),c=a.get(e);if(l&&c)return l==e&&c==t;var d=-1,p=!0,h=r&uO?new Da:void 0;for(a.set(t,e),a.set(e,t);++d<s;){var v=t[d],A=e[d];if(n)var C=i?n(A,v,d,e,t,a):n(v,A,d,t,e,a);if(C!==void 0){if(C)continue;p=!1;break}if(h){if(!bl(e,function(S,g){if(!_a(h,g)&&(v===S||o(v,S,r,n,a)))return h.push(g)})){p=!1;break}}else if(!(v===A||o(v,A,r,n,a))){p=!1;break}}return a.delete(t),a.delete(e),p}var kl=lO;function cO(t){var e=-1,r=Array(t.size);return t.forEach(function(n,o){r[++e]=[o,n]}),r}var hS=cO;function dO(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var Ma=dO;var pO=1,fO=2,hO="[object Boolean]",yO="[object Date]",gO="[object Error]",mO="[object Map]",vO="[object Number]",wO="[object RegExp]",AO="[object Set]",SO="[object String]",TO="[object Symbol]",CO="[object ArrayBuffer]",xO="[object DataView]",yS=ft?ft.prototype:void 0,Fh=yS?yS.valueOf:void 0;function bO(t,e,r,n,o,a,i){switch(r){case xO:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case CO:return!(t.byteLength!=e.byteLength||!a(new Ea(t),new Ea(e)));case hO:case yO:case vO:return jr(+t,+e);case gO:return t.name==e.name&&t.message==e.message;case wO:case SO:return t==e+"";case mO:var s=hS;case AO:var u=n&pO;if(s||(s=Ma),t.size!=e.size&&!u)return!1;var l=i.get(t);if(l)return l==e;n|=fO,i.set(t,e);var c=kl(s(t),s(e),n,o,a,i);return i.delete(t),c;case TO:if(Fh)return Fh.call(t)==Fh.call(e)}return!1}var gS=bO;var kO=1,RO=Object.prototype,$O=RO.hasOwnProperty;function IO(t,e,r,n,o,a){var i=r&kO,s=es(t),u=s.length,l=es(e),c=l.length;if(u!=c&&!i)return!1;for(var d=u;d--;){var p=s[d];if(!(i?p in e:$O.call(e,p)))return!1}var h=a.get(t),v=a.get(e);if(h&&v)return h==e&&v==t;var A=!0;a.set(t,e),a.set(e,t);for(var C=i;++d<u;){p=s[d];var S=t[p],g=e[p];if(n)var f=i?n(g,S,p,e,t,a):n(S,g,p,t,e,a);if(!(f===void 0?S===g||o(S,g,r,n,a):f)){A=!1;break}C||(C=p=="constructor")}if(A&&!C){var T=t.constructor,P=e.constructor;T!=P&&"constructor"in t&&"constructor"in e&&!(typeof T=="function"&&T instanceof T&&typeof P=="function"&&P instanceof P)&&(A=!1)}return a.delete(t),a.delete(e),A}var mS=IO;var PO=1,vS="[object Arguments]",wS="[object Array]",Rl="[object Object]",EO=Object.prototype,AS=EO.hasOwnProperty;function NO(t,e,r,n,o,a){var i=F(t),s=F(e),u=i?wS:_r(t),l=s?wS:_r(e);u=u==vS?Rl:u,l=l==vS?Rl:l;var c=u==Rl,d=l==Rl,p=u==l;if(p&&gn(t)){if(!gn(e))return!1;i=!0,c=!1}if(p&&!c)return a||(a=new Vn),i||Aa(t)?kl(t,e,r,n,o,a):gS(t,e,u,r,n,o,a);if(!(r&PO)){var h=c&&AS.call(t,"__wrapped__"),v=d&&AS.call(e,"__wrapped__");if(h||v){var A=h?t.value():t,C=v?e.value():e;return a||(a=new Vn),o(A,C,r,n,a)}}return p?(a||(a=new Vn),mS(t,e,r,n,o,a)):!1}var SS=NO;function TS(t,e,r,n,o){return t===e?!0:t==null||e==null||!Ze(t)&&!Ze(e)?t!==t&&e!==e:SS(t,e,r,n,TS,o)}var $l=TS;var DO=1,_O=2;function MO(t,e,r,n){var o=r.length,a=o,i=!n;if(t==null)return!a;for(t=Object(t);o--;){var s=r[o];if(i&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++o<a;){s=r[o];var u=s[0],l=t[u],c=s[1];if(i&&s[2]){if(l===void 0&&!(u in t))return!1}else{var d=new Vn;if(n)var p=n(l,c,u,t,e,d);if(!(p===void 0?$l(c,l,DO|_O,n,d):p))return!1}}return!0}var CS=MO;function OO(t){return t===t&&!Le(t)}var Il=OO;function zO(t){for(var e=Se(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,Il(o)]}return e}var xS=zO;function KO(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var Pl=KO;function LO(t){var e=xS(t);return e.length==1&&e[0][2]?Pl(e[0][0],e[0][1]):function(r){return r===t||CS(r,t,e)}}var bS=LO;function FO(t,e){return t!=null&&e in Object(t)}var kS=FO;function WO(t,e,r){e=jn(e,t);for(var n=-1,o=e.length,a=!1;++n<o;){var i=Qr(e[n]);if(!(a=t!=null&&r(t,i)))break;t=t[i]}return a||++n!=o?a:(o=t==null?0:t.length,!!o&&wa(o)&&Kn(i,o)&&(F(t)||Wn(t)))}var El=WO;function GO(t,e){return t!=null&&El(t,e,kS)}var RS=GO;var HO=1,BO=2;function qO(t,e){return Sa(t)&&Il(e)?Pl(Qr(t),e):function(r){var n=TA(r,t);return n===void 0&&n===e?RS(r,t):$l(e,n,HO|BO)}}var $S=qO;function UO(t){return function(e){return e?.[t]}}var IS=UO;function jO(t){return function(e){return ba(e,t)}}var PS=jO;function VO(t){return Sa(t)?IS(Qr(t)):PS(t)}var ES=VO;function XO(t){return typeof t=="function"?t:t==null?er:typeof t=="object"?F(t)?$S(t[0],t[1]):bS(t):ES(t)}var Ue=XO;function YO(t,e,r,n){for(var o=-1,a=t==null?0:t.length;++o<a;){var i=t[o];e(n,i,r(i),t)}return n}var NS=YO;function QO(t){return function(e,r,n){for(var o=-1,a=Object(e),i=n(e),s=i.length;s--;){var u=i[t?s:++o];if(r(a[u],u,a)===!1)break}return e}}var DS=QO;var JO=DS(),_S=JO;function ZO(t,e){return t&&_S(t,e,Se)}var MS=ZO;function ez(t,e){return function(r,n){if(r==null)return r;if(!nt(r))return t(r,n);for(var o=r.length,a=e?o:-1,i=Object(r);(e?a--:++a<o)&&n(i[a],a,i)!==!1;);return r}}var OS=ez;var tz=OS(MS),rr=tz;function rz(t,e,r,n){return rr(t,function(o,a,i){e(n,o,r(o),i)}),n}var zS=rz;function nz(t,e){return function(r,n){var o=F(r)?NS:zS,a=e?e():{};return o(r,t,Ue(n,2),a)}}var KS=nz;var LS=Object.prototype,oz=LS.hasOwnProperty,az=va(function(t,e){t=Object(t);var r=-1,n=e.length,o=n>2?e[2]:void 0;for(o&&Fn(e[0],e[1],o)&&(n=1);++r<n;)for(var a=e[r],i=Gn(a),s=-1,u=i.length;++s<u;){var l=i[s],c=t[l];(c===void 0||jr(c,LS[l])&&!oz.call(t,l))&&(t[l]=a[l])}return t}),Oa=az;function iz(t){return Ze(t)&&nt(t)}var Wh=iz;function sz(t,e,r){for(var n=-1,o=t==null?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}var Nl=sz;var uz=200;function lz(t,e,r,n){var o=-1,a=dl,i=!0,s=t.length,u=[],l=e.length;if(!s)return u;r&&(e=qr(e,Yr(r))),n?(a=Nl,i=!1):e.length>=uz&&(a=_a,i=!1,e=new Da(e));e:for(;++o<s;){var c=t[o],d=r==null?c:r(c);if(c=n||c!==0?c:0,i&&d===d){for(var p=l;p--;)if(e[p]===d)continue e;u.push(c)}else a(e,d,n)||u.push(c)}return u}var FS=lz;var cz=va(function(t,e){return Wh(t)?FS(t,Ra(e,1,Wh,!0)):[]}),Yn=cz;function dz(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var Zr=dz;function pz(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Ur(e),gl(t,e<0?0:e,n)):[]}var tt=pz;function fz(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Ur(e),e=n-e,gl(t,0,e<0?0:e)):[]}var vn=fz;function hz(t){return typeof t=="function"?t:er}var WS=hz;function yz(t,e){var r=F(t)?ll:rr;return r(t,WS(e))}var M=yz;function gz(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var GS=gz;function mz(t,e){var r=!0;return rr(t,function(n,o,a){return r=!!e(n,o,a),r}),r}var HS=mz;function vz(t,e,r){var n=F(t)?GS:HS;return r&&Fn(t,e,r)&&(e=void 0),n(t,Ue(e,3))}var Pt=vz;function wz(t,e){var r=[];return rr(t,function(n,o,a){e(n,o,a)&&r.push(n)}),r}var Dl=wz;function Az(t,e){var r=F(t)?Ia:Dl;return r(t,Ue(e,3))}var ht=Az;function Sz(t){return function(e,r,n){var o=Object(e);if(!nt(e)){var a=Ue(r,3);e=Se(e),r=function(s){return a(o[s],s,o)}}var i=t(e,r,n);return i>-1?o[a?e[i]:i]:void 0}}var BS=Sz;var Tz=Math.max;function Cz(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var o=r==null?0:Ur(r);return o<0&&(o=Tz(n+o,0)),cl(t,Ue(e,3),o)}var qS=Cz;var xz=BS(qS),en=xz;function bz(t){return t&&t.length?t[0]:void 0}var yt=bz;function kz(t,e){var r=-1,n=nt(t)?Array(t.length):[];return rr(t,function(o,a,i){n[++r]=e(o,a,i)}),n}var US=kz;function Rz(t,e){var r=F(t)?qr:US;return r(t,Ue(e,3))}var E=Rz;function $z(t,e){return Ra(E(t,e),1)}var xt=$z;var Iz=Object.prototype,Pz=Iz.hasOwnProperty,Ez=KS(function(t,e,r){Pz.call(t,r)?t[r].push(e):ma(t,r,[e])}),Gh=Ez;var Nz=Object.prototype,Dz=Nz.hasOwnProperty;function _z(t,e){return t!=null&&Dz.call(t,e)}var jS=_z;function Mz(t,e){return t!=null&&El(t,e,jS)}var K=Mz;var Oz="[object String]";function zz(t){return typeof t=="string"||!F(t)&&Ze(t)&&Gt(t)==Oz}var lt=zz;function Kz(t,e){return qr(e,function(r){return t[r]})}var VS=Kz;function Lz(t){return t==null?[]:VS(t,Se(t))}var me=Lz;var Fz=Math.max;function Wz(t,e,r,n){t=nt(t)?t:me(t),r=r&&!n?Ur(r):0;var o=t.length;return r<0&&(r=Fz(o+r,0)),lt(t)?r<=o&&t.indexOf(e,r)>-1:!!o&&ga(t,e,r)>-1}var Ne=Wz;var Gz=Math.max;function Hz(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var o=r==null?0:Ur(r);return o<0&&(o=Gz(n+o,0)),ga(t,e,o)}var _l=Hz;var Bz="[object Map]",qz="[object Set]",Uz=Object.prototype,jz=Uz.hasOwnProperty;function Vz(t){if(t==null)return!0;if(nt(t)&&(F(t)||typeof t=="string"||typeof t.splice=="function"||gn(t)||Aa(t)||Wn(t)))return!t.length;var e=_r(t);if(e==Bz||e==qz)return!t.size;if(Xr(t))return!hl(t).length;for(var r in t)if(jz.call(t,r))return!1;return!0}var Z=Vz;var Xz="[object RegExp]";function Yz(t){return Ze(t)&&Gt(t)==Xz}var XS=Yz;var YS=vr&&vr.isRegExp,Qz=YS?Yr(YS):XS,wr=Qz;function Jz(t){return t===void 0}var Et=Jz;function Zz(t,e){return t<e}var QS=Zz;function eK(t,e,r){for(var n=-1,o=t.length;++n<o;){var a=t[n],i=e(a);if(i!=null&&(s===void 0?i===i&&!Br(i):r(i,s)))var s=i,u=a}return u}var JS=eK;function tK(t){return t&&t.length?JS(t,er,QS):void 0}var ZS=tK;var rK="Expected a function";function nK(t){if(typeof t!="function")throw new TypeError(rK);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var eT=nK;function oK(t,e,r,n){if(!Le(t))return t;e=jn(e,t);for(var o=-1,a=e.length,i=a-1,s=t;s!=null&&++o<a;){var u=Qr(e[o]),l=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return t;if(o!=i){var c=s[u];l=n?n(c,u,s):void 0,l===void 0&&(l=Le(c)?c:Kn(e[o+1])?[]:{})}Ln(s,u,l),s=s[u]}return t}var tT=oK;function aK(t,e,r){for(var n=-1,o=e.length,a={};++n<o;){var i=e[n],s=ba(t,i);r(s,i)&&tT(a,jn(i,t),s)}return a}var rT=aK;function iK(t,e){if(t==null)return{};var r=qr(Al(t),function(n){return[n]});return e=Ue(e),rT(t,r,function(n,o){return e(n,o[0])})}var nr=iK;function sK(t,e,r,n,o){return o(t,function(a,i,s){r=n?(n=!1,a):e(r,a,i,s)}),r}var nT=sK;function uK(t,e,r){var n=F(t)?kA:nT,o=arguments.length<3;return n(t,Ue(e,4),r,o,rr)}var We=uK;function lK(t,e){var r=F(t)?Ia:Dl;return r(t,eT(Ue(e,3)))}var Qn=lK;function cK(t,e){var r;return rr(t,function(n,o,a){return r=e(n,o,a),!r}),!!r}var oT=cK;function dK(t,e,r){var n=F(t)?bl:oT;return r&&Fn(t,e,r)&&(e=void 0),n(t,Ue(e,3))}var ts=dK;var pK=1/0,fK=Xn&&1/Ma(new Xn([,-0]))[1]==pK?function(t){return new Xn(t)}:Fe,aT=fK;var hK=200;function yK(t,e,r){var n=-1,o=dl,a=t.length,i=!0,s=[],u=s;if(r)i=!1,o=Nl;else if(a>=hK){var l=e?null:aT(t);if(l)return Ma(l);i=!1,o=_a,u=new Da}else u=e?[]:s;e:for(;++n<a;){var c=t[n],d=e?e(c):c;if(c=r||c!==0?c:0,i&&d===d){for(var p=u.length;p--;)if(u[p]===d)continue e;e&&u.push(d),s.push(c)}else o(u,d,r)||(u!==s&&u.push(d),s.push(c))}return s}var Ml=yK;function gK(t){return t&&t.length?Ml(t):[]}var za=gK;function mK(t,e){return t&&t.length?Ml(t,Ue(e,2)):[]}var iT=mK;function Ka(t){console&&console.error&&console.error(`Error: ${t}`)}function rs(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function ns(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function os(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function vK(t){return wK(t)?t.LABEL:t.name}function wK(t){return lt(t.LABEL)&&t.LABEL!==""}var dr=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),M(this.definition,r=>{r.accept(e)})}},he=class extends dr{constructor(e){super([]),this.idx=1,Ct(this,nr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},Bt=class extends dr{constructor(e){super(e.definition),this.orgText="",Ct(this,nr(e,r=>r!==void 0))}},xe=class extends dr{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,Ct(this,nr(e,r=>r!==void 0))}},ye=class extends dr{constructor(e){super(e.definition),this.idx=1,Ct(this,nr(e,r=>r!==void 0))}},be=class extends dr{constructor(e){super(e.definition),this.idx=1,Ct(this,nr(e,r=>r!==void 0))}},ke=class extends dr{constructor(e){super(e.definition),this.idx=1,Ct(this,nr(e,r=>r!==void 0))}},ae=class extends dr{constructor(e){super(e.definition),this.idx=1,Ct(this,nr(e,r=>r!==void 0))}},we=class extends dr{constructor(e){super(e.definition),this.idx=1,Ct(this,nr(e,r=>r!==void 0))}},Ae=class extends dr{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Ct(this,nr(e,r=>r!==void 0))}},ee=class{constructor(e){this.idx=1,Ct(this,nr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function Ol(t){return E(t,La)}function La(t){function e(r){return E(r,La)}if(t instanceof he){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return lt(t.label)&&(r.label=t.label),r}else{if(t instanceof xe)return{type:"Alternative",definition:e(t.definition)};if(t instanceof ye)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof be)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof ke)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:La(new ee({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof we)return{type:"RepetitionWithSeparator",idx:t.idx,separator:La(new ee({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof ae)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof Ae)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ee){let r={type:"Terminal",name:t.terminalType.name,label:vK(t.terminalType),idx:t.idx};lt(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=wr(n)?n.source:n),r}else{if(t instanceof Bt)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var qt=class{visit(e){let r=e;switch(r.constructor){case he:return this.visitNonTerminal(r);case xe:return this.visitAlternative(r);case ye:return this.visitOption(r);case be:return this.visitRepetitionMandatory(r);case ke:return this.visitRepetitionMandatoryWithSeparator(r);case we:return this.visitRepetitionWithSeparator(r);case ae:return this.visitRepetition(r);case Ae:return this.visitAlternation(r);case ee:return this.visitTerminal(r);case Bt:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function Hh(t){return t instanceof xe||t instanceof ye||t instanceof ae||t instanceof be||t instanceof ke||t instanceof we||t instanceof ee||t instanceof Bt}function Do(t,e=[]){return t instanceof ye||t instanceof ae||t instanceof we?!0:t instanceof Ae?ts(t.definition,n=>Do(n,e)):t instanceof he&&Ne(e,t)?!1:t instanceof dr?(t instanceof he&&e.push(t),Pt(t.definition,n=>Do(n,e))):!1}function Bh(t){return t instanceof Ae}function or(t){if(t instanceof he)return"SUBRULE";if(t instanceof ye)return"OPTION";if(t instanceof Ae)return"OR";if(t instanceof be)return"AT_LEAST_ONE";if(t instanceof ke)return"AT_LEAST_ONE_SEP";if(t instanceof we)return"MANY_SEP";if(t instanceof ae)return"MANY";if(t instanceof ee)return"CONSUME";throw Error("non exhaustive match")}var wn=class{walk(e,r=[]){M(e.definition,(n,o)=>{let a=tt(e.definition,o+1);if(n instanceof he)this.walkProdRef(n,a,r);else if(n instanceof ee)this.walkTerminal(n,a,r);else if(n instanceof xe)this.walkFlat(n,a,r);else if(n instanceof ye)this.walkOption(n,a,r);else if(n instanceof be)this.walkAtLeastOne(n,a,r);else if(n instanceof ke)this.walkAtLeastOneSep(n,a,r);else if(n instanceof we)this.walkManySep(n,a,r);else if(n instanceof ae)this.walkMany(n,a,r);else if(n instanceof Ae)this.walkOr(n,a,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let o=r.concat(n);this.walk(e,o)}walkOption(e,r,n){let o=r.concat(n);this.walk(e,o)}walkAtLeastOne(e,r,n){let o=[new ye({definition:e.definition})].concat(r,n);this.walk(e,o)}walkAtLeastOneSep(e,r,n){let o=sT(e,r,n);this.walk(e,o)}walkMany(e,r,n){let o=[new ye({definition:e.definition})].concat(r,n);this.walk(e,o)}walkManySep(e,r,n){let o=sT(e,r,n);this.walk(e,o)}walkOr(e,r,n){let o=r.concat(n);M(e.definition,a=>{let i=new xe({definition:[a]});this.walk(i,o)})}};function sT(t,e,r){return[new ye({definition:[new ee({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function _o(t){if(t instanceof he)return _o(t.referencedRule);if(t instanceof ee)return TK(t);if(Hh(t))return AK(t);if(Bh(t))return SK(t);throw Error("non exhaustive match")}function AK(t){let e=[],r=t.definition,n=0,o=r.length>n,a,i=!0;for(;o&&i;)a=r[n],i=Do(a),e=e.concat(_o(a)),n=n+1,o=r.length>n;return za(e)}function SK(t){let e=E(t.definition,r=>_o(r));return za(et(e))}function TK(t){return[t.terminalType]}var zl="_~IN~_";var qh=class extends wn{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let o=CK(e.referencedRule,e.idx)+this.topProd.name,a=r.concat(n),i=new xe({definition:a}),s=_o(i);this.follows[o]=s}};function uT(t){let e={};return M(t,r=>{let n=new qh(r).startWalking();Ct(e,n)}),e}function CK(t,e){return t.name+e+zl}var Kl={},xK=new ko;function Fa(t){let e=t.toString();if(Kl.hasOwnProperty(e))return Kl[e];{let r=xK.pattern(e);return Kl[e]=r,r}}function lT(){Kl={}}var dT="Complement Sets are not supported for first char optimization",as=`Unable to use "first char" lexer optimizations:
`;function pT(t,e=!1){try{let r=Fa(t);return Uh(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===dT)e&&rs(`${as}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Ka(`${as}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function Uh(t,e,r){switch(t.type){case"Disjunction":for(let o=0;o<t.value.length;o++)Uh(t.value[o],e,r);break;case"Alternative":let n=t.value;for(let o=0;o<n.length;o++){let a=n[o];switch(a.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let i=a;switch(i.type){case"Character":Ll(i.value,e,r);break;case"Set":if(i.complement===!0)throw Error(dT);M(i.value,u=>{if(typeof u=="number")Ll(u,e,r);else{let l=u;if(r===!0)for(let c=l.from;c<=l.to;c++)Ll(c,e,r);else{for(let c=l.from;c<=l.to&&c<Wa;c++)Ll(c,e,r);if(l.to>=Wa){let c=l.from>=Wa?l.from:Wa,d=l.to,p=tn(c),h=tn(d);for(let v=p;v<=h;v++)e[v]=v}}}});break;case"Group":Uh(i.value,e,r);break;default:throw Error("Non Exhaustive Match")}let s=i.quantifier!==void 0&&i.quantifier.atLeast===0;if(i.type==="Group"&&jh(i)===!1||i.type!=="Group"&&s===!1)break}break;default:throw Error("non exhaustive match!")}return me(e)}function Ll(t,e,r){let n=tn(t);e[n]=n,r===!0&&bK(t,e)}function bK(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let o=tn(n.charCodeAt(0));e[o]=o}else{let o=r.toLowerCase();if(o!==r){let a=tn(o.charCodeAt(0));e[a]=a}}}function cT(t,e){return en(t.value,r=>{if(typeof r=="number")return Ne(e,r);{let n=r;return en(e,o=>n.from<=o&&o<=n.to)!==void 0}})}function jh(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?F(t.value)?Pt(t.value,jh):jh(t.value):!1}var Vh=class extends Hr{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){Ne(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?cT(e,this.targetCharCodes)===void 0&&(this.found=!0):cT(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function Fl(t,e){if(e instanceof RegExp){let r=Fa(e),n=new Vh(t);return n.visit(r),n.found}else return en(e,r=>Ne(t,r.charCodeAt(0)))!==void 0}var Mo="PATTERN",Ga="defaultMode",Wl="modes",Yh=typeof new RegExp("(?:)").sticky=="boolean";function yT(t,e){e=Oa(e,{useSticky:Yh,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(g,f)=>f()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{HK()});let n;r("Reject Lexer.NA",()=>{n=Qn(t,g=>g[Mo]===je.NA)});let o=!1,a;r("Transform Patterns",()=>{o=!1,a=E(n,g=>{let f=g[Mo];if(wr(f)){let T=f.source;return T.length===1&&T!=="^"&&T!=="$"&&T!=="."&&!f.ignoreCase?T:T.length===2&&T[0]==="\\"&&!Ne(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],T[1])?T[1]:e.useSticky?hT(f):fT(f)}else{if(Ht(f))return o=!0,{exec:f};if(typeof f=="object")return o=!0,f;if(typeof f=="string"){if(f.length===1)return f;{let T=f.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),P=new RegExp(T);return e.useSticky?hT(P):fT(P)}}else throw Error("non exhaustive match")}})});let i,s,u,l,c;r("misc mapping",()=>{i=E(n,g=>g.tokenTypeIdx),s=E(n,g=>{let f=g.GROUP;if(f!==je.SKIPPED){if(lt(f))return f;if(Et(f))return!1;throw Error("non exhaustive match")}}),u=E(n,g=>{let f=g.LONGER_ALT;if(f)return F(f)?E(f,P=>_l(n,P)):[_l(n,f)]}),l=E(n,g=>g.PUSH_MODE),c=E(n,g=>K(g,"POP_MODE"))});let d;r("Line Terminator Handling",()=>{let g=CT(e.lineTerminatorCharacters);d=E(n,f=>!1),e.positionTracking!=="onlyOffset"&&(d=E(n,f=>K(f,"LINE_BREAKS")?!!f.LINE_BREAKS:TT(f,g)===!1&&Fl(g,f.PATTERN)))});let p,h,v,A;r("Misc Mapping #2",()=>{p=E(n,AT),h=E(a,WK),v=We(n,(g,f)=>{let T=f.GROUP;return lt(T)&&T!==je.SKIPPED&&(g[T]=[]),g},{}),A=E(a,(g,f)=>({pattern:a[f],longerAlt:u[f],canLineTerminator:d[f],isCustom:p[f],short:h[f],group:s[f],push:l[f],pop:c[f],tokenTypeIdx:i[f],tokenType:n[f]}))});let C=!0,S=[];return e.safeMode||r("First Char Optimization",()=>{S=We(n,(g,f,T)=>{if(typeof f.PATTERN=="string"){let P=f.PATTERN.charCodeAt(0),Q=tn(P);Xh(g,Q,A[T])}else if(F(f.START_CHARS_HINT)){let P;M(f.START_CHARS_HINT,Q=>{let vt=typeof Q=="string"?Q.charCodeAt(0):Q,Qe=tn(vt);P!==Qe&&(P=Qe,Xh(g,Qe,A[T]))})}else if(wr(f.PATTERN))if(f.PATTERN.unicode)C=!1,e.ensureOptimizations&&Ka(`${as}	Unable to analyze < ${f.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let P=pT(f.PATTERN,e.ensureOptimizations);Z(P)&&(C=!1),M(P,Q=>{Xh(g,Q,A[T])})}else e.ensureOptimizations&&Ka(`${as}	TokenType: <${f.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),C=!1;return g},[])}),{emptyGroups:v,patternIdxToConfig:A,charCodeToPatternIdxToConfig:S,hasCustom:o,canBeOptimized:C}}function gT(t,e){let r=[],n=RK(t);r=r.concat(n.errors);let o=$K(n.valid),a=o.valid;return r=r.concat(o.errors),r=r.concat(kK(a)),r=r.concat(OK(a)),r=r.concat(zK(a,e)),r=r.concat(KK(a)),r}function kK(t){let e=[],r=ht(t,n=>wr(n[Mo]));return e=e.concat(PK(r)),e=e.concat(DK(r)),e=e.concat(_K(r)),e=e.concat(MK(r)),e=e.concat(EK(r)),e}function RK(t){let e=ht(t,o=>!K(o,Mo)),r=E(e,o=>({message:"Token Type: ->"+o.name+"<- missing static 'PATTERN' property",type:De.MISSING_PATTERN,tokenTypes:[o]})),n=Yn(t,e);return{errors:r,valid:n}}function $K(t){let e=ht(t,o=>{let a=o[Mo];return!wr(a)&&!Ht(a)&&!K(a,"exec")&&!lt(a)}),r=E(e,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:De.INVALID_PATTERN,tokenTypes:[o]})),n=Yn(t,e);return{errors:r,valid:n}}var IK=/[^\\][$]/;function PK(t){class e extends Hr{constructor(){super(...arguments),this.found=!1}visitEndAnchor(a){this.found=!0}}let r=ht(t,o=>{let a=o.PATTERN;try{let i=Fa(a),s=new e;return s.visit(i),s.found}catch{return IK.test(a.source)}});return E(r,o=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+o.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:De.EOI_ANCHOR_FOUND,tokenTypes:[o]}))}function EK(t){let e=ht(t,n=>n.PATTERN.test(""));return E(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:De.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var NK=/[^\\[][\^]|^\^/;function DK(t){class e extends Hr{constructor(){super(...arguments),this.found=!1}visitStartAnchor(a){this.found=!0}}let r=ht(t,o=>{let a=o.PATTERN;try{let i=Fa(a),s=new e;return s.visit(i),s.found}catch{return NK.test(a.source)}});return E(r,o=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+o.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:De.SOI_ANCHOR_FOUND,tokenTypes:[o]}))}function _K(t){let e=ht(t,n=>{let o=n[Mo];return o instanceof RegExp&&(o.multiline||o.global)});return E(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:De.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function MK(t){let e=[],r=E(t,a=>We(t,(i,s)=>(a.PATTERN.source===s.PATTERN.source&&!Ne(e,s)&&s.PATTERN!==je.NA&&(e.push(s),i.push(s)),i),[]));r=Jr(r);let n=ht(r,a=>a.length>1);return E(n,a=>{let i=E(a,u=>u.name);return{message:`The same RegExp pattern ->${yt(a).PATTERN}<-has been used in all of the following Token Types: ${i.join(", ")} <-`,type:De.DUPLICATE_PATTERNS_FOUND,tokenTypes:a}})}function OK(t){let e=ht(t,n=>{if(!K(n,"GROUP"))return!1;let o=n.GROUP;return o!==je.SKIPPED&&o!==je.NA&&!lt(o)});return E(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:De.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function zK(t,e){let r=ht(t,o=>o.PUSH_MODE!==void 0&&!Ne(e,o.PUSH_MODE));return E(r,o=>({message:`Token Type: ->${o.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${o.PUSH_MODE}<-which does not exist`,type:De.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[o]}))}function KK(t){let e=[],r=We(t,(n,o,a)=>{let i=o.PATTERN;return i===je.NA||(lt(i)?n.push({str:i,idx:a,tokenType:o}):wr(i)&&FK(i)&&n.push({str:i.source,idx:a,tokenType:o})),n},[]);return M(t,(n,o)=>{M(r,({str:a,idx:i,tokenType:s})=>{if(o<i&&LK(a,n.PATTERN)){let u=`Token: ->${s.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:u,type:De.UNREACHABLE_PATTERN,tokenTypes:[n,s]})}})}),e}function LK(t,e){if(wr(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(Ht(e))return e(t,0,[],{});if(K(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function FK(t){return en([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function fT(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function hT(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function mT(t,e,r){let n=[];return K(t,Ga)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Ga+`> property in its definition
`,type:De.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),K(t,Wl)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Wl+`> property in its definition
`,type:De.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),K(t,Wl)&&K(t,Ga)&&!K(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${Ga}: <${t.defaultMode}>which does not exist
`,type:De.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),K(t,Wl)&&M(t.modes,(o,a)=>{M(o,(i,s)=>{if(Et(i))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${a}> at index: <${s}>
`,type:De.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(K(i,"LONGER_ALT")){let u=F(i.LONGER_ALT)?i.LONGER_ALT:[i.LONGER_ALT];M(u,l=>{!Et(l)&&!Ne(o,l)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${l.name}> on token <${i.name}> outside of mode <${a}>
`,type:De.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function vT(t,e,r){let n=[],o=!1,a=Jr(et(me(t.modes))),i=Qn(a,u=>u[Mo]===je.NA),s=CT(r);return e&&M(i,u=>{let l=TT(u,s);if(l!==!1){let d={message:GK(u,l),type:l.issue,tokenType:u};n.push(d)}else K(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(o=!0):Fl(s,u.PATTERN)&&(o=!0)}),e&&!o&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:De.NO_LINE_BREAKS_FLAGS}),n}function wT(t){let e={},r=Se(t);return M(r,n=>{let o=t[n];if(F(o))e[n]=[];else throw Error("non exhaustive match")}),e}function AT(t){let e=t.PATTERN;if(wr(e))return!1;if(Ht(e))return!0;if(K(e,"exec"))return!0;if(lt(e))return!1;throw Error("non exhaustive match")}function WK(t){return lt(t)&&t.length===1?t.charCodeAt(0):!1}var ST={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function TT(t,e){if(K(t,"LINE_BREAKS"))return!1;if(wr(t.PATTERN)){try{Fl(e,t.PATTERN)}catch(r){return{issue:De.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(lt(t.PATTERN))return!1;if(AT(t))return{issue:De.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function GK(t,e){if(e.issue===De.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===De.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function CT(t){return E(t,r=>lt(r)?r.charCodeAt(0):r)}function Xh(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var Wa=256,Gl=[];function tn(t){return t<Wa?t:Gl[t]}function HK(){if(Z(Gl)){Gl=new Array(65536);for(let t=0;t<65536;t++)Gl[t]=t>255?255+~~(t/255):t}}function An(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function Ha(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var xT=1,kT={};function Sn(t){let e=BK(t);qK(e),jK(e),UK(e),M(e,r=>{r.isParent=r.categoryMatches.length>0})}function BK(t){let e=Ce(t),r=t,n=!0;for(;n;){r=Jr(et(E(r,a=>a.CATEGORIES)));let o=Yn(r,e);e=e.concat(o),Z(o)?n=!1:r=o}return e}function qK(t){M(t,e=>{Qh(e)||(kT[xT]=e,e.tokenTypeIdx=xT++),bT(e)&&!F(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),bT(e)||(e.CATEGORIES=[]),VK(e)||(e.categoryMatches=[]),XK(e)||(e.categoryMatchesMap={})})}function UK(t){M(t,e=>{e.categoryMatches=[],M(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(kT[n].tokenTypeIdx)})})}function jK(t){M(t,e=>{RT([],e)})}function RT(t,e){M(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),M(e.CATEGORIES,r=>{let n=t.concat(e);Ne(n,r)||RT(n,r)})}function Qh(t){return K(t,"tokenTypeIdx")}function bT(t){return K(t,"CATEGORIES")}function VK(t){return K(t,"categoryMatches")}function XK(t){return K(t,"categoryMatchesMap")}function $T(t){return K(t,"tokenTypeIdx")}var Jh={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,o){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var De;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(De||(De={}));var is={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:Jh,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(is);var je=class{constructor(e,r=is){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(o,a)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let i=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${i}--> <${o}>`);let{time:s,value:u}=ns(a),l=s>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&l(`${i}<-- <${o}> time: ${s}ms`),this.traceInitIndent--,u}else return a()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Ct({},is,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let o,a=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===is.lineTerminatorsPattern)this.config.lineTerminatorsPattern=ST;else if(this.config.lineTerminatorCharacters===is.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),F(e)?o={modes:{defaultMode:Ce(e)},defaultMode:Ga}:(a=!1,o=Ce(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(mT(o,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(vT(o,this.trackStartLines,this.config.lineTerminatorCharacters))})),o.modes=o.modes?o.modes:{},M(o.modes,(s,u)=>{o.modes[u]=Qn(s,l=>Et(l))});let i=Se(o.modes);if(M(o.modes,(s,u)=>{this.TRACE_INIT(`Mode: <${u}> processing`,()=>{if(this.modes.push(u),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(gT(s,i))}),Z(this.lexerDefinitionErrors)){Sn(s);let l;this.TRACE_INIT("analyzeTokenTypes",()=>{l=yT(s,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[u]=l.patternIdxToConfig,this.charCodeToPatternIdxToConfig[u]=l.charCodeToPatternIdxToConfig,this.emptyGroups=Ct({},this.emptyGroups,l.emptyGroups),this.hasCustom=l.hasCustom||this.hasCustom,this.canModeBeOptimized[u]=l.canBeOptimized}})}),this.defaultMode=o.defaultMode,!Z(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let u=E(this.lexerDefinitionErrors,l=>l.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+u)}M(this.lexerDefinitionWarning,s=>{rs(s.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(Yh?(this.chopInput=er,this.match=this.matchWithTest):(this.updateLastIndex=Fe,this.match=this.matchWithExec),a&&(this.handleModes=Fe),this.trackStartLines===!1&&(this.computeNewColumn=er),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=Fe),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let s=We(this.canModeBeOptimized,(u,l,c)=>(l===!1&&u.push(c),u),[]);if(r.ensureOptimizations&&!Z(s))throw Error(`Lexer Modes: < ${s.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{lT()}),this.TRACE_INIT("toFastProperties",()=>{os(this)})})}tokenize(e,r=this.defaultMode){if(!Z(this.lexerDefinitionErrors)){let o=E(this.lexerDefinitionErrors,a=>a.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+o)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,o,a,i,s,u,l,c,d,p,h,v,A,C,S,g,f=e,T=f.length,P=0,Q=0,vt=this.hasCustom?0:Math.floor(e.length/10),Qe=new Array(vt),lr=[],jt=this.trackStartLines?1:void 0,_=this.trackStartLines?1:void 0,b=wT(this.emptyGroups),W=this.trackStartLines,z=this.config.lineTerminatorsPattern,re=0,V=[],$=[],R=[],fe=[];Object.freeze(fe);let le;function Wr(){return V}function _u(dt){let Xt=tn(dt),En=$[Xt];return En===void 0?fe:En}let af=dt=>{if(R.length===1&&dt.tokenType.PUSH_MODE===void 0){let Xt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(dt);lr.push({offset:dt.startOffset,line:dt.startLine,column:dt.startColumn,length:dt.image.length,message:Xt})}else{R.pop();let Xt=Zr(R);V=this.patternIdxToConfig[Xt],$=this.charCodeToPatternIdxToConfig[Xt],re=V.length;let En=this.canModeBeOptimized[Xt]&&this.config.safeMode===!1;$&&En?le=_u:le=Wr}};function Oi(dt){R.push(dt),$=this.charCodeToPatternIdxToConfig[dt],V=this.patternIdxToConfig[dt],re=V.length,re=V.length;let Xt=this.canModeBeOptimized[dt]&&this.config.safeMode===!1;$&&Xt?le=_u:le=Wr}Oi.call(this,r);let Vt,Mu=this.config.recoveryEnabled;for(;P<T;){u=null;let dt=f.charCodeAt(P),Xt=le(dt),En=Xt.length;for(n=0;n<En;n++){Vt=Xt[n];let zt=Vt.pattern;l=null;let Ir=Vt.short;if(Ir!==!1?dt===Ir&&(u=zt):Vt.isCustom===!0?(g=zt.exec(f,P,Qe,b),g!==null?(u=g[0],g.payload!==void 0&&(l=g.payload)):u=null):(this.updateLastIndex(zt,P),u=this.match(zt,e,P)),u!==null){if(s=Vt.longerAlt,s!==void 0){let wt=s.length;for(a=0;a<wt;a++){let Pr=V[s[a]],dn=Pr.pattern;if(c=null,Pr.isCustom===!0?(g=dn.exec(f,P,Qe,b),g!==null?(i=g[0],g.payload!==void 0&&(c=g.payload)):i=null):(this.updateLastIndex(dn,P),i=this.match(dn,e,P)),i&&i.length>u.length){u=i,l=c,Vt=Pr;break}}}break}}if(u!==null){if(d=u.length,p=Vt.group,p!==void 0&&(h=Vt.tokenTypeIdx,v=this.createTokenInstance(u,P,h,Vt.tokenType,jt,_,d),this.handlePayload(v,l),p===!1?Q=this.addToken(Qe,Q,v):b[p].push(v)),e=this.chopInput(e,d),P=P+d,_=this.computeNewColumn(_,d),W===!0&&Vt.canLineTerminator===!0){let zt=0,Ir,wt;z.lastIndex=0;do Ir=z.test(u),Ir===!0&&(wt=z.lastIndex-1,zt++);while(Ir===!0);zt!==0&&(jt=jt+zt,_=d-wt,this.updateTokenEndLineColumnLocation(v,p,wt,zt,jt,_,d))}this.handleModes(Vt,af,Oi,v)}else{let zt=P,Ir=jt,wt=_,Pr=Mu===!1;for(;Pr===!1&&P<T;)for(e=this.chopInput(e,1),P++,o=0;o<re;o++){let dn=V[o],Nn=dn.pattern,Ou=dn.short;if(Ou!==!1?f.charCodeAt(P)===Ou&&(Pr=!0):dn.isCustom===!0?Pr=Nn.exec(f,P,Qe,b)!==null:(this.updateLastIndex(Nn,P),Pr=Nn.exec(e)!==null),Pr===!0)break}if(A=P-zt,_=this.computeNewColumn(_,A),S=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(f,zt,A,Ir,wt),lr.push({offset:zt,line:Ir,column:wt,length:A,message:S}),Mu===!1)break}}return this.hasCustom||(Qe.length=Q),{tokens:Qe,groups:b,errors:lr}}handleModes(e,r,n,o){if(e.pop===!0){let a=e.push;r(o),a!==void 0&&n.call(this,a)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,o,a,i,s){let u,l;r!==void 0&&(u=n===s-1,l=u?-1:0,o===1&&u===!0||(e.endLine=a+l,e.endColumn=i-1+-l))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,o){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:o}}createStartOnlyToken(e,r,n,o,a,i){return{image:e,startOffset:r,startLine:a,startColumn:i,tokenTypeIdx:n,tokenType:o}}createFullToken(e,r,n,o,a,i,s){return{image:e,startOffset:r,endOffset:r+s-1,startLine:a,endLine:a,startColumn:i,endColumn:i+s-1,tokenTypeIdx:n,tokenType:o}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};je.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";je.NA=/NOT_APPLICABLE/;function Tn(t){return Zh(t)?t.LABEL:t.name}function Zh(t){return lt(t.LABEL)&&t.LABEL!==""}var YK="parent",IT="categories",PT="label",ET="group",NT="push_mode",DT="pop_mode",_T="longer_alt",MT="line_breaks",OT="start_chars_hint";function Hl(t){return QK(t)}function QK(t){let e=t.pattern,r={};if(r.name=t.name,Et(e)||(r.PATTERN=e),K(t,YK))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return K(t,IT)&&(r.CATEGORIES=t[IT]),Sn([r]),K(t,PT)&&(r.LABEL=t[PT]),K(t,ET)&&(r.GROUP=t[ET]),K(t,DT)&&(r.POP_MODE=t[DT]),K(t,NT)&&(r.PUSH_MODE=t[NT]),K(t,_T)&&(r.LONGER_ALT=t[_T]),K(t,MT)&&(r.LINE_BREAKS=t[MT]),K(t,OT)&&(r.START_CHARS_HINT=t[OT]),r}var pr=Hl({name:"EOF",pattern:je.NA});Sn([pr]);function Oo(t,e,r,n,o,a,i,s){return{image:e,startOffset:r,endOffset:n,startLine:o,endLine:a,startColumn:i,endColumn:s,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function ss(t,e){return An(t,e)}var Cn={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${Zh(t)?`--> ${Tn(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:o}){let a="Expecting: ",s=`
but found: '`+yt(e).image+"'";if(n)return a+n+s;{let u=We(t,(p,h)=>p.concat(h),[]),l=E(u,p=>`[${E(p,h=>Tn(h)).join(", ")}]`),d=`one of these possible Token sequences:
${E(l,(p,h)=>`  ${h+1}. ${p}`).join(`
`)}`;return a+d+s}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let o="Expecting: ",i=`
but found: '`+yt(e).image+"'";if(r)return o+r+i;{let u=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${E(t,l=>`[${E(l,c=>Tn(c)).join(",")}]`).join(" ,")}>`;return o+u+i}}};Object.freeze(Cn);var zT={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},Mr={buildDuplicateFoundError(t,e){function r(c){return c instanceof ee?c.terminalType.name:c instanceof he?c.nonTerminalName:""}let n=t.name,o=yt(e),a=o.idx,i=or(o),s=r(o),u=a>0,l=`->${i}${u?a:""}<- ${s?`with argument: ->${s}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return l=l.replace(/[ \t]+/g," "),l=l.replace(/\s\s+/g,`
`),l},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=E(t.prefixPath,o=>Tn(o)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=E(t.prefixPath,o=>Tn(o)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=or(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=E(t.leftRecursionPath,a=>a.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Bt?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function KT(t,e){let r=new ey(t,e);return r.resolveRefs(),r.errors}var ey=class extends qt{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){M(me(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:ct.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var ty=class extends wn{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Ce(this.path.ruleStack).reverse(),this.occurrenceStack=Ce(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let o=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,o)}}updateExpectedNext(){Z(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},Bl=class extends ty{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let o=r.concat(n),a=new xe({definition:o});this.possibleTokTypes=_o(a),this.found=!0}}},Ba=class extends wn{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},ql=class extends Ba{walkMany(e,r,n){if(e.idx===this.occurrence){let o=yt(r.concat(n));this.result.isEndOfRule=o===void 0,o instanceof ee&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else super.walkMany(e,r,n)}},us=class extends Ba{walkManySep(e,r,n){if(e.idx===this.occurrence){let o=yt(r.concat(n));this.result.isEndOfRule=o===void 0,o instanceof ee&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else super.walkManySep(e,r,n)}},Ul=class extends Ba{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let o=yt(r.concat(n));this.result.isEndOfRule=o===void 0,o instanceof ee&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else super.walkAtLeastOne(e,r,n)}},ls=class extends Ba{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let o=yt(r.concat(n));this.result.isEndOfRule=o===void 0,o instanceof ee&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else super.walkAtLeastOneSep(e,r,n)}};function jl(t,e,r=[]){r=Ce(r);let n=[],o=0;function a(s){return s.concat(tt(t,o+1))}function i(s){let u=jl(a(s),e,r);return n.concat(u)}for(;r.length<e&&o<t.length;){let s=t[o];if(s instanceof xe)return i(s.definition);if(s instanceof he)return i(s.definition);if(s instanceof ye)n=i(s.definition);else if(s instanceof be){let u=s.definition.concat([new ae({definition:s.definition})]);return i(u)}else if(s instanceof ke){let u=[new xe({definition:s.definition}),new ae({definition:[new ee({terminalType:s.separator})].concat(s.definition)})];return i(u)}else if(s instanceof we){let u=s.definition.concat([new ae({definition:[new ee({terminalType:s.separator})].concat(s.definition)})]);n=i(u)}else if(s instanceof ae){let u=s.definition.concat([new ae({definition:s.definition})]);n=i(u)}else{if(s instanceof Ae)return M(s.definition,u=>{Z(u.definition)===!1&&(n=i(u.definition))}),n;if(s instanceof ee)r.push(s.terminalType);else throw Error("non exhaustive match")}o++}return n.push({partialPath:r,suffixDef:tt(t,o)}),n}function Vl(t,e,r,n){let o="EXIT_NONE_TERMINAL",a=[o],i="EXIT_ALTERNATIVE",s=!1,u=e.length,l=u-n-1,c=[],d=[];for(d.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!Z(d);){let p=d.pop();if(p===i){s&&Zr(d).idx<=l&&d.pop();continue}let h=p.def,v=p.idx,A=p.ruleStack,C=p.occurrenceStack;if(Z(h))continue;let S=h[0];if(S===o){let g={idx:v,def:tt(h),ruleStack:vn(A),occurrenceStack:vn(C)};d.push(g)}else if(S instanceof ee)if(v<u-1){let g=v+1,f=e[g];if(r(f,S.terminalType)){let T={idx:g,def:tt(h),ruleStack:A,occurrenceStack:C};d.push(T)}}else if(v===u-1)c.push({nextTokenType:S.terminalType,nextTokenOccurrence:S.idx,ruleStack:A,occurrenceStack:C}),s=!0;else throw Error("non exhaustive match");else if(S instanceof he){let g=Ce(A);g.push(S.nonTerminalName);let f=Ce(C);f.push(S.idx);let T={idx:v,def:S.definition.concat(a,tt(h)),ruleStack:g,occurrenceStack:f};d.push(T)}else if(S instanceof ye){let g={idx:v,def:tt(h),ruleStack:A,occurrenceStack:C};d.push(g),d.push(i);let f={idx:v,def:S.definition.concat(tt(h)),ruleStack:A,occurrenceStack:C};d.push(f)}else if(S instanceof be){let g=new ae({definition:S.definition,idx:S.idx}),f=S.definition.concat([g],tt(h)),T={idx:v,def:f,ruleStack:A,occurrenceStack:C};d.push(T)}else if(S instanceof ke){let g=new ee({terminalType:S.separator}),f=new ae({definition:[g].concat(S.definition),idx:S.idx}),T=S.definition.concat([f],tt(h)),P={idx:v,def:T,ruleStack:A,occurrenceStack:C};d.push(P)}else if(S instanceof we){let g={idx:v,def:tt(h),ruleStack:A,occurrenceStack:C};d.push(g),d.push(i);let f=new ee({terminalType:S.separator}),T=new ae({definition:[f].concat(S.definition),idx:S.idx}),P=S.definition.concat([T],tt(h)),Q={idx:v,def:P,ruleStack:A,occurrenceStack:C};d.push(Q)}else if(S instanceof ae){let g={idx:v,def:tt(h),ruleStack:A,occurrenceStack:C};d.push(g),d.push(i);let f=new ae({definition:S.definition,idx:S.idx}),T=S.definition.concat([f],tt(h)),P={idx:v,def:T,ruleStack:A,occurrenceStack:C};d.push(P)}else if(S instanceof Ae)for(let g=S.definition.length-1;g>=0;g--){let f=S.definition[g],T={idx:v,def:f.definition.concat(tt(h)),ruleStack:A,occurrenceStack:C};d.push(T),d.push(i)}else if(S instanceof xe)d.push({idx:v,def:S.definition.concat(tt(h)),ruleStack:A,occurrenceStack:C});else if(S instanceof Bt)d.push(JK(S,v,A,C));else throw Error("non exhaustive match")}return c}function JK(t,e,r,n){let o=Ce(r);o.push(t.name);let a=Ce(n);return a.push(1),{idx:e,def:t.definition,ruleStack:o,occurrenceStack:a}}var _e;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(_e||(_e={}));function cs(t){if(t instanceof ye||t==="Option")return _e.OPTION;if(t instanceof ae||t==="Repetition")return _e.REPETITION;if(t instanceof be||t==="RepetitionMandatory")return _e.REPETITION_MANDATORY;if(t instanceof ke||t==="RepetitionMandatoryWithSeparator")return _e.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof we||t==="RepetitionWithSeparator")return _e.REPETITION_WITH_SEPARATOR;if(t instanceof Ae||t==="Alternation")return _e.ALTERNATION;throw Error("non exhaustive match")}function Yl(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:o}=t,a=cs(n);return a===_e.ALTERNATION?qa(e,r,o):Ua(e,r,a,o)}function FT(t,e,r,n,o,a){let i=qa(t,e,r),s=UT(i)?Ha:An;return a(i,n,s,o)}function WT(t,e,r,n,o,a){let i=Ua(t,e,o,r),s=UT(i)?Ha:An;return a(i[0],s,n)}function GT(t,e,r,n){let o=t.length,a=Pt(t,i=>Pt(i,s=>s.length===1));if(e)return function(i){let s=E(i,u=>u.GATE);for(let u=0;u<o;u++){let l=t[u],c=l.length,d=s[u];if(!(d!==void 0&&d.call(this)===!1))e:for(let p=0;p<c;p++){let h=l[p],v=h.length;for(let A=0;A<v;A++){let C=this.LA(A+1);if(r(C,h[A])===!1)continue e}return u}}};if(a&&!n){let i=E(t,u=>et(u)),s=We(i,(u,l,c)=>(M(l,d=>{K(u,d.tokenTypeIdx)||(u[d.tokenTypeIdx]=c),M(d.categoryMatches,p=>{K(u,p)||(u[p]=c)})}),u),{});return function(){let u=this.LA(1);return s[u.tokenTypeIdx]}}else return function(){for(let i=0;i<o;i++){let s=t[i],u=s.length;e:for(let l=0;l<u;l++){let c=s[l],d=c.length;for(let p=0;p<d;p++){let h=this.LA(p+1);if(r(h,c[p])===!1)continue e}return i}}}}function HT(t,e,r){let n=Pt(t,a=>a.length===1),o=t.length;if(n&&!r){let a=et(t);if(a.length===1&&Z(a[0].categoryMatches)){let s=a[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===s}}else{let i=We(a,(s,u,l)=>(s[u.tokenTypeIdx]=!0,M(u.categoryMatches,c=>{s[c]=!0}),s),[]);return function(){let s=this.LA(1);return i[s.tokenTypeIdx]===!0}}}else return function(){e:for(let a=0;a<o;a++){let i=t[a],s=i.length;for(let u=0;u<s;u++){let l=this.LA(u+1);if(e(l,i[u])===!1)continue e}return!0}return!1}}var ny=class extends wn{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,o){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(o),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,_e.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,_e.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,_e.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,_e.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,_e.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},Xl=class extends qt{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,_e.OPTION)}visitRepetition(e){this.checkIsTarget(e,_e.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,_e.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,_e.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,_e.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,_e.ALTERNATION)}};function LT(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function ry(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],o=[];for(let a=0;a<e.length;a++){let i=e[a];o.push(i+"_"+n.tokenTypeIdx);for(let s=0;s<n.categoryMatches.length;s++){let u="_"+n.categoryMatches[s];o.push(i+u)}}e=o}return e}function ZK(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let o=t[n];for(let a=0;a<e.length;a++){let i=e[a];if(o[i]===!0)return!1}}return!0}function BT(t,e){let r=E(t,i=>jl([i],1)),n=LT(r.length),o=E(r,i=>{let s={};return M(i,u=>{let l=ry(u.partialPath);M(l,c=>{s[c]=!0})}),s}),a=r;for(let i=1;i<=e;i++){let s=a;a=LT(s.length);for(let u=0;u<s.length;u++){let l=s[u];for(let c=0;c<l.length;c++){let d=l[c].partialPath,p=l[c].suffixDef,h=ry(d);if(ZK(o,h,u)||Z(p)||d.length===e){let A=n[u];if(Ql(A,d)===!1){A.push(d);for(let C=0;C<h.length;C++){let S=h[C];o[u][S]=!0}}}else{let A=jl(p,i+1,d);a[u]=a[u].concat(A),M(A,C=>{let S=ry(C.partialPath);M(S,g=>{o[u][g]=!0})})}}}}return n}function qa(t,e,r,n){let o=new Xl(t,_e.ALTERNATION,n);return e.accept(o),BT(o.result,r)}function Ua(t,e,r,n){let o=new Xl(t,r);e.accept(o);let a=o.result,s=new ny(e,t,r).startWalking(),u=new xe({definition:a}),l=new xe({definition:s});return BT([u,l],n)}function Ql(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let o=0;o<n.length;o++){let a=e[o],i=n[o];if((a===i||i.categoryMatchesMap[a.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function qT(t,e){return t.length<e.length&&Pt(t,(r,n)=>{let o=e[n];return r===o||o.categoryMatchesMap[r.tokenTypeIdx]})}function UT(t){return Pt(t,e=>Pt(e,r=>Pt(r,n=>Z(n.categoryMatches))))}function jT(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return E(e,r=>Object.assign({type:ct.CUSTOM_LOOKAHEAD_VALIDATION},r))}function VT(t,e,r,n){let o=xt(t,u=>eL(u,r)),a=iL(t,e,r),i=xt(t,u=>nL(u,r)),s=xt(t,u=>rL(u,t,n,r));return o.concat(a,i,s)}function eL(t,e){let r=new oy;t.accept(r);let n=r.allProductions,o=Gh(n,tL),a=nr(o,s=>s.length>1);return E(me(a),s=>{let u=yt(s),l=e.buildDuplicateFoundError(t,s),c=or(u),d={message:l,type:ct.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:c,occurrence:u.idx},p=XT(u);return p&&(d.parameter=p),d})}function tL(t){return`${or(t)}_#_${t.idx}_#_${XT(t)}`}function XT(t){return t instanceof ee?t.terminalType.name:t instanceof he?t.nonTerminalName:""}var oy=class extends qt{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function rL(t,e,r,n){let o=[];if(We(e,(i,s)=>s.name===t.name?i+1:i,0)>1){let i=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});o.push({message:i,type:ct.DUPLICATE_RULE_NAME,ruleName:t.name})}return o}function YT(t,e,r){let n=[],o;return Ne(e,t)||(o=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:o,type:ct.INVALID_RULE_OVERRIDE,ruleName:t})),n}function iy(t,e,r,n=[]){let o=[],a=Jl(e.definition);if(Z(a))return[];{let i=t.name;Ne(a,t)&&o.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:ct.LEFT_RECURSION,ruleName:i});let u=Yn(a,n.concat([t])),l=xt(u,c=>{let d=Ce(n);return d.push(c),iy(t,c,r,d)});return o.concat(l)}}function Jl(t){let e=[];if(Z(t))return e;let r=yt(t);if(r instanceof he)e.push(r.referencedRule);else if(r instanceof xe||r instanceof ye||r instanceof be||r instanceof ke||r instanceof we||r instanceof ae)e=e.concat(Jl(r.definition));else if(r instanceof Ae)e=et(E(r.definition,a=>Jl(a.definition)));else if(!(r instanceof ee))throw Error("non exhaustive match");let n=Do(r),o=t.length>1;if(n&&o){let a=tt(t);return e.concat(Jl(a))}else return e}var ds=class extends qt{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function QT(t,e){let r=new ds;t.accept(r);let n=r.alternations;return xt(n,a=>{let i=vn(a.definition);return xt(i,(s,u)=>{let l=Vl([s],[],An,1);return Z(l)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:a,emptyChoiceIdx:u}),type:ct.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:a.idx,alternative:u+1}]:[]})})}function JT(t,e,r){let n=new ds;t.accept(n);let o=n.alternations;return o=Qn(o,i=>i.ignoreAmbiguities===!0),xt(o,i=>{let s=i.idx,u=i.maxLookahead||e,l=qa(s,t,u,i),c=oL(l,i,t,r),d=aL(l,i,t,r);return c.concat(d)})}var ay=class extends qt{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function nL(t,e){let r=new ds;t.accept(r);let n=r.alternations;return xt(n,a=>a.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:a}),type:ct.TOO_MANY_ALTS,ruleName:t.name,occurrence:a.idx}]:[])}function ZT(t,e,r){let n=[];return M(t,o=>{let a=new ay;o.accept(a);let i=a.allProductions;M(i,s=>{let u=cs(s),l=s.maxLookahead||e,c=s.idx,p=Ua(c,o,u,l)[0];if(Z(et(p))){let h=r.buildEmptyRepetitionError({topLevelRule:o,repetition:s});n.push({message:h,type:ct.NO_NON_EMPTY_LOOKAHEAD,ruleName:o.name})}})}),n}function oL(t,e,r,n){let o=[],a=We(t,(s,u,l)=>(e.definition[l].ignoreAmbiguities===!0||M(u,c=>{let d=[l];M(t,(p,h)=>{l!==h&&Ql(p,c)&&e.definition[h].ignoreAmbiguities!==!0&&d.push(h)}),d.length>1&&!Ql(o,c)&&(o.push(c),s.push({alts:d,path:c}))}),s),[]);return E(a,s=>{let u=E(s.alts,c=>c+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:u,prefixPath:s.path}),type:ct.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:s.alts}})}function aL(t,e,r,n){let o=We(t,(i,s,u)=>{let l=E(s,c=>({idx:u,path:c}));return i.concat(l)},[]);return Jr(xt(o,i=>{if(e.definition[i.idx].ignoreAmbiguities===!0)return[];let u=i.idx,l=i.path,c=ht(o,p=>e.definition[p.idx].ignoreAmbiguities!==!0&&p.idx<u&&qT(p.path,l));return E(c,p=>{let h=[p.idx+1,u+1],v=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:h,prefixPath:p.path}),type:ct.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:v,alternatives:h}})}))}function iL(t,e,r){let n=[],o=E(e,a=>a.name);return M(t,a=>{let i=a.name;if(Ne(o,i)){let s=r.buildNamespaceConflictError(a);n.push({message:s,type:ct.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:i})}}),n}function eC(t){let e=Oa(t,{errMsgProvider:zT}),r={};return M(t.rules,n=>{r[n.name]=n}),KT(r,e.errMsgProvider)}function tC(t){return t=Oa(t,{errMsgProvider:Mr}),VT(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var rC="MismatchedTokenException",nC="NoViableAltException",oC="EarlyExitException",aC="NotAllInputParsedException",iC=[rC,nC,oC,aC];Object.freeze(iC);function Jn(t){return Ne(iC,t.name)}var ja=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},zo=class extends ja{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=rC}},ps=class extends ja{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=nC}},fs=class extends ja{constructor(e,r){super(e,r),this.name=aC}},hs=class extends ja{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=oC}};var sy={},ly="InRuleRecoveryException",uy=class extends Error{constructor(e){super(e),this.name=ly}},Zl=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=K(e,"recoveryEnabled")?e.recoveryEnabled:Ut.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=sL)}getTokenToInsert(e){let r=Oo(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,o){let a=this.findReSyncTokenType(),i=this.exportLexerState(),s=[],u=!1,l=this.LA(1),c=this.LA(1),d=()=>{let p=this.LA(0),h=this.errorMessageProvider.buildMismatchTokenMessage({expected:o,actual:l,previous:p,ruleName:this.getCurrRuleFullName()}),v=new zo(h,l,this.LA(0));v.resyncedTokens=vn(s),this.SAVE_ERROR(v)};for(;!u;)if(this.tokenMatcher(c,o)){d();return}else if(n.call(this)){d(),e.apply(this,r);return}else this.tokenMatcher(c,a)?u=!0:(c=this.SKIP_TOKEN(),this.addToResyncTokens(c,s));this.importLexerState(i)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new uy("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||Z(r))return!1;let n=this.LA(1);return en(r,a=>this.tokenMatcher(n,a))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return Ne(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let o=en(e,a=>ss(r,a));if(o!==void 0)return o;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return sy;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return E(e,(n,o)=>o===0?sy:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[o],inRule:this.shortRuleNameToFullName(e[o-1])})}flattenFollowSet(){let e=E(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return et(e)}getFollowSetFromFollowKey(e){if(e===sy)return[pr];let r=e.ruleName+e.idxInCallingRule+zl+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,pr)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return vn(r)}attemptInRepetitionRecovery(e,r,n,o,a,i,s){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),o=Ce(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:o,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return E(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function sL(t,e,r,n,o,a,i){let s=this.getKeyForAutomaticLookahead(n,o),u=this.firstAfterRepMap[s];if(u===void 0){let p=this.getCurrRuleFullName(),h=this.getGAstProductions()[p];u=new a(h,o).startWalking(),this.firstAfterRepMap[s]=u}let l=u.token,c=u.occurrence,d=u.isEndOfRule;this.RULE_STACK.length===1&&d&&l===void 0&&(l=pr,c=1),!(l===void 0||c===void 0)&&this.shouldInRepetitionRecoveryBeTried(l,c,i)&&this.tryInRepetitionRecovery(t,e,r,l)}function ec(t,e,r){return r|e|t}var xn=class{constructor(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:Ut.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(Z(r)){let n=this.validateEmptyOrAlternatives(e.rules),o=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),a=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...o,...a]}return r}validateNoLeftRecursion(e){return xt(e,r=>iy(r,r,Mr))}validateEmptyOrAlternatives(e){return xt(e,r=>QT(r,Mr))}validateAmbiguousAlternationAlternatives(e,r){return xt(e,n=>JT(n,r,Mr))}validateSomeNonEmptyLookaheadPath(e,r){return ZT(e,r,Mr)}buildLookaheadForAlternation(e){return FT(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,GT)}buildLookaheadForOptional(e){return WT(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,cs(e.prodType),HT)}};var rc=class{initLooksAhead(e){this.dynamicTokensEnabled=K(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Ut.dynamicTokensEnabled,this.maxLookahead=K(e,"maxLookahead")?e.maxLookahead:Ut.maxLookahead,this.lookaheadStrategy=K(e,"lookaheadStrategy")?e.lookaheadStrategy:new xn({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){M(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:o,option:a,repetitionMandatory:i,repetitionMandatoryWithSeparator:s,repetitionWithSeparator:u}=uL(r);M(n,l=>{let c=l.idx===0?"":l.idx;this.TRACE_INIT(`${or(l)}${c}`,()=>{let d=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:l.idx,rule:r,maxLookahead:l.maxLookahead||this.maxLookahead,hasPredicates:l.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),p=ec(this.fullRuleNameToShort[r.name],256,l.idx);this.setLaFuncCache(p,d)})}),M(o,l=>{this.computeLookaheadFunc(r,l.idx,768,"Repetition",l.maxLookahead,or(l))}),M(a,l=>{this.computeLookaheadFunc(r,l.idx,512,"Option",l.maxLookahead,or(l))}),M(i,l=>{this.computeLookaheadFunc(r,l.idx,1024,"RepetitionMandatory",l.maxLookahead,or(l))}),M(s,l=>{this.computeLookaheadFunc(r,l.idx,1536,"RepetitionMandatoryWithSeparator",l.maxLookahead,or(l))}),M(u,l=>{this.computeLookaheadFunc(r,l.idx,1280,"RepetitionWithSeparator",l.maxLookahead,or(l))})})})}computeLookaheadFunc(e,r,n,o,a,i){this.TRACE_INIT(`${i}${r===0?"":r}`,()=>{let s=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:a||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:o}),u=ec(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(u,s)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return ec(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},cy=class extends qt{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},tc=new cy;function uL(t){tc.reset(),t.accept(tc);let e=tc.dslMethods;return tc.reset(),e}function fy(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function hy(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function sC(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function uC(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var lL="name";function yy(t,e){Object.defineProperty(t,lL,{enumerable:!1,configurable:!0,writable:!1,value:e})}function cL(t,e){let r=Se(t),n=r.length;for(let o=0;o<n;o++){let a=r[o],i=t[a],s=i.length;for(let u=0;u<s;u++){let l=i[u];l.tokenTypeIdx===void 0&&this[l.name](l.children,e)}}}function lC(t,e){let r=function(){};yy(r,t+"BaseSemantics");let n={visit:function(o,a){if(F(o)&&(o=o[0]),!Et(o))return this[o.name](o.children,a)},validateVisitor:function(){let o=dL(this,e);if(!Z(o)){let a=E(o,i=>i.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${a.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function cC(t,e,r){let n=function(){};yy(n,t+"BaseSemanticsWithDefaults");let o=Object.create(r.prototype);return M(e,a=>{o[a]=cL}),n.prototype=o,n.prototype.constructor=n,n}var gy;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(gy||(gy={}));function dL(t,e){return pL(t,e)}function pL(t,e){let r=ht(e,o=>Ht(t[o])===!1),n=E(r,o=>({msg:`Missing visitor method: <${o}> on ${t.constructor.name} CST Visitor.`,type:gy.MISSING_METHOD,methodName:o}));return Jr(n)}var ic=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=K(e,"nodeLocationTracking")?e.nodeLocationTracking:Ut.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=Fe,this.cstFinallyStateUpdate=Fe,this.cstPostTerminal=Fe,this.cstPostNonTerminal=Fe,this.cstPostRule=Fe;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=hy,this.setNodeLocationFromNode=hy,this.cstPostRule=Fe,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=Fe,this.setNodeLocationFromNode=Fe,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=fy,this.setNodeLocationFromNode=fy,this.cstPostRule=Fe,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=Fe,this.setNodeLocationFromNode=Fe,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=Fe,this.setNodeLocationFromNode=Fe,this.cstPostRule=Fe,this.setInitialNodeLocation=Fe;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];sC(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];uC(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(Et(this.baseCstVisitorConstructor)){let e=lC(this.className,Se(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(Et(this.baseCstVisitorWithDefaultsConstructor)){let e=cC(this.className,Se(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var sc=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Va}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?Va:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var uc=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=Xa){if(Ne(this.definedRulesNames,e)){let i={message:Mr.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:ct.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(i)}this.definedRulesNames.push(e);let o=this.defineRule(e,r,n);return this[e]=o,o}OVERRIDE_RULE(e,r,n=Xa){let o=YT(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(o);let a=this.defineRule(e,r,n);return this[e]=a,a}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(o){if(Jn(o))return!1;throw o}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Ol(me(this.gastProductionsCache))}};var lc=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Ha,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},K(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(F(e)){if(Z(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(F(e))this.tokensMap=We(e,(a,i)=>(a[i.name]=i,a),{});else if(K(e,"modes")&&Pt(et(me(e.modes)),$T)){let a=et(me(e.modes)),i=za(a);this.tokensMap=We(i,(s,u)=>(s[u.name]=u,s),{})}else if(Le(e))this.tokensMap=Ce(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=pr;let n=K(e,"modes")?et(me(e.modes)):me(e),o=Pt(n,a=>Z(a.categoryMatches));this.tokenMatcher=o?Ha:An,Sn(me(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let o=K(n,"resyncEnabled")?n.resyncEnabled:Xa.resyncEnabled,a=K(n,"recoveryValueFunc")?n.recoveryValueFunc:Xa.recoveryValueFunc,i=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[i]=e,this.fullRuleNameToShort[e]=i;let s;return this.outputCst===!0?s=function(...c){try{this.ruleInvocationStateUpdate(i,e,this.subruleIdx),r.apply(this,c);let d=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(d),d}catch(d){return this.invokeRuleCatch(d,o,a)}finally{this.ruleFinallyStateUpdate()}}:s=function(...c){try{return this.ruleInvocationStateUpdate(i,e,this.subruleIdx),r.apply(this,c)}catch(d){return this.invokeRuleCatch(d,o,a)}finally{this.ruleFinallyStateUpdate()}},Object.assign(s,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let o=this.RULE_STACK.length===1,a=r&&!this.isBackTracking()&&this.recoveryEnabled;if(Jn(e)){let i=e;if(a){let s=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(s))if(i.resyncedTokens=this.reSyncTo(s),this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return n(e);else{if(this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,i.partialCstResult=u}throw i}}else{if(o)return this.moveToTerminatedState(),n(e);throw i}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let o=this.getLaFuncFromCache(n),a;if(typeof e!="function"){a=e.DEF;let i=e.GATE;if(i!==void 0){let s=o;o=()=>i.call(this)&&s.call(this)}}else a=e;if(o.call(this)===!0)return a.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let o=this.getLaFuncFromCache(n),a;if(typeof r!="function"){a=r.DEF;let i=r.GATE;if(i!==void 0){let s=o;o=()=>i.call(this)&&s.call(this)}}else a=r;if(o.call(this)===!0){let i=this.doSingleRepetition(a);for(;o.call(this)===!0&&i===!0;)i=this.doSingleRepetition(a)}else throw this.raiseEarlyExitException(e,_e.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],o,1024,e,Ul)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let o=r.DEF,a=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){o.call(this);let s=()=>this.tokenMatcher(this.LA(1),a);for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,s,o,ls],s,1536,e,ls)}else throw this.raiseEarlyExitException(e,_e.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let o=this.getLaFuncFromCache(n),a;if(typeof r!="function"){a=r.DEF;let s=r.GATE;if(s!==void 0){let u=o;o=()=>s.call(this)&&u.call(this)}}else a=r;let i=!0;for(;o.call(this)===!0&&i===!0;)i=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],o,768,e,ql,i)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let o=r.DEF,a=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){o.call(this);let s=()=>this.tokenMatcher(this.LA(1),a);for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,s,o,us],s,1280,e,us)}}repetitionSepSecondInternal(e,r,n,o,a){for(;n();)this.CONSUME(r),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,o,a],n,1536,e,a)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),o=F(e)?e:e.DEF,i=this.getLaFuncFromCache(n).call(this,o);if(i!==void 0)return o[i].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new fs(r,e))}}subruleInternal(e,r,n){let o;try{let a=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,o=e.apply(this,a),this.cstPostNonTerminal(o,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),o}catch(a){throw this.subruleInternalError(a,n,e.ruleName)}}subruleInternalError(e,r,n){throw Jn(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let o;try{let a=this.LA(1);this.tokenMatcher(a,e)===!0?(this.consumeToken(),o=a):this.consumeInternalError(e,a,n)}catch(a){o=this.consumeInternalRecovery(e,r,a)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,o),o}consumeInternalError(e,r,n){let o,a=this.LA(0);throw n!==void 0&&n.ERR_MSG?o=n.ERR_MSG:o=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:a,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new zo(o,r,a))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let o=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,o)}catch(a){throw a.name===ly?n:a}}else throw n}saveRecogState(){let e=this.errors,r=Ce(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),pr)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var cc=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=K(e,"errorMessageProvider")?e.errorMessageProvider:Ut.errorMessageProvider}SAVE_ERROR(e){if(Jn(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Ce(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Ce(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let o=this.getCurrRuleFullName(),a=this.getGAstProductions()[o],s=Ua(e,a,r,this.maxLookahead)[0],u=[];for(let c=1;c<=this.maxLookahead;c++)u.push(this.LA(c));let l=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:s,actual:u,previous:this.LA(0),customUserDescription:n,ruleName:o});throw this.SAVE_ERROR(new hs(l,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),o=this.getGAstProductions()[n],a=qa(e,o,this.maxLookahead),i=[];for(let l=1;l<=this.maxLookahead;l++)i.push(this.LA(l));let s=this.LA(0),u=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:a,actual:i,previous:s,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new ps(u,this.LA(1),s))}};var dc=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(Et(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return Vl([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=yt(e.ruleStack),o=this.getGAstProductions()[r];return new Bl(o,e).startWalking()}};var hc={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(hc);var dC=!0,pC=Math.pow(2,8)-1,hC=Hl({name:"RECORDING_PHASE_TOKEN",pattern:je.NA});Sn([hC]);var yC=Oo(hC,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(yC);var hL={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},pc=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,o){return this.consumeInternalRecord(n,e,o)},this[`SUBRULE${r}`]=function(n,o){return this.subruleInternalRecord(n,e,o)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return Va}topLevelRuleRecord(e,r){try{let n=new Bt({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return gs.call(this,ye,e,r)}atLeastOneInternalRecord(e,r){gs.call(this,be,r,e)}atLeastOneSepFirstInternalRecord(e,r){gs.call(this,ke,r,e,dC)}manyInternalRecord(e,r){gs.call(this,ae,r,e)}manySepFirstInternalRecord(e,r){gs.call(this,we,r,e,dC)}orInternalRecord(e,r){return yL.call(this,e,r)}subruleInternalRecord(e,r,n){if(fc(r),!e||K(e,"ruleName")===!1){let s=new Error(`<SUBRULE${fC(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let o=Zr(this.recordingProdStack),a=e.ruleName,i=new he({idx:r,nonTerminalName:a,label:n?.LABEL,referencedRule:void 0});return o.definition.push(i),this.outputCst?hL:hc}consumeInternalRecord(e,r,n){if(fc(r),!Qh(e)){let i=new Error(`<CONSUME${fC(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw i.KNOWN_RECORDER_ERROR=!0,i}let o=Zr(this.recordingProdStack),a=new ee({idx:r,terminalType:e,label:n?.LABEL});return o.definition.push(a),yC}};function gs(t,e,r,n=!1){fc(r);let o=Zr(this.recordingProdStack),a=Ht(e)?e:e.DEF,i=new t({definition:[],idx:r});return n&&(i.separator=e.SEP),K(e,"MAX_LOOKAHEAD")&&(i.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(i),a.call(this),o.definition.push(i),this.recordingProdStack.pop(),hc}function yL(t,e){fc(e);let r=Zr(this.recordingProdStack),n=F(t)===!1,o=n===!1?t:t.DEF,a=new Ae({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});K(t,"MAX_LOOKAHEAD")&&(a.maxLookahead=t.MAX_LOOKAHEAD);let i=ts(o,s=>Ht(s.GATE));return a.hasPredicates=i,r.definition.push(a),M(o,s=>{let u=new xe({definition:[]});a.definition.push(u),K(s,"IGNORE_AMBIGUITIES")?u.ignoreAmbiguities=s.IGNORE_AMBIGUITIES:K(s,"GATE")&&(u.ignoreAmbiguities=!0),this.recordingProdStack.push(u),s.ALT.call(this),this.recordingProdStack.pop()}),hc}function fC(t){return t===0?"":`${t}`}function fc(t){if(t<0||t>pC){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${pC+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var yc=class{initPerformanceTracer(e){if(K(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=Ut.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:o,value:a}=ns(r),i=o>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&i(`${n}<-- <${e}> time: ${o}ms`),this.traceInitIndent--,a}else return r()}};function gC(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(o=>{if(o==="constructor")return;let a=Object.getOwnPropertyDescriptor(n,o);a&&(a.get||a.set)?Object.defineProperty(t.prototype,o,a):t.prototype[o]=r.prototype[o]})})}var Va=Oo(pr,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Va);var Ut=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Cn,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Xa=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),ct;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(ct||(ct={}));function gc(t=void 0){return function(){return t}}var ms=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{os(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),M(this.definedRulesNames,o=>{let i=this[o].originalGrammarAction,s;this.TRACE_INIT(`${o} Rule`,()=>{s=this.topLevelRuleRecord(o,i)}),this.gastProductionsCache[o]=s})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=eC({rules:me(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(Z(n)&&this.skipValidations===!1){let o=tC({rules:me(this.gastProductionsCache),tokenTypes:me(this.tokensMap),errMsgProvider:Mr,grammarName:r}),a=jT({lookaheadStrategy:this.lookaheadStrategy,rules:me(this.gastProductionsCache),tokenTypes:me(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(o,a)}}),Z(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let o=uT(me(this.gastProductionsCache));this.resyncFollows=o}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var o,a;(a=(o=this.lookaheadStrategy).initialize)===null||a===void 0||a.call(o,{rules:me(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(me(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!Z(this.definitionErrors))throw e=E(this.definitionErrors,o=>o.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),K(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=K(r,"skipValidations")?r.skipValidations:Ut.skipValidations}};ms.DEFER_DEFINITION_ERRORS_HANDLING=!1;gC(ms,[Zl,rc,ic,sc,lc,uc,cc,dc,pc,yc]);var vs=class extends ms{constructor(e,r=Ut){let n=Ce(r);n.outputCst=!1,super(e,n)}};function Ko(t,e,r){return`${t.name}_${e}_${r}`}var Zn=1,mL=2,mC=4,vC=5;var Ja=7,vL=8,wL=9,AL=10,SL=11,wC=12,ws=class{constructor(e){this.target=e}isEpsilon(){return!1}},Ya=class extends ws{constructor(e,r){super(e),this.tokenType=r}},As=class extends ws{constructor(e){super(e)}isEpsilon(){return!0}},Qa=class extends ws{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function AC(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};TL(e,t);let r=t.length;for(let n=0;n<r;n++){let o=t[n],a=Lo(e,o,o);a!==void 0&&DL(e,o,a)}return e}function TL(t,e){let r=e.length;for(let n=0;n<r;n++){let o=e[n],a=gt(t,o,void 0,{type:mL}),i=gt(t,o,void 0,{type:Ja});a.stop=i,t.ruleToStartState.set(o,a),t.ruleToStopState.set(o,i)}}function SC(t,e,r){return r instanceof ee?vy(t,e,r.terminalType,r):r instanceof he?NL(t,e,r):r instanceof Ae?RL(t,e,r):r instanceof ye?$L(t,e,r):r instanceof ae?CL(t,e,r):r instanceof we?xL(t,e,r):r instanceof be?bL(t,e,r):r instanceof ke?kL(t,e,r):Lo(t,e,r)}function CL(t,e,r){let n=gt(t,e,r,{type:vC});eo(t,n);let o=Za(t,e,n,r,Lo(t,e,r));return CC(t,e,r,o)}function xL(t,e,r){let n=gt(t,e,r,{type:vC});eo(t,n);let o=Za(t,e,n,r,Lo(t,e,r)),a=vy(t,e,r.separator,r);return CC(t,e,r,o,a)}function bL(t,e,r){let n=gt(t,e,r,{type:mC});eo(t,n);let o=Za(t,e,n,r,Lo(t,e,r));return TC(t,e,r,o)}function kL(t,e,r){let n=gt(t,e,r,{type:mC});eo(t,n);let o=Za(t,e,n,r,Lo(t,e,r)),a=vy(t,e,r.separator,r);return TC(t,e,r,o,a)}function RL(t,e,r){let n=gt(t,e,r,{type:Zn});eo(t,n);let o=E(r.definition,i=>SC(t,e,i));return Za(t,e,n,r,...o)}function $L(t,e,r){let n=gt(t,e,r,{type:Zn});eo(t,n);let o=Za(t,e,n,r,Lo(t,e,r));return IL(t,e,r,o)}function Lo(t,e,r){let n=ht(E(r.definition,o=>SC(t,e,o)),o=>o!==void 0);return n.length===1?n[0]:n.length===0?void 0:EL(t,n)}function TC(t,e,r,n,o){let a=n.left,i=n.right,s=gt(t,e,r,{type:SL});eo(t,s);let u=gt(t,e,r,{type:wC});return a.loopback=s,u.loopback=s,t.decisionMap[Ko(e,o?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=s,ot(i,s),o===void 0?(ot(s,a),ot(s,u)):(ot(s,u),ot(s,o.left),ot(o.right,a)),{left:a,right:u}}function CC(t,e,r,n,o){let a=n.left,i=n.right,s=gt(t,e,r,{type:AL});eo(t,s);let u=gt(t,e,r,{type:wC}),l=gt(t,e,r,{type:wL});return s.loopback=l,u.loopback=l,ot(s,a),ot(s,u),ot(i,l),o!==void 0?(ot(l,u),ot(l,o.left),ot(o.right,a)):ot(l,s),t.decisionMap[Ko(e,o?"RepetitionWithSeparator":"Repetition",r.idx)]=s,{left:s,right:u}}function IL(t,e,r,n){let o=n.left,a=n.right;return ot(o,a),t.decisionMap[Ko(e,"Option",r.idx)]=o,n}function eo(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Za(t,e,r,n,...o){let a=gt(t,e,n,{type:vL,start:r});r.end=a;for(let s of o)s!==void 0?(ot(r,s.left),ot(s.right,a)):ot(r,a);let i={left:r,right:a};return t.decisionMap[Ko(e,PL(n),n.idx)]=r,i}function PL(t){if(t instanceof Ae)return"Alternation";if(t instanceof ye)return"Option";if(t instanceof ae)return"Repetition";if(t instanceof we)return"RepetitionWithSeparator";if(t instanceof be)return"RepetitionMandatory";if(t instanceof ke)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function EL(t,e){let r=e.length;for(let a=0;a<r-1;a++){let i=e[a],s;i.left.transitions.length===1&&(s=i.left.transitions[0]);let u=s instanceof Qa,l=s,c=e[a+1].left;i.left.type===Zn&&i.right.type===Zn&&s!==void 0&&(u&&l.followState===i.right||s.target===i.right)?(u?l.followState=c:s.target=c,_L(t,i.right)):ot(i.right,c)}let n=e[0],o=e[r-1];return{left:n.left,right:o.right}}function vy(t,e,r,n){let o=gt(t,e,n,{type:Zn}),a=gt(t,e,n,{type:Zn});return wy(o,new Ya(a,r)),{left:o,right:a}}function NL(t,e,r){let n=r.referencedRule,o=t.ruleToStartState.get(n),a=gt(t,e,r,{type:Zn}),i=gt(t,e,r,{type:Zn}),s=new Qa(o,n,i);return wy(a,s),{left:a,right:i}}function DL(t,e,r){let n=t.ruleToStartState.get(e);ot(n,r.left);let o=t.ruleToStopState.get(e);return ot(r.right,o),{left:n,right:o}}function ot(t,e){let r=new As(e);wy(t,r)}function gt(t,e,r,n){let o=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(o),o}function wy(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function _L(t,e){t.states.splice(t.states.indexOf(e),1)}var Ss={},ei=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=Ay(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return E(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function Ay(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function ML(t,e){let r={};return n=>{let o=n.toString(),a=r[o];return a!==void 0||(a={atnStartState:t,decision:e,states:{}},r[o]=a),a}}var mc=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},xC=new mc,Ts=class extends xn{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=AC(e.rules),this.dfas=OL(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:o,dynamicTokensEnabled:a}=e,i=this.dfas,s=this.logging,u=Ko(n,"Alternation",r),c=this.atn.decisionMap[u].decision,d=E(Yl({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),p=>E(p,h=>h[0]));if(bC(d,!1)&&!a){let p=We(d,(h,v,A)=>(M(v,C=>{C&&(h[C.tokenTypeIdx]=A,M(C.categoryMatches,S=>{h[S]=A}))}),h),{});return o?function(h){var v;let A=this.LA(1),C=p[A.tokenTypeIdx];if(h!==void 0&&C!==void 0){let S=(v=h[C])===null||v===void 0?void 0:v.GATE;if(S!==void 0&&S.call(this)===!1)return}return C}:function(){let h=this.LA(1);return p[h.tokenTypeIdx]}}else return o?function(p){let h=new mc,v=p===void 0?0:p.length;for(let C=0;C<v;C++){let S=p?.[C].GATE;h.set(C,S===void 0||S.call(this))}let A=Sy.call(this,i,c,h,s);return typeof A=="number"?A:void 0}:function(){let p=Sy.call(this,i,c,xC,s);return typeof p=="number"?p:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:o,dynamicTokensEnabled:a}=e,i=this.dfas,s=this.logging,u=Ko(n,o,r),c=this.atn.decisionMap[u].decision,d=E(Yl({maxLookahead:1,occurrence:r,prodType:o,rule:n}),p=>E(p,h=>h[0]));if(bC(d)&&d[0][0]&&!a){let p=d[0],h=et(p);if(h.length===1&&Z(h[0].categoryMatches)){let A=h[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===A}}else{let v=We(h,(A,C)=>(C!==void 0&&(A[C.tokenTypeIdx]=!0,M(C.categoryMatches,S=>{A[S]=!0})),A),{});return function(){let A=this.LA(1);return v[A.tokenTypeIdx]===!0}}}return function(){let p=Sy.call(this,i,c,xC,s);return typeof p=="object"?!1:p===0}}};function bC(t,e=!0){let r=new Set;for(let n of t){let o=new Set;for(let a of n){if(a===void 0){if(e)break;return!1}let i=[a.tokenTypeIdx].concat(a.categoryMatches);for(let s of i)if(r.has(s)){if(!o.has(s))return!1}else r.add(s),o.add(s)}}return!0}function OL(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=ML(t.decisionStates[n],n);return r}function Sy(t,e,r,n){let o=t[e](r),a=o.start;if(a===void 0){let s=jL(o.atnStartState);a=$C(o,RC(s)),o.start=a}return zL.apply(this,[o,a,r,n])}function zL(t,e,r,n){let o=e,a=1,i=[],s=this.LA(a++);for(;;){let u=HL(o,s);if(u===void 0&&(u=KL.apply(this,[t,o,s,a,r,n])),u===Ss)return GL(i,o,s);if(u.isAcceptState===!0)return u.prediction;o=u,i.push(s),s=this.LA(a++)}}function KL(t,e,r,n,o,a){let i=BL(e.configs,r,o);if(i.size===0)return kC(t,e,r,Ss),Ss;let s=RC(i),u=UL(i,o);if(u!==void 0)s.isAcceptState=!0,s.prediction=u,s.configs.uniqueAlt=u;else if(QL(i)){let l=ZS(i.alts);s.isAcceptState=!0,s.prediction=l,s.configs.uniqueAlt=l,LL.apply(this,[t,n,i.alts,a])}return s=kC(t,e,r,s),s}function LL(t,e,r,n){let o=[];for(let l=1;l<=e;l++)o.push(this.LA(l).tokenType);let a=t.atnStartState,i=a.rule,s=a.production,u=FL({topLevelRule:i,ambiguityIndices:r,production:s,prefixPath:o});n(u)}function FL(t){let e=E(t.prefixPath,o=>Tn(o)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${WL(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function WL(t){if(t instanceof he)return"SUBRULE";if(t instanceof ye)return"OPTION";if(t instanceof Ae)return"OR";if(t instanceof be)return"AT_LEAST_ONE";if(t instanceof ke)return"AT_LEAST_ONE_SEP";if(t instanceof we)return"MANY_SEP";if(t instanceof ae)return"MANY";if(t instanceof ee)return"CONSUME";throw Error("non exhaustive match")}function GL(t,e,r){let n=xt(e.configs.elements,a=>a.state.transitions),o=iT(n.filter(a=>a instanceof Ya).map(a=>a.tokenType),a=>a.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:o,tokenPath:t}}function HL(t,e){return t.edges[e.tokenTypeIdx]}function BL(t,e,r){let n=new ei,o=[];for(let i of t.elements){if(r.is(i.alt)===!1)continue;if(i.state.type===Ja){o.push(i);continue}let s=i.state.transitions.length;for(let u=0;u<s;u++){let l=i.state.transitions[u],c=qL(l,e);c!==void 0&&n.add({state:c,alt:i.alt,stack:i.stack})}}let a;if(o.length===0&&n.size===1&&(a=n),a===void 0){a=new ei;for(let i of n.elements)vc(i,a)}if(o.length>0&&!XL(a))for(let i of o)a.add(i);return a}function qL(t,e){if(t instanceof Ya&&ss(e,t.tokenType))return t.target}function UL(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function RC(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function kC(t,e,r,n){return n=$C(t,n),e.edges[r.tokenTypeIdx]=n,n}function $C(t,e){if(e===Ss)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function jL(t){let e=new ei,r=t.transitions.length;for(let n=0;n<r;n++){let a={state:t.transitions[n].target,alt:n,stack:[]};vc(a,e)}return e}function vc(t,e){let r=t.state;if(r.type===Ja){if(t.stack.length>0){let o=[...t.stack],i={state:o.pop(),alt:t.alt,stack:o};vc(i,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let o=0;o<n;o++){let a=r.transitions[o],i=VL(t,a);i!==void 0&&vc(i,e)}}function VL(t,e){if(e instanceof As)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Qa){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function XL(t){for(let e of t.elements)if(e.state.type===Ja)return!0;return!1}function YL(t){for(let e of t.elements)if(e.state.type!==Ja)return!1;return!0}function QL(t){if(YL(t))return!0;let e=JL(t.elements);return ZL(e)&&!e0(e)}function JL(t){let e=new Map;for(let r of t){let n=Ay(r,!1),o=e.get(n);o===void 0&&(o={},e.set(n,o)),o[r.alt]=!0}return e}function ZL(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function e0(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}Go();var Ps=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new ii(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Bo;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Ho(e.startOffset,e.image.length,ia(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.content.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new Ho(r.startOffset,r.image.length,ia(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:o}=r;for(let a=0;a<e.content.length;a++){let i=e.content[a],{offset:s,end:u}=i;if(Ft(i)&&n>s&&o<u){this.addHiddenToken(i,r);return}else if(o<=s){e.content.splice(a,0,r);return}}e.content.push(r)}},Es=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},Ho=class extends Es{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,o,a=!1){super(),this._hidden=a,this._offset=e,this._tokenType=o,this._length=r,this._range=n}},Bo=class extends Es{constructor(){super(...arguments),this.content=new xg(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:o}=r;this._rangeCache={start:n.start,end:o.end.line<n.start.line?n.start:o.end}}return this._rangeCache}else return{start:ue.create(0,0),end:ue.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},xg=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},ii=class extends Bo{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};var $c=Symbol("Datatype");function bg(t){return t.$type===$c}var IC="\u200B",PC=t=>t.endsWith(IC)?t:t+IC,Ns=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new kg(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},Ds=class extends Ns{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new Ps,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:Qi(e)?$c:hn(e),o=this.wrapper.DEFINE_RULE(PC(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=o),o}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let a={$type:e};this.stack.push(a),e===$c&&(a.value="")}let o;try{o=r(n)}catch{o=void 0}return!this.isRecording()&&o===void 0&&(o=this.construct()),o}}consume(e,r,n){let o=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(o)){let a=this.nodeBuilder.buildLeafNode(o,n),{assignment:i,isCrossRef:s}=this.getAssignment(n),u=this.current;if(i){let l=Tt(n)?o.image:this.converter.convert(o.image,a);this.assign(i.operator,i.feature,l,a,s)}else if(bg(u)){let l=o.image;Tt(n)||(l=this.converter.convert(l,a).toString()),u.value+=l}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,o){let a;this.isRecording()||(a=this.nodeBuilder.buildCompositeNode(n));let i=this.wrapper.wrapSubrule(e,r,o);!this.isRecording()&&a&&a.length>0&&this.performSubruleAssignment(i,n,a)}performSubruleAssignment(e,r,n){let{assignment:o,isCrossRef:a}=this.getAssignment(r);if(o)this.assign(o.operator,o.feature,e,n,a);else if(!o){let i=this.current;if(bg(i))i.value+=e.toString();else if(typeof e=="object"&&e){let s=e.$type,u=this.assignWithoutOverride(e,i);s&&(u.$type=s);let l=u;this.stack.pop(),this.stack.push(l)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let a=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(a)}let o={$type:e};this.stack.pop(),this.stack.push(o),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return Qu(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),bg(r)?this.converter.convert(r.value,r.$cstNode):(Bi(this.astReflection,r),r)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=cr(e,It);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?Dr(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,o,a){let i=this.current,s;switch(a&&typeof n=="string"?s=this.linker.buildReference(i,r,o,n):s=n,e){case"=":{i[r]=s;break}case"?=":{i[r]=!0;break}case"+=":Array.isArray(i[r])||(i[r]=[]),i[r].push(s)}}assignWithoutOverride(e,r){for(let[n,o]of Object.entries(r)){let a=e[n];a===void 0?e[n]=o:Array.isArray(a)&&Array.isArray(o)&&(o.push(...a),e[n]=o)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},Ic=class{buildMismatchTokenMessage(e){return Cn.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Cn.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Cn.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Cn.buildEarlyExitMessage(e)}},si=class extends Ic{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},_s=class extends Ns{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(PC(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,o){this.before(n),this.wrapper.wrapSubrule(e,r,o),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},r0={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new si},kg=class extends vs{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},r0),{lookaheadStrategy:n?new xn({maxLookahead:r.maxLookahead}):new Ts}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function Ec(t,e,r){return n0({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function n0(t,e){let r=Xi(e,!1),n=te(e.rules).filter(qe).filter(o=>r.has(o));for(let o of n){let a=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});a.rules.set(o.name,t.parser.rule(o,qo(a,o.definition)))}}function qo(t,e,r=!1){let n;if(Tt(e))n=c0(t,e);else if(Nr(e))n=o0(t,e);else if(It(e))n=qo(t,e.terminal);else if(Dr(e))n=EC(t,e);else if(Qt(e))n=a0(t,e);else if(ua(e))n=s0(t,e);else if(la(e))n=u0(t,e);else if(mr(e))n=l0(t,e);else if(Zf(e)){let o=t.consume++;n=()=>t.parser.consume(o,pr,e)}else throw new So(e.$cstNode,`Unexpected element type: ${e.$type}`);return NC(t,r?void 0:Pc(e),n,e.cardinality)}function o0(t,e){let r=hn(e);return()=>t.parser.action(r,e)}function a0(t,e){let r=e.rule.ref;if(qe(r)){let n=t.subrule++,o=e.arguments.length>0?i0(r,e.arguments):()=>({});return a=>t.parser.subrule(n,DC(t,r),e,o(a))}else if(Yt(r)){let n=t.consume++,o=Rg(t,r.name);return()=>t.parser.consume(n,o,e)}else if(r)Mn(r);else throw new So(e.$cstNode,`Undefined rule type: ${e.$type}`)}function i0(t,e){let r=e.map(n=>kn(n.value));return n=>{let o={};for(let a=0;a<r.length;a++){let i=t.parameters[a],s=r[a];o[i.name]=s(n)}return o}}function kn(t){if(Rf(t)){let e=kn(t.left),r=kn(t.right);return n=>e(n)||r(n)}else if(bf(t)){let e=kn(t.left),r=kn(t.right);return n=>e(n)&&r(n)}else if(Nf(t)){let e=kn(t.value);return r=>!e(r)}else if(Of(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(Cf(t)){let e=!!t.true;return()=>e}Mn(t)}function s0(t,e){if(e.elements.length===1)return qo(t,e.elements[0]);{let r=[];for(let o of e.elements){let a={ALT:qo(t,o,!0)},i=Pc(o);i&&(a.GATE=kn(i)),r.push(a)}let n=t.or++;return o=>t.parser.alternatives(n,r.map(a=>{let i={ALT:()=>a.ALT(o)},s=a.GATE;return s&&(i.GATE=()=>s(o)),i}))}}function u0(t,e){if(e.elements.length===1)return qo(t,e.elements[0]);let r=[];for(let s of e.elements){let u={ALT:qo(t,s,!0)},l=Pc(s);l&&(u.GATE=kn(l)),r.push(u)}let n=t.or++,o=(s,u)=>{let l=u.getRuleStack().join("-");return`uGroup_${s}_${l}`},a=s=>t.parser.alternatives(n,r.map((u,l)=>{let c={ALT:()=>!0},d=t.parser;c.ALT=()=>{if(u.ALT(s),!d.isRecording()){let h=o(n,d);d.unorderedGroups.get(h)||d.unorderedGroups.set(h,[]);let v=d.unorderedGroups.get(h);typeof v?.[l]>"u"&&(v[l]=!0)}};let p=u.GATE;return p?c.GATE=()=>p(s):c.GATE=()=>{let h=d.unorderedGroups.get(o(n,d));return!h?.[l]},c})),i=NC(t,Pc(e),a,"*");return s=>{i(s),t.parser.isRecording()||t.parser.unorderedGroups.delete(o(n,t.parser))}}function l0(t,e){let r=e.elements.map(n=>qo(t,n));return n=>r.forEach(o=>o(n))}function Pc(t){if(mr(t))return t.guardCondition}function EC(t,e,r=e.terminal){if(r)if(Qt(r)&&qe(r.rule.ref)){let n=t.subrule++;return o=>t.parser.subrule(n,DC(t,r.rule.ref),e,o)}else if(Qt(r)&&Yt(r.rule.ref)){let n=t.consume++,o=Rg(t,r.rule.ref.name);return()=>t.parser.consume(n,o,e)}else if(Tt(r)){let n=t.consume++,o=Rg(t,r.value);return()=>t.parser.consume(n,o,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=ol(e.type.ref),o=n?.terminal;if(!o)throw new Error("Could not find name assignment for type: "+hn(e.type.ref));return EC(t,e,o)}}function c0(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function NC(t,e,r,n){let o=e&&kn(e);if(!n)if(o){let a=t.or++;return i=>t.parser.alternatives(a,[{ALT:()=>r(i),GATE:()=>o(i)},{ALT:gc(),GATE:()=>!o(i)}])}else return r;if(n==="*"){let a=t.many++;return i=>t.parser.many(a,{DEF:()=>r(i),GATE:o?()=>o(i):void 0})}else if(n==="+"){let a=t.many++;if(o){let i=t.or++;return s=>t.parser.alternatives(i,[{ALT:()=>t.parser.atLeastOne(a,{DEF:()=>r(s)}),GATE:()=>o(s)},{ALT:gc(),GATE:()=>!o(s)}])}else return i=>t.parser.atLeastOne(a,{DEF:()=>r(i)})}else if(n==="?"){let a=t.optional++;return i=>t.parser.optional(a,{DEF:()=>r(i),GATE:o?()=>o(i):void 0})}else Mn(n)}function DC(t,e){let r=d0(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function d0(t,e){if(qe(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,o=e.$type;for(;!qe(n);)(mr(n)||ua(n)||la(n))&&(o=n.elements.indexOf(r).toString()+":"+o),r=n,n=n.$container;return o=n.name+":"+o,t.ruleNames.set(e,o),o}}function Rg(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function $g(t){let e=t.Grammar,r=t.parser.Lexer,n=new _s(t);return Ec(e,n,r.definition),n.finalize(),n}function Ig(t){let e=_C(t);return e.finalize(),e}function _C(t){let e=t.Grammar,r=t.parser.Lexer,n=new Ds(t);return Ec(e,n,r.definition)}var Ms=class{buildTokens(e,r){let n=te(Xi(e,!1)),o=this.buildTerminalTokens(n),a=this.buildKeywordTokens(n,o,r);return o.forEach(i=>{let s=i.PATTERN;typeof s=="object"&&s&&"test"in s&&tl(s)?a.unshift(i):a.push(i)}),a}buildTerminalTokens(e){return e.filter(Yt).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=zn(e),n=this.requiresCustomPattern(r)?this.regexPatternFunction(r):r,o={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(o.GROUP=tl(r)?je.SKIPPED:"hidden"),o}requiresCustomPattern(e){return e.flags.includes("u")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,o)=>(r.lastIndex=o,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(qe).flatMap(o=>Jt(o).filter(Tt)).distinct(o=>o.value).toArray().sort((o,a)=>a.value.length-o.value.length).map(o=>this.buildKeywordToken(o,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(xh(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,o)=>{let a=o?.PATTERN;return a?.source&&bh("^"+a.source+"$",e.value)&&n.push(o),n},[])}};var Os=class{convert(e,r){let n=r.grammarSource;if(Dr(n)&&(n=Yi(n)),Qt(n)){let o=n.rule.ref;if(!o)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(o,e,r)}return e}runConverter(e,r,n){var o;switch(e.name.toUpperCase()){case"INT":return rn.convertInt(r);case"STRING":return rn.convertString(r);case"ID":return rn.convertID(r)}switch((o=Dh(e))===null||o===void 0?void 0:o.toLowerCase()){case"number":return rn.convertNumber(r);case"boolean":return rn.convertBoolean(r);case"bigint":return rn.convertBigint(r);case"date":return rn.convertDate(r);default:return r}}},rn;(function(t){function e(l){let c="";for(let d=1;d<l.length-1;d++){let p=l.charAt(d);if(p==="\\"){let h=l.charAt(++d);c+=r(h)}else c+=p}return c}t.convertString=e;function r(l){switch(l){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return l}}function n(l){return l.charAt(0)==="^"?l.substring(1):l}t.convertID=n;function o(l){return parseInt(l)}t.convertInt=o;function a(l){return BigInt(l)}t.convertBigint=a;function i(l){return new Date(l)}t.convertDate=i;function s(l){return Number(l)}t.convertNumber=s;function u(l){return l.toLowerCase()==="true"}t.convertBoolean=u})(rn||(rn={}));var L={};ie(L,Lt(zs(),1));function zg(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}var Og=0,KC=10;function LC(){return Og=Date.now(),new L.CancellationTokenSource}function FC(t){KC=t}var Rn=Symbol("OperationCancelled");function nn(t){return t===Rn}async function Ge(t){if(t===L.CancellationToken.None)return;let e=Date.now();if(e-Og>=KC&&(Og=e,await zg()),t.isCancellationRequested)throw Rn}var Or=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};var Mc=class t{constructor(e,r,n,o){this._uri=e,this._languageId=r,this._version=n,this._content=o,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let o=HC(n.range),a=this.offsetAt(o.start),i=this.offsetAt(o.end);this._content=this._content.substring(0,a)+n.text+this._content.substring(i,this._content.length);let s=Math.max(o.start.line,0),u=Math.max(o.end.line,0),l=this._lineOffsets,c=WC(n.text,!1,a);if(u-s===c.length)for(let p=0,h=c.length;p<h;p++)l[p+s+1]=c[p];else c.length<1e4?l.splice(s+1,u-s,...c):this._lineOffsets=l=l.slice(0,s+1).concat(c,l.slice(u+1));let d=n.text.length-(i-a);if(d!==0)for(let p=s+1+c.length,h=l.length;p<h;p++)l[p]=l[p]+d}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=WC(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,o=r.length;if(o===0)return{line:0,character:e};for(;n<o;){let i=Math.floor((n+o)/2);r[i]>e?o=i:n=i+1}let a=n-1;return e=this.ensureBeforeEOL(e,r[a]),{line:a,character:e-r[a]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line];if(e.character<=0)return n;let o=e.line+1<r.length?r[e.line+1]:this._content.length,a=Math.min(n+e.character,o);return this.ensureBeforeEOL(a,n)}ensureBeforeEOL(e,r){for(;e>r&&GC(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},ro;(function(t){function e(o,a,i,s){return new Mc(o,a,i,s)}t.create=e;function r(o,a,i){if(o instanceof Mc)return o.update(a,i),o;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(o,a){let i=o.getText(),s=Kg(a.map(S0),(c,d)=>{let p=c.range.start.line-d.range.start.line;return p===0?c.range.start.character-d.range.start.character:p}),u=0,l=[];for(let c of s){let d=o.offsetAt(c.range.start);if(d<u)throw new Error("Overlapping edit");d>u&&l.push(i.substring(u,d)),c.newText.length&&l.push(c.newText),u=o.offsetAt(c.range.end)}return l.push(i.substr(u)),l.join("")}t.applyEdits=n})(ro||(ro={}));function Kg(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),o=t.slice(r);Kg(n,e),Kg(o,e);let a=0,i=0,s=0;for(;a<n.length&&i<o.length;)e(n[a],o[i])<=0?t[s++]=n[a++]:t[s++]=o[i++];for(;a<n.length;)t[s++]=n[a++];for(;i<o.length;)t[s++]=o[i++];return t}function WC(t,e,r=0){let n=e?[r]:[];for(let o=0;o<t.length;o++){let a=t.charCodeAt(o);GC(a)&&(a===13&&o+1<t.length&&t.charCodeAt(o+1)===10&&o++,n.push(r+o+1))}return n}function GC(t){return t===13||t===10}function HC(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function S0(t){let e=HC(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var BC;(()=>{"use strict";var t={470:o=>{function a(u){if(typeof u!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(u))}function i(u,l){for(var c,d="",p=0,h=-1,v=0,A=0;A<=u.length;++A){if(A<u.length)c=u.charCodeAt(A);else{if(c===47)break;c=47}if(c===47){if(!(h===A-1||v===1))if(h!==A-1&&v===2){if(d.length<2||p!==2||d.charCodeAt(d.length-1)!==46||d.charCodeAt(d.length-2)!==46){if(d.length>2){var C=d.lastIndexOf("/");if(C!==d.length-1){C===-1?(d="",p=0):p=(d=d.slice(0,C)).length-1-d.lastIndexOf("/"),h=A,v=0;continue}}else if(d.length===2||d.length===1){d="",p=0,h=A,v=0;continue}}l&&(d.length>0?d+="/..":d="..",p=2)}else d.length>0?d+="/"+u.slice(h+1,A):d=u.slice(h+1,A),p=A-h-1;h=A,v=0}else c===46&&v!==-1?++v:v=-1}return d}var s={resolve:function(){for(var u,l="",c=!1,d=arguments.length-1;d>=-1&&!c;d--){var p;d>=0?p=arguments[d]:(u===void 0&&(u=process.cwd()),p=u),a(p),p.length!==0&&(l=p+"/"+l,c=p.charCodeAt(0)===47)}return l=i(l,!c),c?l.length>0?"/"+l:"/":l.length>0?l:"."},normalize:function(u){if(a(u),u.length===0)return".";var l=u.charCodeAt(0)===47,c=u.charCodeAt(u.length-1)===47;return(u=i(u,!l)).length!==0||l||(u="."),u.length>0&&c&&(u+="/"),l?"/"+u:u},isAbsolute:function(u){return a(u),u.length>0&&u.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var u,l=0;l<arguments.length;++l){var c=arguments[l];a(c),c.length>0&&(u===void 0?u=c:u+="/"+c)}return u===void 0?".":s.normalize(u)},relative:function(u,l){if(a(u),a(l),u===l||(u=s.resolve(u))===(l=s.resolve(l)))return"";for(var c=1;c<u.length&&u.charCodeAt(c)===47;++c);for(var d=u.length,p=d-c,h=1;h<l.length&&l.charCodeAt(h)===47;++h);for(var v=l.length-h,A=p<v?p:v,C=-1,S=0;S<=A;++S){if(S===A){if(v>A){if(l.charCodeAt(h+S)===47)return l.slice(h+S+1);if(S===0)return l.slice(h+S)}else p>A&&(u.charCodeAt(c+S)===47?C=S:S===0&&(C=0));break}var g=u.charCodeAt(c+S);if(g!==l.charCodeAt(h+S))break;g===47&&(C=S)}var f="";for(S=c+C+1;S<=d;++S)S!==d&&u.charCodeAt(S)!==47||(f.length===0?f+="..":f+="/..");return f.length>0?f+l.slice(h+C):(h+=C,l.charCodeAt(h)===47&&++h,l.slice(h))},_makeLong:function(u){return u},dirname:function(u){if(a(u),u.length===0)return".";for(var l=u.charCodeAt(0),c=l===47,d=-1,p=!0,h=u.length-1;h>=1;--h)if((l=u.charCodeAt(h))===47){if(!p){d=h;break}}else p=!1;return d===-1?c?"/":".":c&&d===1?"//":u.slice(0,d)},basename:function(u,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');a(u);var c,d=0,p=-1,h=!0;if(l!==void 0&&l.length>0&&l.length<=u.length){if(l.length===u.length&&l===u)return"";var v=l.length-1,A=-1;for(c=u.length-1;c>=0;--c){var C=u.charCodeAt(c);if(C===47){if(!h){d=c+1;break}}else A===-1&&(h=!1,A=c+1),v>=0&&(C===l.charCodeAt(v)?--v==-1&&(p=c):(v=-1,p=A))}return d===p?p=A:p===-1&&(p=u.length),u.slice(d,p)}for(c=u.length-1;c>=0;--c)if(u.charCodeAt(c)===47){if(!h){d=c+1;break}}else p===-1&&(h=!1,p=c+1);return p===-1?"":u.slice(d,p)},extname:function(u){a(u);for(var l=-1,c=0,d=-1,p=!0,h=0,v=u.length-1;v>=0;--v){var A=u.charCodeAt(v);if(A!==47)d===-1&&(p=!1,d=v+1),A===46?l===-1?l=v:h!==1&&(h=1):l!==-1&&(h=-1);else if(!p){c=v+1;break}}return l===-1||d===-1||h===0||h===1&&l===d-1&&l===c+1?"":u.slice(l,d)},format:function(u){if(u===null||typeof u!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof u);return function(l,c){var d=c.dir||c.root,p=c.base||(c.name||"")+(c.ext||"");return d?d===c.root?d+p:d+"/"+p:p}(0,u)},parse:function(u){a(u);var l={root:"",dir:"",base:"",ext:"",name:""};if(u.length===0)return l;var c,d=u.charCodeAt(0),p=d===47;p?(l.root="/",c=1):c=0;for(var h=-1,v=0,A=-1,C=!0,S=u.length-1,g=0;S>=c;--S)if((d=u.charCodeAt(S))!==47)A===-1&&(C=!1,A=S+1),d===46?h===-1?h=S:g!==1&&(g=1):h!==-1&&(g=-1);else if(!C){v=S+1;break}return h===-1||A===-1||g===0||g===1&&h===A-1&&h===v+1?A!==-1&&(l.base=l.name=v===0&&p?u.slice(1,A):u.slice(v,A)):(v===0&&p?(l.name=u.slice(1,h),l.base=u.slice(1,A)):(l.name=u.slice(v,h),l.base=u.slice(v,A)),l.ext=u.slice(h,A)),v>0?l.dir=u.slice(0,v-1):p&&(l.dir="/"),l},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,o.exports=s}},e={};function r(o){var a=e[o];if(a!==void 0)return a.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.d=(o,a)=>{for(var i in a)r.o(a,i)&&!r.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:a[i]})},r.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a),r.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var n={};(()=>{let o;r.r(n),r.d(n,{URI:()=>p,Utils:()=>jt}),typeof process=="object"?o=process.platform==="win32":typeof navigator=="object"&&(o=navigator.userAgent.indexOf("Windows")>=0);let a=/^\w[\w\d+.-]*$/,i=/^\//,s=/^\/\//;function u(_,b){if(!_.scheme&&b)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${_.authority}", path: "${_.path}", query: "${_.query}", fragment: "${_.fragment}"}`);if(_.scheme&&!a.test(_.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(_.path){if(_.authority){if(!i.test(_.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(s.test(_.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let l="",c="/",d=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class p{static isUri(b){return b instanceof p||!!b&&typeof b.authority=="string"&&typeof b.fragment=="string"&&typeof b.path=="string"&&typeof b.query=="string"&&typeof b.scheme=="string"&&typeof b.fsPath=="string"&&typeof b.with=="function"&&typeof b.toString=="function"}scheme;authority;path;query;fragment;constructor(b,W,z,re,V,$=!1){typeof b=="object"?(this.scheme=b.scheme||l,this.authority=b.authority||l,this.path=b.path||l,this.query=b.query||l,this.fragment=b.fragment||l):(this.scheme=function(R,fe){return R||fe?R:"file"}(b,$),this.authority=W||l,this.path=function(R,fe){switch(R){case"https":case"http":case"file":fe?fe[0]!==c&&(fe=c+fe):fe=c}return fe}(this.scheme,z||l),this.query=re||l,this.fragment=V||l,u(this,$))}get fsPath(){return g(this,!1)}with(b){if(!b)return this;let{scheme:W,authority:z,path:re,query:V,fragment:$}=b;return W===void 0?W=this.scheme:W===null&&(W=l),z===void 0?z=this.authority:z===null&&(z=l),re===void 0?re=this.path:re===null&&(re=l),V===void 0?V=this.query:V===null&&(V=l),$===void 0?$=this.fragment:$===null&&($=l),W===this.scheme&&z===this.authority&&re===this.path&&V===this.query&&$===this.fragment?this:new v(W,z,re,V,$)}static parse(b,W=!1){let z=d.exec(b);return z?new v(z[2]||l,Q(z[4]||l),Q(z[5]||l),Q(z[7]||l),Q(z[9]||l),W):new v(l,l,l,l,l)}static file(b){let W=l;if(o&&(b=b.replace(/\\/g,c)),b[0]===c&&b[1]===c){let z=b.indexOf(c,2);z===-1?(W=b.substring(2),b=c):(W=b.substring(2,z),b=b.substring(z)||c)}return new v("file",W,b,l,l)}static from(b){let W=new v(b.scheme,b.authority,b.path,b.query,b.fragment);return u(W,!0),W}toString(b=!1){return f(this,b)}toJSON(){return this}static revive(b){if(b){if(b instanceof p)return b;{let W=new v(b);return W._formatted=b.external,W._fsPath=b._sep===h?b.fsPath:null,W}}return b}}let h=o?1:void 0;class v extends p{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=g(this,!1)),this._fsPath}toString(b=!1){return b?f(this,!0):(this._formatted||(this._formatted=f(this,!1)),this._formatted)}toJSON(){let b={$mid:1};return this._fsPath&&(b.fsPath=this._fsPath,b._sep=h),this._formatted&&(b.external=this._formatted),this.path&&(b.path=this.path),this.scheme&&(b.scheme=this.scheme),this.authority&&(b.authority=this.authority),this.query&&(b.query=this.query),this.fragment&&(b.fragment=this.fragment),b}}let A={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function C(_,b,W){let z,re=-1;for(let V=0;V<_.length;V++){let $=_.charCodeAt(V);if($>=97&&$<=122||$>=65&&$<=90||$>=48&&$<=57||$===45||$===46||$===95||$===126||b&&$===47||W&&$===91||W&&$===93||W&&$===58)re!==-1&&(z+=encodeURIComponent(_.substring(re,V)),re=-1),z!==void 0&&(z+=_.charAt(V));else{z===void 0&&(z=_.substr(0,V));let R=A[$];R!==void 0?(re!==-1&&(z+=encodeURIComponent(_.substring(re,V)),re=-1),z+=R):re===-1&&(re=V)}}return re!==-1&&(z+=encodeURIComponent(_.substring(re))),z!==void 0?z:_}function S(_){let b;for(let W=0;W<_.length;W++){let z=_.charCodeAt(W);z===35||z===63?(b===void 0&&(b=_.substr(0,W)),b+=A[z]):b!==void 0&&(b+=_[W])}return b!==void 0?b:_}function g(_,b){let W;return W=_.authority&&_.path.length>1&&_.scheme==="file"?`//${_.authority}${_.path}`:_.path.charCodeAt(0)===47&&(_.path.charCodeAt(1)>=65&&_.path.charCodeAt(1)<=90||_.path.charCodeAt(1)>=97&&_.path.charCodeAt(1)<=122)&&_.path.charCodeAt(2)===58?b?_.path.substr(1):_.path[1].toLowerCase()+_.path.substr(2):_.path,o&&(W=W.replace(/\//g,"\\")),W}function f(_,b){let W=b?S:C,z="",{scheme:re,authority:V,path:$,query:R,fragment:fe}=_;if(re&&(z+=re,z+=":"),(V||re==="file")&&(z+=c,z+=c),V){let le=V.indexOf("@");if(le!==-1){let Wr=V.substr(0,le);V=V.substr(le+1),le=Wr.lastIndexOf(":"),le===-1?z+=W(Wr,!1,!1):(z+=W(Wr.substr(0,le),!1,!1),z+=":",z+=W(Wr.substr(le+1),!1,!0)),z+="@"}V=V.toLowerCase(),le=V.lastIndexOf(":"),le===-1?z+=W(V,!1,!0):(z+=W(V.substr(0,le),!1,!0),z+=V.substr(le))}if($){if($.length>=3&&$.charCodeAt(0)===47&&$.charCodeAt(2)===58){let le=$.charCodeAt(1);le>=65&&le<=90&&($=`/${String.fromCharCode(le+32)}:${$.substr(3)}`)}else if($.length>=2&&$.charCodeAt(1)===58){let le=$.charCodeAt(0);le>=65&&le<=90&&($=`${String.fromCharCode(le+32)}:${$.substr(2)}`)}z+=W($,!0,!1)}return R&&(z+="?",z+=W(R,!1,!1)),fe&&(z+="#",z+=b?fe:C(fe,!1,!1)),z}function T(_){try{return decodeURIComponent(_)}catch{return _.length>3?_.substr(0,3)+T(_.substr(3)):_}}let P=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function Q(_){return _.match(P)?_.replace(P,b=>T(b)):_}var vt=r(470);let Qe=vt.posix||vt,lr="/";var jt;(function(_){_.joinPath=function(b,...W){return b.with({path:Qe.join(b.path,...W)})},_.resolvePath=function(b,...W){let z=b.path,re=!1;z[0]!==lr&&(z=lr+z,re=!0);let V=Qe.resolve(z,...W);return re&&V[0]===lr&&!b.authority&&(V=V.substring(1)),b.with({path:V})},_.dirname=function(b){if(b.path.length===0||b.path===lr)return b;let W=Qe.dirname(b.path);return W.length===1&&W.charCodeAt(0)===46&&(W=""),b.with({path:W})},_.basename=function(b){return Qe.basename(b.path)},_.extname=function(b){return Qe.extname(b.path)}})(jt||(jt={}))})(),BC=n})();var{URI:Me,Utils:di}=BC;var kt;(function(t){t.basename=di.basename,t.dirname=di.dirname,t.extname=di.extname,t.joinPath=di.joinPath,t.resolvePath=di.resolvePath;function e(n,o){return n?.toString()===o?.toString()}t.equals=e;function r(n,o){let a=typeof n=="string"?n:n.path,i=typeof o=="string"?o:o.path,s=a.split("/").filter(p=>p.length>0),u=i.split("/").filter(p=>p.length>0),l=0;for(;l<s.length&&s[l]===u[l];l++);let c="../".repeat(s.length-l),d=u.slice(l).join("/");return c+d}t.relative=r})(kt||(kt={}));var H;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(H||(H={}));var Ks=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,r=L.CancellationToken.None){let n=await this.fileSystemProvider.readFile(e);return this.createAsync(e,n,r)}fromTextDocument(e,r,n){return r=r??Me.parse(e.uri),n?this.createAsync(r,e,n):this.create(r,e)}fromString(e,r,n){return n?this.createAsync(r,e,n):this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}async createAsync(e,r,n){if(typeof r=="string"){let o=await this.parseAsync(e,r,n);return this.createLangiumDocument(o,e,void 0,r)}else{let o=await this.parseAsync(e,r.getText(),n);return this.createLangiumDocument(o,e,r)}}createLangiumDocument(e,r,n,o){let a;if(n)a={parseResult:e,uri:r,state:H.Parsed,references:[],textDocument:n};else{let i=this.createTextDocumentGetter(r,o);a={parseResult:e,uri:r,state:H.Parsed,references:[],get textDocument(){return i()}}}return e.value.$document=a,a}async update(e,r){var n,o;let a=(n=e.parseResult.value.$cstNode)===null||n===void 0?void 0:n.root.fullText,i=(o=this.textDocuments)===null||o===void 0?void 0:o.get(e.uri.toString()),s=i?i.getText():await this.fileSystemProvider.readFile(e.uri);if(i)Object.defineProperty(e,"textDocument",{value:i});else{let u=this.createTextDocumentGetter(e.uri,s);Object.defineProperty(e,"textDocument",{get:u})}return a!==s&&(e.parseResult=await this.parseAsync(e.uri,s,r),e.parseResult.value.$document=e),e.state=H.Parsed,e}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}parseAsync(e,r,n){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r,n)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,o;return()=>o??(o=ro.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}},Ls=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return te(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getDocument(e){let r=e.toString();return this.documentMap.get(r)}async getOrCreateDocument(e,r){let n=this.getDocument(e);return n||(n=await this.langiumDocumentFactory.fromUri(e,r),this.addDocument(n),n)}createDocument(e,r,n){if(n)return this.langiumDocumentFactory.fromString(r,e,n).then(o=>(this.addDocument(o),o));{let o=this.langiumDocumentFactory.fromString(r,e);return this.addDocument(o),o}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=H.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=H.Changed,this.documentMap.delete(r)),n}};var Fs=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=L.CancellationToken.None){for(let n of Zt(e.parseResult.value))await Ge(r),ca(n).forEach(o=>this.doLink(o,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let o=this.getCandidate(e);if(vo(o))n._ref=o;else if(n._nodeDescription=o,this.langiumDocuments().hasDocument(o.documentUri)){let a=this.loadAstNode(o);n._ref=a??this.createLinkingError(e,o)}}catch(o){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${o}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,o){let a=this,i={$refNode:n,$refText:o,get ref(){var s;if(Ie(this._ref))return this._ref;if(cf(this._nodeDescription)){let u=a.loadAstNode(this._nodeDescription);this._ref=u??a.createLinkingError({reference:i,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let u=a.getLinkedNode({reference:i,container:e,property:r});if(u.error&&Ke(e).state<H.ComputedScopes)return;this._ref=(s=u.node)!==null&&s!==void 0?s:u.error,this._nodeDescription=u.descr}return Ie(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return vo(this._ref)?this._ref:void 0}};return i}getLinkedNode(e){try{let r=this.getCandidate(e);if(vo(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getDocument(e.documentUri);if(r)return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=Ke(e.container);n.state<H.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let o=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${o} named '${e.reference.$refText}'.`,targetDescription:r})}};function Oc(t){return typeof t.name=="string"}var Ws=class{getName(e){if(Oc(e))return e.name}getNameNode(e){return On(e.$cstNode,"name")}};var Gs=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=Eh(e),n=e.astNode;if(r&&n){let o=n[r.feature];if(At(o))return o.ref;if(Array.isArray(o)){for(let a of o)if(At(a)&&a.$refNode&&a.$refNode.offset<=e.offset&&a.$refNode.end>=e.end)return a.ref}}if(n){let o=this.nameProvider.getNameNode(n);if(o&&(o===e||ff(e,o)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n??r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let a=this.getReferenceToSelf(e);a&&n.push(a)}let o=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(o=o.filter(a=>kt.equals(a.sourceUri,r.documentUri))),n.push(...o),te(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=Ke(e),o=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:o,targetUri:n.uri,targetPath:o,segment:Ao(r),local:!0}}}};var on=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return aa.sum(te(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let o=n.indexOf(r);if(o>=0)return n.length===1?this.map.delete(e):n.splice(o,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(o=>e(o,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return te(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return te(this.map.keys())}values(){return te(this.map.values()).flat()}entriesGroupedByKey(){return te(this.map.entries())}},jo=class{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(let[r,n]of e)this.set(r,n)}clear(){this.map.clear(),this.inverse.clear()}set(e,r){return this.map.set(e,r),this.inverse.set(r,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){let r=this.map.get(e);return r!==void 0?(this.map.delete(e),this.inverse.delete(r),!0):!1}};var Hs=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=L.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=xo,o=L.CancellationToken.None){let a=[];this.exportNode(e,a,r);for(let i of n(e))await Ge(o),this.exportNode(i,a,r);return a}exportNode(e,r,n){let o=this.nameProvider.getName(e);o&&r.push(this.descriptions.createDescription(e,o,n))}async computeLocalScopes(e,r=L.CancellationToken.None){let n=e.parseResult.value,o=new on;for(let a of Jt(n))await Ge(r),this.processNode(a,e,o);return o}processNode(e,r,n){let o=e.$container;if(o){let a=this.nameProvider.getName(e);a&&n.add(o,this.descriptions.createDescription(e,a,r))}}};var pi=class{constructor(e,r,n){var o;this.elements=e,this.outerScope=r,this.caseInsensitive=(o=n?.caseInsensitive)!==null&&o!==void 0?o:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},Bs=class{constructor(e,r,n){var o;this.elements=new Map,this.caseInsensitive=(o=n?.caseInsensitive)!==null&&o!==void 0?o:!1;for(let a of e){let i=this.caseInsensitive?a.name.toLowerCase():a.name;this.elements.set(i,a)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=te(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},T0={getElement(){},getAllElements(){return _n}};var fi=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},qs=class extends fi{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},Vo=class extends fi{constructor(e){super(),this.cache=new Map,this.converter=e??(r=>r)}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let o=this.cacheForContext(e);if(o.has(r))return o.get(r);if(n){let a=n();return o.set(r,a),a}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}},zc=class extends Vo{constructor(e){super(r=>r.toString()),this.onDispose(e.workspace.DocumentBuilder.onUpdate((r,n)=>{let o=r.concat(n);for(let a of o)this.clear(a)}))}},hi=class extends qs{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var Us=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new hi(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),o=Ke(e.container).precomputedScopes;if(o){let i=e.container;do{let s=o.get(i);s.length>0&&r.push(te(s).filter(u=>this.reflection.isSubtype(u.type,n))),i=i.$container}while(i)}let a=this.getGlobalScope(n,e);for(let i=r.length-1;i>=0;i--)a=this.createScope(r[i],a);return a}createScope(e,r,n){return new pi(te(e),r,n)}createScopeForNodes(e,r,n){let o=te(e).map(a=>{let i=this.nameProvider.getName(a);if(i)return this.descriptions.createDescription(a,i)}).nonNullable();return new pi(o,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new Bs(this.indexManager.allElements(e)))}};function Lg(t){return typeof t.$comment=="string"}function qC(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var js=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r={}){let n=r?.replacer,o=(i,s)=>this.replacer(i,s,r),a=n?(i,s)=>n(i,s,o):o;try{return this.currentDocument=Ke(e),JSON.stringify(e,a,r?.space)}finally{this.currentDocument=void 0}}deserialize(e,r={}){let n=JSON.parse(e);return this.linkNode(n,n,r),n}replacer(e,r,{refText:n,sourceText:o,textRegions:a,comments:i,uriConverter:s}){var u,l,c,d;if(!this.ignoreProperties.has(e))if(At(r)){let p=r.ref,h=n?r.$refText:void 0;if(p){let v=Ke(p),A="";this.currentDocument&&this.currentDocument!==v&&(s?A=s(v.uri,r):A=v.uri.toString());let C=this.astNodeLocator.getAstNodePath(p);return{$ref:`${A}#${C}`,$refText:h}}else return{$error:(l=(u=r.error)===null||u===void 0?void 0:u.message)!==null&&l!==void 0?l:"Could not resolve reference",$refText:h}}else if(Ie(r)){let p;if(a&&(p=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&p?.$textRegion&&(p.$textRegion.documentURI=(c=this.currentDocument)===null||c===void 0?void 0:c.uri.toString())),o&&!e&&(p??(p=Object.assign({},r)),p.$sourceText=(d=r.$cstNode)===null||d===void 0?void 0:d.text),i){p??(p=Object.assign({},r));let h=this.commentProvider.getComment(r);h&&(p.$comment=h.replace(/\r/g,""))}return p??r}else return r}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),o=n.assignments={};return Object.keys(e).filter(a=>!a.startsWith("$")).forEach(a=>{let i=pa(e.$cstNode,a).map(r);i.length!==0&&(o[a]=i)}),e}}linkNode(e,r,n,o,a,i){for(let[u,l]of Object.entries(e))if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];qC(d)?l[c]=this.reviveReference(e,u,r,d,n):Ie(d)&&this.linkNode(d,r,n,e,u,c)}else qC(l)?e[u]=this.reviveReference(e,u,r,l,n):Ie(l)&&this.linkNode(l,r,n,e,u);let s=e;s.$container=o,s.$containerProperty=a,s.$containerIndex=i}reviveReference(e,r,n,o,a){let i=o.$refText,s=o.$error;if(o.$ref){let u=this.getRefNode(n,o.$ref,a.uriConverter);if(Ie(u))return i||(i=this.nameProvider.getName(u)),{$refText:i??"",ref:u};s=u}if(s){let u={$refText:i??""};return u.error={container:e,property:r,message:s,reference:u},u}else return}getRefNode(e,r,n){try{let o=r.indexOf("#");if(o===0){let u=this.astNodeLocator.getAstNode(e,r.substring(1));return u||"Could not resolve path: "+r}if(o<0){let u=n?n(r):Me.parse(r),l=this.langiumDocuments.getDocument(u);return l?l.parseResult.value:"Could not find document for URI: "+r}let a=n?n(r.substring(0,o)):Me.parse(r.substring(0,o)),i=this.langiumDocuments.getDocument(a);if(!i)return"Could not find document for URI: "+r;if(o===r.length-1)return i.parseResult.value;let s=this.astNodeLocator.getAstNode(i.parseResult.value,r.substring(o+1));return s||"Could not resolve URI: "+r}catch(o){return String(o)}}};var Vs=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=kt.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};function Kc(t){return{code:t}}var yi;(function(t){t.all=["fast","slow","built-in"]})(yi||(yi={}));var Xs=class{constructor(e){this.entries=new on,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[o,a]of Object.entries(e)){let i=a;if(Array.isArray(i))for(let s of i){let u={check:this.wrapValidationException(s,r),category:n};this.addEntry(o,u)}else if(typeof i=="function"){let s={check:this.wrapValidationException(i,r),category:n};this.addEntry(o,s)}}}wrapValidationException(e,r){return async(n,o,a)=>{try{await e.call(r,n,o,a)}catch(i){if(nn(i))throw i;console.error("An error occurred during validation:",i);let s=i instanceof Error?i.message:String(i);i instanceof Error&&i.stack&&console.error(i.stack),o("error","An error occurred during validation: "+s,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=te(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(o=>r.includes(o.category))),n.map(o=>o.check)}};var Ys=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=L.CancellationToken.None){let o=e.parseResult,a=[];if(await Ge(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(o,a,r),r.stopAfterLexingErrors&&a.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===$n.LexingError})||(this.processParsingErrors(o,a,r),r.stopAfterParsingErrors&&a.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===$n.ParsingError}))||(this.processLinkingErrors(e,a,r),r.stopAfterLinkingErrors&&a.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===$n.LinkingError}))))return a;try{a.push(...await this.validateAst(o.value,r,n))}catch(i){if(nn(i))throw i;console.error("An error occurred during validation:",i)}return await Ge(n),a}processLexingErrors(e,r,n){for(let o of e.lexerErrors){let a={severity:Lc("error"),range:{start:{line:o.line-1,character:o.column-1},end:{line:o.line-1,character:o.column+o.length-1}},message:o.message,data:Kc($n.LexingError),source:this.getSource()};r.push(a)}}processParsingErrors(e,r,n){for(let o of e.parserErrors){let a;if(isNaN(o.token.startOffset)){if("previousToken"in o){let i=o.previousToken;if(isNaN(i.startOffset)){let s={line:0,character:0};a={start:s,end:s}}else{let s={line:i.endLine-1,character:i.endColumn};a={start:s,end:s}}}}else a=ia(o.token);if(a){let i={severity:Lc("error"),range:a,message:o.message,data:Kc($n.ParsingError),source:this.getSource()};r.push(i)}}}processLinkingErrors(e,r,n){for(let o of e.references){let a=o.error;if(a){let i={node:a.container,property:a.property,index:a.index,data:{code:$n.LinkingError,containerType:a.container.$type,property:a.property,refText:a.reference.$refText}};r.push(this.toDiagnostic("error",a.message,i))}}}async validateAst(e,r,n=L.CancellationToken.None){let o=[],a=(i,s,u)=>{o.push(this.toDiagnostic(i,s,u))};return await Promise.all(Zt(e).map(async i=>{await Ge(n);let s=this.validationRegistry.getChecks(i.$type,r.categories);for(let u of s)await u(i,a,n)})),o}toDiagnostic(e,r,n){return{message:r,range:UC(n),severity:Lc(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function UC(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=On(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=fa(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function Lc(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}var $n;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})($n||($n={}));var Qs=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=Ke(e)){r??(r=this.nameProvider.getName(e));let o=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${o} has no name.`);let a,i=()=>{var s;return a??(a=Ao((s=this.nameProvider.getNameNode(e))!==null&&s!==void 0?s:e.$cstNode))};return{node:e,name:r,get nameSegment(){return i()},selectionSegment:Ao(e.$cstNode),type:e.$type,documentUri:n.uri,path:o}}},Js=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=L.CancellationToken.None){let n=[],o=e.parseResult.value;for(let a of Zt(o))await Ge(r),ca(a).filter(i=>!vo(i)).forEach(i=>{let s=this.createDescription(i);s&&n.push(s)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let o=Ke(e.container).uri;return{sourceUri:o,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:Ao(n),local:kt.equals(r.documentUri,o)}}};var Zs=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((o,a)=>{if(!o||a.length===0)return o;let i=a.indexOf(this.indexSeparator);if(i>0){let s=a.substring(0,i),u=parseInt(a.substring(i+1)),l=o[s];return l?.[u]}return o[a]},e)}};var eu=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.serviceRegistry=e.ServiceRegistry}initialize(e){var r,n;this.workspaceConfig=(n=(r=e.capabilities.workspace)===null||r===void 0?void 0:r.configuration)!==null&&n!==void 0?n:!1}async initialized(e){if(this.workspaceConfig){if(e.register){let r=this.serviceRegistry.all;e.register({section:r.map(n=>this.toSectionName(n.LanguageMetaData.languageId))})}if(e.getConfiguration){let r=this.serviceRegistry.all.map(o=>({section:this.toSectionName(o.LanguageMetaData.languageId)})),n=await e.getConfiguration(r);r.forEach((o,a)=>{this.updateSectionConfiguration(o.section,n[a])})}}}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var Xo;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(Xo||(Xo={}));var tu=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new on,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=H.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=L.CancellationToken.None){var o,a;for(let i of e){let s=i.uri.toString();if(i.state===H.Validated){if(typeof r.validation=="boolean"&&r.validation)i.state=H.IndexedReferences,i.diagnostics=void 0,this.buildState.delete(s);else if(typeof r.validation=="object"){let u=this.buildState.get(s),l=(o=u?.result)===null||o===void 0?void 0:o.validationChecks;if(l){let d=((a=r.validation.categories)!==null&&a!==void 0?a:yi.all).filter(p=>!l.includes(p));d.length>0&&(this.buildState.set(s,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:d})},result:u.result}),i.state=H.IndexedReferences)}}}else this.buildState.delete(s)}this.currentState=H.Changed,await this.emitUpdate(e.map(i=>i.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=L.CancellationToken.None){this.currentState=H.Changed;for(let i of r)this.langiumDocuments.deleteDocument(i),this.buildState.delete(i.toString()),this.indexManager.remove(i);for(let i of e){if(!this.langiumDocuments.invalidateDocument(i)){let u=this.langiumDocumentFactory.fromModel({$type:"INVALID"},i);u.state=H.Changed,this.langiumDocuments.addDocument(u)}this.buildState.delete(i.toString())}let o=te(e).concat(r).map(i=>i.toString()).toSet();this.langiumDocuments.all.filter(i=>!o.has(i.uri.toString())&&this.shouldRelink(i,o)).forEach(i=>{this.serviceRegistry.getServices(i.uri).references.Linker.unlink(i),i.state=Math.min(i.state,H.ComputedScopes),i.diagnostics=void 0}),await this.emitUpdate(e,r),await Ge(n);let a=this.langiumDocuments.all.filter(i=>{var s;return i.state<H.Linked||!(!((s=this.buildState.get(i.uri.toString()))===null||s===void 0)&&s.completed)}).toArray();await this.buildDocuments(a,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),Xo.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,H.Parsed,n,a=>{this.langiumDocumentFactory.update(a,n)}),await this.runCancelable(e,H.IndexedContent,n,a=>this.indexManager.updateContent(a,n)),await this.runCancelable(e,H.ComputedScopes,n,async a=>{let i=this.serviceRegistry.getServices(a.uri).references.ScopeComputation;a.precomputedScopes=await i.computeLocalScopes(a,n)}),await this.runCancelable(e,H.Linked,n,a=>this.serviceRegistry.getServices(a.uri).references.Linker.link(a,n)),await this.runCancelable(e,H.IndexedReferences,n,a=>this.indexManager.updateReferences(a,n));let o=e.filter(a=>this.shouldValidate(a));await this.runCancelable(o,H.Validated,n,a=>this.validate(a,n));for(let a of e){let i=this.buildState.get(a.uri.toString());i&&(i.completed=!0)}}prepareBuild(e,r){for(let n of e){let o=n.uri.toString(),a=this.buildState.get(o);(!a||a.completed)&&this.buildState.set(o,{completed:!1,options:r,result:a?.result})}}async runCancelable(e,r,n,o){let a=e.filter(i=>i.state<r);for(let i of a)await Ge(n),await o(i),i.state=r;await this.notifyBuildPhase(a,r,n),this.currentState=r}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),Xo.create(()=>{this.buildPhaseListeners.delete(e,r)})}waitUntil(e,r,n){let o;if(r&&"path"in r?o=r:n=r,n??(n=L.CancellationToken.None),o){let a=this.langiumDocuments.getDocument(o);if(a&&a.state>e)return Promise.resolve(o)}return this.currentState>=e?Promise.resolve(void 0):n.isCancellationRequested?Promise.reject(Rn):new Promise((a,i)=>{let s=this.onBuildPhase(e,()=>{if(s.dispose(),u.dispose(),o){let l=this.langiumDocuments.getDocument(o);a(l?.uri)}else a(void 0)}),u=n.onCancellationRequested(()=>{s.dispose(),u.dispose(),i(Rn)})})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let o=this.buildPhaseListeners.get(r);for(let a of o)await Ge(n),await a(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,o;let a=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,i=this.getBuildOptions(e).validation,s=typeof i=="object"?i:void 0,u=await a.validateDocument(e,s,r);e.diagnostics?e.diagnostics.push(...u):e.diagnostics=u;let l=this.buildState.get(e.uri.toString());if(l){(n=l.result)!==null&&n!==void 0||(l.result={});let c=(o=s?.categories)!==null&&o!==void 0?o:yi.all;l.result.validationChecks?l.result.validationChecks.push(...c):l.result.validationChecks=[...c]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var ru=class{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new Vo,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=Ke(e).uri,o=[];return this.referenceIndex.forEach(a=>{a.forEach(i=>{kt.equals(i.targetUri,n)&&i.targetPath===r&&o.push(i)})}),te(o)}allElements(e,r){let n=te(this.symbolIndex.keys());return r&&(n=n.filter(o=>!r||r.has(o))),n.map(o=>this.getFileDescriptions(o,e)).flat()}getFileDescriptions(e,r){var n;return r?this.symbolByTypeIndex.get(e,r,()=>{var a;return((a=this.symbolIndex.get(e))!==null&&a!==void 0?a:[]).filter(s=>this.astReflection.isSubtype(s.type,r))}):(n=this.symbolIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){let r=e.toString();this.symbolIndex.delete(r),this.symbolByTypeIndex.clear(r),this.referenceIndex.delete(r)}async updateContent(e,r=L.CancellationToken.None){let o=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r),a=e.uri.toString();this.symbolIndex.set(a,o),this.symbolByTypeIndex.clear(a)}async updateReferences(e,r=L.CancellationToken.None){let o=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),o)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(o=>!o.local&&r.has(o.targetUri.toString())):!1}};var nu=class{constructor(e){this.initialBuildOptions={},this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}initialize(e){var r;this.folders=(r=e.workspaceFolders)!==null&&r!==void 0?r:void 0}initialized(e){return this.mutex.write(r=>{var n;return this.initializeWorkspace((n=this.folders)!==null&&n!==void 0?n:[],r)})}async initializeWorkspace(e,r=L.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(i=>i.LanguageMetaData.fileExtensions),o=[],a=i=>{o.push(i),this.langiumDocuments.hasDocument(i.uri)||this.langiumDocuments.addDocument(i)};await this.loadAdditionalDocuments(e,a),await Promise.all(e.map(i=>[i,this.getRootFolder(i)]).map(async i=>this.traverseFolder(...i,n,a))),await Ge(r),await this.documentBuilder.build(o,this.initialBuildOptions,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return Me.parse(e.uri)}async traverseFolder(e,r,n,o){let a=await this.fileSystemProvider.readDirectory(r);await Promise.all(a.map(async i=>{if(this.includeEntry(e,i,n)){if(i.isDirectory)await this.traverseFolder(e,i.uri,n,o);else if(i.isFile){let s=await this.langiumDocuments.getOrCreateDocument(i.uri);o(s)}}}))}includeEntry(e,r,n){let o=kt.basename(r.uri);if(o.startsWith("."))return!1;if(r.isDirectory)return o!=="node_modules"&&o!=="out";if(r.isFile){let a=kt.extname(r.uri);return n.includes(a)}return!1}};var ou=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=Fg(r)?Object.values(r):r;this.chevrotainLexer=new je(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(Fg(e))return e;let r=Wg(e)?Object.values(e.modes).flat():e,n={};return r.forEach(o=>n[o.name]=o),n}};function jC(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function Wg(t){return t&&"modes"in t&&"defaultMode"in t}function Fg(t){return!jC(t)&&!Wg(t)}Go();function Bg(t,e,r){let n,o;typeof t=="string"?(o=e,n=r):(o=t.range.start,n=e),o||(o=ue.create(0,0));let a=YC(t),i=Ug(n),s=x0({lines:a,position:o,options:i});return I0({index:0,tokens:s,position:o})}function qg(t,e){let r=Ug(e),n=YC(t);if(n.length===0)return!1;let o=n[0],a=n[n.length-1],i=r.start,s=r.end;return!!i?.exec(o)&&!!s?.exec(a)}function YC(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(Th)}var VC=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,C0=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function x0(t){var e,r,n;let o=[],a=t.position.line,i=t.position.character;for(let s=0;s<t.lines.length;s++){let u=s===0,l=s===t.lines.length-1,c=t.lines[s],d=0;if(u&&t.options.start){let h=(e=t.options.start)===null||e===void 0?void 0:e.exec(c);h&&(d=h.index+h[0].length)}else{let h=(r=t.options.line)===null||r===void 0?void 0:r.exec(c);h&&(d=h.index+h[0].length)}if(l){let h=(n=t.options.end)===null||n===void 0?void 0:n.exec(c);h&&(c=c.substring(0,h.index))}if(c=c.substring(0,$0(c)),Hg(c,d)>=c.length){if(o.length>0){let h=ue.create(a,i);o.push({type:"break",content:"",range:ne.create(h,h)})}}else{VC.lastIndex=d;let h=VC.exec(c);if(h){let v=h[0],A=h[1],C=ue.create(a,i+d),S=ue.create(a,i+d+v.length);o.push({type:"tag",content:A,range:ne.create(C,S)}),d+=v.length,d=Hg(c,d)}if(d<c.length){let v=c.substring(d),A=Array.from(v.matchAll(C0));o.push(...b0(A,v,a,i+d))}}a++,i=0}return o.length>0&&o[o.length-1].type==="break"?o.slice(0,-1):o}function b0(t,e,r,n){let o=[];if(t.length===0){let a=ue.create(r,n),i=ue.create(r,n+e.length);o.push({type:"text",content:e,range:ne.create(a,i)})}else{let a=0;for(let s of t){let u=s.index,l=e.substring(a,u);l.length>0&&o.push({type:"text",content:e.substring(a,u),range:ne.create(ue.create(r,a+n),ue.create(r,u+n))});let c=l.length+1,d=s[1];if(o.push({type:"inline-tag",content:d,range:ne.create(ue.create(r,a+c+n),ue.create(r,a+c+d.length+n))}),c+=d.length,s.length===4){c+=s[2].length;let p=s[3];o.push({type:"text",content:p,range:ne.create(ue.create(r,a+c+n),ue.create(r,a+c+p.length+n))})}else o.push({type:"text",content:"",range:ne.create(ue.create(r,a+c+n),ue.create(r,a+c+n))});a=u+s[0].length}let i=e.substring(a);i.length>0&&o.push({type:"text",content:i,range:ne.create(ue.create(r,a+n),ue.create(r,a+n+i.length))})}return o}var k0=/\S/,R0=/\s*$/;function Hg(t,e){let r=t.substring(e).match(k0);return r?e+r.index:t.length}function $0(t){let e=t.match(R0);if(e&&typeof e.index=="number")return e.index}function I0(t){var e,r,n,o;let a=ue.create(t.position.line,t.position.character);if(t.tokens.length===0)return new Fc([],ne.create(a,a));let i=[];for(;t.index<t.tokens.length;){let l=P0(t,i[i.length-1]);l&&i.push(l)}let s=(r=(e=i[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:a,u=(o=(n=i[i.length-1])===null||n===void 0?void 0:n.range.end)!==null&&o!==void 0?o:a;return new Fc(i,ne.create(s,u))}function P0(t,e){let r=t.tokens[t.index];if(r.type==="tag")return JC(t,!1);if(r.type==="text"||r.type==="inline-tag")return QC(t);E0(r,e),t.index++}function E0(t,e){if(e){let r=new Wc("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function QC(t){let e=t.tokens[t.index],r=e,n=e,o=[];for(;e&&e.type!=="break"&&e.type!=="tag";)o.push(N0(t)),n=e,e=t.tokens[t.index];return new iu(o,ne.create(r.range.start,n.range.end))}function N0(t){return t.tokens[t.index].type==="inline-tag"?JC(t,!0):ZC(t)}function JC(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),o=t.tokens[t.index];if(o?.type==="text")if(e){let a=ZC(t);return new au(n,new iu([a],a.range),e,ne.create(r.range.start,a.range.end))}else{let a=QC(t);return new au(n,a,e,ne.create(r.range.start,a.range.end))}else{let a=r.range;return new au(n,new iu([],a),e,a)}}function ZC(t){let e=t.tokens[t.index++];return new Wc(e.content,e.range)}function Ug(t){if(!t)return Ug({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:Gg(e,!0),end:Gg(r,!1),line:Gg(n,!0)}}function Gg(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?$o(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var Fc=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=XC(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let o=n.toMarkdown(e);r+=XC(r)+o}return r.trim()}},au=class{constructor(e,r,n,o){this.name=e,this.content=r,this.inline=n,this.range=o}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e?.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let a=D0(this.name,r,e??{});if(typeof a=="string")return a}let n="";e?.tag==="italic"||e?.tag===void 0?n="*":e?.tag==="bold"?n="**":e?.tag==="bold-italic"&&(n="***");let o=`${n}@${this.name}${n}`;return this.content.inlines.length===1?o=`${o} \u2014 ${r}`:this.content.inlines.length>1&&(o=`${o}
${r}`),this.inline?`{${o}}`:o}};function D0(t,e,r){var n,o;if(t==="linkplain"||t==="linkcode"||t==="link"){let a=e.indexOf(" "),i=e;if(a>0){let u=Hg(e,a);i=e.substring(u),e=e.substring(0,a)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(i=`\`${i}\``),(o=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,i))!==null&&o!==void 0?o:_0(e,i)}}function _0(t,e){try{return Me.parse(t,!0),`[${e}](${t})`}catch{return t}}var iu=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],o=this.inlines[r+1];e+=n.toString(),o&&o.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let o=this.inlines[n],a=this.inlines[n+1];r+=o.toMarkdown(e),a&&a.range.start.line>o.range.start.line&&(r+=`
`)}return r}},Wc=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function XC(t){return t.endsWith(`
`)?`
`:`

`}var su=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&qg(r))return Bg(r).toMarkdown({renderLink:(o,a)=>this.documentationLinkRenderer(e,o,a),renderTag:o=>this.documentationTagRenderer(e,o)})}documentationLinkRenderer(e,r,n){var o;let a=(o=this.findNameInPrecomputedScopes(e,r))!==null&&o!==void 0?o:this.findNameInGlobalScope(e,r);if(a&&a.nameSegment){let i=a.nameSegment.range.start.line+1,s=a.nameSegment.range.start.character+1,u=a.documentUri.with({fragment:`L${i},${s}`});return`[${n}](${u.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let o=Ke(e).precomputedScopes;if(!o)return;let a=e;do{let s=o.get(a).find(u=>u.name===r);if(s)return s;a=a.$container}while(a)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(o=>o.name===r)}};var uu=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return Lg(e)?e.$comment:(r=hf(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};var Ve={};ie(Ve,Lt(Uo(),1));var lu=class{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e){return Promise.resolve(this.syncParser.parse(e))}},jg=class{constructor(e){this.threadCount=8,this.terminationDelay=200,this.workerPool=[],this.queue=[],this.hydrator=e.serializer.Hydrator}initializeWorkers(){for(;this.workerPool.length<this.threadCount;){let e=this.createWorker();e.onReady(()=>{if(this.queue.length>0){let r=this.queue.shift();r&&(e.lock(),r.resolve(e))}}),this.workerPool.push(e)}}async parse(e,r){let n=await this.acquireParserWorker(r),o=new Or,a,i=r.onCancellationRequested(()=>{a=setTimeout(()=>{this.terminateWorker(n)},this.terminationDelay)});return n.parse(e).then(s=>{s.value=this.hydrator.hydrate(s.value),o.resolve(s)}).catch(s=>{o.reject(s)}).finally(()=>{i.dispose(),clearTimeout(a)}),o.promise}terminateWorker(e){e.terminate();let r=this.workerPool.indexOf(e);r>=0&&this.workerPool.splice(r,1)}async acquireParserWorker(e){this.initializeWorkers();for(let n of this.workerPool)if(n.ready)return n.lock(),n;let r=new Or;return e.onCancellationRequested(()=>{let n=this.queue.indexOf(r);n>=0&&this.queue.splice(n,1),r.reject("OperationCancelled")}),this.queue.push(r),r.promise}},Vg=class{get ready(){return this._ready}get onReady(){return this.onReadyEmitter.event}constructor(e,r,n,o){this.onReadyEmitter=new Ve.Emitter,this.deferred=new Or,this._ready=!0,this._parsing=!1,this.sendMessage=e,this._terminate=o,r(a=>{let i=a;this.deferred.resolve(i),this.unlock()}),n(a=>{this.deferred.reject(a),this.unlock()})}terminate(){this.deferred.reject(Rn),this._terminate()}lock(){this._ready=!1}unlock(){this._parsing=!1,this._ready=!0,this.onReadyEmitter.fire()}parse(e){if(this._parsing)throw new Error("Parser worker is busy");return this._parsing=!0,this.deferred=new Or,this.sendMessage(e),this.deferred.promise}};var cu=class{constructor(){this.previousTokenSource=new L.CancellationTokenSource,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();let r=new L.CancellationTokenSource;return this.previousTokenSource=r,this.enqueue(this.writeQueue,e,r.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,r,n){let o=new Or,a={action:r,deferred:o,cancellationToken:n??L.CancellationToken.None};return e.push(a),this.performNextOperation(),o.promise}async performNextOperation(){if(!this.done)return;let e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:r,deferred:n,cancellationToken:o})=>{try{let a=await Promise.resolve().then(()=>r(o));n.resolve(a)}catch(a){nn(a)?n.resolve(void 0):n.reject(a)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}};var du=class{constructor(e){this.grammarElementIdMap=new jo,this.tokenTypeIdMap=new jo,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return this.dehydrateAstNode(e,this.createDehyrationContext(e))}createDehyrationContext(e){let r=new Map,n=new Map;for(let o of Zt(e))r.set(o,{});if(e.$cstNode)for(let o of wo(e.$cstNode))n.set(o,{});return{astNodes:r,cstNodes:n}}dehydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(n.$cstNode=this.dehydrateCstNode(e.$cstNode,r));for(let[o,a]of Object.entries(e))if(!o.startsWith("$"))if(Array.isArray(a)){let i=[];n[o]=i;for(let s of a)Ie(s)?i.push(this.dehydrateAstNode(s,r)):At(s)?i.push(this.dehydrateReference(s,r)):i.push(s)}else Ie(a)?n[o]=this.dehydrateAstNode(a,r):At(a)?n[o]=this.dehydrateReference(a,r):a!==void 0&&(n[o]=a);return n}dehydrateReference(e,r){let n={};return n.$refText=e.$refText,e.$refNode&&(n.$refNode=r.cstNodes.get(e.$refNode)),n}dehydrateCstNode(e,r){let n=r.cstNodes.get(e);return Li(e)?n.fullText=e.fullText:n.grammarSource=this.getGrammarElementId(e.grammarSource),n.hidden=e.hidden,n.astNode=r.astNodes.get(e.astNode),Ft(e)?n.content=e.content.map(o=>this.dehydrateCstNode(o,r)):Er(e)&&(n.tokenType=e.tokenType.name,n.offset=e.offset,n.length=e.length,n.startLine=e.range.start.line,n.startColumn=e.range.start.character,n.endLine=e.range.end.line,n.endColumn=e.range.end.character),n}hydrate(e){let r=this.createHydrationContext(e);return"$cstNode"in e&&this.hydrateCstNode(e.$cstNode,r),this.hydrateAstNode(e,r)}createHydrationContext(e){let r=new Map,n=new Map;for(let o of Zt(e))r.set(o,{});if(e.$cstNode)for(let o of wo(e.$cstNode)){let a;"fullText"in o?a=new ii(o.fullText):"content"in o?a=new Bo:"tokenType"in o&&(a=this.hydrateCstLeafNode(o)),a&&n.set(o,a)}return{astNodes:r,cstNodes:n}}hydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode&&(n.$cstNode=r.cstNodes.get(e.$cstNode));for(let[o,a]of Object.entries(e))if(!o.startsWith("$"))if(Array.isArray(a)){let i=[];n[o]=i;for(let s of a)Ie(s)?i.push(this.setParent(this.hydrate(s),n)):At(s)?i.push(this.hydrateReference(s,n,o,r)):i.push(s)}else Ie(a)?n[o]=this.setParent(this.hydrate(a),n):At(a)?n[o]=this.hydrateReference(a,n,o,r):a!==void 0&&(n[o]=a);return n}setParent(e,r){return e.$container=r,e}hydrateReference(e,r,n,o){return this.linker.buildReference(r,n,o.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,r,n=0){let o=r.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(o.grammarSource=this.getGrammarElement(e.grammarSource)),o.astNode=r.astNodes.get(e.astNode),Ft(o))for(let a of e.content){let i=this.hydrateCstNode(a,r,n++);o.content.push(i)}return o}hydrateCstLeafNode(e){let r=this.getTokenType(e.tokenType),n=e.offset,o=e.length,a=e.startLine,i=e.startColumn,s=e.endLine,u=e.endColumn,l=e.hidden;return new Ho(n,o,{start:{line:a,character:i},end:{line:s,character:u}},r,l)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){var r;return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),(r=this.grammarElementIdMap.get(e))!==null&&r!==void 0?r:-1}getGrammarElement(e){this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap();let r=this.grammarElementIdMap.getKey(e);if(r)return r;throw new Error("Invalid grammar element id: "+e)}createGrammarElementIdMap(){let e=0;for(let r of Zt(this.grammar))To(r)&&this.grammarElementIdMap.set(r,e++)}};function pu(t){return{documentation:{CommentProvider:e=>new uu(e),DocumentationProvider:e=>new su(e)},parser:{AsyncParser:e=>new lu(e),GrammarConfig:e=>Mh(e),LangiumParser:e=>Ig(e),CompletionParser:e=>$g(e),ValueConverter:()=>new Os,TokenBuilder:()=>new Ms,Lexer:e=>new ou(e),ParserErrorMessageProvider:()=>new si},workspace:{AstNodeLocator:()=>new Zs,AstNodeDescriptionProvider:e=>new Qs(e),ReferenceDescriptionProvider:e=>new Js(e)},references:{Linker:e=>new Fs(e),NameProvider:()=>new Ws,ScopeProvider:e=>new Us(e),ScopeComputation:e=>new Hs(e),References:e=>new Gs(e)},serializer:{Hydrator:e=>new du(e),JsonSerializer:e=>new js(e)},validation:{DocumentValidator:e=>new Ys(e),ValidationRegistry:e=>new Xs(e)},shared:()=>t.shared}}function fu(t){return{ServiceRegistry:()=>new Vs,workspace:{LangiumDocuments:e=>new Ls(e),LangiumDocumentFactory:e=>new Ks(e),DocumentBuilder:e=>new tu(e),IndexManager:e=>new ru(e),WorkspaceManager:e=>new nu(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new cu,ConfigurationProvider:e=>new eu(e)}}}var gi;(function(t){t.merge=(e,r)=>Gc(Gc({},e),r)})(gi||(gi={}));function Yo(t,e,r,n,o,a,i,s,u){let l=[t,e,r,n,o,a,i,s,u].reduce(Gc,{});return rx(l)}var Xg=Symbol("isProxy");function hu(t){if(t&&t[Xg])for(let e of Object.values(t))hu(e);return t}function rx(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,o)=>tx(n,o,t,e||r),getOwnPropertyDescriptor:(n,o)=>(tx(n,o,t,e||r),Object.getOwnPropertyDescriptor(n,o)),has:(n,o)=>o in t,ownKeys:()=>[...Reflect.ownKeys(t),Xg]});return r[Xg]=!0,r}var ex=Symbol();function tx(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===ex)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let o=r[e];t[e]=ex;try{t[e]=typeof o=="function"?o(n):rx(o,n)}catch(a){throw t[e]=a instanceof Error?a:void 0,a}return t[e]}else return}function Gc(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let o=t[r];o!==null&&n!==null&&typeof o=="object"&&typeof n=="object"?t[r]=Gc(o,n):t[r]=n}}return t}var ce={};Dn(ce,{AstUtils:()=>Ju,BiMap:()=>jo,Cancellation:()=>L,ContextCache:()=>Vo,CstUtils:()=>Hu,DONE_RESULT:()=>St,Deferred:()=>Or,Disposable:()=>Xo,DisposableCache:()=>fi,DocumentCache:()=>zc,EMPTY_STREAM:()=>_n,ErrorWithLocation:()=>So,GrammarUtils:()=>al,MultiMap:()=>on,OperationCancelled:()=>Rn,Reduction:()=>aa,RegExpUtils:()=>rl,SimpleCache:()=>qs,StreamImpl:()=>Wt,TreeStreamImpl:()=>gr,URI:()=>Me,UriUtils:()=>kt,WorkspaceCache:()=>hi,assertUnreachable:()=>Mn,delayNextTick:()=>zg,interruptAndCheck:()=>Ge,isOperationCancelled:()=>nn,loadGrammarFromJson:()=>Bc,setInterruptionPeriod:()=>FC,startCancelableOperation:()=>LC,stream:()=>te});ie(ce,Ve);var Hc=class{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}},yu={fileSystemProvider:()=>new Hc};var M0={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},O0={AstReflection:()=>new sa};function z0(){let t=Yo(fu(yu),O0),e=Yo(pu({shared:t}),M0);return t.ServiceRegistry.register(e),e}function Bc(t){var e;let r=z0(),n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,Me.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}ie(at,ce);var Mi=Lt(yr(),1);function _v(t,e){let r={stacks:t,tokens:e};return $W(r),r.stacks.flat().forEach(o=>{o.property=void 0}),y$(r.stacks).map(o=>o[o.length-1])}function Mv(t){let{next:e,cardinalities:r,visited:n,plus:o}=t,a=[],i=e.feature;if(n.has(i))return[];n.add(i);let s,u=i;for(;u.$container;)if(mr(u.$container)){s=u.$container;break}else if(To(u.$container))u=u.$container;else break;if(Nh(u.cardinality)){let l=_i({next:{feature:u,type:e.type},cardinalities:r,visited:n,plus:o});for(let c of l)o.add(c.feature);a.push(...l)}if(s){let l=s.elements.indexOf(u);l!==void 0&&l<s.elements.length-1&&a.push(...h$({feature:s,type:e.type},l+1,r,n,o)),a.every(c=>Io(c.feature.cardinality,c.feature)||Io(r.get(c.feature))||o.has(c.feature))&&a.push(...Mv({next:{feature:s,type:e.type},cardinalities:r,visited:n,plus:o}))}return a}function Qd(t){return Ie(t)&&(t={feature:t}),_i({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function _i(t){var e,r,n;let{next:o,cardinalities:a,visited:i,plus:s}=t;if(o===void 0)return[];let{feature:u,type:l}=o;if(mr(u)){if(i.has(u))return[];i.add(u)}if(mr(u))return h$(o,0,a,i,s).map(c=>Yd(c,u.cardinality,a));if(ua(u)||la(u))return u.elements.flatMap(c=>_i({next:{feature:c,type:l,property:o.property},cardinalities:a,visited:i,plus:s})).map(c=>Yd(c,u.cardinality,a));if(It(u)){let c={feature:u.terminal,type:l,property:(e=o.property)!==null&&e!==void 0?e:u.feature};return _i({next:c,cardinalities:a,visited:i,plus:s}).map(d=>Yd(d,u.cardinality,a))}else{if(Nr(u))return Mv({next:{feature:u,type:hn(u),property:(r=o.property)!==null&&r!==void 0?r:u.feature},cardinalities:a,visited:i,plus:s});if(Qt(u)&&qe(u.rule.ref)){let c=u.rule.ref,d={feature:c.definition,type:c.fragment||c.dataType?void 0:(n=Po(c))!==null&&n!==void 0?n:c.name,property:o.property};return _i({next:d,cardinalities:a,visited:i,plus:s}).map(p=>Yd(p,u.cardinality,a))}else return[o]}}function Yd(t,e,r){return r.set(t.feature,e),t}function h$(t,e,r,n,o){var a;let i=[],s;for(;e<t.feature.elements.length&&(s={feature:t.feature.elements[e++],type:t.type},i.push(..._i({next:s,cardinalities:r,visited:n,plus:o})),!!Io((a=s.feature.cardinality)!==null&&a!==void 0?a:r.get(s.feature),s.feature)););return i}function $W(t){for(let e of t.tokens){let r=y$(t.stacks,e);t.stacks=r}}function y$(t,e){let r=[];for(let n of t)r.push(...IW(n,e));return r}function IW(t,e){let r=new Map,n=new Set(t.map(a=>a.feature).filter(PW)),o=[];for(;t.length>0;){let a=t.pop(),i=Mv({next:a,cardinalities:r,plus:n,visited:new Set}).filter(s=>e?Ov(s.feature,e):!0);for(let s of i)o.push([...t,s]);if(!i.every(s=>Io(s.feature.cardinality,s.feature)||Io(r.get(s.feature))))break}return o}function PW(t){if(t.cardinality==="+")return!0;let e=cr(t,It);return!!(e&&e.cardinality==="+")}function Ov(t,e){if(Tt(t))return t.value===e.image;if(Qt(t))return EW(t.rule.ref,e);if(Dr(t)){let r=Yi(t);if(r)return Ov(r,e)}return!1}function EW(t,e){return qe(t)?Qd(t.definition).some(n=>Ov(n.feature,e)):Yt(t)?zn(t).test(e.image):!1}function g$(t){let e=Array.from(new Set(t.flatMap(n=>{var o;return(o=n?.triggerCharacters)!==null&&o!==void 0?o:[]}))),r=Array.from(new Set(t.flatMap(n=>{var o;return(o=n?.allCommitCharacters)!==null&&o!==void 0?o:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var Jd=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection}async getCompletion(e,r){let n=[],o=this.buildContexts(e,r.position),a=(u,l)=>{let c=this.fillCompletionItem(u,l);c&&n.push(c)},i=u=>Tt(u.feature)?u.feature.value:u.feature,s=[];for(let u of o)if(await Promise.all(te(u.features).distinct(i).exclude(s).map(l=>this.completionFor(u,l,a))),s.push(...u.features),!this.continueCompletion(n))break;return Mi.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return te(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:Mi.Position.create(0,0),end:e.positionAt(r)}),o=this.completionParser.parse(n),a=o.tokens;if(o.tokenIndex===0){let u=Vi(this.grammar),l=Qd({feature:u.definition,type:Po(u)});return a.length>0?(a.shift(),_v(l.map(c=>[c]),a)):l}let i=[...a].splice(o.tokenIndex);return _v([o.elementStack.map(u=>({feature:u}))],i)}*buildContexts(e,r){var n,o;let a=e.parseResult.value.$cstNode;if(!a)return;let i=e.textDocument,s=i.getText(),u=i.offsetAt(r),l={document:e,textDocument:i,offset:u,position:r},c=this.findDataTypeRuleStart(a,u);if(c){let[g,f]=c,T=(n=Fi(a,g))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},l),{node:T,tokenOffset:g,tokenEndOffset:f,features:this.findFeaturesAt(i,g)})}let{nextTokenStart:d,nextTokenEnd:p,previousTokenStart:h,previousTokenEnd:v}=this.backtrackToAnyToken(s,u),A=d;u<=d&&h!==void 0&&(A=h);let C=(o=Fi(a,A))===null||o===void 0?void 0:o.astNode,S=!0;if(h!==void 0&&v!==void 0&&v===u&&(yield Object.assign(Object.assign({},l),{node:C,tokenOffset:h,tokenEndOffset:v,features:this.findFeaturesAt(i,h)}),S=this.performNextTokenCompletion(e,s.substring(h,v),h,v),S&&(yield Object.assign(Object.assign({},l),{node:C,tokenOffset:v,tokenEndOffset:v,features:this.findFeaturesAt(i,v)}))),C)S&&(yield Object.assign(Object.assign({},l),{node:C,tokenOffset:d,tokenEndOffset:p,features:this.findFeaturesAt(i,d)}));else{let g=Vi(this.grammar);if(!g)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},l),{tokenOffset:d,tokenEndOffset:p,features:Qd(g.definition)})}}performNextTokenCompletion(e,r,n,o){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,o;let a=pt(e,r,this.grammarConfig.nameRegexp),i=!!(!((n=cr(a?.grammarSource,qe))===null||n===void 0)&&n.dataType);if(i){for(;i;)a=a?.container,i=!!(!((o=cr(a?.grammarSource,qe))===null||o===void 0)&&o.dataType);if(a)return[a.offset,a.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let o;for(let a of n){if(a.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:o?o.startOffset:void 0,previousTokenEnd:o?o.endOffset+1:void 0};if(a.endOffset>=r)return{nextTokenStart:a.startOffset,nextTokenEnd:a.endOffset+1,previousTokenStart:o?o.startOffset:void 0,previousTokenEnd:o?o.endOffset+1:void 0};o=a}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:o?o.startOffset:void 0,previousTokenEnd:o?o.endOffset+1:void 0}}completionFor(e,r,n){if(Tt(r.feature))return this.completionForKeyword(e,r.feature,n);if(Dr(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let o=cr(r.feature,It),a=e.node;if(o&&a){r.type&&(a={$type:r.type,$container:a,$containerProperty:r.property},Bi(this.astReflection,a));let i={reference:{$refText:""},container:a,property:o.feature};try{this.scopeProvider.getScope(i).getAllElements().forEach(u=>{this.filterCrossReference(e,u)&&n(e,this.createReferenceCompletionItem(u))})}catch(s){console.error(s)}}}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}filterCrossReference(e,r){return!0}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:Mi.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,o;let a;if(typeof r.label=="string")a=r.label;else if("node"in r){let l=this.nameProvider.getName(r.node);if(!l)return;a=l}else if("nodeDescription"in r)a=r.nodeDescription.name;else return;let i;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?i=r.textEdit.newText:typeof r.insertText=="string"?i=r.insertText:i=a;let s=(o=r.textEdit)!==null&&o!==void 0?o:this.buildCompletionTextEdit(e,a,i);return s?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:s,label:a}:void 0}buildCompletionTextEdit(e,r,n){let a=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(a,r)){let i=e.textDocument.positionAt(e.tokenOffset),s=e.position;return{newText:n,range:{start:i,end:s}}}else return}};var NW=Lt(yr(),1);var m$=Lt(yr(),1);var Zd=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let o=n.$cstNode,a=pt(o,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(a)return this.collectLocationLinks(a,r)}}collectLocationLinks(e,r){var n;let o=this.findLink(e);if(o)return[m$.LocationLink.create(o.targetDocument.textDocument.uri,((n=o.target.astNode.$cstNode)!==null&&n!==void 0?n:o.target).range,o.target.range,o.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.astNode){let n=Ke(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var $$=Lt(yr(),1);var v$=Lt(yr(),1);var ep=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let o=pt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!o)return;let a=this.references.findDeclaration(o);if(a){let i=kt.equals(Ke(a).uri,e.uri),s={documentUri:e.uri,includeDeclaration:i};return this.references.findReferences(a,s).map(l=>this.createDocumentHighlight(l)).toArray()}}createDocumentHighlight(e){return v$.DocumentHighlight.create(e.segment.range)}};var tp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,o=this.nameProvider.getNameNode(r);if(o&&n){let a=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:a??o.text,range:n.range,selectionRange:o.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let o of xo(r)){let a=this.getSymbol(e,o);n.push(...a)}if(n.length>0)return n}};var Pu=Lt(yr(),1);var rp=class{constructor(e){this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock;let r=!1;e.lsp.LanguageServer.onInitialize(n=>{var o,a;r=!!(!((a=(o=n.capabilities.workspace)===null||o===void 0?void 0:o.didChangeWatchedFiles)===null||a===void 0)&&a.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(n=>{r&&this.registerFileWatcher(e)})}registerFileWatcher(e){let r=te(e.ServiceRegistry.all).flatMap(n=>n.LanguageMetaData.fileExtensions).map(n=>n.startsWith(".")?n.substring(1):n).distinct().toArray();if(r.length>0){let n=e.lsp.Connection,o={watchers:[{globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`}]};n?.client.register(Pu.DidChangeWatchedFilesNotification.type,o)}}fireDocumentUpdate(e,r){this.workspaceLock.write(n=>this.documentBuilder.update(e,r,n))}didChangeContent(e){this.fireDocumentUpdate([Me.parse(e.document.uri)],[])}didChangeWatchedFiles(e){let r=te(e.changes).filter(o=>o.type!==Pu.FileChangeType.Deleted).distinct(o=>o.uri).map(o=>Me.parse(o.uri)).toArray(),n=te(e.changes).filter(o=>o.type===Pu.FileChangeType.Deleted).distinct(o=>o.uri).map(o=>Me.parse(o.uri)).toArray();this.fireDocumentUpdate(r,n)}};var Eu=Lt(yr(),1);var np=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=o=>r.push(o);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let o=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(o){if(this.shouldProcessContent(o)){let a=Jt(o).iterator(),i;do if(i=a.next(),!i.done){let s=i.value;this.shouldProcess(s)&&this.collectObjectFolding(e,s,r),this.shouldProcessContent(s)||a.prune()}while(!i.done)}this.collectCommentFolding(e,o,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let o=r.$cstNode;if(o){let a=this.toFoldingRange(e,o);a&&n(a)}}collectCommentFolding(e,r,n){let o=r.$cstNode;if(o){for(let a of pf(o))if(this.commentNames.includes(a.tokenType.name)){let i=this.toFoldingRange(e,a,Eu.FoldingRangeKind.Comment);i&&n(i)}}}toFoldingRange(e,r,n){let o=r.range,a=o.start,i=o.end;if(!(i.line-a.line<2))return this.includeLastFoldingLine(r,n)||(i=e.textDocument.positionAt(e.textDocument.offsetAt({line:i.line,character:0})-1)),Eu.FoldingRange.create(a.line,i.line,a.character,i.character,n)}includeLastFoldingLine(e,r){if(r===Eu.FoldingRangeKind.Comment)return!1;let n=e.text,o=n.charAt(n.length-1);return!(o==="}"||o===")"||o==="]")}};var op=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,o,a=0,i=r.length;for(let s=0;s<i;s++){let u=r.charCodeAt(s),l=e.charCodeAt(a);if((u===l||this.toUpperCharCode(u)===this.toUpperCharCode(l))&&(n||(n=o===void 0||this.isWordTransition(o,u)),n&&a++,a===e.length))return!0;o=u}return!1}isWordTransition(e,r){return w$<=e&&e<=A$&&DW<=r&&r<=_W||e===S$&&r!==S$}toUpperCharCode(e){return w$<=e&&e<=A$?e-32:e}},w$=97,A$=122,DW=65,_W=90,S$=95;var zv=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,o;let a=(o=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||o===void 0?void 0:o.$cstNode;if(a){let i=e.textDocument.offsetAt(r.position),s=pt(a,i,this.grammarConfig.nameRegexp);if(s&&s.offset+s.length>i){let u=this.references.findDeclaration(s);if(u)return this.getAstNodeHoverContent(u)}}}},ap=class extends zv{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var kr=Lt(Ye(),1);var oe=Lt(yr(),1);var C$={[oe.SemanticTokenTypes.class]:0,[oe.SemanticTokenTypes.comment]:1,[oe.SemanticTokenTypes.enum]:2,[oe.SemanticTokenTypes.enumMember]:3,[oe.SemanticTokenTypes.event]:4,[oe.SemanticTokenTypes.function]:5,[oe.SemanticTokenTypes.interface]:6,[oe.SemanticTokenTypes.keyword]:7,[oe.SemanticTokenTypes.macro]:8,[oe.SemanticTokenTypes.method]:9,[oe.SemanticTokenTypes.modifier]:10,[oe.SemanticTokenTypes.namespace]:11,[oe.SemanticTokenTypes.number]:12,[oe.SemanticTokenTypes.operator]:13,[oe.SemanticTokenTypes.parameter]:14,[oe.SemanticTokenTypes.property]:15,[oe.SemanticTokenTypes.regexp]:16,[oe.SemanticTokenTypes.string]:17,[oe.SemanticTokenTypes.struct]:18,[oe.SemanticTokenTypes.type]:19,[oe.SemanticTokenTypes.typeParameter]:20,[oe.SemanticTokenTypes.variable]:21,[oe.SemanticTokenTypes.decorator]:22},MW={[oe.SemanticTokenModifiers.abstract]:1,[oe.SemanticTokenModifiers.async]:2,[oe.SemanticTokenModifiers.declaration]:4,[oe.SemanticTokenModifiers.defaultLibrary]:8,[oe.SemanticTokenModifiers.definition]:16,[oe.SemanticTokenModifiers.deprecated]:32,[oe.SemanticTokenModifiers.documentation]:64,[oe.SemanticTokenModifiers.modification]:128,[oe.SemanticTokenModifiers.readonly]:256,[oe.SemanticTokenModifiers.static]:512},x$={legend:{tokenTypes:Object.keys(C$),tokenModifiers:Object.keys(MW)},full:{delta:!0},range:!0};var T$;(function(t){function e(n,o){let a=new Map;Object.entries(C$).forEach(([u,l])=>a.set(l,u));let i=0,s=0;return r(n.data,5).map(u=>{i+=u[0],u[0]!==0&&(s=0),s+=u[1];let l=u[2];return{offset:o.textDocument.offsetAt({line:i,character:s}),tokenType:a.get(u[3]),tokenModifiers:u[4],text:o.textDocument.getText({start:{line:i,character:s},end:{line:i,character:s+l}})}})}t.decode=e;function r(n,o){let a=[];for(let i=0;i<n.length;i+=o){let s=n.slice(i,i+o);a.push(s)}return a}})(T$||(T$={}));function b$(t){let e=[],r=[];t.forEach(o=>{o?.triggerCharacters&&e.push(...o.triggerCharacters),o?.retriggerCharacters&&r.push(...o.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var ip=class{constructor(e){this.onInitializeEmitter=new kr.Emitter,this.onInitializedEmitter=new kr.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){hu(this.services),this.services.ServiceRegistry.all.forEach(e=>hu(e))}hasService(e){return this.services.ServiceRegistry.all.some(n=>e(n)!==void 0)}buildInitializeResult(e){var r,n,o,a;let i=(r=this.services.lsp.FileOperationHandler)===null||r===void 0?void 0:r.fileOperationOptions,s=this.services.ServiceRegistry.all,u=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.Formatter}),l=s.map($=>{var R,fe;return(fe=(R=$.lsp)===null||R===void 0?void 0:R.Formatter)===null||fe===void 0?void 0:fe.formatOnTypeOptions}).find($=>!!$),c=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.CodeActionProvider}),d=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.SemanticTokenProvider}),p=(o=(n=this.services.lsp)===null||n===void 0?void 0:n.ExecuteCommandHandler)===null||o===void 0?void 0:o.commands,h=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.DocumentLinkProvider}),v=b$(s.map($=>{var R,fe;return(fe=(R=$.lsp)===null||R===void 0?void 0:R.SignatureHelp)===null||fe===void 0?void 0:fe.signatureHelpOptions})),A=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.TypeProvider}),C=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.ImplementationProvider}),S=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.CompletionProvider}),g=g$(s.map($=>{var R,fe;return(fe=(R=$.lsp)===null||R===void 0?void 0:R.CompletionProvider)===null||fe===void 0?void 0:fe.completionOptions})),f=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.ReferencesProvider}),T=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.DocumentSymbolProvider}),P=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.DefinitionProvider}),Q=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.DocumentHighlightProvider}),vt=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.FoldingRangeProvider}),Qe=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.HoverProvider}),lr=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.RenameProvider}),jt=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.CallHierarchyProvider}),_=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.TypeHierarchyProvider}),b=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.CodeLensProvider}),W=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.DeclarationProvider}),z=this.hasService($=>{var R;return(R=$.lsp)===null||R===void 0?void 0:R.InlayHintProvider}),re=(a=this.services.lsp)===null||a===void 0?void 0:a.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:i},executeCommandProvider:p&&{commands:p},textDocumentSync:kr.TextDocumentSyncKind.Incremental,completionProvider:S?g:void 0,referencesProvider:f,documentSymbolProvider:T,definitionProvider:P,typeDefinitionProvider:A,documentHighlightProvider:Q,codeActionProvider:c,documentFormattingProvider:u,documentRangeFormattingProvider:u,documentOnTypeFormattingProvider:l,foldingRangeProvider:vt,hoverProvider:Qe,renameProvider:lr?{prepareProvider:!0}:void 0,semanticTokensProvider:d?x$:void 0,signatureHelpProvider:v,implementationProvider:C,callHierarchyProvider:jt?{}:void 0,typeHierarchyProvider:_?{}:void 0,documentLinkProvider:h?{resolveProvider:!1}:void 0,codeLensProvider:b?{resolveProvider:!1}:void 0,declarationProvider:W,inlayHintProvider:z?{resolveProvider:!1}:void 0,workspaceSymbolProvider:re?{resolveProvider:!!re.resolveSymbol}:void 0}}}async initialized(e){await this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}async fireInitializedOnDefaultServices(e){let r=this.services.lsp.Connection,n=r?Object.assign(Object.assign({},e),{register:o=>r.client.register(kr.DidChangeConfigurationNotification.type,o),getConfiguration:o=>r.workspace.getConfiguration(o)}):e;await this.services.workspace.ConfigurationProvider.initialized(n),await this.services.workspace.WorkspaceManager.initialized(e)}};function k$(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");OW(e,t),zW(e,t),KW(e,t),LW(e,t),FW(e,t),GW(e,t),HW(e,t),BW(e,t),qW(e,t),jW(e,t),XW(e,t),YW(e,t),WW(e,t),QW(e,t),VW(e,t),JW(e,t),ZW(e,t),tG(e,t),nG(e,t),iG(e,t),sG(e,t),oG(e,t),rG(e,t),eG(e,t),UW(e,t),aG(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}function OW(t,e){let r=e.lsp.DocumentUpdateHandler;e.workspace.TextDocuments.onDidChangeContent(o=>r.didChangeContent(o)),t.onDidChangeWatchedFiles(o=>r.didChangeWatchedFiles(o))}function zW(t,e){let r=e.lsp.FileOperationHandler;r&&(r.didCreateFiles&&t.workspace.onDidCreateFiles(n=>r.didCreateFiles(n)),r.didRenameFiles&&t.workspace.onDidRenameFiles(n=>r.didRenameFiles(n)),r.didDeleteFiles&&t.workspace.onDidDeleteFiles(n=>r.didDeleteFiles(n)),r.willCreateFiles&&t.workspace.onWillCreateFiles(n=>r.willCreateFiles(n)),r.willRenameFiles&&t.workspace.onWillRenameFiles(n=>r.willRenameFiles(n)),r.willDeleteFiles&&t.workspace.onWillDeleteFiles(n=>r.willDeleteFiles(n)))}function KW(t,e){e.workspace.DocumentBuilder.onBuildPhase(H.Validated,async(n,o)=>{for(let a of n)if(a.diagnostics&&t.sendDiagnostics({uri:a.uri.toString(),diagnostics:a.diagnostics}),o.isCancellationRequested)return})}function LW(t,e){t.onCompletion(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CompletionProvider)===null||s===void 0?void 0:s.getCompletion(n,o,a)},e,H.IndexedReferences))}function FW(t,e){t.onReferences(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.ReferencesProvider)===null||s===void 0?void 0:s.findReferences(n,o,a)},e,H.IndexedReferences))}function WW(t,e){t.onCodeAction(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CodeActionProvider)===null||s===void 0?void 0:s.getCodeActions(n,o,a)},e,H.Validated))}function GW(t,e){t.onDocumentSymbol(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentSymbolProvider)===null||s===void 0?void 0:s.getSymbols(n,o,a)},e,H.Parsed))}function HW(t,e){t.onDefinition(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DefinitionProvider)===null||s===void 0?void 0:s.getDefinition(n,o,a)},e,H.IndexedReferences))}function BW(t,e){t.onTypeDefinition(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.TypeProvider)===null||s===void 0?void 0:s.getTypeDefinition(n,o,a)},e,H.IndexedReferences))}function qW(t,e){t.onImplementation(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.ImplementationProvider)===null||s===void 0?void 0:s.getImplementation(n,o,a)},e,H.IndexedReferences))}function UW(t,e){t.onDeclaration(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DeclarationProvider)===null||s===void 0?void 0:s.getDeclaration(n,o,a)},e,H.IndexedReferences))}function jW(t,e){t.onDocumentHighlight(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentHighlightProvider)===null||s===void 0?void 0:s.getDocumentHighlight(n,o,a)},e,H.IndexedReferences))}function VW(t,e){t.onHover(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.HoverProvider)===null||s===void 0?void 0:s.getHoverContent(n,o,a)},e,H.IndexedReferences))}function XW(t,e){t.onFoldingRanges(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.FoldingRangeProvider)===null||s===void 0?void 0:s.getFoldingRanges(n,o,a)},e,H.Parsed))}function YW(t,e){t.onDocumentFormatting(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocument(n,o,a)},e,H.Parsed)),t.onDocumentRangeFormatting(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocumentRange(n,o,a)},e,H.Parsed)),t.onDocumentOnTypeFormatting(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocumentOnType(n,o,a)},e,H.Parsed))}function QW(t,e){t.onRenameRequest(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.RenameProvider)===null||s===void 0?void 0:s.rename(n,o,a)},e,H.IndexedReferences)),t.onPrepareRename(Ot((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.RenameProvider)===null||s===void 0?void 0:s.prepareRename(n,o,a)},e,H.IndexedReferences))}function JW(t,e){t.languages.inlayHint.on(Pn((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.InlayHintProvider)===null||s===void 0?void 0:s.getInlayHints(n,o,a)},e,H.IndexedReferences))}function ZW(t,e){let r={data:[]};t.languages.semanticTokens.on(Pn((n,o,a,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(o,a,i):r},e,H.IndexedReferences)),t.languages.semanticTokens.onDelta(Pn((n,o,a,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(o,a,i):r},e,H.IndexedReferences)),t.languages.semanticTokens.onRange(Pn((n,o,a,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(o,a,i):r},e,H.IndexedReferences))}function eG(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function tG(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,o)=>{var a;try{return await r.executeCommand(n.command,(a=n.arguments)!==null&&a!==void 0?a:[],o)}catch(i){return ra(i)}})}function rG(t,e){t.onDocumentLinks(Pn((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentLinkProvider)===null||s===void 0?void 0:s.getDocumentLinks(n,o,a)},e,H.Parsed))}function nG(t,e){t.onSignatureHelp(Pn((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.SignatureHelp)===null||s===void 0?void 0:s.provideSignatureHelp(n,o,a)},e,H.IndexedReferences))}function oG(t,e){t.onCodeLens(Pn((r,n,o,a)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CodeLensProvider)===null||s===void 0?void 0:s.provideCodeLens(n,o,a)},e,H.IndexedReferences))}function aG(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){let o=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(i,s)=>{try{return await o.waitUntil(H.IndexedContent,s),await n.getSymbols(i,s)}catch(u){return ra(u)}});let a=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);a&&t.onWorkspaceSymbolResolve(async(i,s)=>{try{return await o.waitUntil(H.IndexedContent,s),await a(i,s)}catch(u){return ra(u)}})}}function iG(t,e){t.languages.callHierarchy.onPrepare(Pn(async(r,n,o,a)=>{var i;if(!((i=r.lsp)===null||i===void 0)&&i.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,o,a);return s??null}return null},e,H.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(sp(async(r,n,o)=>{var a;if(!((a=r.lsp)===null||a===void 0)&&a.CallHierarchyProvider){let i=await r.lsp.CallHierarchyProvider.incomingCalls(n,o);return i??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(sp(async(r,n,o)=>{var a;if(!((a=r.lsp)===null||a===void 0)&&a.CallHierarchyProvider){let i=await r.lsp.CallHierarchyProvider.outgoingCalls(n,o);return i??null}return null},e))}function sG(t,e){e.ServiceRegistry.all.some(r=>{var n;return(n=r.lsp)===null||n===void 0?void 0:n.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(Pn(async(r,n,o,a)=>{var i,s;let u=await((s=(i=r.lsp)===null||i===void 0?void 0:i.TypeHierarchyProvider)===null||s===void 0?void 0:s.prepareTypeHierarchy(n,o,a));return u??null},e,H.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(sp(async(r,n,o)=>{var a,i;let s=await((i=(a=r.lsp)===null||a===void 0?void 0:a.TypeHierarchyProvider)===null||i===void 0?void 0:i.supertypes(n,o));return s??null},e)),t.languages.typeHierarchy.onSubtypes(sp(async(r,n,o)=>{var a,i;let s=await((i=(a=r.lsp)===null||a===void 0?void 0:a.TypeHierarchyProvider)===null||i===void 0?void 0:i.subtypes(n,o));return s??null},e)))}function sp(t,e){let r=e.ServiceRegistry;return async(n,o)=>{let a=Me.parse(n.item.uri),i=await Kv(e,o,a,H.IndexedReferences);if(i)return i;let s=r.getServices(a);if(!s){let u=`Could not find service instance for uri: '${a.toString()}'`;throw console.error(u),new Error(u)}try{return await t(s,n,o)}catch(u){return ra(u)}}}function Pn(t,e,r){let n=e.workspace.LangiumDocuments,o=e.ServiceRegistry;return async(a,i)=>{let s=Me.parse(a.textDocument.uri),u=await Kv(e,i,s,r);if(u)return u;let l=o.getServices(s);if(!l){let d=`Could not find service instance for uri: '${s}'`;throw console.error(d),new Error(d)}let c=await n.getOrCreateDocument(s);try{return await t(l,c,a,i)}catch(d){return ra(d)}}}function Ot(t,e,r){let n=e.workspace.LangiumDocuments,o=e.ServiceRegistry;return async(a,i)=>{let s=Me.parse(a.textDocument.uri),u=await Kv(e,i,s,r);if(u)return u;let l=o.getServices(s);if(!l)return console.error(`Could not find service instance for uri: '${s.toString()}'`),null;let c=n.getDocument(s);if(!c)return null;try{return await t(l,c,a,i)}catch(d){return ra(d)}}}async function Kv(t,e,r,n){if(n!==void 0){let o=t.workspace.DocumentBuilder;try{await o.waitUntil(n,r,e)}catch(a){return ra(a)}}}function ra(t){if(nn(t))return new kr.ResponseError(kr.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof kr.ResponseError)return t;throw t}var lp=Lt(yr(),1),up=class{getSymbolKind(){return lp.SymbolKind.Field}getCompletionItemKind(){return lp.CompletionItemKind.Reference}};var R$=Lt(yr(),1);var cp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let o=pt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return o?this.getReferences(o,r,e):[]}getReferences(e,r,n){let o=[],a=this.references.findDeclaration(e);if(a){let i={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(a,i).forEach(s=>{o.push(R$.Location.create(s.sourceUri.toString(),s.segment.range))})}return o}};Go();var dp=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},o=e.parseResult.value.$cstNode;if(!o)return;let a=e.textDocument.offsetAt(r.position),i=pt(o,a,this.grammarConfig.nameRegexp);if(!i)return;let s=this.references.findDeclaration(i);if(!s)return;let u={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(s,u).forEach(c=>{let d=Ar.replace(c.segment.range,r.newName),p=c.sourceUri.toString();n[p]?n[p].push(d):n[p]=[d]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,o=e.textDocument.offsetAt(r);if(n&&o){let a=pt(n,o,this.grammarConfig.nameRegexp);if(!a)return;if(this.references.findDeclaration(a)||this.isNameNode(a))return a.range}}isNameNode(e){return e?.astNode&&Oc(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var pp=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=L.CancellationToken.None){let n=[],o=e.query.toLowerCase();for(let a of this.indexManager.allElements())if(await Ge(r),this.fuzzyMatcher.match(o,a.name)){let i=this.getWorkspaceSymbol(a);i&&n.push(i)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};function I$(t){return gi.merge(pu(t),uG(t))}function uG(t){return{lsp:{CompletionProvider:e=>new Jd(e),DocumentSymbolProvider:e=>new tp(e),HoverProvider:e=>new ap(e),FoldingRangeProvider:e=>new np(e),ReferencesProvider:e=>new cp(e),DefinitionProvider:e=>new Zd(e),DocumentHighlightProvider:e=>new ep(e),RenameProvider:e=>new dp(e)},shared:()=>t.shared}}function P$(t){return gi.merge(fu(t),lG(t))}function lG(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new ip(e),DocumentUpdateHandler:e=>new rp(e),WorkspaceSymbolProvider:e=>new pp(e),NodeKindProvider:()=>new up,FuzzyMatcher:()=>new op},workspace:{TextDocuments:()=>new $$.TextDocuments(ro)}}}var fp=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new Lv(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(a=>{var i;return(i=a.line)!==null&&i!==void 0?i:Number.MAX_VALUE}),...n.parserErrors.map(a=>{var i;return(i=a.token.startLine)!==null&&i!==void 0?i:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let o=new Map,a=(s,u,l)=>{var c,d;let p=this.nodeModeToKey(s,u),h=o.get(p),v=(c=l.options.priority)!==null&&c!==void 0?c:0,A=(d=h?.options.priority)!==null&&d!==void 0?d:0;(!h||A<=v)&&o.set(p,l)};this.collector=a,this.iterateAstFormatting(e,n);let i=this.iterateCstFormatting(e,o,r,n);return this.avoidOverlappingEdits(e.textDocument,i)}avoidOverlappingEdits(e,r){let n=[];for(let o of r){let a=n[n.length-1];if(a){let i=e.offsetAt(o.range.start),s=e.offsetAt(a.range.end);i<s&&n.pop()}n.push(o)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let o=Jt(n).iterator(),a;do if(a=o.next(),!a.done){let i=a.value;this.insideRange(i.$cstNode.range,r)?this.format(i):o.prune()}while(!a.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,o){let a={indentation:0,options:n,document:e.textDocument},i=[],u=this.iterateCstTree(e,a).iterator(),l,c;do if(c=u.next(),!c.done){let d=c.value,p=Er(d),h=this.nodeModeToKey(d,"prepend"),v=r.get(h);if(r.delete(h),v){let S=this.createTextEdit(l,d,v,a);for(let g of S)g&&this.insideRange(g.range,o)&&this.isNecessary(g,e.textDocument)&&i.push(g)}let A=this.nodeModeToKey(d,"append"),C=r.get(A);if(r.delete(A),C){let S=yf(d);if(S){let g=this.createTextEdit(d,S,C,a);for(let f of g)f&&this.insideRange(f.range,o)&&this.isNecessary(f,e.textDocument)&&i.push(f)}}if(!v&&d.hidden){let S=this.createHiddenTextEdits(l,d,void 0,a);for(let g of S)g&&this.insideRange(g.range,o)&&this.isNecessary(g,e.textDocument)&&i.push(g)}p&&(l=d)}while(!c.done);return i}createHiddenTextEdits(e,r,n,o){var a;let i=r.range.start.line;if(e&&e.range.end.line===i)return[];let s=[],u={start:{character:0,line:i},end:r.range.start},l=o.document.getText(u),c=this.findFittingMove(u,(a=n?.moves)!==null&&a!==void 0?a:[],o),d=this.getExistingIndentationCharacterCount(l,o),h=this.getIndentationCharacterCount(o,c)-d;if(h===0)return[];let v="";h>0&&(v=(o.options.insertSpaces?" ":"	").repeat(h));let A=r.text.split(`
`);A[0]=l+A[0];for(let C=0;C<A.length;C++){let S=i+C,g={character:0,line:S};if(h>0)s.push({newText:v,range:{start:g,end:g}});else{let f=A[C],T=0;for(;T<f.length;T++){let P=f.charAt(T);if(P!==" "&&P!=="	")break}s.push({newText:"",range:{start:g,end:{line:S,character:Math.min(T,Math.abs(h))}}})}}return s}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,o){var a;if(r.hidden)return this.createHiddenTextEdits(e,r,n,o);let i={start:(a=e?.range.end)!==null&&a!==void 0?a:{character:0,line:0},end:r.range.start},s=this.findFittingMove(i,n.moves,o);if(!s)return[];let u=s.characters,l=s.lines,c=s.tabs,d=o.indentation;o.indentation+=c??0;let p=[];return u!==void 0?p.push(this.createSpaceTextEdit(i,u,n.options)):l!==void 0?p.push(this.createLineTextEdit(i,l,o,n.options)):c!==void 0&&p.push(this.createTabTextEdit(i,!!e,o)),Er(r)&&(o.indentation=d),p}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let a=e.end.character-e.start.character;r=this.fitIntoOptions(r,a,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,o){let a=e.end.line-e.start.line;r=this.fitIntoOptions(r,a,o);let s=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${s}`,range:e}}createTabTextEdit(e,r,n){let a=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),i=r?1:0,s=Math.max(e.end.line-e.start.line,i);return{newText:`${`
`.repeat(s)}${a}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let o=e.end.line-e.start.line;for(let a of r){if(a.lines!==void 0&&o<=a.lines)return a;if(a.lines===void 0&&o===0)return a}return r[r.length-1]}iterateCstTree(e,r){let o=e.parseResult.value.$cstNode;return o?new gr(o,a=>this.iterateCst(a,r)):_n}iterateCst(e,r){if(!Ft(e))return _n;let n=r.indentation;return new Wt(()=>({index:0}),o=>o.index<e.content.length?{done:!1,value:e.content[o.index++]}:(r.indentation=n,St))}},Lv=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new Lr(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new Lr(r,this.collector)}property(e,r){let n=On(this.astNode.$cstNode,e,r);return new Lr(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let o=pa(this.astNode.$cstNode,n);r.push(...o)}return new Lr(r,this.collector)}keyword(e,r){let n=fa(this.astNode.$cstNode,e,r);return new Lr(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let o=nl(this.astNode.$cstNode,n);r.push(...o)}return new Lr(r,this.collector)}cst(e){return new Lr([...e],this.collector)}interior(e,r){let n=e.nodes,o=r.nodes;if(n.length!==1||o.length!==1)return new Lr([],this.collector);let a=n[0],i=o[0];if(a.offset>i.offset){let s=a;a=i,i=s}return new Lr(gf(a,i),this.collector)}},Lr=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},$t;(function(t){function e(...c){return{options:{},moves:c.flatMap(d=>d.moves).sort(l)}}t.fit=e;function r(c){return o(0,c)}t.noSpace=r;function n(c){return o(1,c)}t.oneSpace=n;function o(c,d){return{options:d??{},moves:[{characters:c}]}}t.spaces=o;function a(c){return i(1,c)}t.newLine=a;function i(c,d){return{options:d??{},moves:[{lines:c}]}}t.newLines=i;function s(c){return{options:c??{},moves:[{tabs:1,lines:1}]}}t.indent=s;function u(c){return{options:c??{},moves:[{tabs:0}]}}t.noIndent=u;function l(c,d){var p,h,v,A,C,S;let g=(p=c.lines)!==null&&p!==void 0?p:0,f=(h=d.lines)!==null&&h!==void 0?h:0,T=(v=c.tabs)!==null&&v!==void 0?v:0,P=(A=d.tabs)!==null&&A!==void 0?A:0,Q=(C=c.characters)!==null&&C!==void 0?C:0,vt=(S=d.characters)!==null&&S!==void 0?S:0;return g<f?-1:g>f?1:T<P?-1:T>P?1:Q<vt?-1:Q>vt?1:0}})($t||($t={}));var cG=Lt(yr(),1);var go=Lt(N$(),1);var Fv="AuthorTagAttributes";var hp="AvatarTagAttributes";var D$="AwsTagAttributes";var _$="AzureTagAttributes";var Wv="BoxTagAttributes";var dG="DimensionAttributes";var M$="EdgeTagAttributes";var O$="GcpTagAttributes";var pG="PositionAttributes";var z$="SkillTagAttributes";var fG="StyleAttribute";var K$="SvgTagAttributes";var yp="TextTagAttributes";var hG="Value";var yG="ArrayValue";var gp="AuthorCaptionAttribute";function L$(t){return q.isInstance(t,gp)}var mp="AuthorCaptionClassesAttribute";function F$(t){return q.isInstance(t,mp)}var vp="AuthorCaptionFontFamilyAttribute";function W$(t){return q.isInstance(t,vp)}var wp="AuthorImageClassesAttribute";function G$(t){return q.isInstance(t,wp)}var Ap="AuthorNameAttribute";function H$(t){return q.isInstance(t,Ap)}var Sp="AuthorNameClassesAttribute";function B$(t){return q.isInstance(t,Sp)}var Tp="AuthorNameFontFamilyAttribute";function q$(t){return q.isInstance(t,Tp)}var Cp="AuthorSrcAttribute";function U$(t){return q.isInstance(t,Cp)}var gG="AuthorTag";function j$(t){return q.isInstance(t,gG)}var xp="AvatarAccessoriesTypeAttribute";function V$(t){return q.isInstance(t,xp)}var bp="AvatarClotheTypeAttribute";function X$(t){return q.isInstance(t,bp)}var kp="AvatarEyebrowTypeAttribute";function Y$(t){return q.isInstance(t,kp)}var Rp="AvatarEyeTypeAttribute";function Q$(t){return q.isInstance(t,Rp)}var $p="AvatarFacialHairTypeAttribute";function J$(t){return q.isInstance(t,$p)}var Ip="AvatarGraphicTypeAttribute";function Z$(t){return q.isInstance(t,Ip)}var Pp="AvatarHairColorAttribute";function eI(t){return q.isInstance(t,Pp)}var Ep="AvatarMouthTypeAttribute";function tI(t){return q.isInstance(t,Ep)}var Np="AvatarSkinColorAttribute";function rI(t){return q.isInstance(t,Np)}var Dp="AvatarStyleAttribute";function nI(t){return q.isInstance(t,Dp)}var mG="AvatarTag";function oI(t){return q.isInstance(t,mG)}var _p="AvatarTopTypeAttribute";function aI(t){return q.isInstance(t,_p)}var Mp="AwsIconTypeAttribute";function iI(t){return q.isInstance(t,Mp)}var vG="AwsTag";function sI(t){return q.isInstance(t,vG)}var Op="AzureIconTypeAttribute";function uI(t){return q.isInstance(t,Op)}var wG="AzureTag";function lI(t){return q.isInstance(t,wG)}var zp="BackgroundColorAttribute";function cI(t){return q.isInstance(t,zp)}var AG="BacktickStringPropRowAttribute";var SG="BooleanPropRowAttribute";var TG="BoxTag";function dI(t){return q.isInstance(t,TG)}var Kp="BoxTypeAttribute";function pI(t){return q.isInstance(t,Kp)}var yo="ClassesAttribute";function fI(t){return q.isInstance(t,yo)}var Lp="CodeAttribute";function hI(t){return q.isInstance(t,Lp)}var Fr="DimensionAttribute";function yI(t){return q.isInstance(t,Fr)}var Gv="EdgeAnimateAttribute";var Fp="EdgeLabelAttribute";function gI(t){return q.isInstance(t,Fp)}var Wp="EdgeLabelStyleAttribute";function mI(t){return q.isInstance(t,Wp)}var Hv="EdgeSelectableAttribute";var Gp="EdgeSourceAttribute";function vI(t){return q.isInstance(t,Gp)}var Hp="EdgeSourceHandleAttribute";function wI(t){return q.isInstance(t,Hp)}var Bv="EdgeStyleAttribute";var CG="EdgeTag";function AI(t){return q.isInstance(t,CG)}var Bp="EdgeTargetAttribute";function SI(t){return q.isInstance(t,Bp)}var qp="EdgeTargetHandleAttribute";function TI(t){return q.isInstance(t,qp)}var Up="EdgeTypeAttribute";function CI(t){return q.isInstance(t,Up)}var Du="FontFamilyAttribute";function xI(t){return q.isInstance(t,Du)}var jp="FontSizeAttribute";function bI(t){return q.isInstance(t,jp)}var Vp="GcpIconTypeAttribute";function kI(t){return q.isInstance(t,Vp)}var xG="GcpTag";function RI(t){return q.isInstance(t,xG)}var Xp="HeightAttribute";function $I(t){return q.isInstance(t,Xp)}var Rr="IdAttribute";function II(t){return q.isInstance(t,Rr)}var bG="NumberPropRowAttribute";var $r="PositionAttribute";function PI(t){return q.isInstance(t,$r)}var kG="PropsAttribute";var Yp="SkillIconTypeAttribute";function EI(t){return q.isInstance(t,Yp)}var RG="SkillTag";function NI(t){return q.isInstance(t,RG)}var $G="StringPropRowAttribute";var IG="StyleProperty";function DI(t){return q.isInstance(t,IG)}var PG="SvgTag";function _I(t){return q.isInstance(t,PG)}var Qp="TextAttribute";function MI(t){return q.isInstance(t,Qp)}var Jp="TextColorAttribute";function OI(t){return q.isInstance(t,Jp)}var EG="TextTag";function zI(t){return q.isInstance(t,EG)}var Zp="WidthAttribute";function KI(t){return q.isInstance(t,Zp)}var ef="XAttribute";function LI(t){return q.isInstance(t,ef)}var tf="YAttribute";function FI(t){return q.isInstance(t,tf)}var Nu=class extends mo{getAllTypes(){return["ArrayValue","AuthorCaptionAttribute","AuthorCaptionClassesAttribute","AuthorCaptionFontFamilyAttribute","AuthorImageClassesAttribute","AuthorNameAttribute","AuthorNameClassesAttribute","AuthorNameFontFamilyAttribute","AuthorSrcAttribute","AuthorTag","AuthorTagAttributes","AvatarAccessoriesTypeAttribute","AvatarClotheTypeAttribute","AvatarEyeTypeAttribute","AvatarEyebrowTypeAttribute","AvatarFacialHairTypeAttribute","AvatarGraphicTypeAttribute","AvatarHairColorAttribute","AvatarMouthTypeAttribute","AvatarSkinColorAttribute","AvatarStyleAttribute","AvatarTag","AvatarTagAttributes","AvatarTopTypeAttribute","AwsIconTypeAttribute","AwsTag","AwsTagAttributes","AzureIconTypeAttribute","AzureTag","AzureTagAttributes","BackgroundColorAttribute","BacktickStringPropRowAttribute","BooleanPropRowAttribute","BoxTag","BoxTagAttributes","BoxTypeAttribute","ClassesAttribute","CodeAttribute","DimensionAttribute","DimensionAttributes","EdgeAnimateAttribute","EdgeLabelAttribute","EdgeLabelStyleAttribute","EdgeSelectableAttribute","EdgeSourceAttribute","EdgeSourceHandleAttribute","EdgeStyleAttribute","EdgeTag","EdgeTagAttributes","EdgeTargetAttribute","EdgeTargetHandleAttribute","EdgeTypeAttribute","FontFamily","FontFamilyAttribute","FontSizeAttribute","GcpIconTypeAttribute","GcpTag","GcpTagAttributes","HeightAttribute","IdAttribute","Model","NumberPropRowAttribute","PositionAttribute","PositionAttributes","Property","PropsAttribute","PropsObject","SkillIconTypeAttribute","SkillTag","SkillTagAttributes","StringPropRowAttribute","StyleAttribute","StyleProperty","SvgTag","SvgTagAttributes","TextAttribute","TextColorAttribute","TextTag","TextTagAttributes","Value","WidthAttribute","XAttribute","YAttribute"]}computeIsSubtype(e,r){switch(e){case yG:case AG:case SG:case bG:case $G:return this.isSubtype(hG,r);case gp:case mp:case vp:case wp:case Ap:case Sp:case Tp:case Cp:return this.isSubtype(Fv,r);case xp:case bp:case kp:case Rp:case $p:case Ip:case Pp:case Ep:case Np:case Dp:case _p:return this.isSubtype(hp,r);case Mp:return this.isSubtype(D$,r);case Op:return this.isSubtype(_$,r);case zp:case jp:case Jp:return this.isSubtype(fG,r);case Kp:case kG:return this.isSubtype(Wv,r);case yo:return this.isSubtype(Fv,r)||this.isSubtype(hp,r)||this.isSubtype(Wv,r)||this.isSubtype(M$,r)||this.isSubtype(yp,r);case Lp:return this.isSubtype(K$,r);case Fr:case Rr:case $r:return this.isSubtype(Fv,r)||this.isSubtype(hp,r)||this.isSubtype(D$,r)||this.isSubtype(_$,r)||this.isSubtype(Wv,r)||this.isSubtype(O$,r)||this.isSubtype(z$,r)||this.isSubtype(K$,r)||this.isSubtype(yp,r);case Gv:case Fp:case Wp:case Hv:case Gp:case Hp:case Bv:case Bp:case qp:case Up:return this.isSubtype(M$,r);case Du:return this.isSubtype(hp,r)||this.isSubtype(yp,r);case Vp:return this.isSubtype(O$,r);case Xp:case Zp:return this.isSubtype(dG,r);case Yp:return this.isSubtype(z$,r);case Qp:return this.isSubtype(yp,r);case ef:case tf:return this.isSubtype(pG,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"ArrayValue":return{name:"ArrayValue",properties:[{name:"elements",defaultValue:[]}]};case"AuthorCaptionAttribute":return{name:"AuthorCaptionAttribute",properties:[{name:"caption"}]};case"AuthorCaptionClassesAttribute":return{name:"AuthorCaptionClassesAttribute",properties:[{name:"captionClasses"}]};case"AuthorCaptionFontFamilyAttribute":return{name:"AuthorCaptionFontFamilyAttribute",properties:[{name:"captionFontFamily"}]};case"AuthorImageClassesAttribute":return{name:"AuthorImageClassesAttribute",properties:[{name:"imageClasses"}]};case"AuthorNameAttribute":return{name:"AuthorNameAttribute",properties:[{name:"name"}]};case"AuthorNameClassesAttribute":return{name:"AuthorNameClassesAttribute",properties:[{name:"nameClasses"}]};case"AuthorNameFontFamilyAttribute":return{name:"AuthorNameFontFamilyAttribute",properties:[{name:"nameFontFamily"}]};case"AuthorSrcAttribute":return{name:"AuthorSrcAttribute",properties:[{name:"src"}]};case"AuthorTag":return{name:"AuthorTag",properties:[{name:"attributes",defaultValue:[]}]};case"AvatarAccessoriesTypeAttribute":return{name:"AvatarAccessoriesTypeAttribute",properties:[{name:"accessoriesType"}]};case"AvatarClotheTypeAttribute":return{name:"AvatarClotheTypeAttribute",properties:[{name:"clotheType"}]};case"AvatarEyebrowTypeAttribute":return{name:"AvatarEyebrowTypeAttribute",properties:[{name:"eyebrowType"}]};case"AvatarEyeTypeAttribute":return{name:"AvatarEyeTypeAttribute",properties:[{name:"eyeType"}]};case"AvatarFacialHairTypeAttribute":return{name:"AvatarFacialHairTypeAttribute",properties:[{name:"facialHairType"}]};case"AvatarGraphicTypeAttribute":return{name:"AvatarGraphicTypeAttribute",properties:[{name:"graphicType"}]};case"AvatarHairColorAttribute":return{name:"AvatarHairColorAttribute",properties:[{name:"hairColor"}]};case"AvatarMouthTypeAttribute":return{name:"AvatarMouthTypeAttribute",properties:[{name:"mouthType"}]};case"AvatarSkinColorAttribute":return{name:"AvatarSkinColorAttribute",properties:[{name:"skinColor"}]};case"AvatarStyleAttribute":return{name:"AvatarStyleAttribute",properties:[{name:"style"}]};case"AvatarTag":return{name:"AvatarTag",properties:[{name:"attributes",defaultValue:[]}]};case"AvatarTopTypeAttribute":return{name:"AvatarTopTypeAttribute",properties:[{name:"topType"}]};case"AwsIconTypeAttribute":return{name:"AwsIconTypeAttribute",properties:[{name:"icon"}]};case"AwsTag":return{name:"AwsTag",properties:[{name:"attributes",defaultValue:[]}]};case"AzureIconTypeAttribute":return{name:"AzureIconTypeAttribute",properties:[{name:"icon"}]};case"AzureTag":return{name:"AzureTag",properties:[{name:"attributes",defaultValue:[]}]};case"BackgroundColorAttribute":return{name:"BackgroundColorAttribute",properties:[{name:"backgroundColor"}]};case"BacktickStringPropRowAttribute":return{name:"BacktickStringPropRowAttribute",properties:[{name:"value"}]};case"BooleanPropRowAttribute":return{name:"BooleanPropRowAttribute",properties:[{name:"value"}]};case"BoxTag":return{name:"BoxTag",properties:[{name:"attributes",defaultValue:[]}]};case"BoxTypeAttribute":return{name:"BoxTypeAttribute",properties:[{name:"type"}]};case"ClassesAttribute":return{name:"ClassesAttribute",properties:[{name:"classes"}]};case"CodeAttribute":return{name:"CodeAttribute",properties:[{name:"code"}]};case"DimensionAttribute":return{name:"DimensionAttribute",properties:[{name:"attributes",defaultValue:[]}]};case"EdgeAnimateAttribute":return{name:"EdgeAnimateAttribute",properties:[{name:"animated",defaultValue:!1}]};case"EdgeLabelAttribute":return{name:"EdgeLabelAttribute",properties:[{name:"label"}]};case"EdgeLabelStyleAttribute":return{name:"EdgeLabelStyleAttribute",properties:[{name:"labelStyle"}]};case"EdgeSelectableAttribute":return{name:"EdgeSelectableAttribute",properties:[{name:"selectable",defaultValue:!1}]};case"EdgeSourceAttribute":return{name:"EdgeSourceAttribute",properties:[{name:"source"}]};case"EdgeSourceHandleAttribute":return{name:"EdgeSourceHandleAttribute",properties:[{name:"sourceHandle"}]};case"EdgeStyleAttribute":return{name:"EdgeStyleAttribute",properties:[{name:"style"}]};case"EdgeTag":return{name:"EdgeTag",properties:[{name:"attributes",defaultValue:[]}]};case"EdgeTargetAttribute":return{name:"EdgeTargetAttribute",properties:[{name:"target"}]};case"EdgeTargetHandleAttribute":return{name:"EdgeTargetHandleAttribute",properties:[{name:"targetHandle"}]};case"EdgeTypeAttribute":return{name:"EdgeTypeAttribute",properties:[{name:"type"}]};case"FontFamily":return{name:"FontFamily",properties:[{name:"fontFamily"}]};case"FontFamilyAttribute":return{name:"FontFamilyAttribute",properties:[{name:"fontFamily"}]};case"FontSizeAttribute":return{name:"FontSizeAttribute",properties:[{name:"fontSize"}]};case"GcpIconTypeAttribute":return{name:"GcpIconTypeAttribute",properties:[{name:"icon"}]};case"GcpTag":return{name:"GcpTag",properties:[{name:"attributes",defaultValue:[]}]};case"HeightAttribute":return{name:"HeightAttribute",properties:[{name:"height"}]};case"IdAttribute":return{name:"IdAttribute",properties:[{name:"id"}]};case"Model":return{name:"Model",properties:[{name:"authorTags",defaultValue:[]},{name:"avatarTags",defaultValue:[]},{name:"awsTags",defaultValue:[]},{name:"azureTags",defaultValue:[]},{name:"boxTags",defaultValue:[]},{name:"edgeTags",defaultValue:[]},{name:"gcpTags",defaultValue:[]},{name:"skillTags",defaultValue:[]},{name:"svgTags",defaultValue:[]},{name:"textTags",defaultValue:[]}]};case"NumberPropRowAttribute":return{name:"NumberPropRowAttribute",properties:[{name:"value"}]};case"PositionAttribute":return{name:"PositionAttribute",properties:[{name:"attributes",defaultValue:[]}]};case"Property":return{name:"Property",properties:[{name:"key"},{name:"value"}]};case"PropsAttribute":return{name:"PropsAttribute",properties:[{name:"props"}]};case"PropsObject":return{name:"PropsObject",properties:[{name:"properties",defaultValue:[]}]};case"SkillIconTypeAttribute":return{name:"SkillIconTypeAttribute",properties:[{name:"icon"}]};case"SkillTag":return{name:"SkillTag",properties:[{name:"attributes",defaultValue:[]}]};case"StringPropRowAttribute":return{name:"StringPropRowAttribute",properties:[{name:"value"}]};case"StyleProperty":return{name:"StyleProperty",properties:[{name:"styleAttributes",defaultValue:[]}]};case"SvgTag":return{name:"SvgTag",properties:[{name:"attributes",defaultValue:[]}]};case"TextAttribute":return{name:"TextAttribute",properties:[{name:"text"}]};case"TextColorAttribute":return{name:"TextColorAttribute",properties:[{name:"textColor"}]};case"TextTag":return{name:"TextTag",properties:[{name:"attributes",defaultValue:[]}]};case"WidthAttribute":return{name:"WidthAttribute",properties:[{name:"width"}]};case"XAttribute":return{name:"XAttribute",properties:[{name:"isNegativeX",defaultValue:!1},{name:"x"}]};case"YAttribute":return{name:"YAttribute",properties:[{name:"isNegativeY",defaultValue:!1},{name:"y"}]};default:return{name:e,properties:[]}}}},q=new Nu;var rf,WI=()=>rf??(rf=Bc(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Yadl",
  "imports": [],
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Model",
      "entry": true,
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "awsTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@47"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "azureTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@66"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "gcpTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@74"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "skillTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@82"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "authorTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@92"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "avatarTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@116"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "boxTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@120"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "textTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@123"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "edgeTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@138"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "svgTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@141"
              },
              "arguments": []
            }
          }
        ],
        "cardinality": "*"
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ClassesAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "classes"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "classes",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "QualifiedName",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@30"
                },
                "arguments": []
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "WidthAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "width"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "width",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@28"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "HeightAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "height"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "height",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@28"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "XAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "x"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "isNegativeX",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "-"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "x",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@28"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "YAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "y"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "isNegativeY",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "-"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "y",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@28"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IdAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "id"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "id",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BackgroundColorAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "background-color"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "backgroundColor",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PositionAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@5"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@6"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PositionAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "position"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DimensionAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@3"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DimensionAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "dimension"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@11"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FontSizeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "font-size"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "fontSize",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@28"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FontFamily",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "fontFamily"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "fontFamily",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FontFamilyAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "fontFamily"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "fontFamily",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TextColorAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "text-color"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "textColor",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PropsAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "props"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "props",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@18"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PropsObject",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "properties",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@19"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "properties",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@19"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Property",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "key",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@24"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "StringPropRowAttribute",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@33"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BacktickStringPropRowAttribute",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@34"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NumberPropRowAttribute",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@28"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BooleanPropRowAttribute",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@35"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Value",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@20"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@21"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@23"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@25"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ArrayValue",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "["
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@24"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@24"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "]"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "StyleAttribute",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@8"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "StyleProperty",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "style"
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "styleAttributes",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@26"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "styleAttributes",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@26"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "NUMBER",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+(\\\\.[0-9]*)?/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "TEXT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[^<>]+/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\"(\\\\\\\\.|[^\\"\\\\\\\\])*\\"|'(\\\\\\\\.|[^'\\\\\\\\])*'/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "BACKTICK_STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\`[^\`]*\`/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "BOOLEAN",
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "true"
            }
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "false"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/"
      },
      "fragment": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationAPIGateway"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationAppFlow"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationEventBridge"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationConsoleMobileApplication"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationExpressWorkflows"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationAppSync"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationManagedWorkflowsforApacheAirflow"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationMQ"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationSimpleQueueService"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationStepFunctions"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationSimpleNotificationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsChimeSDK"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsChimeVoiceConnector"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsChime"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsPinpointAPIs"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsConnect"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsPinpoint"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsSimpleEmailService"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsWickr"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsWorkDocsSDK"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsSupplyChain"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsWorkDocs"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsAthena"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsWorkMail"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsDataZone"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsDataPipeline"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsAlexaForBusiness"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsCleanRooms"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsCloudSearch"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsDataExchange"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsGlueDataBrew"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsGlue"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesisDataAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesisFirehose"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesisVideoStreams"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesis"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsLakeFormation"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsFinSpace"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsManagedStreamingforApacheKafka"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsRedshift"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementApplicationCostProfiler"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementBillingConductor"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementCostandUsageReport"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementCostExplorer"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsOpenSearchService"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementSavingsPlans"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesisDataStreams"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsGlueElasticViews"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementReservedInstanceReporting"
          },
          {
            "$type": "Keyword",
            "value": "aWSBlockchainManagedBlockchain"
          },
          {
            "$type": "Keyword",
            "value": "aWSBlockchainQuantumLedgerDatabase"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeApplicationAutoScaling"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeBottlerocket"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementBudgets"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeComputeOptimizer"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeEC2ImageBuilder"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeEC2AutoScaling"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeEC2"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeGenomicsCLI"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsHoneycode"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeElasticFabricAdapter"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeLocalZones"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeLambda"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeAppRunner"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeNICEDCV"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeNICEEnginFrame"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeNitroEnclaves"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeOutpostsfamily"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeOutpostsrack"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsEMR"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeSail"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeParallelCluster"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeServerlessApplicationRepository"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeBatch"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeSimSpaceWeaver"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxKrakatoa"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxFrost"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeVMwareCloudonAWS"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxSequoia"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxStoke"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxXMesh"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxDeadline"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeWavelength"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersEKSCloud"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSComputeOutpostsservers"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeFargate"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeElasticBeanstalk"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersECSAnywhere"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersElasticKubernetesService"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersElasticContainerService"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementActivate"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersFargate"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsQuickSight"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementIQ"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersRedHatOpenShiftServiceonAWS"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersElasticContainerRegistry"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementManagedServices"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementSupport"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementTrainingCertification"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementRePost"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersEKSAnywhere"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseDatabaseMigrationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseElastiCache"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseKeyspaces"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseMemoryDBforRedis"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseAurora"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseNeptune"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseRDSonVMware"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseTimestream"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersEKSDistro"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseDocumentDB"
          },
          {
            "$type": "Keyword",
            "value": "aWSFrontEndWebMobileAmplify"
          },
          {
            "$type": "Keyword",
            "value": "aWSFrontEndWebMobileDeviceFarm"
          },
          {
            "$type": "Keyword",
            "value": "aWSFrontEndWebMobileLocationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsApplicationComposer"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCloudDevelopmentKit"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCloudShell"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseDynamoDB"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeArtifact"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCloud9"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeBuild"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeCatalyst"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeCommit"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCloudControlAPI"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseRDS"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementProfessionalServices"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodePipeline"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCommandLineInterface"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsToolsandSDKs"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeStar"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeDeploy"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsXRay"
          },
          {
            "$type": "Keyword",
            "value": "aWSGeneralIconsMarketplace_Dark"
          },
          {
            "$type": "Keyword",
            "value": "aWSGeneralIconsMarketplace_"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesGameKit"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesGameSparks"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesLumberyard"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesGameLift"
          },
          {
            "$type": "Keyword",
            "value": "aWSEndUserComputingAppStream"
          },
          {
            "$type": "Keyword",
            "value": "aWSEndUserComputingWorkLink"
          },
          {
            "$type": "Keyword",
            "value": "aWSEndUserComputingWorkSpacesFamily"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesOpen3DEngine"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCorretto"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsFreeRTOS"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTButton"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoT1Click"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTCore"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTDeviceDefender"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTEduKit"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTDeviceManagement"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTEvents"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTGreengrass"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTSiteWise"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTExpressLink"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTThingsGraph"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTTwinMaker"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningComprehendMedical"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningApacheMXNetonAWS"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTRoboRunner"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningCodeWhisperer"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTFleetWise"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningComprehend"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepComposer"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepLearningContainers"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepRacer"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepLens"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningElasticInference"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute5",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningForecast"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepLearningAMIs"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningHealthLake"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningAugmentedAIA2I"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningKendra"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningLookoutforEquipment"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningLookoutforMetrics"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningCodeGuru"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningLex"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningLookoutforVision"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningMonitron"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningOmics"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningPersonalize"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDevOpsGuru"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningSageMakerStudioLab"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningPanorama"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningSageMaker"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningFraudDetector"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningRekognition"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTorchServe"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTextract"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningNeuron"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTensorFlowonAWS"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTranscribe"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferApplicationDiscoveryService"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTranslate"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferDataSync"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningSageMakerGroundTruth"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferMainframeModernization"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferServerMigrationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferApplicationMigrationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferTransferFamily"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryAppMesh"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryCloudDirectory"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryCloudMap"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferMigrationHub"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferMigrationEvaluator"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryCloudWAN"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryClientVPN"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryCloudFront"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryGlobalAccelerator"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryElasticLoadBalancing"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute6",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryRoute53"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryPrivateLink"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliverySitetoSiteVPN"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryPrivate5G"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryDirectConnect"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryTransitGateway"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryVPCLattice"
          },
          {
            "$type": "Keyword",
            "value": "aWSRoboticsRoboMaker"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryVirtualPrivateCloud"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryVerifiedAccess"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageBackup"
          },
          {
            "$type": "Keyword",
            "value": "aWSQuantumTechnologiesBraket"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageElasticBlockStore"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageEFS"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageElasticDisasterRecovery"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSxforNetAppONTAP"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSx"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFileCache"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningPolly"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageS3onOutposts"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSxforLustre"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSimpleStorageServiceGlacier"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSnowballEdge"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSxforWFS"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSnowcone"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageStorageGateway"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSxforOpenZFS"
          },
          {
            "$type": "Keyword",
            "value": "aWSSatelliteGroundStation"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSimpleStorageService"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSnowmobile"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceAutoScaling"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceBackintAgent"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceChatbot"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSnowball"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceCloudWatch"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceConfig"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceCloudFormation"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceCloudTrail"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceControlTower"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceAppConfig"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceLaunchWizard"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceDistroforOpenTelemetry"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute7",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceApplicationAutoScaling"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceManagedGrafana"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceOpsWorks"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceManagedServiceforPrometheus"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceOrganizations"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceResilienceHub"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceProton"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceServiceCatalog"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceLicenseManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceServiceManagementConnector"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceTrustedAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElasticTranscoder"
          },
          {
            "$type": "Keyword",
            "value": "aWSVRARSumerian"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalAppliancesSoftware"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceManagementConsole"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalDelta"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceWellArchitectedTool"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceFaultInjectionSimulator"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalConductor"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalLink"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceSystemsManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernancePersonalHealthDashboard"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaConvert"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaPackage"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaStore"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaLive"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaConnect"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesInteractiveVideoService"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalServer"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesKinesisVideoStreams"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceArtifact"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceCloudHSM"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceAuditManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaTailor"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceCertificateManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceCloudDirectory"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceDirectoryService"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceDetective"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceFirewallManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalLive"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceCognito"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceIdentityandAccessManagement"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@38"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@39"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@40"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@41"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@42"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@43"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@44"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@45"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Aws"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@46"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute0",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningGenomics"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningBatchAI"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningFaceAPIs"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMachineLearningStudioClassicWebServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningCustomVision"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningComputerVision"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningPersonalizers"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningContentModerators"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningTranslatorText"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningSpeechServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningQnAMakers"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningLanguageUnderstanding"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAzureExperimentationStudio"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningImmersiveReaders"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAnomalyDetector"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAzureObjectUnderstanding"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAzureAppliedAIServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMetricsAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningLanguage"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningFormRecognizers"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningContentSafety"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningCognitiveServicesDecisions"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAzureOpenAI"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAIStudio"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningServerlessSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningCognitiveSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningCognitiveServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningGenomicsAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningBotServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMachineLearningStudioWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMachineLearning"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMachineLearningStudioWebServicePlans"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServicePlans"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningBonsai"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServiceDomains"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServiceCertificates"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesCDNProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesNotificationHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesCognitiveSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServiceEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsEndpointAnalytics"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureAnalyticsStreamAnalyticsJobs"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAzureWorkbooks"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAzureSynapseAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsPrivateLinkServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsPowerBIEmbedded"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsDataFactories"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsLogAnalyticsWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsEventHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsDataLakeAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsHDInsightClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAzureDataExplorerClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAzureDatabricks"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsEventHubClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAnalysisServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsDataLakeStoreGen1"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackMultiTenancy"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsPowerPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackInfrastructureBackup"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackCapacity"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackPlans"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackOffers"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackUpdates"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackUserSubscriptions"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureEcosystemApplens"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainOutboundConnection"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureEcosystemAzureHybridCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainBlockchainApplications"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainAzureBlockchainService"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainConsortium"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeMaintenanceConfiguration"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureEcosystemCollaborativeService"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainABSMember"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeHostPools"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeApplicationGroup"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainAzureTokenService"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAutomanagedVM"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeManagedServiceFabric"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeMetricsAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeDiskEncryptionSets"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeRestorePointsCollections"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAzureComputeGalleries"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureComputeImageTemplates"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeComputeFleet"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeVirtualMachine"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeRestorePoints"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeKubernetesServices"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeDisksSnapshots"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAvailabilitySets"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeVirtualMachinesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeCloudServicesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeOSImagesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeBatchAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeFunctionApps"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeDisks"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeImages"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeMeshApplications"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeVMScaleSets"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeServiceFabricClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeSharedImageGalleries"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeImageDefinitions"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeDisksClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeVMImagesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeContainerInstances"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeContainerServicesDeprecated"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeHostGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAzureSpringApps"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeHosts"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeImageVersions"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLDataWarehouses"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSynapseAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSQL"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSSISLiftAndShiftIR"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureCosmosDB"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesOracleDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAKSAutomatic"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzurePurviewAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabaseMySQLServer"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesVirtualClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesDataFactories"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSQLVM"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesElasticJobAgents"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabasePostgreSQLServerGroup"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabaseMariaDBServer"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSQLEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLServer"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabasePostgreSQLServer"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabaseMigrationServices"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLManagedInstance"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesManagedDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesCacheRedis"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesInstancePools"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSQLServerStretchDatabases"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDataExplorerClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLServerRegistries"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersAzureRedHatOpenShift"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersKubernetesServices"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersServiceFabricClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLElasticPools"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersContainerInstances"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersContainerRegistries"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureOperatorInsights"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureOperatorNexus"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureOperator5GCore"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureMonitorPipeline"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureProgrammableConnectivity"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureOperatorServiceManager"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsChangeAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsApplicationInsights"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsLoadTesting"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsCloudTest"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersBatchAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsLabAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsManagedDevOpsPools"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsCodeOptimization"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsWorkspaceGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsDevOpsStarter"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsAPIConnections"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsAPIManagementServices"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostManagementandBilling"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsAzureDevOps"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsDevTestLabs"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsLabServices"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureGeneralPreviewFeatures"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralReservations"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralSubscriptions"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralServiceHealth"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralAllResources"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralResourceGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralRecent"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMarketplace"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTemplates"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralQuickstartCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralManagementGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralInformation"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralHelpandSupport"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralDashboard"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralResourceExplorer"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTroubleshoot"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMarketplaceManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTag"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBizTalk"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBlobBlock"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFreeServices"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralRegionManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBranch"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBlobPage"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBug"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBrowser"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBuilds"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCommit"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralControls"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCache"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralControlsHorizontal"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCode"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralDevConsole"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCounter"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFile"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralError"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralDownload"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralExtensions"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFiles"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFolderWebsite"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute5",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureGeneralGear"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostBudgets"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCubes"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFolderBlank"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralGlobeError"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralGlobeWarning"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralGuide"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralHeart"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralJourneyHub"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLaunchPortal"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralImage"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralGlobeSuccess"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLoadTest"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFTP"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostAlerts"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralInputOutput"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLearn"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralManagementPortal"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMobileEngagement"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLogStreaming"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMediaFile"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLocation"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralProcessExplorer"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralPowerUp"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralProductionReadyDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFeaturePreviews"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralPower"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMobile"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralResourceLinked"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralSSD"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralServerFarm"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralPowershell"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralStorageAzureFiles"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralStorageQueue"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralScheduler"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralResourceGroupList"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTable"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralToolbox"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralVersions"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWebsitePower"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWebTest"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute6",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureGeneralWebsiteStaging"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralStorageContainer"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTFSVCRepository"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWorkbooks"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMedia"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWebSlots"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralModule"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWorkflow"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBacklog"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTags"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceSecurityApple"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceSecurityWindows"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneEBooks"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneClientApps"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneIntune"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDevices"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralSearchGrid"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceCompliance"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneSecurityBaselines"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneSoftwareUpdates"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceEnrollment"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneExchangeAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneIntuneAppProtection"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneTenantStatus"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneMindaro"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneIntuneForEducation"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneEntraIdentityRolesandAdministrators"
          },
          {
            "$type": "Keyword",
            "value": "azureIotMachineLearningStudioClassicWebServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIotStreamAnalyticsJobs"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceSecurityGoogle"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceConfiguration"
          },
          {
            "$type": "Keyword",
            "value": "azureIotEventHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureIotLogicApps"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureDataboxGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureStackHCISizer"
          },
          {
            "$type": "Keyword",
            "value": "azureIotDigitalTwins"
          },
          {
            "$type": "Keyword",
            "value": "azureIotStackHCIPremium"
          },
          {
            "$type": "Keyword",
            "value": "azureIotNotificationHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureIoTOperations"
          },
          {
            "$type": "Keyword",
            "value": "azureIotFunctionApps"
          },
          {
            "$type": "Keyword",
            "value": "azureIotNotificationHubNamespaces"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureCosmosDB"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute7",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureIotMachineLearningStudioWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureStack"
          },
          {
            "$type": "Keyword",
            "value": "azureIotEventHubClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureIotMachineLearningStudioWebServicePlans"
          },
          {
            "$type": "Keyword",
            "value": "azureIotTimeSeriesInsightsEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureIotIndustrialIoT"
          },
          {
            "$type": "Keyword",
            "value": "azureIotIoTHub"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureMapsAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureIotIoTEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureIotIoTCentralApplications"
          },
          {
            "$type": "Keyword",
            "value": "azureIotEventGridSubscriptions"
          },
          {
            "$type": "Keyword",
            "value": "azureIotTimeSeriesInsightsEventSources"
          },
          {
            "$type": "Keyword",
            "value": "azureIotDeviceProvisioningServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureDataboxGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationSQLDataWarehouses"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationIntegrationServiceEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationSystemTopic"
          },
          {
            "$type": "Keyword",
            "value": "azureIotWindows10CoreServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIotTimeSeriesInsightsAccessPolicies"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationPartnerTopic"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationPartnerRegistration"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationPartnerNamespace"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationIntegrationEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureIotTimeSeriesDataSets"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationLogicApps"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAPIManagementServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureStackEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationStorSimpleDeviceManagers"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationDataFactories"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAPIConnections"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureAPIforFHIR"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationEventGridTopics"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationPowerPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationSoftwareasaService"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationRelays"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureDataCatalog"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationEventGridSubscriptions"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationIntegrationAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAppConfiguration"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationSendGridAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureSQLServerStretchDatabases"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationLogicAppsCustomConnector"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute8",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureIdentitySecurity"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureServiceBus"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationBusinessProcessTracking"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAdministrativeUnits"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationEventGridDomains"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityVerifiableCredentials"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraPrivlegedIdentityManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraIdentityLicenses"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityTenantProperties"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAPIProxy"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraVerifiedID"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityVerificationAsAService"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraGlobalSecureAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityMultiFactorAuthentication"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityExternalIdentities"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraPrivateAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraIdentityCustomRoles"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraConnectSync"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraDomainServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraConnectHealth"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraConnect"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityActiveDirectoryConnectHealth"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEnterpriseApplications"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAzureADB2C"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityManagedIdentities"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAzureInformationProtection"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityUsers"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraInternetAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraManagedIdentities"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraIDProtection"
          },
          {
            "$type": "Keyword",
            "value": "azureMenuKeys"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAppRegistrations"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceMonitor"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityUserSettings"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAlerts"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceCostManagementandBilling"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceBlueprints"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityIdentityGovernance"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceActivityLog"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraIdentityRolesandAdministrators"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute9",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceDiagnosticsSettings"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceCompliance"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceSchedulerJobCollections"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceMyCustomers"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceApplicationInsights"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceRecoveryServicesVaults"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceSolutions"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceMetrics"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceServiceProviders"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceOperationLogClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAutomationAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceServiceCatalogMAD"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceEducation"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAzureLighthouse"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceIntuneTrends"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAzureArc"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceArcMachines"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceManagedApplicationsCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceUserPrivacy"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceCustomerLockboxforMicrosoftAzure"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceResourcesProvider"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceLogAnalyticsWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernancePolicy"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceResourceGraphExplorer"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateCostManagementandBilling"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceUniversalPrint"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceMachinesAzureArc"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateDataBox"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateRecoveryServicesVaults"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceManagedDesktop"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrationAzureDatabaseMigrationServices"
          },
          {
            "$type": "Keyword",
            "value": "azureMixedRealityRemoteRendering"
          },
          {
            "$type": "Keyword",
            "value": "azureMixedRealitySpatialAnchorAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureMobileNotificationHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorMonitor"
          },
          {
            "$type": "Keyword",
            "value": "azureMobilePowerPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateAzureDataboxGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateAzureStackEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorDiagnosticsSettings"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorActivityLog"
          },
          {
            "$type": "Keyword",
            "value": "azureMobileAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateAzureMigrate"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute10",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureMonitorAzureMonitorsforSAPSolutions"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorApplicationInsights"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorMetrics"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorChangeAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorNetworkWatcher"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorAzureWorkbooks"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsIceEdgeActions"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorLogAnalyticsWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsExternalid"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsIceToolchainOrchestrator"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorAutoScale"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsExternalidmodified"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsAzureManagedRedis"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsIceLandingZone"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsEdgeStorageAccelerator"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsBreeze"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsVPNClientWindows"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityMicrosoftDefenderforIoT"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityDetonation"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityMicrosoftDefenderEASM"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsAIatEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityEntraIdentityRiskyUsers"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityEntraIdentityRiskySignins"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityIdentitySecureScore"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityMultifactorAuthentication"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityAzureInformationProtection"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityMicrosoftDefenderforCloud"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityKeyVaults"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityConditionalAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityAzureSentinel"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityUserSettings"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPrivateLink"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityExtendedSecurityUpdates"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingAzureFirewallManager"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingAzureFirewallPolicy"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingCDNProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingIPGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualWANHub"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPrivateLinkService"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPrivateLinkServices"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingLoadBalancerHub"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityApplicationSecurityGroups"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute11",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualRouter"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingConnectedCache"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingBastions"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingSpotVM"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingResourceManagementPrivateLink"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingSubnet"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDNSSecurityPolicy"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingAzureCommunicationsGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDNSPrivateResolver"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDNSMultistack"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingSpotVMSS"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualNetworks"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingApplicationGatewayContainers"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualNetworkGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingLoadBalancers"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDNSZones"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingIPAddressmanager"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingATMMultistack"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingTrafficManagerProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingNetworkWatcher"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingRouteFilters"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPublicIPAddressesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPublicIPAddresses"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingOnPremisesDataGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingNetworkSecurityGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingFrontDoorandCDNProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualNetworksClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDDoSProtectionPlans"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingApplicationGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingExpressRouteCircuits"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingNetworkInterfaces"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingLocalNetworkGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingConnections"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingNAT"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualWANs"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingWebApplicationFirewallPoliciesWAF"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingProximityPlacementGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingReservedIPAddressesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingRouteTables"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPublicIPPrefixes"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageRecoveryServicesVaults"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingFirewalls"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute12",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureStorageAzureDataboxGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageAzureHCPCache"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageAccountsClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageManagedFileShares"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorSimpleDeviceManagers"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageDataLakeStorageGen1"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorSimpleDataManagers"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageSyncServices"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingServiceEndpointPolicies"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageExplorer"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageActions"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageAzureNetAppFiles"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageAzureStackEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageDataShares"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageImportExportJobs"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageAzureFileshares"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageDataShareInvitations"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServiceDomains"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServiceCertificates"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAPICenter"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppSpaceComponent"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppSpace"
          },
          {
            "$type": "Keyword",
            "value": "azureWebStaticApps"
          },
          {
            "$type": "Keyword",
            "value": "azureWebCognitiveSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAPIManagementServices"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAPIConnections"
          },
          {
            "$type": "Keyword",
            "value": "azureWebSignalR"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServicePlans"
          },
          {
            "$type": "Keyword",
            "value": "azureWebPowerPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServiceEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageDataBox"
          },
          {
            "$type": "Keyword",
            "value": "azureWebCognitiveServices"
          },
          {
            "$type": "Keyword",
            "value": "azureWebNotificationHubNamespaces"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureVirtualDesktop"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAzureMediaService"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherSSHKeys"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAzureSpringApps"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherInternetAnalyzerProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureWebFrontDoorandCDNProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureCloudShell"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute13",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureOtherExpressRouteDirect"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVideoAnalyzers"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureNetworkFunctionManagerFunctions"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherLogAnalyticsQueryPack"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherPeeringService"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureVMwareSolution"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureCommunicationServices"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherPeerings"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcKubernetes"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureVideoIndexer"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcPostgreSQL"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDashboardHub"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDataCollectionRules"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAVSVM"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcSQLServer"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCostExport"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcSQLManagedInstance"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureChaosStudio"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherResourceMover"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherNetworkManagers"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureBackupCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherModularDataCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherBackupVault"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDedicatedHSM"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureMonitorDashboard"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcDataservices"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherFiji"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherSCVMMManagementServers"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWebAppDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCloudServicesextendedsupport"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDeviceUpdateIoTHub"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureSupportCenterBlue"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureHPCWorkbenches"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherBareMetalInfrastructure"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherConnectedVehiclePlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherTemplateSpecs"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDiskPool"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherPrivateEndpoints"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCustomIPPrefix"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherFHIRService"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherConfidentialLedgers"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAquila"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute14",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureOtherMedTechService"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherManagedInstanceApacheCassandra"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherOpenSupplyChainPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureOrbital"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherReservedCapacity"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherEntraIdentityLicenses"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureNetworkFunctionManager"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherTestBase"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherMissionLandingZone"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWindowsNotificationServices"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherMobileNetworks"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVMAppVersions"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVMAppDefinitions"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherResourceGuard"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureEdgeHardwareCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzurite"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCeres"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWorkerContainerApp"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCapacityReservationGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherSavingsPlans"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVMImageVersion"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureManagedGrafana"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherUpdateManagementCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherTargetsManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCommunityImages"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherStorageFunctions"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureComputeGalleries"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherSonicDash"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherComplianceCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureLoadTesting"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureCenterforSAP"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherNetworkSecurityPerimeters"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherContainerAppsEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVirtualVisitsBuilder"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureQuotas"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVirtualInstanceforSAP"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCentralServiceInstanceForSAP"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherExpressRouteTrafficCollector"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureStorageMover"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherElasticSAN"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAppComplianceAutomation"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherMicrosoftDevBox"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute15",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureOtherAzureDeploymentEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureSustainability"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureDevTunnels"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherKubernetesFleetManager"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAKSIstio"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherOSConfig"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDatabaseInstanceForSAP"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherIcMTroubleshooting"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderExternalManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderRobotController"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVirtualEnclaves"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderHMI"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderSensor"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderMarquee"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderDCSController"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderHistorian"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderSlot"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderIndustrialPackagingSystem"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderDistributerControlSystem"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderIndustrialPrinter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderIndustrialScaleSystem"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderWebGuidingSystem"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderEngineeringStation"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderCMLocalManager"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderIndustrialRobot"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderPLC"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderFreezerMonitor"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderMeter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderPneumaticDevice"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherMonitorHealthModels"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWACInstaller"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherHDIAKSCluster"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderRelay"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureA"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherInstancePools"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherLocalNetworkGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderRTU"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherEdgeManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureSphere"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWAC"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherExchangeOnPremisesAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAppRegistrations"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@48"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@49"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@50"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@51"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@52"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@53"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@54"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@55"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@56"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@57"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@58"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@59"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@60"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@61"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@62"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@63"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@64"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Azure"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@65"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPAccessContextManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPAiHub"
          },
          {
            "$type": "Keyword",
            "value": "gCPAdvancedAgentModeling"
          },
          {
            "$type": "Keyword",
            "value": "gCPAdministration"
          },
          {
            "$type": "Keyword",
            "value": "gCPAiPlatformUnified"
          },
          {
            "$type": "Keyword",
            "value": "gCPAiPlatform"
          },
          {
            "$type": "Keyword",
            "value": "gCPAgentAssist"
          },
          {
            "$type": "Keyword",
            "value": "gCPAnalyticsHub"
          },
          {
            "$type": "Keyword",
            "value": "gCPAdvancedSolutionsLab"
          },
          {
            "$type": "Keyword",
            "value": "gCPAnthos"
          },
          {
            "$type": "Keyword",
            "value": "gCPAnthosConfigManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPAppEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPAnthosServiceMesh"
          },
          {
            "$type": "Keyword",
            "value": "gCPApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPApiMonetization"
          },
          {
            "$type": "Keyword",
            "value": "gCPApigeeApiPlatform"
          },
          {
            "$type": "Keyword",
            "value": "gCPApiAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "gCPArtifactRegistry"
          },
          {
            "$type": "Keyword",
            "value": "gCPApigeeSense"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutoml"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlTables"
          },
          {
            "$type": "Keyword",
            "value": "gCPAssuredWorkloads"
          },
          {
            "$type": "Keyword",
            "value": "gCPAssetInventory"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlTranslation"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlVideoIntelligence"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlVision"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlNaturalLanguage"
          },
          {
            "$type": "Keyword",
            "value": "gCPBareMetalSolutions"
          },
          {
            "$type": "Keyword",
            "value": "gCPBeyondcorp"
          },
          {
            "$type": "Keyword",
            "value": "gCPBigtable"
          },
          {
            "$type": "Keyword",
            "value": "gCPBatch"
          },
          {
            "$type": "Keyword",
            "value": "gCPBigquery"
          },
          {
            "$type": "Keyword",
            "value": "gCPBilling"
          },
          {
            "$type": "Keyword",
            "value": "gCPCertificateManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPCatalog"
          },
          {
            "$type": "Keyword",
            "value": "gCPCertificateAuthorityService"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudApiGateway"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudAssetInventory"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudAuditLogs"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudApis"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudCdn"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudBuild"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPBinaryAuthorization"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudComposer"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudArmor"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudCode"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDataFusion"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDeploymentManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDeploy"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDns"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDomains"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudEkm"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudEndpoints"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudExternalIpAddresses"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudFirewallRules"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudGpu"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudForMarketing"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudFunctions"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudGeneric"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudHealthcareMarketplace"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudHealthcareApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudInterconnect"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudInferenceApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudIds"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudHsm"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudLogging"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudJobsApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudLoadBalancing"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudMonitoring"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudMediaEdge"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudNetwork"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudNaturalLanguageApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudOptimizationAi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudOps"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudNat"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudRouter"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudRoutes"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudRunForAnthos"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudRun"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudScheduler"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudShell"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudSpanner"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudStorage"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudSecurityScanner"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPCloudTasks"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudTranslationApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudTestLab"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudTpu"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudSql"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudVpn"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudVisionApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudOptimizationAiFleetRoutingApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPConnectors"
          },
          {
            "$type": "Keyword",
            "value": "gCPConfigurationManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPConnectivityTest"
          },
          {
            "$type": "Keyword",
            "value": "gCPContainerOptimizedOs"
          },
          {
            "$type": "Keyword",
            "value": "gCPComputeEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPContainerRegistry"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataCatalog"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataLayers"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataQna"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataLabeling"
          },
          {
            "$type": "Keyword",
            "value": "gCPContactCenterAi"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataTransfer"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataStudio"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataLossPreventionApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatabaseMigrationService"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataflow"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatalab"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataplex"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataproc"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatapol"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataprocMetastore"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataprep"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatastore"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatashare"
          },
          {
            "$type": "Keyword",
            "value": "gCPDebugger"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatastream"
          },
          {
            "$type": "Keyword",
            "value": "gCPDialogflow"
          },
          {
            "$type": "Keyword",
            "value": "gCPDeveloperPortal"
          },
          {
            "$type": "Keyword",
            "value": "gCPDialogflowCx"
          },
          {
            "$type": "Keyword",
            "value": "gCPDialogflowInsights"
          },
          {
            "$type": "Keyword",
            "value": "gCPDocumentAi"
          },
          {
            "$type": "Keyword",
            "value": "gCPEventarc"
          },
          {
            "$type": "Keyword",
            "value": "gCPErrorReporting"
          },
          {
            "$type": "Keyword",
            "value": "gCPEarlyAccessCenter"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPFilestore"
          },
          {
            "$type": "Keyword",
            "value": "gCPFirestore"
          },
          {
            "$type": "Keyword",
            "value": "gCPFinancialServicesMarketplace"
          },
          {
            "$type": "Keyword",
            "value": "gCPFleetEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPGkeOnprem"
          },
          {
            "$type": "Keyword",
            "value": "gCPFreeTrial"
          },
          {
            "$type": "Keyword",
            "value": "gCPGameServers"
          },
          {
            "$type": "Keyword",
            "value": "gCPGenomics"
          },
          {
            "$type": "Keyword",
            "value": "gCPGoogleKubernetesEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPGoogleCloudMarketplace"
          },
          {
            "$type": "Keyword",
            "value": "gCPGoogleMapsPlatform"
          },
          {
            "$type": "Keyword",
            "value": "gCPGceSystemsManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPHealthcareNlpApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPIdentityawareProxy"
          },
          {
            "$type": "Keyword",
            "value": "gCPIdentityPlatform"
          },
          {
            "$type": "Keyword",
            "value": "gCPHome"
          },
          {
            "$type": "Keyword",
            "value": "gCPIotEdge"
          },
          {
            "$type": "Keyword",
            "value": "gCPIotCore"
          },
          {
            "$type": "Keyword",
            "value": "gCPKeyAccessJustifications"
          },
          {
            "$type": "Keyword",
            "value": "gCPLauncher"
          },
          {
            "$type": "Keyword",
            "value": "gCPKeyManagementService"
          },
          {
            "$type": "Keyword",
            "value": "gCPIdentityAndAccessManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPLooker"
          },
          {
            "$type": "Keyword",
            "value": "gCPKuberun"
          },
          {
            "$type": "Keyword",
            "value": "gCPManagedServiceForMicrosoftActiveDirectory"
          },
          {
            "$type": "Keyword",
            "value": "gCPMediaTranslationApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPLocalSsd"
          },
          {
            "$type": "Keyword",
            "value": "gCPMigrateForAnthos"
          },
          {
            "$type": "Keyword",
            "value": "gCPMemorystore"
          },
          {
            "$type": "Keyword",
            "value": "gCPMyCloud"
          },
          {
            "$type": "Keyword",
            "value": "gCPMigrateForComputeEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkConnectivityCenter"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkIntelligenceCenter"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkTopology"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkTiers"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkSecurity"
          },
          {
            "$type": "Keyword",
            "value": "gCPOsPatchManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPPartnerInterconnect"
          },
          {
            "$type": "Keyword",
            "value": "gCPOsInventoryManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPPartnerPortal"
          },
          {
            "$type": "Keyword",
            "value": "gCPOsConfigurationManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPPermissions"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute5",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPPolicyAnalyzer"
          },
          {
            "$type": "Keyword",
            "value": "gCPPersistentDisk"
          },
          {
            "$type": "Keyword",
            "value": "gCPPerformanceDashboard"
          },
          {
            "$type": "Keyword",
            "value": "gCPPhishingProtection"
          },
          {
            "$type": "Keyword",
            "value": "gCPOnboarding"
          },
          {
            "$type": "Keyword",
            "value": "gCPPrivateServiceConnect"
          },
          {
            "$type": "Keyword",
            "value": "gCPPremiumNetworkTier"
          },
          {
            "$type": "Keyword",
            "value": "gCPProducerPortal"
          },
          {
            "$type": "Keyword",
            "value": "gCPProfiler"
          },
          {
            "$type": "Keyword",
            "value": "gCPQuantumEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPPubsub"
          },
          {
            "$type": "Keyword",
            "value": "gCPRealworldInsights"
          },
          {
            "$type": "Keyword",
            "value": "gCPProject"
          },
          {
            "$type": "Keyword",
            "value": "gCPRecommendationsAi"
          },
          {
            "$type": "Keyword",
            "value": "gCPQuotas"
          },
          {
            "$type": "Keyword",
            "value": "gCPRetailApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPRiskManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPReleaseNotes"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecretManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPRuntimeConfig"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecurityCommandCenter"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecurity"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecurityKeyEnforcement"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecurityHealthAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "gCPServiceDiscovery"
          },
          {
            "$type": "Keyword",
            "value": "gCPSpeechtotext"
          },
          {
            "$type": "Keyword",
            "value": "gCPStackdriver"
          },
          {
            "$type": "Keyword",
            "value": "gCPStandardNetworkTier"
          },
          {
            "$type": "Keyword",
            "value": "gCPSupport"
          },
          {
            "$type": "Keyword",
            "value": "gCPTensorflowEnterprise"
          },
          {
            "$type": "Keyword",
            "value": "gCPTexttospeech"
          },
          {
            "$type": "Keyword",
            "value": "gCPPrivateConnectivity"
          },
          {
            "$type": "Keyword",
            "value": "gCPToolsForPowershell"
          },
          {
            "$type": "Keyword",
            "value": "gCPStreamSuite"
          },
          {
            "$type": "Keyword",
            "value": "gCPTransfer"
          },
          {
            "$type": "Keyword",
            "value": "gCPTransferAppliance"
          },
          {
            "$type": "Keyword",
            "value": "gCPVertexai"
          },
          {
            "$type": "Keyword",
            "value": "gCPVisualInspection"
          },
          {
            "$type": "Keyword",
            "value": "gCPVideoIntelligenceApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPTrace"
          },
          {
            "$type": "Keyword",
            "value": "gCPTrafficDirector"
          },
          {
            "$type": "Keyword",
            "value": "gCPUserPreferences"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@67"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@68"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@69"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@70"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@71"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@72"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Gcp"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@73"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute0",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconActivityPub"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAbleton"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAWS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAfterEffects"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAndroidStudio"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAlpineJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAngular"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAnaconda"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAiScript"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAnsible"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAppwrite"
          },
          {
            "$type": "Keyword",
            "value": "skillIconActix"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAstro"
          },
          {
            "$type": "Keyword",
            "value": "skillIconApple"
          },
          {
            "$type": "Keyword",
            "value": "skillIconArduino"
          },
          {
            "$type": "Keyword",
            "value": "skillIconApollo"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAzul"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAudition"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAdonis"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAzure"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAutoCAD"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBlender"
          },
          {
            "$type": "Keyword",
            "value": "skillIconArch"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBash"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBevy"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBootstrap"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBSD"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCLion"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBun"
          },
          {
            "$type": "Keyword",
            "value": "skillIconC"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBitBucket"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCMake"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAtom"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCSS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCPP"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCloudflare"
          },
          {
            "$type": "Keyword",
            "value": "skillIconClojure"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCodePen"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCassandra"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCrystal"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDart"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconCypress"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDENO"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCoffeeScript"
          },
          {
            "$type": "Keyword",
            "value": "skillIconD3"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDevTo"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDiscord"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDiscordJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDjango"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBabel"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDiscordBots"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDotNet"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDynamoDB"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDocker"
          },
          {
            "$type": "Keyword",
            "value": "skillIconElixir"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDebian"
          },
          {
            "$type": "Keyword",
            "value": "skillIconElasticsearch"
          },
          {
            "$type": "Keyword",
            "value": "skillIconEmacs"
          },
          {
            "$type": "Keyword",
            "value": "skillIconElysia"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFastAPI"
          },
          {
            "$type": "Keyword",
            "value": "skillIconElectron"
          },
          {
            "$type": "Keyword",
            "value": "skillIconEclipse"
          },
          {
            "$type": "Keyword",
            "value": "skillIconEmber"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFlutter"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFediverse"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFortran"
          },
          {
            "$type": "Keyword",
            "value": "skillIconExpressJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconEmotion"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGTK"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFirebase"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFigma"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGCP"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGherkin"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGit"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGameMakerStudio"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGithub"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGithubActions"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFlask"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGoLang"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGmail"
          },
          {
            "$type": "Keyword",
            "value": "skillIconForth"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGraphQL"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGitLab"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconGatsby"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGulp"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHaxe"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHaskell"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHTML"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGrafana"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHeroku"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHaxeFlixel"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHibernate"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGradle"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHtmx"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGodot"
          },
          {
            "$type": "Keyword",
            "value": "skillIconIPFS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconIdea"
          },
          {
            "$type": "Keyword",
            "value": "skillIconInstagram"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJava"
          },
          {
            "$type": "Keyword",
            "value": "skillIconIllustrator"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJenkins"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJest"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJQuery"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJavaScript"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKubernetes"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKotlin"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLaravel"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLinkedIn"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKali"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKafka"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLit"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMarkdown"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJulia"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLaTeX"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLua"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMastodon"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLess"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMatlab"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMisskey"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMaterialUI"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMongoDB"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKtor"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMint"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLinux"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMySQL"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconMaven"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNeoVim"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNim"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNextJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNix"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNginx"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNestJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNpm"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNetlify"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNuxtJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNodeJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNotion"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOpenCV"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOctave"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPHP"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOpenStack"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPhotoshop"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOpenShift"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPhpStorm"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPkl"
          },
          {
            "$type": "Keyword",
            "value": "skillIconObsidian"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPinia"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPnpm"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPostgreSQL"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPerl"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPlan9"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPowershell"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOCaml"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPrisma"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPremiere"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPyCharm"
          },
          {
            "$type": "Keyword",
            "value": "skillIconProcessing"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPlanetScale"
          },
          {
            "$type": "Keyword",
            "value": "skillIconR"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPrometheus"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPostman"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPyTorch"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRails"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPug"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPython"
          },
          {
            "$type": "Keyword",
            "value": "skillIconROS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconQT"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconRedis"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRabbitMQ"
          },
          {
            "$type": "Keyword",
            "value": "skillIconReactiveX"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRaspberryPi"
          },
          {
            "$type": "Keyword",
            "value": "skillIconReact"
          },
          {
            "$type": "Keyword",
            "value": "skillIconReplit"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRemix"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRedHat"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRust"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRocket"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRider"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRollupJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSVG"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRegex"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSQLite"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRuby"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSentry"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSketchup"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSciKitLearn"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSass"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSolidJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSelenium"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRobloxStudio"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSequelize"
          },
          {
            "$type": "Keyword",
            "value": "skillIconStackOverflow"
          },
          {
            "$type": "Keyword",
            "value": "skillIconScala"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSolidity"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRedux"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSupabase"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSpring"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSwift"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTauri"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTerraform"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSublime"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSvelte"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTailwindCSS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconThreeJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSymfony"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTypeScript"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTwitter"
          },
          {
            "$type": "Keyword",
            "value": "skillIconUbuntu"
          },
          {
            "$type": "Keyword",
            "value": "skillIconStyledComponents"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@75"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@76"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@77"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@78"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@79"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@80"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Skill"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@81"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorSrcAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "src"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "src",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorNameAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "name"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorCaptionAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "caption"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "caption",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorImageClassesAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "imageClasses"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "imageClasses",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorCaptionClassesAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "captionClasses"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "captionClasses",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorNameClassesAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "nameClasses"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "nameClasses",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorNameFontFamilyAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "nameFontFamily"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "nameFontFamily",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorCaptionFontFamilyAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "captionFontFamily"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "captionFontFamily",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@1"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@83"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@84"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@85"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@86"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@87"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@88"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@89"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@90"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Author"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@91"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarStyleTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Circle"
          },
          {
            "$type": "Keyword",
            "value": "Tranparent"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarTopTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "NoHair"
          },
          {
            "$type": "Keyword",
            "value": "Eyepatch"
          },
          {
            "$type": "Keyword",
            "value": "Hat"
          },
          {
            "$type": "Keyword",
            "value": "Hijab"
          },
          {
            "$type": "Keyword",
            "value": "Turban"
          },
          {
            "$type": "Keyword",
            "value": "WinterHat1"
          },
          {
            "$type": "Keyword",
            "value": "WinterHat2"
          },
          {
            "$type": "Keyword",
            "value": "WinterHat3"
          },
          {
            "$type": "Keyword",
            "value": "WinterHat4"
          },
          {
            "$type": "Keyword",
            "value": "LongHairBigHair"
          },
          {
            "$type": "Keyword",
            "value": "LongHairBob"
          },
          {
            "$type": "Keyword",
            "value": "LongHairBun"
          },
          {
            "$type": "Keyword",
            "value": "LongHairCurly"
          },
          {
            "$type": "Keyword",
            "value": "LongHairCurvy"
          },
          {
            "$type": "Keyword",
            "value": "LongHairDreads"
          },
          {
            "$type": "Keyword",
            "value": "LongHairFrida"
          },
          {
            "$type": "Keyword",
            "value": "LongHairFro"
          },
          {
            "$type": "Keyword",
            "value": "LongHairFroBand"
          },
          {
            "$type": "Keyword",
            "value": "LongHairNotTooLong"
          },
          {
            "$type": "Keyword",
            "value": "LongHairShavedSides"
          },
          {
            "$type": "Keyword",
            "value": "LongHairMiaWallace"
          },
          {
            "$type": "Keyword",
            "value": "LongHairStraight"
          },
          {
            "$type": "Keyword",
            "value": "LongHairStraight2"
          },
          {
            "$type": "Keyword",
            "value": "LongHairStraightStrand"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairDreads01"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairDreads02"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairFrizzle"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShaggyMullet"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShortCurly"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShortFlat"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShortRound"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShortWaved"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairSides"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairTheCaesar"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairTheCaesarSidePart"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarAccessoriesTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Blank"
          },
          {
            "$type": "Keyword",
            "value": "Kurt"
          },
          {
            "$type": "Keyword",
            "value": "Prescription01"
          },
          {
            "$type": "Keyword",
            "value": "Prescription02"
          },
          {
            "$type": "Keyword",
            "value": "Round"
          },
          {
            "$type": "Keyword",
            "value": "Sunglasses"
          },
          {
            "$type": "Keyword",
            "value": "Wayfarers"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarHairColorTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Auburn"
          },
          {
            "$type": "Keyword",
            "value": "Black"
          },
          {
            "$type": "Keyword",
            "value": "Blonde"
          },
          {
            "$type": "Keyword",
            "value": "BlondeGolden"
          },
          {
            "$type": "Keyword",
            "value": "Brown"
          },
          {
            "$type": "Keyword",
            "value": "BrownDark"
          },
          {
            "$type": "Keyword",
            "value": "PastelPink"
          },
          {
            "$type": "Keyword",
            "value": "Blue"
          },
          {
            "$type": "Keyword",
            "value": "Platinum"
          },
          {
            "$type": "Keyword",
            "value": "Red"
          },
          {
            "$type": "Keyword",
            "value": "SilverGray"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarFacialHairTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Blank"
          },
          {
            "$type": "Keyword",
            "value": "BeardMedium"
          },
          {
            "$type": "Keyword",
            "value": "BeardLight"
          },
          {
            "$type": "Keyword",
            "value": "BeardMajestic"
          },
          {
            "$type": "Keyword",
            "value": "MoustacheFancy"
          },
          {
            "$type": "Keyword",
            "value": "MoustacheMagnum"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarClotheTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "BlazerShirt"
          },
          {
            "$type": "Keyword",
            "value": "BlazerSweater"
          },
          {
            "$type": "Keyword",
            "value": "CollarSweater"
          },
          {
            "$type": "Keyword",
            "value": "GraphicShirt"
          },
          {
            "$type": "Keyword",
            "value": "Hoodie"
          },
          {
            "$type": "Keyword",
            "value": "Overall"
          },
          {
            "$type": "Keyword",
            "value": "ShirtCrewNeck"
          },
          {
            "$type": "Keyword",
            "value": "ShirtScoopNeck"
          },
          {
            "$type": "Keyword",
            "value": "ShirtVNeck"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarEyeTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Close"
          },
          {
            "$type": "Keyword",
            "value": "Cry"
          },
          {
            "$type": "Keyword",
            "value": "Default"
          },
          {
            "$type": "Keyword",
            "value": "Dizzy"
          },
          {
            "$type": "Keyword",
            "value": "EyeRoll"
          },
          {
            "$type": "Keyword",
            "value": "Happy"
          },
          {
            "$type": "Keyword",
            "value": "Hearts"
          },
          {
            "$type": "Keyword",
            "value": "Side"
          },
          {
            "$type": "Keyword",
            "value": "Squint"
          },
          {
            "$type": "Keyword",
            "value": "Surprised"
          },
          {
            "$type": "Keyword",
            "value": "Wink"
          },
          {
            "$type": "Keyword",
            "value": "WinkWacky"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarEyebrowTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Angry"
          },
          {
            "$type": "Keyword",
            "value": "AngryNatural"
          },
          {
            "$type": "Keyword",
            "value": "Default"
          },
          {
            "$type": "Keyword",
            "value": "DefaultNatural"
          },
          {
            "$type": "Keyword",
            "value": "FlatNatural"
          },
          {
            "$type": "Keyword",
            "value": "RaisedExcited"
          },
          {
            "$type": "Keyword",
            "value": "RaisedExcitedNatural"
          },
          {
            "$type": "Keyword",
            "value": "SadConcerned"
          },
          {
            "$type": "Keyword",
            "value": "SadConcernedNatural"
          },
          {
            "$type": "Keyword",
            "value": "UnibrowNatural"
          },
          {
            "$type": "Keyword",
            "value": "UpDown"
          },
          {
            "$type": "Keyword",
            "value": "UpDownNatural"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarMouthTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Concerned"
          },
          {
            "$type": "Keyword",
            "value": "Default"
          },
          {
            "$type": "Keyword",
            "value": "Disbelief"
          },
          {
            "$type": "Keyword",
            "value": "Eating"
          },
          {
            "$type": "Keyword",
            "value": "Grimace"
          },
          {
            "$type": "Keyword",
            "value": "Sad"
          },
          {
            "$type": "Keyword",
            "value": "ScreamOpen"
          },
          {
            "$type": "Keyword",
            "value": "Serious"
          },
          {
            "$type": "Keyword",
            "value": "Smile"
          },
          {
            "$type": "Keyword",
            "value": "Tongue"
          },
          {
            "$type": "Keyword",
            "value": "Twinkle"
          },
          {
            "$type": "Keyword",
            "value": "Vomit"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarSkinColorTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Tanned"
          },
          {
            "$type": "Keyword",
            "value": "Yellow"
          },
          {
            "$type": "Keyword",
            "value": "Pale"
          },
          {
            "$type": "Keyword",
            "value": "Light"
          },
          {
            "$type": "Keyword",
            "value": "Brown"
          },
          {
            "$type": "Keyword",
            "value": "DarkBrown"
          },
          {
            "$type": "Keyword",
            "value": "Black"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GraphicTypeTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Bat"
          },
          {
            "$type": "Keyword",
            "value": "Cumbia"
          },
          {
            "$type": "Keyword",
            "value": "Deer"
          },
          {
            "$type": "Keyword",
            "value": "Diamond"
          },
          {
            "$type": "Keyword",
            "value": "Hola"
          },
          {
            "$type": "Keyword",
            "value": "Pizza"
          },
          {
            "$type": "Keyword",
            "value": "Resist"
          },
          {
            "$type": "Keyword",
            "value": "Selena"
          },
          {
            "$type": "Keyword",
            "value": "Bear"
          },
          {
            "$type": "Keyword",
            "value": "SkullOutline"
          },
          {
            "$type": "Keyword",
            "value": "Skull"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarStyleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "style"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "style",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@93"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarTopTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "topType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "topType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@94"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarAccessoriesTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "accessoriesType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "accessoriesType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@95"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarHairColorAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "hairColor"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "hairColor",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@96"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarFacialHairTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "facialHairType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "facialHairType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@97"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarClotheTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "clotheType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "clotheType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@98"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarEyeTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "eyeType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "eyeType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@99"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarEyebrowTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "eyebrowType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "eyebrowType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@100"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarMouthTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "mouthType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "mouthType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@101"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarSkinColorAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skinColor"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "skinColor",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@102"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarGraphicTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "graphicType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "graphicType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@103"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@1"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@104"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@105"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@106"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@107"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@108"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@109"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@110"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@111"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@112"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@113"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@114"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Avatar"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@115"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BoxTypeAttributes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Box1"
          },
          {
            "$type": "Keyword",
            "value": "Box2"
          },
          {
            "$type": "Keyword",
            "value": "Box3"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BoxTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@117"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BoxTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@118"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@1"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@17"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BoxTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Box"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@119"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TextAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "text"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "text",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TextTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@121"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@1"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TextTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Text"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@122"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeHandleTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "top"
          },
          {
            "$type": "Keyword",
            "value": "right"
          },
          {
            "$type": "Keyword",
            "value": "bottom"
          },
          {
            "$type": "Keyword",
            "value": "left"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "default"
          },
          {
            "$type": "Keyword",
            "value": "smoothstep"
          },
          {
            "$type": "Keyword",
            "value": "step"
          },
          {
            "$type": "Keyword",
            "value": "straight"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ArrowHeadTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "arrow"
          },
          {
            "$type": "Keyword",
            "value": "arrowclosed"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeSourceHandleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "sourceHandle"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "sourceHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@124"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTargetHandleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "targetHandle"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "targetHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@124"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeSourceAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "source"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "source",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTargetAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "target"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "target",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeLabelAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "label"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "label",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeStyleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "style"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "style",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeLabelStyleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "labelStyle"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "labelStyle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@125"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeAnimateAttribute",
      "definition": {
        "$type": "Assignment",
        "feature": "animated",
        "operator": "?=",
        "terminal": {
          "$type": "Keyword",
          "value": "animated"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeSelectableAttribute",
      "definition": {
        "$type": "Assignment",
        "feature": "selectable",
        "operator": "?=",
        "terminal": {
          "$type": "Keyword",
          "value": "selectable"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@1"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@127"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@128"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@131"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@129"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@130"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@134"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@132"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@133"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@135"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@136"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Edge"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@137"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CodeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "code"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "code",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@34"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SvgTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@139"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SvgTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Svg"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@140"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`));var DG={languageId:"yadl",fileExtensions:[".yadl"],caseInsensitive:!1},GI={AstReflection:()=>new Nu},HI={Grammar:()=>WI(),LanguageMetaData:()=>DG,parser:{}};function BI(t){let e=t.validation.ValidationRegistry,r=t.validation.YadlValidator,n={StyleProperty:r.checkUniqueStyleAttributes,DimensionAttribute:r.checkUniqueDimensionAttributes,PositionAttribute:r.checkUniquePositionAttributes,AwsTag:r.checkUniqueAwsTagAttributes,AzureTag:r.checkUniqueAzureTagAttributes,GcpTag:r.checkUniqueGcpTagAttributes,SkillTag:r.checkUniqueSkillTagAttributes,AuthorTag:r.checkUniqueAuthorTagAttributes,AvatarTag:r.checkUniqueAvatarTagAttributes,BoxTag:r.checkUniqueBoxTagAttributes,EdgeTag:r.checkUniqueEdgeTagAttributes,TextTag:r.checkUniqueTextTagAttributes,SvgTag:r.checkUniqueSvgTagAttributes};e.register(n,r)}var nf=class{checkUniqueDimensionAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Zp)a="width";else if(o.$type===Xp)a="height";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueAwsTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Mp)a="icon";else if(o.$type===Fr)a="dimension";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueAzureTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Op)a="icon";else if(o.$type===Fr)a="dimension";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueGcpTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Vp)a="icon";else if(o.$type===Fr)a="dimension";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueSkillTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Yp)a="icon";else if(o.$type===Fr)a="dimension";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueAuthorTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Cp)a="src";else if(o.$type===Ap)a="name";else if(o.$type===yo)a="classes";else if(o.$type===gp)a="caption";else if(o.$type===Fr)a="dimension";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else if(o.$type===wp)a="imageClasses";else if(o.$type===mp)a="captionClasses";else if(o.$type===Sp)a="nameClasses";else if(o.$type===Tp)a="nameFontFamily";else if(o.$type===vp)a="captionFontFamily";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueAvatarTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Dp)a="style";else if(o.$type===_p)a="topType";else if(o.$type===xp)a="accessoriesType";else if(o.$type===Pp)a="hairColor";else if(o.$type===$p)a="facialHairType";else if(o.$type===bp)a="clotheType";else if(o.$type===Rp)a="eyeType";else if(o.$type===kp)a="eyebrowType";else if(o.$type===Ep)a="mouthType";else if(o.$type===Np)a="skinColor";else if(o.$type===Ip)a="graphicType";else if(o.$type===yo)a="classes";else if(o.$type===Du)a="fontFamily";else if(o.$type===Fr)a="dimension";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueBoxTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Kp)a="type";else if(o.$type===yo)a="classes";else if(o.$type===Fr)a="dimension";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueEdgeTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Hp)a="sourceHandle";else if(o.$type===qp)a="targetHandle";else if(o.$type===Gp)a="source";else if(o.$type===Bp)a="target";else if(o.$type===Fp)a="label";else if(o.$type===Bv)a="style";else if(o.$type===Wp)a="labelStyle";else if(o.$type===Up)a="type";else if(o.$type===yo)a="classes";else if(o.$type===Gv)a="animated";else if(o.$type===Hv)a="selectable";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueTextTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Qp)a="text";else if(o.$type===Du)a="fontFamily";else if(o.$type===yo)a="classes";else if(o.$type===Fr)a="dimension";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueSvgTagAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===Lp)a="code";else if(o.$type===Rr)a="id";else if(o.$type===$r)a="position";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniquePositionAttributes(e,r){let n=new Set;for(let o of e.attributes){let a;if(o.$type===ef)a="x";else if(o.$type===tf)a="y";else continue;n.has(a)?r("error",`Duplicate property '${a}' found. Properties must be unique.`,{node:o}):n.add(a)}}checkUniqueStyleAttributes(e,r){let n=new Set;for(let o of e.styleAttributes){let a;if(o.$type===zp)a="background-color";else if(o.$type===jp)a="font-size";else if(o.$type===Jp)a="text-color";else continue;n.has(a)?r("error",`Duplicate style attribute '${a}' found. Style attributes must be unique within a 'style' block.`,{node:o}):n.add(a)}}};var _G=2,of=class extends fp{format(e){sI(e)||lI(e)||RI(e)||NI(e)||j$(e)||oI(e)||dI(e)||AI(e)||zI(e)||_I(e)?this.formatIconTagAttributes(e):KI(e)||$I(e)||II(e)||fI(e)||LI(e)||FI(e)||iI(e)||uI(e)||kI(e)||EI(e)||xI(e)||pI(e)||MI(e)||gI(e)||mI(e)||U$(e)||H$(e)||L$(e)||G$(e)||F$(e)||B$(e)||q$(e)||W$(e)||vI(e)||wI(e)||SI(e)||TI(e)||CI(e)||hI(e)||nI(e)||aI(e)||V$(e)||eI(e)||J$(e)||X$(e)||Q$(e)||Y$(e)||tI(e)||rI(e)||Z$(e)||DI(e)?this.formatSimplePropertys(e):yI(e)||PI(e)?this.formatLevelOneAttribute(e):(cI(e)||bI(e)||OI(e))&&this.formatStyleAttributes(e)}formatLevelOneAttribute(e){let r=this.getNodeFormatter(e),n=r.keyword("{"),o=r.keyword("}");n.prepend($t.oneSpace()),n.append($t.oneSpace()),o.prepend($t.oneSpace()),o.append($t.noSpace()),r.nodes(...e.attributes).prepend($t.oneSpace())}formatIconTagAttributes(e){let r=this.getNodeFormatter(e),n=r.keyword("<"),o=r.keyword("/>");n.prepend($t.noSpace());let a=e.attributes||[],i=r.nodes(...e.attributes);a.length>_G?(i.prepend($t.newLine()),o.prepend($t.newLine()),i.prepend($t.indent())):a.length>0&&(i.prepend($t.oneSpace()),o.prepend($t.oneSpace()))}formatSimplePropertys(e){let n=this.getNodeFormatter(e).keyword(":");n.append($t.oneSpace()),n.prepend($t.oneSpace())}formatStyleAttributes(e){this.getNodeFormatter(e).keyword(":").append($t.oneSpace())}};var MG={validation:{YadlValidator:()=>new nf},lsp:{Formatter:()=>new of}};function qI(t){let e=Yo(P$(t),GI),r=Yo(I$({shared:e}),HI,MG);return e.ServiceRegistry.register(r),BI(r),{shared:e,Yadl:r}}var OG=new go.BrowserMessageReader(self),zG=new go.BrowserMessageWriter(self),UI=(0,go.createConnection)(OG,zG),{shared:jI,Yadl:KG}=qI(Object.assign({connection:UI},yu));k$(jI);var LG=new go.NotificationType("browser/DocumentChange"),FG=KG.serializer.JsonSerializer;jI.workspace.DocumentBuilder.onBuildPhase(H.Validated,t=>{var e;for(let r of t){let n=FG.serialize(r.parseResult.value,{sourceText:!0,textRegions:!0});UI.sendNotification(LG,{uri:r.uri.toString(),content:n,diagnostics:(e=r.diagnostics)!==null&&e!==void 0?e:[]})}});})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
