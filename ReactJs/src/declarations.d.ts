declare module '*.png'
declare module '*.gif'
declare module '*.svg' {
  const content: string
  export default content
}
declare module 'enzyme-adapter-react-16'
declare module 'jest-image-snapshot'
