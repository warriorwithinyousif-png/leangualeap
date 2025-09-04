module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[next]/internal/font/google/pt_sans_ee7021fc.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "pt_sans_ee7021fc-module__U-8fIW__className",
  "variable": "pt_sans_ee7021fc-module__U-8fIW__variable",
});
}}),
"[next]/internal/font/google/pt_sans_ee7021fc.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$pt_sans_ee7021fc$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/pt_sans_ee7021fc.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$pt_sans_ee7021fc$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'PT Sans', 'PT Sans Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$pt_sans_ee7021fc$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$pt_sans_ee7021fc$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/belleza_37aa1f40.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "belleza_37aa1f40-module__i-IPVG__className",
  "variable": "belleza_37aa1f40-module__i-IPVG__variable",
});
}}),
"[next]/internal/font/google/belleza_37aa1f40.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$belleza_37aa1f40$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/belleza_37aa1f40.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$belleza_37aa1f40$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Belleza', 'Belleza Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$belleza_37aa1f40$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$belleza_37aa1f40$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "reducer": (()=>reducer),
    "toast": (()=>toast),
    "useToast": (()=>useToast)
});
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(memoryState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
;
}}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/toast.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toast": (()=>Toast),
    "ToastAction": (()=>ToastAction),
    "ToastClose": (()=>ToastClose),
    "ToastDescription": (()=>ToastDescription),
    "ToastProvider": (()=>ToastProvider),
    "ToastTitle": (()=>ToastTitle),
    "ToastViewport": (()=>ToastViewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this));
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
});
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, this));
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, this));
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this));
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, this));
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}}),
"[project]/src/components/ui/toaster.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Toaster() {
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/lib/i18n.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "translations": (()=>translations)
});
const translations = {
    en: {
        sidebar: {
            dashboard: "Dashboard",
            myWords: "My Words",
            addWord: "Add Word",
            myStudents: "My Students",
            profile: "Profile",
            learn: "Learn",
            learningWords: 'Learning Words',
            todaysReviews: "Today's Reviews",
            masteredWords: 'Mastered Words',
            champion: "Champion",
            chat: 'Chat',
            classmates: 'Classmates',
            grammar: 'Grammar',
            requests: 'Requests',
            admins: 'Admins',
            about: 'About',
            spelling: 'Spelling'
        },
        spellingPractice: {
            title: "Spelling Practice",
            description: "Type the word that matches the definition and image below.",
            todayCounter: "{0} / {1} today",
            noWordsForFilters: "No words match the selected filters.",
            limitReached: "Great job! You've reached your spelling limit for today.",
            comeBack: "Come back tomorrow for more practice.",
            check: "Check",
            newWord: "New Word",
            clearFilters: "Clear",
            allUnits: "All Units",
            allLessons: "All Lessons",
            filterByUnit: "Filter by Unit",
            filterByLesson: "Filter by Lesson",
            loading: "Loading new word...",
            noWordsYet: "You have no reviewed words to practice spelling for yet.",
            noWordsYetHint: "Complete a review session to get started!",
            placeholder: "Type the word..."
        },
        chatPage: {
            supervisorTitle: "Student Chats",
            studentTitle: "Chat",
            supervisorDescription: "Read and reply to messages from your students.",
            studentDescription: "Conversations with your supervisor and classmates.",
            conversations: "Conversations",
            noMessages: "No messages yet",
            noConversations: "No conversations started yet.",
            selectConversation: "Select a conversation to start chatting",
            typeMessage: "Type a message...",
            send: "Send",
            loading: "Loading...",
            contactType: {
                supervisor: "Supervisor",
                peer: "Peer"
            },
            edited: "(edited)",
            messageActions: {
                edit: "Edit",
                delete: "Delete",
                block: "Block User"
            },
            deleteDialog: {
                title: "Delete Message",
                descriptionForMe: "This will delete the message only for you. Other people in the conversation will still be able to see it.",
                descriptionForEveryone: "This will permanently delete the message for everyone in this conversation.",
                deleteForMe: "Delete for me",
                deleteForEveryone: "Delete for everyone",
                cancel: "Cancel"
            },
            blockDialog: {
                title: "Block User?",
                description: "Blocking {0} will prevent them from sending you messages, and you won't be able to message them. Are you sure?",
                blockButton: "Block",
                cancel: "Cancel"
            },
            unblockDialog: {
                title: "Unblock User?",
                description: "Unblocking {0} will allow you to send and receive messages again.",
                unblockButton: "Unblock"
            },
            blockedContact: "This user is blocked.",
            blockedMessage: "You cannot send messages to a blocked user."
        },
        about: {
            title: "About LinguaLeap",
            description: "The people and technology behind your learning experience.",
            greeting: "Hello!",
            teacherIntro: "I am Yousif, an English teacher passionate about leveraging technology to make language learning more accessible and effective. This application is a product of that passion, designed to be a tool I can use with my own students.",
            aiIntro: "To bring this vision to life, I collaborated with Gemini, a large-scale AI from Google. Gemini handled the application development, from coding the interface to integrating the smart features that power the quizzes and learning systems.",
            contactHint: "Remember you can always message us if you have any suggestions or reporting a bug from the sign-up page.",
            signature: "With regards,",
            version: "App Version: {0}"
        },
        profile: {
            title: "My Profile",
            personalInfo: {
                title: "Personal Information",
                description: "Update your personal details here.",
                fullName: "Full Name",
                email: "Email",
                save: "Save Changes",
                grade: "Grade",
                section: "Section",
                selectGrade: "Select Grade",
                selectSection: "Select Section",
                supervisor: "Supervisor"
            },
            picture: {
                title: "Profile Picture",
                upload: "Upload Picture",
                enlarge: "Enlarge",
                shrink: "Shrink"
            },
            landingPage: {
                title: "Landing Page",
                description: "Update the main hero image.",
                uploadButton: "Upload Hero Image"
            },
            preferences: {
                title: "Preferences",
                description: "Customize your learning experience.",
                language: "Language",
                selectLanguage: "Select Language",
                timezone: "Timezone",
                selectTimezone: "Select timezone",
                save: "Save Preferences",
                currentTime: "Current time: {0}",
                darkMode: "Dark Mode"
            },
            account: {
                title: "Account Management",
                description: "Manage your account settings and data.",
                resetPassword: {
                    title: "Reset Password",
                    description: "You will be sent an email with instructions to reset your password.",
                    button: "Reset Password"
                },
                deleteAccount: {
                    title: "Delete Account",
                    description: "Permanently delete your account and all associated data. This action cannot be undone.",
                    button: "Delete My Account"
                }
            }
        },
        login: {
            welcome: "Welcome Back!",
            description: "Enter your email below to login to your account.",
            emailLabel: "Email",
            passwordLabel: "Password",
            forgotPassword: "Forgot your password?",
            loginButton: "Login",
            loginWithGoogle: "Login with Google",
            noAccount: "Don't have an account?",
            signUp: "Sign up",
            rememberMe: "Remember me"
        },
        register: {
            title: "Join LinguaLeap",
            description: "Create your account to start your learning journey.",
            studentTab: "Student",
            supervisorTab: "Supervisor",
            fullNameLabel: "Full Name",
            fullNamePlaceholder: "Max Robinson",
            emailLabel: "Email",
            emailPlaceholder: "m@example.com",
            passwordLabel: "Password",
            supervisorIdLabel: "Supervisor ID",
            supervisorIdPlaceholder: "Enter your supervisor's ID",
            createAccountButton: "Create an account",
            createSupervisorAccountButton: "Create supervisor account",
            orContinueWith: "Or continue with",
            registerWithGoogle: "Register with Google",
            haveAccount: "Already have an account?",
            login: "Login"
        },
        landing: {
            title: "Leap into Language with AI",
            description: "LinguaLeap combines proven learning techniques with cutting-edge AI to create a personalized, effective vocabulary-building experience.",
            getStarted: "Start Learning Now",
            login: "Login",
            features: {
                title: "Why LinguaLeap Works",
                description: "We've engineered the perfect blend of technology and pedagogy to accelerate your language acquisition.",
                aiQuizzes: {
                    title: "AI-Powered Quizzes",
                    description: "Challenge yourself with AI-generated incorrect options, making learning more effective and engaging."
                },
                supervisorTools: {
                    title: "Supervisor Tools",
                    description: "Supervisors can add custom vocabulary and track student progress, tailoring the learning experience."
                },
                srs: {
                    title: "Spaced Repetition",
                    description: "Our smart algorithm schedules reviews at optimal intervals to lock words into your long-term memory."
                }
            },
            footer: {
                copyright: "© 2024 LinguaLeap. All rights reserved.",
                terms: "Terms of Service",
                privacy: "Privacy"
            }
        },
        dashboard: {
            student: {
                welcome: "Welcome, {0}!",
                description: "Here's a summary of your learning progress. Keep up the great work!",
                reviewTitle: "Words to Review",
                reviewDescription: "Words that are due for a review session.",
                startReview: "Start Review Session",
                learningQueue: "{0} in learning queue",
                greatWork: "Keep up the great work!",
                xpDescription: "Earn XP from reviews, tests, spelling & daily logins.",
                progressOverview: {
                    title: "Progress Overview",
                    description: "A snapshot of your learning activity.",
                    timeSpent: "Time Spent",
                    wordsReviewed: "Words Reviewed",
                    reviewedToday: "Reviewed Today",
                    masteredWords: "Mastered Words",
                    timeSpentToday: "Time Spent Today",
                    totalWordsReviewed: "Total Words Reviewed"
                },
                activity: {
                    title: "Last 7 Days Activity"
                },
                tests: {
                    title: "Tests Completed Today"
                }
            },
            supervisor: {
                title: "Supervisor Dashboard",
                welcome: "Welcome, {0}.",
                supervisorId: {
                    title: "Your Supervisor ID",
                    description: "Share this ID with your students so they can connect with you."
                },
                myStudents: {
                    title: "My Students",
                    description: "A list of students under your supervision.",
                    name: "Name",
                    email: "Email"
                }
            },
            loading: "Loading..."
        },
        learn: {
            backToDashboard: "Back to Dashboard",
            sessionFinished: {
                title: "Great Job!",
                description: "You've finished your review session for now. Come back later for more!"
            }
        },
        quizCard: {
            checkAnswer: "Check Answer",
            schedule: {
                title: "Good job!",
                description: "When should we show you this word again?",
                tomorrow: "Tomorrow",
                inTwoDays: "In 2 days",
                inAWeek: "In a week",
                inTwoWeeks: "In 2 weeks",
                inAMonth: "In a month",
                mastered: "I won't forget this",
                recommended: "Recommended"
            }
        },
        addWord: {
            title: "Add a New Word",
            description: "Create a new vocabulary card for your students. AI will automatically generate distractor options.",
            cardTitle: "New Vocabulary Card",
            cardDescription: "Fill in the details for the new word.",
            form: {
                unitLabel: "Unit",
                unitPlaceholder: "e.g., Unit 1",
                lessonLabel: "Lesson",
                lessonPlaceholder: "e.g., Lesson 5",
                wordLabel: "Word",
                wordPlaceholder: "e.g., Ephemeral",
                definitionLabel: "Definition",
                definitionPlaceholder: "e.g., Lasting for a very short time.",
                imageLabel: "Explanatory Image",
                addButton: "Add Word",
                addingButton: "Adding Word..."
            }
        },
        editWord: {
            title: "Edit Word",
            description: "Update the details for your vocabulary card.",
            cardTitle: "Editing: {0}",
            cardDescription: "Modify the fields below and save your changes.",
            form: {
                currentImage: "Current Image:",
                imageHelper: "Leave blank to keep the current image.",
                saveButton: "Save Changes",
                savingButton: "Saving Changes..."
            }
        },
        wordsPage: {
            title: "My Word Collection",
            description: "Browse and manage your vocabulary cards.",
            addNew: "Add New Word",
            table: {
                title: "My Word Collection",
                description: "A complete list of all words you've added.",
                image: "Image",
                word: "Word",
                unit: "Unit",
                lesson: "Lesson",
                definition: "Definition",
                actions: "Actions"
            },
            deleteDialog: {
                title: "Are you absolutely sure?",
                description: "This action cannot be undone. This will permanently delete the word “{0}” from your list.",
                cancel: "Cancel",
                continue: "Continue"
            }
        },
        studentsPage: {
            title: "My Students",
            description: "Welcome, {0}. Here are your students.",
            allStudents: {
                title: "All Students",
                description: "A list of students under your supervision."
            }
        },
        grammar: {
            hub: {
                title: "Grammar Hub",
                description: "Manage and create grammar lessons for your students.",
                individualTenses: {
                    title: "Individual Tenses",
                    description: "Select a tense to preview its specific test."
                },
                comprehensiveTest: {
                    title: "Comprehensive Test",
                    description: "A mixed quiz covering all available tenses.",
                    button: "Start Comprehensive Test"
                },
                specificSkills: {
                    title: "Specific Skills",
                    description: "Practice specific grammar points like prepositions.",
                    prepositions: "Prepositions of Place (in, on, at)"
                }
            },
            studentTest: {
                title: "Student Test",
                description: "Students can test their knowledge with this quiz. The questions are generated dynamically by AI.",
                button: "Preview Test"
            },
            tenses: {
                presentSimple: "Present Simple",
                pastSimple: "Past Simple",
                presentContinuous: "Present Continuous"
            },
            prepositionsQuiz: {
                title: "Prepositions of Place Test",
                description: "Test your knowledge of using \"in\", \"on\", and \"at\" for places.",
                loading: "Generating your quiz on prepositions...",
                submit: "Submit Answers",
                complete: "Test Complete!",
                score: "You scored {0} out of {1}.",
                newTest: "Take a New Test"
            }
        },
        championPage: {
            title: "Champion Leaderboard",
            description: "See who's at the top of the class! The leaderboard resets every week.",
            weeklyRankings: "Weekly Rankings",
            leaderboardDescription: "Leaderboard of you and your classmates. Resets {0}.",
            you: "(You)",
            xp: "XP",
            loading: "Loading leaderboard...",
            noClassmates: "No classmates found to create a leaderboard."
        },
        learningWordsPage: {
            title: "Words in Learning",
            description: "This is your active queue. Keep reviewing these words to master them!",
            cardTitle: "Your Learning Queue",
            cardDescription: "A list of all the words you are currently learning. Filter by unit and lesson below.",
            filterUnit: "Filter by Unit",
            filterLesson: "Filter by Lesson",
            allUnits: "All Units",
            allLessons: "All Lessons",
            clearFilters: "Clear",
            tableImage: "Image",
            tableWord: "Word",
            tableUnit: "Unit",
            tableNextReview: "Next Review",
            tableActions: "Actions",
            dueNow: "Due now",
            timeLeft: "{0} left",
            days: "d",
            hours: "h",
            loading: "Loading your words...",
            noWords: "No words found for the selected filters."
        },
        masteredWordsPage: {
            title: "Mastered Words",
            description: "Congratulations! Here are all the words you've successfully learned.",
            cardTitle: "Your Word Collection",
            cardDescription: "A list of all the words you have mastered. Filter by unit and lesson below.",
            filterUnit: "Filter by Unit",
            filterLesson: "Filter by Lesson",
            allUnits: "All Units",
            allLessons: "All Lessons",
            clearFilters: "Clear",
            tableImage: "Image",
            tableWord: "Word",
            tableUnit: "Unit",
            noWords: "No words found for the selected filters.",
            loading: "Loading mastered words..."
        },
        xpEvents: {
            review_word: "Word Reviewed",
            spell_correct: "Spelling Correct",
            daily_login: "Daily Login",
            master_word: "Word Mastered",
            grammar_test: "Grammar Test"
        },
        toasts: {
            error: "Error",
            success: "Success!",
            addWordSuccess: "Word created!",
            updateWordSuccess: "Word updated successfully!",
            deleteWordSuccess: "Word deleted successfully.",
            resetWordSuccess: "“{0}” progress has been reset.",
            restoreWordSuccess: "“{0}” has been restored to your learning queue.",
            rescheduleSuccess: "“{0}” has been rescheduled.",
            wontForgetText: "“{0}” moved to Mastered Words.",
            validationFailed: "Validation failed.",
            aiError: "Failed to add word. AI Generation Error: {0}",
            registerSuccess: "Success!",
            loginError: "Invalid email or password.",
            supervisorIdRequired: "Supervisor ID is required for students.",
            invalidSupervisorId: "Invalid Supervisor ID.",
            userExists: "User with this email already exists.",
            passwordLength: "Password must be at least 6 characters.",
            nameRequired: "Name is required.",
            invalidEmail: "Invalid email address.",
            definitionRequired: "Definition is required.",
            wordRequired: "Word is required.",
            imageRequired: "Image is required."
        }
    },
    ar: {
        sidebar: {
            dashboard: "لوحة التحكم",
            myWords: "كلماتي",
            addWord: "إضافة كلمة",
            myStudents: "طلابي",
            profile: "الملف الشخصي",
            learn: "تعلّم",
            learningWords: 'كلمات أتعلمها',
            todaysReviews: "مراجعات اليوم",
            masteredWords: 'كلمات أتقنتها',
            champion: "البطل",
            chat: 'محادثة',
            classmates: 'زملاء الدراسة',
            grammar: 'قواعد',
            requests: 'طلبات',
            admins: 'مدراء',
            about: 'حول',
            spelling: 'الإملاء'
        },
        spellingPractice: {
            title: "تدريب إملائي",
            description: "اكتب الكلمة التي تطابق التعريف والصورة أدناه.",
            todayCounter: "{0} / {1} اليوم",
            noWordsForFilters: "لا توجد كلمات تطابق الفلاتر المحددة.",
            limitReached: "عمل رائع! لقد وصلت إلى الحد الأقصى للإملاء لهذا اليوم.",
            comeBack: "عد غدًا لمزيد من التدريب.",
            check: "تحقق",
            newWord: "كلمة جديدة",
            clearFilters: "مسح",
            allUnits: "كل الوحدات",
            allLessons: "كل الدروس",
            filterByUnit: "تصفية حسب الوحدة",
            filterByLesson: "تصفية حسب الدرس",
            loading: "جارٍ تحميل كلمة جديدة...",
            noWordsYet: "ليس لديك كلمات تمت مراجعتها للتدريب على إملائها بعد.",
            noWordsYetHint: "أكمل جلسة مراجعة للبدء!",
            placeholder: "اكتب الكلمة..."
        },
        chatPage: {
            supervisorTitle: "محادثات الطلاب",
            studentTitle: "محادثة",
            supervisorDescription: "اقرأ وأجب على رسائل طلابك.",
            studentDescription: "محادثات مع مشرفك وزملائك.",
            conversations: "المحادثات",
            noMessages: "لا توجد رسائل بعد",
            noConversations: "لم تبدأ أي محادثات بعد.",
            selectConversation: "اختر محادثة لبدء الدردشة",
            typeMessage: "اكتب رسالة...",
            send: "إرسال",
            loading: "جار التحميل...",
            contactType: {
                supervisor: "مشرف",
                peer: "زميل"
            },
            edited: "(تم التعديل)",
            messageActions: {
                edit: "تعديل",
                delete: "حذف",
                block: "حظر المستخدم"
            },
            deleteDialog: {
                title: "حذف الرسالة",
                descriptionForMe: "سيؤدي هذا إلى حذف الرسالة لك فقط. سيظل بإمكان الآخرين في المحادثة رؤيتها.",
                descriptionForEveryone: "سيؤدي هذا إلى حذف الرسالة بشكل دائم للجميع في هذه المحادثة.",
                deleteForMe: "احذف لي",
                deleteForEveryone: "احذف للجميع",
                cancel: "إلغاء"
            },
            blockDialog: {
                title: "حظر المستخدم؟",
                description: "سيؤدي حظر {0} إلى منعه من إرسال رسائل إليك، ولن تتمكن من مراسلته. هل أنت متأكد؟",
                blockButton: "حظر",
                cancel: "إلغاء"
            },
            unblockDialog: {
                title: "إلغاء حظر المستخدم؟",
                description: "سيسمح لك إلغاء حظر {0} بإرسال واستقبال الرسائل مرة أخرى.",
                unblockButton: "إلغاء الحظر"
            },
            blockedContact: "هذا المستخدم محظور.",
            blockedMessage: "لا يمكنك إرسال رسائل إلى مستخدم محظور."
        },
        about: {
            title: "حول LinguaLeap",
            description: "تعرف على الأشخاص والتكنولوجيا وراء تجربتك التعليمية.",
            greeting: "مرحباً!",
            teacherIntro: "أنا يوسف، مدرس لغة إنجليزية شغوف بالاستفادة من التكنولوجيا لجعل تعلم اللغة أكثر سهولة وفعالية. هذا التطبيق هو نتاج هذا الشغف، وهو مصمم ليكون أداة يمكنني استخدامها مع طلابي.",
            aiIntro: "لتحقيق هذه الرؤية، تعاونت مع Gemini، وهو ذكاء اصطناعي واسع النطاق من Google. تولى Gemini تطوير التطبيق، من برمجة الواجهة إلى دمج الميزات الذكية التي تشغل الاختبارات وأنظمة التعلم.",
            contactHint: "تذكر أنه يمكنك دائمًا مراسلتنا إذا كانت لديك أي اقتراحات أو للإبلاغ عن خطأ من صفحة التسجيل.",
            signature: "مع تحياتي،",
            version: "إصدار التطبيق: {0}"
        },
        profile: {
            title: "ملفي الشخصي",
            personalInfo: {
                title: "المعلومات الشخصية",
                description: "قم بتحديث تفاصيلك الشخصية هنا.",
                fullName: "الاسم الكامل",
                email: "البريد الإلكتروني",
                save: "حفظ التغييرات",
                grade: "المرحلة",
                section: "الشعبة",
                selectGrade: "اختر المرحلة",
                selectSection: "اختر الشعبة",
                supervisor: "المشرف"
            },
            picture: {
                title: "الصورة الشخصية",
                upload: "رفع الصورة",
                enlarge: "تكبير",
                shrink: "تصغير"
            },
            landingPage: {
                title: "الصفحة الرئيسية",
                description: "تحديث الصورة الرئيسية.",
                uploadButton: "رفع صورة رئيسية"
            },
            preferences: {
                title: "التفضيلات",
                description: "خصص تجربتك التعليمية.",
                language: "اللغة",
                selectLanguage: "اختر اللغة",
                timezone: "المنطقة الزمنية",
                selectTimezone: "اختر المنطقة الزمنية",
                save: "حفظ التفضيلات",
                currentTime: "الوقت الحالي: {0}",
                darkMode: "الوضع الداكن"
            },
            account: {
                title: "إدارة الحساب",
                description: "قم بإدارة إعدادات حسابك وبياناتك.",
                resetPassword: {
                    title: "إعادة تعيين كلمة المرور",
                    description: "سيتم إرسال بريد إلكتروني إليك يحتوي على تعليمات لإعادة تعيين كلمة المرور الخاصة بك.",
                    button: "إعادة تعيين كلمة المرور"
                },
                deleteAccount: {
                    title: "حذف الحساب",
                    description: "حذف حسابك وجميع البيانات المرتبطة به بشكل دائم. لا يمكن التراجع عن هذا الإجراء.",
                    button: "حذف حسابي"
                }
            }
        },
        login: {
            welcome: "مرحبًا بعودتك!",
            description: "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك.",
            emailLabel: "البريد الإلكتروني",
            passwordLabel: "كلمة المرور",
            forgotPassword: "هل نسيت كلمة المرور؟",
            loginButton: "تسجيل الدخول",
            loginWithGoogle: "تسجيل الدخول باستخدام جوجل",
            noAccount: "ليس لديك حساب؟",
            signUp: "التسجيل",
            rememberMe: "تذكرني"
        },
        register: {
            title: "انضم إلى LinguaLeap",
            description: "أنشئ حسابك لبدء رحلتك التعليمية.",
            studentTab: "طالب",
            supervisorTab: "مشرف",
            fullNameLabel: "الاسم الكامل",
            fullNamePlaceholder: "ماكس روبنسون",
            emailLabel: "البريد الإلكتروني",
            emailPlaceholder: "m@example.com",
            passwordLabel: "كلمة المرور",
            supervisorIdLabel: "معرف المشرف",
            supervisorIdPlaceholder: "أدخل معرف المشرف الخاص بك",
            createAccountButton: "إنشاء حساب",
            createSupervisorAccountButton: "إنشاء حساب مشرف",
            orContinueWith: "أو تابع مع",
            registerWithGoogle: "التسجيل باستخدام جوجل",
            haveAccount: "هل لديك حساب بالفعل؟",
            login: "تسجيل الدخول"
        },
        landing: {
            title: "انطلق في اللغة مع الذكاء الاصطناعي",
            description: "يجمع LinguaLeap بين تقنيات التعلم المثبتة والذكاء الاصطناعي المتطور لإنشاء تجربة بناء مفردات مخصصة وفعالة.",
            getStarted: "ابدأ التعلم الآن",
            login: "تسجيل الدخول",
            features: {
                title: "لماذا ينجح LinguaLeap",
                description: "لقد صممنا المزيج المثالي من التكنولوجيا وطرق التدريس لتسريع اكتسابك للغة.",
                aiQuizzes: {
                    title: "اختبارات مدعومة بالذكاء الاصطناعي",
                    description: "تحدَّ نفسك بخيارات غير صحيحة تم إنشاؤها بواسطة الذكاء الاصطناعي، مما يجعل التعلم أكثر فعالية وجاذبية."
                },
                supervisorTools: {
                    title: "أدوات المشرف",
                    description: "يمكن للمشرفين إضافة مفردات مخصصة وتتبع تقدم الطلاب، وتخصيص تجربة التعلم."
                },
                srs: {
                    title: "التكرار المتباعد",
                    description: "تقوم الخوارزمية الذكية لدينا بجدولة المراجعات على فترات مثالية لتثبيت الكلمات في ذاكرتك طويلة المدى."
                }
            },
            footer: {
                copyright: "© 2024 LinguaLeap. كل الحقوق محفوظة.",
                terms: "شروط الخدمة",
                privacy: "الخصوصية"
            }
        },
        dashboard: {
            student: {
                welcome: "مرحبًا، {0}!",
                description: "إليك ملخص لتقدمك في التعلم. استمر في العمل الرائع!",
                reviewTitle: "كلمات للمراجعة",
                reviewDescription: "الكلمات التي حان وقت مراجعتها.",
                startReview: "ابدأ جلسة المراجعة",
                learningQueue: "{0} كلمة قيد التعلم",
                greatWork: "استمر في العمل الرائع!",
                xpDescription: "اكسب نقاط الخبرة من المراجعات والاختبارات والإملاء وتسجيل الدخول اليومي.",
                progressOverview: {
                    title: "نظرة عامة على التقدم",
                    description: "لمحة سريعة عن نشاطك التعليمي.",
                    timeSpent: "الوقت المستغرق",
                    wordsReviewed: "الكلمات المراجعة",
                    reviewedToday: "تمت مراجعته اليوم",
                    masteredWords: "الكلمات المتقنة",
                    timeSpentToday: "الوقت المستغرق اليوم",
                    totalWordsReviewed: "إجمالي الكلمات التي تمت مراجعتها"
                },
                activity: {
                    title: "نشاط آخر 7 أيام"
                },
                tests: {
                    title: "الاختبارات المكتملة اليوم"
                }
            },
            supervisor: {
                title: "لوحة تحكم المشرف",
                welcome: "مرحبًا، {0}.",
                supervisorId: {
                    title: "معرف المشرف الخاص بك",
                    description: "شارك هذا المعرف مع طلابك حتى يتمكنوا من الاتصال بك."
                },
                myStudents: {
                    title: "طلابي",
                    description: "قائمة الطلاب تحت إشرافك.",
                    name: "الاسم",
                    email: "البريد الإلكتروني"
                }
            },
            loading: "جار التحميل..."
        },
        learn: {
            backToDashboard: "العودة إلى لوحة التحكم",
            sessionFinished: {
                title: "أحسنت صنعًا!",
                description: "لقد أنهيت جلسة المراجعة الخاصة بك الآن. عد لاحقًا للمزيد!"
            }
        },
        quizCard: {
            checkAnswer: "تحقق من الإجابة",
            schedule: {
                title: "أحسنت!",
                description: "متى نعرض عليك هذه الكلمة مرة أخرى؟",
                tomorrow: "غدًا",
                inTwoDays: "بعد يومين",
                inAWeek: "بعد أسبوع",
                inTwoWeeks: "بعد أسبوعين",
                inAMonth: "بعد شهر",
                mastered: "لن أنسى هذه الكلمة",
                recommended: "موصى به"
            }
        },
        addWord: {
            title: "إضافة كلمة جديدة",
            description: "أنشئ بطاقة مفردات جديدة لطلابك. سيقوم الذكاء الاصطناعي بإنشاء خيارات مضللة تلقائيًا.",
            cardTitle: "بطاقة مفردات جديدة",
            cardDescription: "املأ تفاصيل الكلمة الجديدة.",
            form: {
                unitLabel: "الوحدة",
                unitPlaceholder: "مثال: الوحدة 1",
                lessonLabel: "الدرس",
                lessonPlaceholder: "مثال: الدرس 5",
                wordLabel: "الكلمة",
                wordPlaceholder: "مثال: سريع الزوال",
                definitionLabel: "التعريف",
                definitionPlaceholder: "مثال: يدوم لفترة قصيرة جدًا.",
                imageLabel: "صورة توضيحية",
                addButton: "إضافة كلمة",
                addingButton: "جار إضافة الكلمة..."
            }
        },
        editWord: {
            title: "تعديل الكلمة",
            description: "قم بتحديث تفاصيل بطاقة المفردات الخاصة بك.",
            cardTitle: "تعديل: {0}",
            cardDescription: "قم بتعديل الحقول أدناه واحفظ تغييراتك.",
            form: {
                currentImage: "الصورة الحالية:",
                imageHelper: "اتركه فارغًا للاحتفاظ بالصورة الحالية.",
                saveButton: "حفظ التغييرات",
                savingButton: "جارٍ حفظ التغييرات..."
            }
        },
        wordsPage: {
            title: "مجموعة كلماتي",
            description: "تصفح وأدر بطاقات المفردات الخاصة بك.",
            addNew: "إضافة كلمة جديدة",
            table: {
                title: "مجموعتي من الكلمات",
                description: "قائمة كاملة بجميع الكلمات التي أضفتها.",
                image: "صورة",
                word: "الكلمة",
                unit: "الوحدة",
                lesson: "الدرس",
                definition: "التعريف",
                actions: "الإجراءات"
            },
            deleteDialog: {
                title: "هل أنت متأكد تمامًا؟",
                description: "لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف الكلمة بشكل دائم “{0}” من قائمتك.",
                cancel: "إلغاء",
                continue: "متابعة"
            }
        },
        studentsPage: {
            title: "طلابي",
            description: "مرحبًا، {0}. هؤلاء هم طلابك.",
            allStudents: {
                title: "كل الطلاب",
                description: "قائمة الطلاب تحت إشرافك."
            }
        },
        grammar: {
            hub: {
                title: "مركز القواعد",
                description: "إدارة وإنشاء دروس القواعد لطلابك.",
                individualTenses: {
                    title: "الأزمنة الفردية",
                    description: "اختر زمنًا لمعاينة اختباره المحدد."
                },
                comprehensiveTest: {
                    title: "الاختبار الشامل",
                    description: "اختبار مختلط يغطي جميع الأزمنة المتاحة.",
                    button: "بدء الاختبار الشامل"
                },
                specificSkills: {
                    title: "مهارات محددة",
                    description: "تدرب على نقاط قواعد محددة مثل حروف الجر.",
                    prepositions: "حروف الجر المكانية (in, on, at)"
                }
            },
            studentTest: {
                title: "اختبار الطالب",
                description: "يمكن للطلاب اختبار معرفتهم بهذا الاختبار. يتم إنشاء الأسئلة ديناميكيًا بواسطة الذكاء الاصطناعي.",
                button: "معاينة الاختبار"
            },
            tenses: {
                presentSimple: "المضارع البسيط",
                pastSimple: "الماضي البسيط",
                presentContinuous: "المضارع المستمر"
            },
            prepositionsQuiz: {
                title: "اختبار حروف الجر المكانية",
                description: "اختبر معلوماتك في استخدام \"in\" و \"on\" و \"at\" للأماكن.",
                loading: "جارٍ إنشاء اختبار حروف الجر...",
                submit: "إرسال الإجابات",
                complete: "اكتمل الاختبار!",
                score: "لقد حصلت على {0} من {1}.",
                newTest: "إجراء اختبار جديد"
            }
        },
        championPage: {
            title: "لوحة المتصدرين للأبطال",
            description: "شاهد من هو في قمة الفصل! يتم إعادة تعيين لوحة المتصدرين كل أسبوع.",
            weeklyRankings: "التصنيفات الأسبوعية",
            leaderboardDescription: "لوحة المتصدرين لك ولزملائك في الفصل. تتم إعادة التعيين {0}.",
            you: "(أنت)",
            xp: "نقطة خبرة",
            loading: "جار تحميل لوحة المتصدرين...",
            noClassmates: "لم يتم العثور على زملاء في الفصل لإنشاء لوحة متصدرين."
        },
        learningWordsPage: {
            title: "كلمات قيد التعلم",
            description: "هذه هي قائمة المراجعة النشطة الخاصة بك. استمر في مراجعة هذه الكلمات لإتقانها!",
            cardTitle: "قائمة التعلم الخاصة بك",
            cardDescription: "قائمة بجميع الكلمات التي تتعلمها حاليًا. قم بالتصفية حسب الوحدة والدرس أدناه.",
            filterUnit: "تصفية حسب الوحدة",
            filterLesson: "تصفية حسب الدرس",
            allUnits: "جميع الوحدات",
            allLessons: "جميع الدروس",
            clearFilters: "مسح الفلاتر",
            tableImage: "الصورة",
            tableWord: "الكلمة",
            tableUnit: "الوحدة",
            tableNextReview: "المراجعة التالية",
            tableActions: "الإجراءات",
            dueNow: "حان الآن",
            timeLeft: "بقي {0}",
            days: "ي",
            hours: "س",
            loading: "جار تحميل كلماتك...",
            noWords: "لم يتم العثور على كلمات للفلاتر المحددة."
        },
        masteredWordsPage: {
            title: "الكلمات المتقنة",
            description: "تهانينا! إليك جميع الكلمات التي تعلمتها بنجاح.",
            cardTitle: "مجموعتك من الكلمات",
            cardDescription: "قائمة بجميع الكلمات التي أتقنتها. قم بالتصفية حسب الوحدة والدرس أدناه.",
            filterUnit: "تصفية حسب الوحدة",
            filterLesson: "تصفية حسب الدرس",
            allUnits: "جميع الوحدات",
            allLessons: "جميع الدروس",
            clearFilters: "مسح الفلاتر",
            tableImage: "الصورة",
            tableWord: "الكلمة",
            tableUnit: "الوحدة",
            noWords: "لم يتم العثور على كلمات للفلاتر المحددة.",
            loading: "جار تحميل الكلمات المتقنة..."
        },
        xpEvents: {
            review_word: "تمت مراجعة الكلمة",
            spell_correct: "إملاء صحيح",
            daily_login: "تسجيل الدخول اليومي",
            master_word: "تم إتقان الكلمة",
            grammar_test: "اختبار القواعد"
        },
        toasts: {
            error: "خطأ",
            success: "نجاح!",
            addWordSuccess: "تم إنشاء الكلمة!",
            updateWordSuccess: "تم تحديث الكلمة بنجاح!",
            deleteWordSuccess: "تم حذف الكلمة بنجاح.",
            resetWordSuccess: "تمت إعادة ضبط تقدم “{0}”.",
            restoreWordSuccess: "تمت استعادة “{0}” إلى قائمة التعلم الخاصة بك.",
            rescheduleSuccess: "تمت إعادة جدولة “{0}”.",
            wontForgetText: "تم نقل “{0}” إلى الكلمات المتقنة.",
            validationFailed: "فشل التحقق.",
            aiError: "فشل إضافة الكلمة. خطأ في إنشاء الذكاء الاصطناعي: {0}",
            registerSuccess: "نجاح!",
            loginError: "بريد إلكتروني أو كلمة مرور غير صالحة.",
            supervisorIdRequired: "معرف المشرف مطلوب للطلاب.",
            invalidSupervisorId: "معرف المشرف غير صالح.",
            userExists: "مستخدم بهذا البريد الإلكتروني موجود بالفعل.",
            passwordLength: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
            nameRequired: "الاسم مطلوب.",
            invalidEmail: "عنوان البريد الإلكتروني غير صالح.",
            definitionRequired: "التعريف مطلوب.",
            wordRequired: "الكلمة مطلوبة.",
            imageRequired: "الصورة مطلوبة."
        }
    }
};
}}),
"[project]/src/hooks/use-language.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const t = (key, ...args)=>{
        const keys = key.split('.');
        let result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
        for (const k of keys){
            if (result && typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                return key; // Return key if not found
            }
        }
        if (typeof result === 'string') {
            return result.replace(/{(\d+)}/g, (match, index)=>{
                return typeof args[index] !== 'undefined' ? args[index] : match;
            });
        }
        return key;
    };
    const translateContent = (text)=>{
        if (language !== 'ar' || !text) {
            return text;
        }
        return text.replace(/^Unit\s*/i, 'الوحدة ').replace(/^Lesson\s*/i, 'الدرس ');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t,
            translateContent
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-language.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
}}),
"[project]/src/hooks/use-theme.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const initialState = {
    theme: "light",
    setTheme: ()=>null
};
const ThemeProviderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(initialState);
function ThemeProvider({ children, defaultTheme = "light", storageKey = "lingualeap-theme", ...props }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return defaultTheme;
        }
        "TURBOPACK unreachable";
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
            return;
        }
        root.classList.add(theme);
    }, [
        theme
    ]);
    const value = {
        theme,
        setTheme: (theme)=>{
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeProviderContext.Provider, {
        ...props,
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-theme.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeProviderContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
}}),
"[project]/src/components/language-setter.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageSetter": (()=>LanguageSetter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-language.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function LanguageSetter() {
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // On initial mount, check localStorage and update the context if needed.
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage && storedLanguage !== language) {
            setLanguage(storedLanguage);
        }
    }, []); // Run only once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // This effect runs whenever the language changes.
        // It updates the HTML element attributes and localStorage.
        document.documentElement.lang = language;
        document.documentElement.dir = "ltr"; // Always set to LTR
        localStorage.setItem("language", language);
    }, [
        language
    ]);
    return null; // This component doesn't render anything
}
}}),
"[project]/src/app/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$pt_sans_ee7021fc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/pt_sans_ee7021fc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$belleza_37aa1f40$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/belleza_37aa1f40.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toaster.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-language.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-theme.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$language$2d$setter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/language-setter.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function AppBody({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("min-h-screen bg-background font-body antialiased", __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$pt_sans_ee7021fc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].variable, __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$belleza_37aa1f40$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].variable),
        suppressHydrationWarning: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        dir: "ltr",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$language$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageProvider"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$language$2d$setter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSetter"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 52,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppBody, {
                            children: [
                                children,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                                    fileName: "[project]/src/app/layout.tsx",
                                    lineNumber: 55,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 53,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 51,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__40bdb2ba._.js.map