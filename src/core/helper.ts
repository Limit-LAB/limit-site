export interface BaseProp {
  className?: string
}

export interface ChildProp {
  children: React.ReactNode
}

type Empty = Record<string, never>

export const defineVFC =
  <P = Empty>(comp: React.FunctionComponent<P & Required<BaseProp>>) =>
  (prop: P & BaseProp) => {
    const className = prop.className ?? ''
    return comp({ ...prop, className })
  }

export const defineVFCWithChild = <P = ChildProp>(
  comp: React.FunctionComponent<ChildProp & P & Required<BaseProp>>
) => defineVFC<ChildProp & P>(comp)

export const defineVFCWithClassAndChild = <P = BaseProp>(
  comp: React.FunctionComponent<{ children: React.ReactNode } & BaseProp & P>
) => comp

export const definePage = <P = Empty>(
  comp: React.FunctionComponent<BaseProp & P>
) => comp
