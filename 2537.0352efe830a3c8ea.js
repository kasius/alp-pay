(self.webpackChunkpay=self.webpackChunkpay||[]).push([[2537],{7135:(A,l,s)=>{s.r(l),s.d(l,{createSwipeBackGesture:()=>g});var D=s(9397),d=s(5062),M=s(1898);s(4349);const g=(n,P,m,v,O)=>{const a=n.ownerDocument.defaultView;let o=(0,d.i)(n);const u=t=>o?-t.deltaX:t.deltaX;return(0,M.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>(o=(0,d.i)(n),(t=>{const{startX:e}=t;return o?e>=a.innerWidth-50:e<=50})(t)&&P()),onStart:m,onMove:t=>{const e=u(t)/a.innerWidth;v(e)},onEnd:t=>{const r=u(t),e=a.innerWidth,c=r/e,i=(t=>o?-t.velocityX:t.velocityX)(t),h=i>=0&&(i>.2||r>e/2),_=(h?1-c:c)*e;let E=0;if(_>5){const f=_/Math.abs(i);E=Math.min(f,540)}O(h,c<=0?.01:(0,D.l)(0,c,.9999),E)}})}}}]);