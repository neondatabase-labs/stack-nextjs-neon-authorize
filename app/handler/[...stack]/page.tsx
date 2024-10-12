import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function Handler(props: Object) {
  return <StackHandler fullPage app={stackServerApp} {...props} />;
}
