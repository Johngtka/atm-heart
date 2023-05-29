import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AtmComponent } from './atm.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AtmComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AtmComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AtmComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain(
            'Atomic-Heart app is running!',
        );
    });
});
