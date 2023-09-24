<template>
  <div
    role="alert"
    class="relative w-full rounded-lg border border-border bg-background p-4 text-foreground [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7"
  >
    <slot></slot>
  </div>
</template>
