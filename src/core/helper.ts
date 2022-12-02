export interface BaseProp {
  className?: string
}

export interface ChildProp {
  children: React.ReactNode
}

type Empty = Record<string, never>

export const defineVFC =
  <P = Empty>(comp: React.FunctionComponent<P & Required<BaseProp>>) =>
  (prop: P & BaseProp) =>
    comp({ ...prop, className: prop.className ?? '' })

export const defineVFCWithChild = <P = Empty>(
  comp: React.FunctionComponent<ChildProp & P & Required<BaseProp>>
) => defineVFC<ChildProp & P>(comp)

export const definePage = <P = Empty>(
  comp: React.FunctionComponent<Required<BaseProp> & P>
) => comp
