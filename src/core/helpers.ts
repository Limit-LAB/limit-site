export interface BaseProp {
  className?: string
}

export interface ChildProp {
  children: React.ReactNode
}

type Empty = Record<string, never>

export const defineFC = <P = Empty>(
  comp: React.FunctionComponent<P & Required<BaseProp>>
) => (prop: P & BaseProp) => {
  const className = prop.className ?? ''
  return comp({ ...prop, className })
}

export const defineFCWithChild = <P = ChildProp>(
  comp: React.FunctionComponent<ChildProp & P & Required<BaseProp>>
) => defineFC<ChildProp & P>(comp)

export const defineFCWithClassAndChild = <P = BaseProp>(
  comp: React.FunctionComponent<{ children: React.ReactNode } & BaseProp & P>
) => comp

export const definePage = <P = Empty>(
  comp: React.FunctionComponent<BaseProp & P>
) => comp
