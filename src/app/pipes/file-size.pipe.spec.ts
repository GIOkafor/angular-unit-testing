import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FileSizePipe } from './file-size.pipe';

/*
I guess there's no need for this block below 
*********************************************
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
)
********************************************
*/

describe('Shallow FileSizePipe test', () => {
    
  @Component({
    template: `
      Size: {{ size | fileSize:suffix }}
    `
  })
  class TestComponent {
    suffix = 'MB';
    size = 123456789;
  }

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileSizePipe,
        TestComponent
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  it('should convert bytes into megabytes', () => {
    fixture.detectChanges();//this calls things like ngOnInit and stuff
    expect(el.textContent).toContain('Size: 117.74MB');//instead of toBe({...}) because it has a hard time taking whitespace into account so not always returns what you expect
    component.size = 1029281;
    fixture.detectChanges();
    expect(el.textContent).toContain('Size: 0.98MB');
  });

  it('should override megabytes to something set by user', () => {
    component.suffix = 'myExt';
    fixture.detectChanges();
    expect(el.textContent).toContain('Size: 117.74myExt');
  });

});

describe('Isolate FileSizePipe test', () => {
  const pipe = new FileSizePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert bytes to megabytes', () => {
    expect(pipe.transform(123456789, 'MB')).toBe('117.74MB');
    expect(pipe.transform(987654321, 'MB')).toBe('941.90MB');
  });
});
